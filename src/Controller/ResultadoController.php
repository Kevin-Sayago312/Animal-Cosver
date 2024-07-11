<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ResultadoController extends AbstractController
{
    #[Route('/resultado', name: 'app_resultado')]
    public function index(): Response
    {
        return $this->render('resultado/index.html.twig', [
            'controller_name' => 'ResultadoController',
        ]);
    }
}
