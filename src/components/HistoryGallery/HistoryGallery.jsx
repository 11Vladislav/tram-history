import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {
  GalleryHeader,
  GalleryTitle,
  ViewAllLink,
  MainImageButton,
  MainImage,
  Caption,
  ThumbnailRow,
  ThumbnailButton,
  Thumbnail,
} from "./HistoryGallery.styled";

import { photos } from "../../data/photos";

const slides = photos.map(({ src, title }) => ({ src, alt: title, title }));

const HistoryGallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [open, setOpen] = useState(false);

  const current = photos[activeImage];

  return (
    <>
      <GalleryHeader>
        <GalleryTitle>Исторические фотографии</GalleryTitle>

        {/* «Смотреть все» ведёт в полный архив */}
        <ViewAllLink to="/archive">Смотреть все</ViewAllLink>
      </GalleryHeader>

      <MainImageButton
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Открыть фото на весь экран"
      >
        <MainImage src={current.src} alt={current.title} />
      </MainImageButton>

      <Caption>{current.title}</Caption>

      <ThumbnailRow>
        {photos.map((photo, index) => (
          <ThumbnailButton
            key={photo.src}
            type="button"
            $active={activeImage === index}
            aria-label={`Показать фото: ${photo.title}`}
            aria-pressed={activeImage === index}
            onClick={() => setActiveImage(index)}
          >
            <Thumbnail src={photo.src} alt="" loading="lazy" />
          </ThumbnailButton>
        ))}
      </ThumbnailRow>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={activeImage}
        slides={slides}
        on={{ view: ({ index }) => setActiveImage(index) }}
      />
    </>
  );
};

export default HistoryGallery;