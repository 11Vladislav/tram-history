import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import {
  BigCode,
  ButtonRow,
  ButtonLink,
} from "../components/PageLayout/PageLayout.styled";

const NotFoundPage = () => {
  return (
    <PageLayout
      title="Страница не найдена"
      lead="Такой страницы нет или она переехала. Трамвай свернул не туда."
    >
      <BigCode aria-hidden="true">404</BigCode>

      <ButtonRow>
        <ButtonLink as={Link} to="/" $primary>
          На главную
        </ButtonLink>
        <ButtonLink as={Link} to="/routes">
          К маршрутам
        </ButtonLink>
      </ButtonRow>
    </PageLayout>
  );
};

export default NotFoundPage;