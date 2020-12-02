<?php

namespace App\Controller;

use App\Entity\Track;
use App\Repository\TrackRepository;
use App\Services\GeoDistance;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class TrackController extends AbstractController
{
    /**
     * @Route("/track", methods={"GET"})
     */
    public function indexAll(SerializerInterface $serializer): JsonResponse
    {
        $tracks = $this->getDoctrine()->getRepository(Track::class)->findAll();

        return new JsonResponse(
            $serializer->serialize($tracks, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/track", methods={"POST"})
     */
    public function create(
        Request $request,
        TrackRepository $repository,
        SerializerInterface $serializer
    ): JsonResponse {
        $track = $serializer->deserialize($request->getContent(), Track::class, 'json');

        $repository->save($track);

        return new JsonResponse(
            $serializer->serialize($track, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true

        );
    }

    /**
     * @Route("/track/{coordPair}", methods={"GET"})
     */
    public function indexByCoord(string $coordPair, SerializerInterface $serializer, GeoDistance $geodistance): JsonResponse
    {
        if (
            !strpos($coordPair, ",") ||
            preg_match_all("/[+-]?([0-9]*[.])?[0-9]+/", $coordPair) != 2
        ) {
            return new JsonResponse(
                ['success' => 'no'],
                JsonResponse::HTTP_BAD_REQUEST,
                []
            );
        }

        $coordPairSlices = explode(",", $coordPair);
        $latOrigin = floatval($coordPairSlices[0]);
        $lngOrigin = floatval($coordPairSlices[1]);

        $tracks =  $this->getDoctrine()->getRepository(Track::class)->findAll();

        $tracksWithDistance = [];
        foreach ($tracks as $track) {

            $latDestination = $track->getFirstLat();
            $lngDestination = $track->getFirstLon();

            $track->distance = $geodistance->getDistanceMeters($latOrigin, $lngOrigin, $latDestination, $lngDestination);

            $tracksWithDistance[] = $track;
        }

        usort($tracksWithDistance, fn ($a, $b) => ($a->distance < $b->distance) ? -1 : 1);

        return new JsonResponse(
            $serializer->serialize($tracksWithDistance, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
