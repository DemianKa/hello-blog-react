import styled from "styled-components"

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.main || "start"};
    align-items: ${props => props.cross || "start"};
`;

export default Column;