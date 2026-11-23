import PageLayout from "../components/PageLayout/PageLayout";
import {
  Story,
  StoryMeta,
  Text,
  EmptyState,
  ButtonRow,
  ButtonLink,
} from "../components/PageLayout/PageLayout.styled";
import { memories } from "../data/memories";
import { CONTACT_EMAIL } from "../config";

const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "История о киевском трамвае"
)}`;

const MemoriesPage = () => {
  return (
    <PageLayout
      title="Воспоминания"
      lead="Истории киевлян о жизни и поездках на трамвае."
    >
      {memories.length > 0 ? (
        memories.map(({ id, author, year, text }) => (
          <Story key={id}>
            <StoryMeta>
              {author}
              {year ? `, ${year}` : ""}
            </StoryMeta>
            <Text>{text}</Text>
          </Story>
        ))
      ) : (
        <EmptyState>
          Пока здесь нет ни одной истории. Станьте первым — расскажите, как
          трамвай был частью вашей жизни.
        </EmptyState>
      )}

      <ButtonRow>
        <ButtonLink href={mailto} $primary>
          Написать историю
        </ButtonLink>
      </ButtonRow>
    </PageLayout>
  );
};

export default MemoriesPage;