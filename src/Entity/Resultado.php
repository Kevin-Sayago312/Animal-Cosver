<?php

namespace App\Entity;

use App\Repository\ResultadoRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResultadoRepository::class)]
class Resultado
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $Enfermedad = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descripcion = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $Tratamiento = null;

    #[ORM\ManyToOne(inversedBy: 'Resultados_')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEnfermedad(): ?string
    {
        return $this->Enfermedad;
    }

    public function setEnfermedad(?string $Enfermedad): static
    {
        $this->Enfermedad = $Enfermedad;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): static
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getTratamiento(): ?string
    {
        return $this->Tratamiento;
    }

    public function setTratamiento(?string $Tratamiento): static
    {
        $this->Tratamiento = $Tratamiento;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
