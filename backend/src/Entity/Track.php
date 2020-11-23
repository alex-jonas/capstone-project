<?php

namespace App\Entity;

use App\Repository\TrackRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrackRepository::class)
 */
class Track
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $length_m;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $kml_file;

    /**
     * @ORM\Column(type="array")
     */
    private $start_coord = [];

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $cert_year;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $tags = [];

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $difficulty;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $dureation_min;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tansport_station;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $region;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $roundtrip;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $surface = [];

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $date_created;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLengthM(): ?int
    {
        return $this->length_m;
    }

    public function setLengthM(int $length_m): self
    {
        $this->length_m = $length_m;

        return $this;
    }

    public function getKmlFile(): ?string
    {
        return $this->kml_file;
    }

    public function setKmlFile(string $kml_file): self
    {
        $this->kml_file = $kml_file;

        return $this;
    }

    public function getStartCoord(): ?array
    {
        return $this->start_coord;
    }

    public function setStartCoord(array $start_coord): self
    {
        $this->start_coord = $start_coord;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCertYear(): ?int
    {
        return $this->cert_year;
    }

    public function setCertYear(?int $cert_year): self
    {
        $this->cert_year = $cert_year;

        return $this;
    }

    public function getTags(): ?array
    {
        return $this->tags;
    }

    public function setTags(?array $tags): self
    {
        $this->tags = $tags;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDifficulty(): ?int
    {
        return $this->difficulty;
    }

    public function setDifficulty(?int $difficulty): self
    {
        $this->difficulty = $difficulty;

        return $this;
    }

    public function getDureationMin(): ?int
    {
        return $this->dureation_min;
    }

    public function setDureationMin(?int $dureation_min): self
    {
        $this->dureation_min = $dureation_min;

        return $this;
    }

    public function getTansportStation(): ?string
    {
        return $this->tansport_station;
    }

    public function setTansportStation(?string $tansport_station): self
    {
        $this->tansport_station = $tansport_station;

        return $this;
    }

    public function getRegion(): ?string
    {
        return $this->region;
    }

    public function setRegion(?string $region): self
    {
        $this->region = $region;

        return $this;
    }

    public function getRoundtrip(): ?bool
    {
        return $this->roundtrip;
    }

    public function setRoundtrip(?bool $roundtrip): self
    {
        $this->roundtrip = $roundtrip;

        return $this;
    }

    public function getSurface(): ?array
    {
        return $this->surface;
    }

    public function setSurface(?array $surface): self
    {
        $this->surface = $surface;

        return $this;
    }

    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->date_created;
    }

    public function setDateCreated(?\DateTimeInterface $date_created): self
    {
        $this->date_created = $date_created;

        return $this;
    }
}
