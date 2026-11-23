import PageLayout from "../components/PageLayout/PageLayout";
import {
  SectionTitle,
  Text,
  List,
} from "../components/PageLayout/PageLayout.styled";
import { CONTACT_EMAIL } from "../config";

/* Шаблон: проверь, что он соответствует тому, как работает твой сайт (аналитика, cookies и т. д.) */
const PrivacyPage = () => {
  return (
    <PageLayout title="Политика конфиденциальности" crumb="Конфиденциальность">
      <Text>Последнее обновление: 22 ноября 2026 года.</Text>

      <SectionTitle>Какие данные мы собираем</SectionTitle>
      <Text>
        На сайте нет регистрации и форм, поэтому мы не собираем персональные
        данные посетителей напрямую.
      </Text>

      <SectionTitle>Сторонние сервисы</SectionTitle>
      <List>
        <li>
          Шрифты загружаются с сервиса Google Fonts. При этом браузер
          отправляет на серверы Google технические данные, например IP-адрес.
        </li>
      </List>

      <SectionTitle>Письма и материалы</SectionTitle>
      <Text>
        Если вы пишете нам на {CONTACT_EMAIL}, мы получаем ваш адрес и
        содержание письма. Мы используем их только для ответа и для работы с
        присланными материалами.
      </Text>

      <SectionTitle>Изменения</SectionTitle>
      <Text>
        Эта страница может обновляться. Актуальная версия всегда находится по
        этому адресу.
      </Text>
    </PageLayout>
  );
};

export default PrivacyPage;