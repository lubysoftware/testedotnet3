import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { developersService, projectsService } from '../../services';
import { Container } from '../Developers/styles';

const NewDeveloper: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState('');

    // TODO: CREATE OR SELECT PROJECT

    const project = {
        id: 1,
        name: 'Project',
        description: 'A wonderful project'
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const { data } = await developersService.createDeveloper(name);
            const ret = await projectsService.addProjectToDeveloper(data.id, project);
            setName('');
            history.push('/');
        } catch (error) {

        }
    };
    return (
        <Container>
            <h1>Novo desenvolvedor</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input name="name" id="name" type='text' value={name} onChange={e => setName(e.target.value)} />
                <button type="submit">Salvar</button>
            </form>
        </Container>
    );
}

export default NewDeveloper;