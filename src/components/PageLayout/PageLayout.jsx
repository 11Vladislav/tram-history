import {
  Section,
  Container,
  Breadcrumbs,
  Crumb,
  Title,
  Lead,
} from "./PageLayout.styled";

/* Общий каркас для простых страниц: хлебные крошки, h1, вводный абзац */
const PageLayout = ({ title, crumb, lead, wide = false, children }) => {
  return (
    <Section>
      <Container $wide={wide}>
        <Breadcrumbs aria-label="Хлебные крошки">
          <Crumb to="/">Главная</Crumb> /{" "}
          <span aria-current="page">{crumb ?? title}</span>
        </Breadcrumbs>

        <Title>{title}</Title>
        {lead && <Lead>{lead}</Lead>}

        {children}
      </Container>
    </Section>
  );
};

export default PageLayout;