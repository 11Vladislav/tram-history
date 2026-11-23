import mainPhoto from "../assets/aleksandr-line.jpg";
import photo1 from "../assets/konka.webp";
import photo2 from "../assets/pusha-tram.jpg";
import photo3 from "../assets/mtv-82.webp";
import photo4 from "../assets/ktv-55.webp";
import photo5 from "../assets/tatra-t3-tram.jpg";
import photo6 from "../assets/electron-tram.jpg";

// Один источник фотографий для HistoryGallery и страницы «Архив фото»
export const photos = [
  { src: mainPhoto, title: "Киевский трамвай начала XX века на Подоле" },
  { src: photo1, title: "Конка на Царской площади" },
  { src: photo2, title: "Трамвай в Пуще-Водице" },
  { src: photo3, title: "МТВ-82 и Пульман на ул. Владимирской" },
  // В названии файла ktv-55, в подписи КТМ-55 — проверь, какое название верное
  { src: photo4, title: "КТМ-55 на Борщаговке" },
  { src: photo5, title: "Tatra T3 на Контрактовой площади" },
  { src: photo6, title: "Электрон на скоростной линии" },
];
