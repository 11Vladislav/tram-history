import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import {
  SectionTitle,
  Text,
  List,
} from "../components/PageLayout/PageLayout.styled";

const AboutPage = () => {
  return (
    <PageLayout
      title="О проекте"
      lead="«Киевские Трамвайные Маршруты» — сайт об истории, маршрутах и подвижном составе киевского трамвая."
    >
      <SectionTitle>Что здесь есть</SectionTitle>
      <List>
        <li>
          <Link to="/history">История</Link> — ключевые этапы развития трамвая
          и отдельные страницы о конном, паровом трамвае и бензотрамвае.
        </li>
        <li>
          <Link to="/routes">Маршруты</Link> — карты и описание маршрутов по
          историческим периодам.
        </li>
        <li>
          <Link to="/rolling-stock">Подвижной состав</Link> — вагоны разных
          эпох.
        </li>
        <li>
          <Link to="/archive">Архив фото</Link> — исторические фотографии.
        </li>
        <li>
          <Link to="/memories">Воспоминания</Link> — истории киевлян.
        </li>
      </List>

      <SectionTitle>Нашли неточность?</SectionTitle>
      <Text>
        История города сложна, а источники нередко расходятся. Если вы
        заметили ошибку или можете дополнить материал, напишите нам через
        страницу <Link to="/contact">«Контакты»</Link>.
      </Text>
    </PageLayout>
  );
};

export default AboutPage;