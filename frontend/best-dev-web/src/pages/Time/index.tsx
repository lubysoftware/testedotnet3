import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import { Developer } from '../../interfaces/developer';
import { developersService, projectsService } from '../../services';
import { List } from '../../theme/globals';
import { Container } from './styles';

// import { Container } from './styles';

const Time: React.FC = () => {
    const { developerId } = useParams();
    const [dev, setDev] = useState<Developer>({} as Developer);

    const getDeveloper = useCallback(async (id) => {
        const { data } = await projectsService.getProjects(id);
        console.log(data);
        setDev(data);
    }, []);
    useEffect(() => {
        getDeveloper(developerId);
    }, [developerId]);
    return (
        <Container>
            <h1>{dev?.name}</h1>
            <List>
                <Link to={`/lancar-hora/${dev.id}`} style={{ textDecoration: 'none' }}>
                    <Card key={dev.id} name={` ${dev.name}`} color="white" />
                </Link>
            </List>
        </Container>
    );
}

export default Time;