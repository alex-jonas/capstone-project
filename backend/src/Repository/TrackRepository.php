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

    /* public function findByLocation(float $latOrigin, float $lngOrigin)
    {
        $earth_diameter = 12742; // 2 * Earth's radius (6371 km)

        $distanceKmSql = "$earth_diameter * ASIN(SQRT(POWER(SIN(($latOrigin - track.first_lat) * PI()/360), 2) + COS($latOrigin  * PI()/180) * COS(track.first_lat * PI()/180) * POWER(SIN(( $lngOrigin -  track_first_lon) * PI()/360), 2)))";
        var_dump($this);
        $result = $this->_em->createQueryBuilder('track')
            ->select("track, $distanceKmSql AS HIDDEN track")
            ->orderBy('track.distance', 'ASC')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        return $result;
    }*/
}
