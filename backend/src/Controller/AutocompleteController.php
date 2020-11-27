<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AutocompleteController extends AbstractController
{
    /**
     * @Route("/ac/{place}", name="autocomplete", methods={"GET"})
     */
    public function index(string $place): JsonResponse
    {
        $google_url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$place&key=AIzaSyDZJTQ_zk-aXNr5gH8Si82_AOHiUmVXDJg&language=de";

        $json =  file_get_contents($google_url);
        $responseBody = json_decode($json);

        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');

        echo json_encode($responseBody);
        die;
    }
}
