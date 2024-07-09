import styled from "styled-components";

const Padding = styled.div`
    padding-top: ${props => props.top ? props.top + "px" : "0"};
    padding-right: ${props => props.right ? props.right + "px" : "0"};
    padding-bottom: ${props => props.bottom ? props.bottom + "px" : "0"};
    padding-left: ${props => props.left ? props.left + "px" : "0"};

    ${props => props.horizontal && `
        padding-left: ${props.horizontal + "px"};
        padding-right: ${props.horizontal + "px"};
    `}

    ${props => props.vertical && `
        padding-top: ${props.vertical + "px"};
        padding-bottom: ${props.vertical + "px"};
    `}
`;

export default Padding;