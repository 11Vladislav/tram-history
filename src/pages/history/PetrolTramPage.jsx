import {Section,
        Title,
        Breadcrumbs,
        StyledLink,
} 
from './TramPage.styled';



const PetrolTramPage = () => {
       return(
    <Section>
        <Title>Киевский бензотрамвай</Title>
      <Breadcrumbs>
            <StyledLink to="/">Главная</StyledLink> / <StyledLink to="/history">История</StyledLink><span> /  Бензотрамвай</span>
        </Breadcrumbs>
    </Section>
    )
}

export default PetrolTramPage ;