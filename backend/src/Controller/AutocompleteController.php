<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;


class AutocompleteController extends AbstractController
{
    /**
     * @Route("/autocomplete/{place}", name="autocomplete", methods={"GET"})
     */
    public function index(string $place, HttpClientInterface $client): JsonResponse
    {

        $this->client = $client;

        $response = $this->client->request(
            'GET',
            "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$place&key=AIzaSyBAgxQxVs-1QnBLbskYaO6MDRM0cQnrcKo&language=de"
        );

        $statusCode = $response->getStatusCode();

        if ($statusCode === 200) {
            $content = $response->getContent();
            return new JsonResponse(
                $content,
                JsonResponse::HTTP_OK,
                [],
                true
            );
        }
        return new JsonResponse(
            ['success' => 'no'],
            JsonResponse::HTTP_NOT_FOUND,
            []
        );
    }
}
