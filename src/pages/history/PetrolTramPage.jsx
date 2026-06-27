import {Section,
        Title
} 
from './TypeTramPage.styled';

import { Outlet } from "react-router-dom";


const PetrolTramPage = () => {
    <Section>
        <Title>Киевская городская конно-железная дорога</Title>
        <Outlet/>
    </Section>
}

export default PetrolTramPage ;