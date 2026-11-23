import konka from "../assets/konka1.jpg";
import steamTram from "../assets/steam-tram-2.jpg";
import petrolTram from "../assets/petrol-tram.jpg";
import mtv from "../assets/mtv-82.webp";
import ktm from "../assets/ktv-55.webp";
import tatra from "../assets/tatra-t3-tram.jpg";
import electron from "../assets/electron-tram.jpg";

// Виды трамвая, у которых уже есть страницы
export const tractionTypes = [
  { id: "horse", name: "Конный трамвай", era: "С 1891 года", image: konka, to: "/history/horse" },
  { id: "steam", name: "Паровой трамвай", era: "С 1892 года", image: steamTram, to: "/history/steam" },
  { id: "petrol", name: "Бензотрамвай", era: "С 1912 года", image: petrolTram, to: "/history/petrol" },
];

// Модели вагонов. Поле description необязательное: пока оно пустое, карточка его не показывает.
export const models = [
  { id: "mtv-82", name: "МТВ-82", image: mtv, description: "" },
  { id: "ktm-55", name: "КТМ-55", image: ktm, description: "" },
  { id: "tatra-t3", name: "Tatra T3", image: tatra, description: "" },
  { id: "electron", name: "Электрон", image: electron, description: "" },
];