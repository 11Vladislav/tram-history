import { useState } from "react";
import routes from "../../data/routes.json";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

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
  GalleryImage
} from "./RoutesSection.styled";

import {
  FaCalendarAlt,
  FaRoute,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

const RoutesSection = () => {

  const [selectedRoute, setSelectedRoute] = useState(routes[0]);

  const [selectedPeriod, setSelectedPeriod] = useState(
    routes[0].periods[0]
  );

const [lightboxOpen, setLightboxOpen] = useState(false);

const [lightboxIndex, setLightboxIndex] = useState(0);
const [mapLightboxOpen, setMapLightboxOpen] = useState(false);

  const handleRouteChange = (route) => {
    setSelectedRoute(route);

    setSelectedPeriod(route.periods[0]);
  };


  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };


const getAssetPath = (path) => {
  return `${import.meta.env.BASE_URL}${path}`;
};



const galleryImages = selectedPeriod.photos.map((photo) => ({
  src: getAssetPath(photo),
}));

  return (
    <Section>

      <Container>

        {/* Левая колонка */}

        <Sidebar>

          <SidebarTitle>
            Все маршруты
          </SidebarTitle>


          <RouteList>

            {routes.map((route) => (

              <RouteItem
                key={route.id}
                $active={selectedRoute.id === route.id}
                onClick={() => handleRouteChange(route)}
              >

                <RouteNumber>
                  {route.number}
                </RouteNumber>
                <RouteInfo>

                  <RouteName>
                    {route.title}
                  </RouteName>

                  <RouteYears>
                    1892 – наши дни
                  </RouteYears>

                </RouteInfo>


                <Arrow>
                  ›
                </Arrow>

              </RouteItem>

            ))}

          </RouteList>

          <SidebarButton>
            Показать все маршруты
          </SidebarButton>

        </Sidebar>


        {/* Правая колонка */}

        <Content>

          <RouteHeader>

            <HeaderLeft>

              <BigRouteNumber>
                {selectedRoute.number}
              </BigRouteNumber>


              <RouteTitleBlock>

                <RouteTitle>
                  {selectedRoute.title}
                </RouteTitle>

                <RouteYearsMain>
                  1892 – наши дни
                </RouteYearsMain>

              </RouteTitleBlock>

            </HeaderLeft>


            <Status>
              {selectedRoute.status}
            </Status>

          </RouteHeader>


          <Description>
            {selectedRoute.description}
          </Description>


          {/* Статистика */}

          <Stats>

            <StatItem>

              <StatIcon>
                <FaCalendarAlt />
              </StatIcon>

              <StatContent>

                <StatLabel>
                  Открыт
                </StatLabel>

                <StatValue>
                  {selectedRoute.stats.opened}
                </StatValue>

              </StatContent>

            </StatItem>


            <StatItem>

              <StatIcon>
                <FaRoute />
              </StatIcon>

              <StatContent>

                <StatLabel>
                  Длина маршрута
                </StatLabel>

                <StatValue>
                  {selectedRoute.stats.length}
                </StatValue>

              </StatContent>

            </StatItem>


            <StatItem>

              <StatIcon>
                <FaMapMarkerAlt />
              </StatIcon>

              <StatContent>

                <StatLabel>
                  Остановок
                </StatLabel>

                <StatValue>
                  {selectedRoute.stats.stops}
                </StatValue>

              </StatContent>

            </StatItem>


            <StatItem>

              <StatIcon>
                <FaClock />
              </StatIcon>

              <StatContent>

                <StatLabel>
                  Интервал движения
                </StatLabel>

                <StatValue>
                  {selectedRoute.stats.interval}
                </StatValue>

              </StatContent>

            </StatItem>

          </Stats>


          {/* Карта */}

          <MapWrapper>

            <MapImage
              src={getAssetPath(selectedPeriod.map)}
              alt={`Карта маршрута №${selectedRoute.number}`}
              onClick={() => setMapLightboxOpen(true)}
            />

          </MapWrapper>


          {/* Историческая шкала */}

          <Periods>

            {selectedRoute.periods.map(
              (period, index) => (

                <PeriodItem
                  key={period.id}
                  $active={
                    selectedPeriod.id === period.id
                  }
                  onClick={() =>
                    handlePeriodChange(period)
                  }
                >

                  <PeriodDot
                     $active={selectedPeriod.id === period.id}
                  />

                  {index <
                    selectedRoute.periods.length - 1 && (
                    <PeriodLine />
                  )}

                  <PeriodLabel>
                    {period.label}
                  </PeriodLabel>

                </PeriodItem>

              )
            )}

          </Periods>


          {/* Галерея */}

          <Gallery>

            <GalleryHeader>

              <GalleryTitle>
                Исторические фотографии маршрута
              </GalleryTitle>

              <GalleryLink>
                Смотреть все
              </GalleryLink>

            </GalleryHeader>


            <GalleryGrid>

              {selectedPeriod.photos.map(
                (photo, index) => (

            <GalleryImage
                key={index}
                src={getAssetPath(photo)}
                alt={`Историческая фотография маршрута №${selectedRoute.number}`}
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              />

                  )
                )}

            </GalleryGrid>

          </Gallery>

        </Content>

      </Container>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={galleryImages}
          index={lightboxIndex}
          on={{
            view: ({ index }) => setLightboxIndex(index),
          }}
        />
        <Lightbox
          open={mapLightboxOpen}
          close={() => setMapLightboxOpen(false)}
          slides={[
            {
              src: getAssetPath(selectedPeriod.map),
            },
          ]}
          />

    </Section>
  );
};


export default RoutesSection;