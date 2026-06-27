import {
    Section,
    Title,
    List,
    ListItem,
    StyledLink,
    ItemIng
} from './TramTypes.styled';
import konka1 from '../../assets/konka1.jpg'

const TramTypes = () => {
    return(
        <>
            <Section>
                <Title>Виды трамвая в Киеве</Title>
                    <List>
                        <ListItem>
                            <StyledLink to="/history/horse">Конный трамвай</StyledLink>
                            <ItemIng src={konka1} alt='Конный трамвай'></ItemIng>
                        </ListItem>
                            {/* <ListItem>
                            <StyledLink to="/history/steam">Паровой трамвай</StyledLink> 
                        </ListItem>
                        <ListItem>
                            <StyledLink to="/history/electro">Электрический трамвай</StyledLink> 
                        </ListItem>
                            <ListItem>
                            <StyledLink to="/history/gasoline">Бензотрамвай</StyledLink> 
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