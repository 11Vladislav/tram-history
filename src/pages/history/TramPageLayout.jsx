import {
  Section,
  Container,
  Breadcrumbs,
  Crumb,
  Title,
  BackLink,
} from "./TramPage.styled";

/* Общий каркас для страниц конного, парового трамвая и бензотрамвая */
const TramPageLayout = ({ title, crumb, children }) => {
  return (
    <Section>
      <Container>
        <Breadcrumbs aria-label="Хлебные крошки">
          <Crumb to="/">Главная</Crumb> / <Crumb to="/history">История</Crumb> /{" "}
          <span aria-current="page">{crumb}</span>
        </Breadcrumbs>

        <Title>{title}</Title>

        {children}

        <BackLink to="/history">← Вернуться к истории</BackLink>
      </Container>
    </Section>
  );
};

export default TramPageLayout;