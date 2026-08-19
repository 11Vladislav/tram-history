import {Section,
        Title,
        Breadcrumbs,
        StyledLink,
        MainImg,
        Text,
        TextImg,
        ItemWrap,

} 
from './TramPage.styled';
import photo1 from "../../assets/petrol-tram-2.webp";
import photo2 from "../../assets/petrol-tram.jpg";
import photo3 from "../../assets/petrol-tram-1.webp";


const PetrolTramPage = () => {
       return(
    <Section>
        <Title>Киевский бензотрамвай</Title>
      <Breadcrumbs>
            <StyledLink to="/">Главная</StyledLink> / <StyledLink to="/history">История</StyledLink><span> /  Бензотрамвай</span>
        </Breadcrumbs>
        <MainImg
                src={photo1}
                 alt="Бензотрамвай"
        ></MainImg>
        <Text>
           Киевский бензотрамвай (Дарницкий (Слободский) мототрамвай, разг. Примус) — трамвай с тягой на бензиновых двигателях, соединивший Киев 
           и поселки на левом берегу Днепра (на тот момент — административно относились к Черниговской губернии). 
        </Text>
        <Text>
           Движение на трамвайной линии было открыто 25 апреля 
           (8 мая) 1912 года на участке Предмостная слобodka — Никольская слобodka 
           (поблизости нынешней станции метро «Левobережная») — Дарница 
           (севернее одноименной железнодорожной станции). 
            </Text>
            <ItemWrap>
                <TextImg 
                    src={photo2}        
                    alt='Бензотрамвай'>
                </TextImg>   
                <TextImg   
                    src={photo3}
                    alt='Бензотрамвай'>
                </TextImg>
            </ItemWrap>              
             <Text>
           В 1913 году трамвайная линия была продлена до Броваров. 
           В 1920—1925 годах линия не работала из-за разрушения мостов через Днепр. 
           В 1934 году линию электрифицировали. Движение на трамвайной линии было прекращено в сентябре 1941 года, 
           после войны — не восстанавливалось.
        </Text>
        <Text>
            При перенумерации городских трамвайных маршрутов в конце 1926 года маршруты бывшего Дарницкого трамвая получили номера:<br/>

                № 14 «Почтовая площадь — Никольская слобodka» (6,025 км);<br/>
                № 15 «Никольская слobodka — Дарница» (4,202 км);<br/>
                № 16 «Никольская слobodka — Бровары» (13,656 км).<br/>
        </Text>
    </Section>
    )
}

export default PetrolTramPage ;