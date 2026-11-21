import { Section, Title, List, StyledLink, ItemImg } from "./TramTypes.styled";

import konka1 from "../../assets/konka1.jpg";
import steamTram from "../../assets/steam-tram-2.jpg";
import petrolTram from "../../assets/petrol-tram.jpg";

const TRAM_TYPES = [
  { to: "/history/horse", title: "Конный трамвай", image: konka1 },
  { to: "/history/steam", title: "Паровой трамвай", image: steamTram },
  { to: "/history/petrol", title: "Бензотрамвай", image: petrolTram },
  // TODO: { to: "/history/electro", title: "Электрический трамвай", image: ... },
  // TODO: { to: "/history/speed", title: "Скоростной трамвай", image: ... },
];

const TramTypes = () => {
  return (
    <Section>
      <Title>Виды трамвая в Киеве</Title>

      <List>
        {TRAM_TYPES.map(({ to, title, image }) => (
          <li key={to}>
            <StyledLink to={to}>
              {title}
              {/* alt пустой: название уже есть в тексте ссылки */}
              <ItemImg src={image} alt="" />
            </StyledLink>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default TramTypes;