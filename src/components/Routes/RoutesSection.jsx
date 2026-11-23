import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaCalendarAlt, FaRoute, FaMapMarkerAlt, FaClock } from "react-icons/fa";

import routes from "../../data/routes.json";

import {
  Section,
  Container,
  Sidebar,
  SidebarTitle,
  SidebarButton,
  RouteList,
  RouteItem,
  RouteNumber,
  RouteInfo,
  RouteName,
  RouteYears,
  Arrow,
  Content,
  RouteHeader,
  HeaderLeft,
  BigRouteNumber,
  RouteTitleBlock,
  RouteTitle,
  RouteYearsMain,
  Status,
  Description,
  Stats,
  StatItem,
  StatIcon,
  StatContent,
  StatLabel,
  StatValue,
  MapWrapper,
  MapImage,
  Periods,
  PeriodItem,
  PeriodDot,
  PeriodLine,
  PeriodLabel,
  Gallery,
  GalleryHeader,
  GalleryTitle,
  GalleryLink,
  GalleryGrid,
  GalleryImage,
} from "./RoutesSection.styled";

const VISIBLE_COUNT = 8;
const DEFAULT_YEARS = "1892 – наши дни";

const STATS = [
  { key: "opened", label: "Открыт", Icon: FaCalendarAlt },
  { key: "length", label: "Длина маршрута", Icon: FaRoute },
  { key: "stops", label: "Остановок", Icon: FaMapMarkerAlt },
  { key: "interval", label: "Интервал движения", Icon: FaClock },
];

// Пути из routes.json лежат в public/, поэтому учитываем base из vite.config.js
const assetPath = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const RoutesSection = () => {
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);
  const [selectedPeriod, setSelectedPeriod] = useState(routes[0].periods[0]);
  const [showAll, setShowAll] = useState(false);

  // Один лайтбокс на всю секцию: { slides, index } или null, когда закрыт
  const [lightbox, setLightbox] = useState(null);

  const visibleRoutes = showAll ? routes : routes.slice(0, VISIBLE_COUNT);

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
    setSelectedPeriod(route.periods[0]);
  };

  const routeYears = (route) => route.years ?? DEFAULT_YEARS;

  const photoSlides = selectedPeriod.photos.map((photo) => ({
    src: assetPath(photo),
    alt: `Историческая фотография маршрута №${selectedRoute.number}`,
  }));

  const mapSlides = [
    {
      src: assetPath(selectedPeriod.map),
      alt: `Карта маршрута №${selectedRoute.number}`,
    },
  ];

  return (
    <Section>
      <Container>
        <Sidebar>
          <SidebarTitle>Все маршруты</SidebarTitle>

          <RouteList>
            {visibleRoutes.map((route) => {
              const active = selectedRoute.id === route.id;

              return (
                <RouteItem
                  key={route.id}
                  type="button"
                  $active={active}
                  aria-current={active ? "true" : undefined}
                  onClick={() => handleRouteChange(route)}
                >
                  <RouteNumber>{route.number}</RouteNumber>

                  <RouteInfo>
                    <RouteName>{route.title}</RouteName>
                    <RouteYears>{routeYears(route)}</RouteYears>
                  </RouteInfo>

                  <Arrow aria-hidden="true">›</Arrow>
                </RouteItem>
              );
            })}
          </RouteList>

          {routes.length > VISIBLE_COUNT && (
            <SidebarButton type="button" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Свернуть список" : "Показать все маршруты"}
            </SidebarButton>
          )}
        </Sidebar>

        <Content>
          <RouteHeader>
            <HeaderLeft>
              <BigRouteNumber>{selectedRoute.number}</BigRouteNumber>

              <RouteTitleBlock>
                <RouteTitle>{selectedRoute.title}</RouteTitle>
                <RouteYearsMain>{routeYears(selectedRoute)}</RouteYearsMain>
              </RouteTitleBlock>
            </HeaderLeft>

            {selectedRoute.status && <Status>{selectedRoute.status}</Status>}
          </RouteHeader>

          <Description>{selectedRoute.description}</Description>

          <Stats>
            {STATS.filter(({ key }) => selectedRoute.stats?.[key]).map(
              ({ key, label, Icon }) => (
                <StatItem key={key}>
                  <StatIcon aria-hidden="true">
                    <Icon />
                  </StatIcon>
                  <StatContent>
                    <StatLabel>{label}</StatLabel>
                    <StatValue>{selectedRoute.stats[key]}</StatValue>
                  </StatContent>
                </StatItem>
              )
            )}
          </Stats>

          <MapWrapper
            type="button"
            aria-label="Увеличить карту маршрута"
            onClick={() => setLightbox({ slides: mapSlides, index: 0 })}
          >
            <MapImage
              src={assetPath(selectedPeriod.map)}
              alt={`Карта маршрута №${selectedRoute.number}`}
            />
          </MapWrapper>

          <Periods>
            {selectedRoute.periods.map((period, index) => {
              const active = selectedPeriod.id === period.id;

              return (
                <PeriodItem
                  key={period.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedPeriod(period)}
                >
                  <PeriodDot $active={active} />
                  {index < selectedRoute.periods.length - 1 && <PeriodLine />}
                  <PeriodLabel $active={active}>{period.label}</PeriodLabel>
                </PeriodItem>
              );
            })}
          </Periods>

          {selectedPeriod.photos.length > 0 && (
            <Gallery>
              <GalleryHeader>
                <GalleryTitle>Исторические фотографии маршрута</GalleryTitle>

                <GalleryLink
                  type="button"
                  onClick={() => setLightbox({ slides: photoSlides, index: 0 })}
                >
                  Смотреть все
                </GalleryLink>
              </GalleryHeader>

              <GalleryGrid>
                {selectedPeriod.photos.map((photo, index) => (
                  <GalleryImage
                    key={photo}
                    type="button"
                    aria-label={`Открыть фото ${index + 1}`}
                    onClick={() => setLightbox({ slides: photoSlides, index })}
                  >
                    <img
                      src={assetPath(photo)}
                      alt={`Историческая фотография маршрута №${selectedRoute.number}`}
                      loading="lazy"
                    />
                  </GalleryImage>
                ))}
              </GalleryGrid>
            </Gallery>
          )}
        </Content>
      </Container>

      <Lightbox
        open={lightbox !== null}
        close={() => setLightbox(null)}
        slides={lightbox?.slides ?? []}
        index={lightbox?.index ?? 0}
      />
    </Section>
  );
};

export default RoutesSection;