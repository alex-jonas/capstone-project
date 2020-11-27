<?php

namespace App\Controller;

use App\Entity\Track;
use App\Repository\TrackRepository;
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
    public function index(SerializerInterface $serializer): JsonResponse
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
}
