<?php

namespace App\Controller;

use App\Entity\Resultado;
use App\Repository\ResultadoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/producto')]
class ProductoController extends AbstractController
{
    #[Route('/', name: 'app_producto_index', methods: ['GET'])]
    public function index(ResultadoRepository $resultadoRepository): Response
    {
        // Obtener el usuario actual
        $user = $this->getUser();

        // Obtener los resultados correspondientes al usuario actual
        $resultados = $resultadoRepository->findBy(['user' => $user]);

        return $this->render('producto/index.html.twig', [
            'resultados' => $resultados,
        ]);
    }

    #[Route('/{id}', name: 'app_producto_show', methods: ['GET'])]
    public function show(Resultado $resultado): Response
    {
        return $this->render('producto/show.html.twig', [
            'resultado' => $resultado,
        ]);
    }

    #[Route('/{id}', name: 'app_producto_delete', methods: ['POST'])]
    public function delete(Request $request, Resultado $resultado, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$resultado->getId(), $request->request->get('_token'))) {
            $entityManager->remove($resultado);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_producto_index', [], Response::HTTP_SEE_OTHER);
    }
}
