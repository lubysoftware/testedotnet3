import React, { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card';
import { developersService } from '../../services';

import { Container } from './styles';
import { Link } from 'react-router-dom';

interface Dev {
    name: string;
    id: number;
}
const Projects: React.FC = () => {
    const [devs, setDevs] = useState<Dev[]>([] as Dev[]);
    const getDevs = useCallback(async () => {
        const { data } = await developersService.getDevelopers();
        setDevs(data);
    }, []);
    useEffect(() => {
        getDevs();
    }, [getDevs]);
    return (
        <Container>
            <h1>Desenvolvedores</h1>
            {devs.map(dev => <Link to={`/lancar-hora/${dev.id}`} style={{ textDecoration: 'none' }}><Card key={dev.id} name={dev.name} color="#3EE2C0" /></Link>)}
        </Container>
    );
}

export default Projects;