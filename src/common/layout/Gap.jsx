import styled from "styled-components";

const Gap = styled.div`
    ${(props) => props.direction === 'row' && `
        width: ${(props.value * 0.5)}px;
    `}
    ${(props) => props.direction === 'column' && `
        height: ${(props.value * 0.5)}px;
    `}
`;

export default Gap;