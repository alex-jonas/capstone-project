<?php

namespace App\Controller;

use App\Entity\Track;
use App\Repository\TrackRepository;
use App\Services\GeoDistance;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class SingleTrackController extends AbstractController
{
    /**
     * @Route("/single-track/{id}/{coordPair}", methods={"GET"})
     */
    public function index(int $id, ?string $coordPair = null,  SerializerInterface $serializer, GeoDistance $geodistance): JsonResponse
    {
        if (!is_null($coordPair) && (!strpos($coordPair, ",") ||
            preg_match_all("/[+-]?([0-9]*[.])?[0-9]+/", $coordPair) != 2)) {
            return new JsonResponse(
                ['success' => 'no'],
                JsonResponse::HTTP_BAD_REQUEST,
                []
            );
        }

        $singleTrack =  $this->getDoctrine()->getRepository(Track::class)->find($id);

        if (!is_null($coordPair)) {
            [$latOrigin, $lngOrigin] = array_map('floatval', explode(",", $coordPair));

            $latDestination = $singleTrack->getFirstLat();
            $lngDestination = $singleTrack->getFirstLon();
            $calculatedDistance = $geodistance->getDistanceMeters($latOrigin, $lngOrigin, $latDestination, $lngDestination);
            $singleTrack->setDistance($calculatedDistance);
        }


        return new JsonResponse(
            $serializer->serialize($singleTrack, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
