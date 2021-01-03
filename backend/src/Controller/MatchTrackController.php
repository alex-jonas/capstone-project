<?php

namespace App\Controller;

use App\Entity\Track;
use App\Repository\TrackRepository;
use App\Services\GeoDistance;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\InputBag;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MatchTrackController extends AbstractController
{
    /**
     * @Route("/matchtrack/{coordPair}", name="match_track", methods={"GET"})
     */
    public function index(?string $coordPair = null, SerializerInterface $serializer, GeoDistance $geoDistance, TrackRepository $repository): JsonResponse
    {

        $tracks = $this->getDoctrine()->getRepository(Track::class);

        if ($coordPair) {

            [$latitudeOrigin, $longitudeOrigin] = array_map('floatval', explode(",", $coordPair));

            foreach ($tracks as $track) {

                $latitudeDestination = $track->getFirstLat();
                $longitudeDestination = $track->getFirstLon();
                $calculatedDistance = $geoDistance->getDistanceMeters($latitudeOrigin, $longitudeOrigin, $latitudeDestination, $longitudeDestination);
                $track->setDistance($calculatedDistance);
            }
        }

        $requestedFilters = $_GET;

        $allowedFilters = ['distance', 'lengthM', 'certYear', 'roundtrip'];

        foreach ($requestedFilters as $key => $value) {
            if (!in_array($key, $allowedFilters) || empty($value)) {
                unset($requestedFilters[$key]);
            }
            if (is_numeric($value)) {
                $requestedFilters[$key] = intval($value);
            }
        }

        if (!isset($requestedFilters['distance'])) {
            $requestedFilters['distance'] = 600000;
        }

        $repository->matchWithFilterRequest($requestedFilters);

        return new JsonResponse(
            $serializer->serialize($tracks, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
