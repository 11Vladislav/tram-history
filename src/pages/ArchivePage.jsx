import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import PageLayout from "../components/PageLayout/PageLayout";
import {
  PhotoGrid,
  PhotoButton,
  PhotoImg,
  PhotoCaption,
} from "../components/PageLayout/PageLayout.styled";
import { photos } from "../data/photos";

const slides = photos.map(({ src, title }) => ({ src, alt: title, title }));

const ArchivePage = () => {
  const [index, setIndex] = useState(-1); // -1 — лайтбокс закрыт

  return (
    <PageLayout
      title="Архив фото"
      lead="Исторические фотографии киевского трамвая. Нажмите на снимок, чтобы открыть его на весь экран."
      wide
    >
      <PhotoGrid>
        {photos.map(({ src, title }, i) => (
          <li key={src}>
            <PhotoButton
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Открыть фото: ${title}`}
            >
              <PhotoImg src={src} alt={title} loading="lazy" />
              <PhotoCaption>{title}</PhotoCaption>
            </PhotoButton>
          </li>
        ))}
      </PhotoGrid>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </PageLayout>
  );
};

export default ArchivePage;