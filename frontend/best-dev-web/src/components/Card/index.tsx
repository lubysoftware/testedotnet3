import React from 'react';

import { Container } from './styles';

interface Props {
    name: string;
    description?: string;
    color?: string;
}
const Card: React.FC<Props> = ({ name, description = null, color = '' }) => {
    return (
        <Container customColor={color} >
            <h3>{name}</h3>
            {description && <p>{description}</p>}
        </Container>
    );
}

export default Card;