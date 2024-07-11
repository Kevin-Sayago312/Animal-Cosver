<?php

namespace App\Controller;

use App\Entity\Resultado;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/test', name: 'app_test')]
    public function index(): Response
    {
        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestController',
        ]);
    }

    #[Route('/guardar-tratamiento', name: 'guardar_tratamiento', methods: ['POST'])]
    public function guardarTratamiento(Request $request): Response
    {
        // Obtiene el usuario actual
        $user = $this->getUser();

        // Verifica si el usuario está autenticado
        if ($user) {
            // Obtiene el ID del usuario
            $userId = $user->getId();

            // Obtén los datos del formulario
            $enfermedad = $request->request->get('enfermedad');
            $descripcion = $request->request->get('descripcion');
            $tratamiento = $request->request->get('tratamiento');

            // Ahora puedes usar $userId para guardar los datos en la entidad Resultado
            // Por ejemplo, puedes crear una instancia de la entidad Resultado y establecer sus propiedades
            // y luego persistirla en la base de datos utilizando el EntityManager

            $resultado = new Resultado();
            $resultado->setEnfermedad($enfermedad);
            $resultado->setDescripcion($descripcion);
            $resultado->setTratamiento($tratamiento);
            $resultado->setUser($user);

            $this->entityManager->persist($resultado);
            $this->entityManager->flush();

            // Retorna una respuesta, por ejemplo, una redirección a la página principal
            return $this->redirectToRoute('app_test');
        }

        // Si el usuario no está autenticado, puedes manejar el caso de otra manera, por ejemplo, redirigiendo a la página de inicio de sesión

        // Retorna una respuesta, por ejemplo, una redirección a la página de inicio de sesión
        return $this->redirectToRoute('login');
    }
}
