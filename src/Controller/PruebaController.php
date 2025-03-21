<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PruebaController extends AbstractController
{
    #[Route('/prueba', name: 'app_prueba')]
    public function index(): Response
    {
        return $this->render('prueba/index.html.twig', [
            'controller_name' => 'PruebaController',
        ]);
    }

    #[Route('/prueba2', name: 'app_prueba2')]
    public function saludo()
    {
        return $this->render('prueba/saludo.html.twig', [ 
            'nombre' => 'Jonathan',
        ]);
    }
}
