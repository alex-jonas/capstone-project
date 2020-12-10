<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;


class GeocodeController extends AbstractController
{
    /**
     * @Route("/geocode/{placeid}", name="geocode")
     */
    public function index(string $placeid, HttpClientInterface $client): JsonResponse
    {
        $apiKey = $this->getParameter("app.google_api_key");

        if (!$placeid) {
            return new JsonResponse(
                ['success' => 'no'],
                JsonResponse::HTTP_BAD_REQUEST,
                []
            );
        }

        $this->client = $client;

        $response = $this->client->request(
            'GET',
            "https://maps.googleapis.com/maps/api/geocode/json?place_id=$placeid&key=$apiKey"
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
