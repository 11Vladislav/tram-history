import {
    Section,
    Title,
    List,
    ListItem,
    StyledLink,
    ItemIng
} from './TramTypes.styled';
import konka1 from '../../assets/konka1.jpg'
import steamTram from '../../assets/steam-tram-2.jpg'
import petrolTram from '../../assets/petrol-tram.jpg'

const TramTypes = () => {
    return(
        <>
            <Section>
                <Title>Виды трамвая в Киеве</Title>
                    <List>
                        <ListItem>
                            <StyledLink to="/history/horse">Конный трамвай
                            <ItemIng src={konka1} alt='Конный трамвай'></ItemIng>
                            </StyledLink>
                        </ListItem>
                           <ListItem>
                            <StyledLink to="/history/steam">Паровой трамвай 
                            <ItemIng src={steamTram} alt='Паровой трамвай'></ItemIng>
                            </StyledLink>
                        </ListItem>
                          <ListItem>
                            <StyledLink to="/history/petrol">Бензотрамвай
                            <ItemIng src={petrolTram} alt='Бензотрамвай'></ItemIng>
                            </StyledLink> 
                        </ListItem>
                           {/* <ListItem>
                            <StyledLink to="/history/electro">Электрический трамвай</StyledLink> 
                        </ListItem> 
                            <ListItem>
                            <StyledLink to="/history/speed">Скоростной трамвай</StyledLink> 
                        </ListItem>                                                */}
                    </List>
            </Section>
        
        </>
    ) 

}

export default TramTypes;