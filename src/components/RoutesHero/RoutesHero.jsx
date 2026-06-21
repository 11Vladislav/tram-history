import {RoutesSection,
        RoutesContainer,
        RoutesTitle,
        RoutesText,
        LeftSide,
        RightSide,
        Breadcrumbs,
        RoutesImage,

} from './RoutesHero.styled';
import RoutesHeroImg from '../../assets/routes-hero-tram.png';


const RoutesHero = () => {
    return(
        <RoutesSection>
            <RoutesContainer>
                 <LeftSide>
                    <Breadcrumbs>
                        Главная / <span>Маршруты</span>
                    </Breadcrumbs>
                    <RoutesTitle>
                        Маршруты Киева
                    </RoutesTitle>
                    <RoutesText>
                        Трамвайные маршруты соедниняют районы, людей и поколения. 
                        Узнайте историю каждого маршрута и его путь сквозь время.
                    </RoutesText>
                 </LeftSide>
                 <RightSide>
                    <RoutesImage
                        src={RoutesHeroImg}
                        alt="Старый киевский трамвай"
                    >
                    </RoutesImage>
                 </RightSide>
            </RoutesContainer>
        </RoutesSection>
    )
}

export default RoutesHero;