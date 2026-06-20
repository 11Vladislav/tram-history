import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";


import {
  GalleryWrapper,
  GalleryHeader,
  GalleryTitle,
  ViewAllButton,
  MainImageWrapper,
  MainImage,
  ThumbnailRow,
  Thumbnail,
} from "./HistoryGallery.styled";

import mainPhoto from "../../assets/aleksandr-line.jpg";
import photo1 from "../../assets/konka.webp";
import photo2 from "../../assets/pusha-tram.jpg";
import photo3 from "../../assets/mtv-82.webp";
import photo4 from "../../assets/ktv-55.webp";
import photo5 from "../../assets/tatra-t3-tram.jpg";
import photo6 from "../../assets/electron-tram.jpg";

const photos = [
    {
    src: mainPhoto,
    title: "Киевский трамвай начала XX века на Подоле",
  },
  {
    src: photo1,
    title: "Конка на Царской площади",
  },
  {
    src: photo2,
    title: "Трамвай в Пуще-Водице",
  },
  {
    src: photo3,
    title: "МТВ-82 и Пульман на ул. Владимирская",
  },
  {
    src: photo4,
    title: "КТМ-55 на Борщаговке",
  },
  {
    src: photo5,
    title: "Tatra T3 на Конктрактовой площади",
  },
    {
    src: photo6,
    title: "Электрон на скоростной линии",
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <GalleryWrapper>
        <GalleryHeader>
          <GalleryTitle>
            Исторические фотографии
          </GalleryTitle>

          <ViewAllButton
            onClick={() => setOpen(true)}
          >
            Смотреть все
          </ViewAllButton>
        </GalleryHeader>

        <MainImageWrapper>
          <MainImage
            src={photos[activeImage].src}
            alt={photos[activeImage].title}
            onClick={() => setOpen(true)}
          />
        </MainImageWrapper>

        <ThumbnailRow>
          {photos.map((photo, index) => (
            <Thumbnail
              key={index}
              src={photo.src}
              alt={photo.title}
              $active={activeImage === index}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </ThumbnailRow>
      </GalleryWrapper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={activeImage}
        slides={photos}
      />
    </>
  );
};

export default Gallery;