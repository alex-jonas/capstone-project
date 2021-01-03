<?php

namespace App\Controller;

use App\Entity\Track;
use App\Services\GeoDistance;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;


class TrackSetController extends AbstractController
{
    /**
     * @Route("/trackset/{ids}/{coordPair}", name="track_set", methods={"GET"})
     */
    public function index(string $ids, ?string $coordPair = null, SerializerInterface $serializer, GeoDistance $geoDistance): JsonResponse
    {

        $idSet = array_map('intval', explode(",", $ids));

        $tracks = $this->getDoctrine()->getRepository(Track::class)->findBy(['id' => $idSet]);

        if ($coordPair) {
            [$latitudeOrigin, $longitudeOrigin] = array_map('floatval', explode(",", $coordPair));
            foreach ($tracks as $track) {

                $latitudeDestination = $track->getFirstLat();
                $longitudeDestination = $track->getFirstLon();
                $calculatedDistance = $geoDistance->getDistanceMeters($latitudeOrigin, $longitudeOrigin, $latitudeDestination, $longitudeDestination);
                $track->setDistance($calculatedDistance);
            }

            usort($tracks, fn ($a, $b) => ($a->distance < $b->distance) ? -1 : 1);
        }

        return new JsonResponse(
            $serializer->serialize($tracks, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
