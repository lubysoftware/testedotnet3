import React, { useCallback, useEffect, useState } from 'react';
import Card from '../../components';
import { developersService } from '../../services';

import { Container } from './styles';

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
            {devs.map(dev => <Card key={dev.id} name={dev.name} />)}
        </Container>
    );
}

export default Projects;