import styled from "styled-components";

export const Container = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;
`;

export const List = styled.div`
    margin: 32px;
`;
export const Item = styled.div`
    margin: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
        margin-right: 24px;
    }
`;