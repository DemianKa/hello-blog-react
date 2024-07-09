import styled from "styled-components"

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.main || "start"};
    align-items: ${props => props.cross || "start"};
`;

export default Row;