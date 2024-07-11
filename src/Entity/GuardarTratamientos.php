<?php

namespace App\Entity;

use App\Repository\GuardarTratamientosRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GuardarTratamientosRepository::class)]
class GuardarTratamientos
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
