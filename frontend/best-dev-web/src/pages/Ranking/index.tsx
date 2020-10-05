import React, { useCallback, useEffect, useState } from 'react';
import { developersService, rankingService } from '../../services';
import { BiMedal } from "react-icons/bi";
import Card from '../../components/Card';
import { Colors } from '../../theme';
import { Link } from 'react-router-dom';
import { Container, List } from '../../theme/globals';

interface RankingItem {
    name: string;
    color: string;
    id: number;
}
const Ranking: React.FC = () => {
    const colors = [Colors.pink, Colors.yallow, Colors.blue];

    const [ranking, setRanking] = useState<RankingItem[]>([] as RankingItem[]);

    const getDevs = useCallback(async () => {
        const { data: rankingData } = await rankingService.getRanking();
        const rankingFormatted = rankingData.map((data: any, index: number) => ({
            name: data.Developers?.name || 'Anônimo',
            color: index < 3 ? colors[index] : 'white',
            id: data.developerId
        }));
        setRanking(rankingFormatted);
    }, []);

    useEffect(() => {
        getDevs();
    }, [getDevs]);

    return (
        <Container>
            <h1>Top 5</h1>
            <List>
                {ranking.map((dev, index) => (
                    <Link key={dev.id} to={`/lancar-hora/${dev.id}`} style={{ textDecoration: 'none' }}>
                        <Card name={`${index + 1} ${dev.name}`} color={dev.color} />
                    </Link>
                ))}
            </List>
            <Link to={`/novo-desenvolvedor`} style={{ textDecoration: 'none' }}>
                <button>
                    Novo desenvolvedor
            </button>
            </Link>
        </Container>
    );
}

export default Ranking;