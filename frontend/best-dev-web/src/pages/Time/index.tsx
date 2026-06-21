import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Developer } from '../../interfaces/developer';
import { developersService, projectsService } from '../../services';
import { Container } from '../Developers/styles';

// import { Container } from './styles';

const Time: React.FC = () => {
    const [workedTime, setWorkedTime] = useState(0);
    const { developerId } = useParams();
    const history = useHistory();

    // TODO: CREATE OR SELECT PROJECT
    const project = {
        id: 1,
        name: 'Project 5',
        description: 'A wonderful project'
    }


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const ret = await developersService.setWorkedHours(developerId, project.id, workedTime);
            setWorkedTime(0);
            history.push('/');
        } catch (error) {

        }
    };
    return (
        <Container>
            <h1>Lançar horas</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="workedTime">Horas trabalhadas</label>
                <input name="workedTime" id="workedTime" type='number' value={workedTime} onChange={e => setWorkedTime(Number(e.target.value))} />
                <button type="submit">Salvar</button>
            </form>
        </Container>
    );
}

export default Time;