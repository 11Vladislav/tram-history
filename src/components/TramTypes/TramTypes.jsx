import {
    Section,
    Title,
    List,
    ListItem,
    StyledLink,
} from './TramTypes.styled';

const TramTypes = () => {
    return(
        <>
            <Section>
                <Title>Виды трамвая в Киеве</Title>
                    <List>
                        <ListItem>
                            <StyledLink to="/HorseTram">Конный трамвай</StyledLink> 
                        </ListItem>
                            <ListItem>
                            <StyledLink to="/SteamTram">Паровой трамвай</StyledLink> 
                        </ListItem>
                        <ListItem>
                            <StyledLink to="/ElectroTram">Электрический трамвай</StyledLink> 
                        </ListItem>
                            <ListItem>
                            <StyledLink to="/GasTram">Бензотрамвай</StyledLink> 
                        </ListItem> 
                            <ListItem>
                            <StyledLink to="/SpeedTram">Скоростной трамвай</StyledLink> 
                        </ListItem>                                               
                    </List>
            </Section>
        
        </>
    ) 

}

export default TramTypes;