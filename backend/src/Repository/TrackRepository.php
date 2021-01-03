<?php

namespace App\Repository;

use App\Entity\Track;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;


/**
 * @method Track|null find($id, $lockMode = null, $lockVersion = null)
 * @method Track|null findOneBy(array $criteria, array $orderBy = null)
 * @method Track[]    findAll()
 * @method Track[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrackRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Track::class);
    }

    public function save(Track $track): Track
    {
        $this->_em->persist($track);
        $this->_em->flush();

        return $track;
    }

    public function matchWithFilterRequest(array $filter): array
    {
        // automatically knows to select Products
        // the "p" is an alias you'll use in the rest of the quer

        $qb = $this->createQueryBuilder('track')
            ->where('1=1')
            ->orderBy('track.distance', 'ASC');

        if ($filter['distance']) {
            $qb->andWhere('track.distance < :inputDistance')->setParameter('inputDistance', $filter['distance']);
        }

        if ($filter['lengthM']) {
            $qb->andWhere('track.length_m < :inputLengthM')->setParameter('inputLengthM', $filter['lengthM']);
        }

        $query = $qb->getQuery();

        return $query->execute();

        // to get just one result:
        // $product = $query->setMaxResults(1)->getOneOrNullResult();
    }
}
