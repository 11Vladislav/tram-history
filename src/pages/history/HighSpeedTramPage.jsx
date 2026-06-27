import {Section,
        Title
} 
from './TypeTramPage.styled';

import { Outlet } from "react-router-dom";


const HighSpeedTramPage = () => {
    <Section>
        <Title>Киевский электрический трамвай</Title>
        <Outlet/>
    </Section>
}

export default HighSpeedTramPage;