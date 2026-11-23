import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import {
  SectionTitle,
  CardGrid,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardMeta,
  CardText,
} from "../components/PageLayout/PageLayout.styled";
import { tractionTypes, models } from "../data/rollingStock";

const RollingStockPage = () => {
  return (
    <PageLayout
      title="Подвижной состав"
      lead="Вагоны киевского трамвая разных эпох: от конки и паровой тяги до современных моделей."
      wide
    >
      <SectionTitle>Виды трамвая</SectionTitle>
      <CardGrid>
        {tractionTypes.map(({ id, name, era, image, to }) => (
          <Card key={id} as={Link} to={to}>
            <CardImg src={image} alt="" loading="lazy" />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardMeta>{era}</CardMeta>
            </CardBody>
          </Card>
        ))}
      </CardGrid>

      <SectionTitle>Вагоны XX века</SectionTitle>
      <CardGrid>
        {models.map(({ id, name, image, description }) => (
          <Card key={id}>
            <CardImg src={image} alt={name} loading="lazy" />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              {description && <CardText>{description}</CardText>}
            </CardBody>
          </Card>
        ))}
      </CardGrid>
    </PageLayout>
  );
};

export default RollingStockPage;