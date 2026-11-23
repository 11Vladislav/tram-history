import PageLayout from "../components/PageLayout/PageLayout";
import {
  Text,
  ButtonRow,
  ButtonLink,
} from "../components/PageLayout/PageLayout.styled";
import { CONTACT_EMAIL } from "../config";

const mail = (subject) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const ContactPage = () => {
  return (
    <PageLayout
      title="Контакты"
      lead="Есть фотографии, истории или замечания по материалам? Напишите нам."
    >
      <ButtonRow>
        <ButtonLink href={mail("Фото киевского трамвая")} $primary>
          Прислать фото
        </ButtonLink>
        <ButtonLink href={mail("История о киевском трамвае")}>
          Рассказать историю
        </ButtonLink>
        <ButtonLink href={mail("Замечание по материалам сайта")}>
          Сообщить об ошибке
        </ButtonLink>
      </ButtonRow>

      <Text style={{ textAlign: "center" }}>
        Или напишите напрямую:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </Text>
    </PageLayout>
  );
};

export default ContactPage;