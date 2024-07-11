<?php

namespace App\Repository;

use App\Entity\GuardarTratamientos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<GuardarTratamientos>
 *
 * @method GuardarTratamientos|null find($id, $lockMode = null, $lockVersion = null)
 * @method GuardarTratamientos|null findOneBy(array $criteria, array $orderBy = null)
 * @method GuardarTratamientos[]    findAll()
 * @method GuardarTratamientos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GuardarTratamientosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GuardarTratamientos::class);
    }

//    /**
//     * @return GuardarTratamientos[] Returns an array of GuardarTratamientos objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('g.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?GuardarTratamientos
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
