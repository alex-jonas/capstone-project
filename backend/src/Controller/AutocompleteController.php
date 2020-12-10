<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;


class AutocompleteController extends AbstractController
{

    private $client;
    /**
     * @Route("/autocomplete/{place}", name="autocomplete")
     */
    public function index(string $place, HttpClientInterface $client): JsonResponse
    {
        $apiKey = $this->getParameter("app.google_api_key");

        if (!$place) {
            return new JsonResponse(
                ['success' => 'no'],
                JsonResponse::HTTP_BAD_REQUEST,
                []
            );
        }

        $this->client = $client;

        $response = $this->client->request(
            'GET',
            "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$place&key=$apiKey&language=de"
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
