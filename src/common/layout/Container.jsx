import styled from "styled-components";

const Container = styled.div`
    position: ${props => props.position || "static"};
    z-index: ${props => props.index || "auto"};
    top: ${props => props.top ? props.top + "px" : "auto"};
    bottom: ${props => props.bottom ? props.bottom + "px" : "auto"};
    right: ${props => props.right ? props.right + "px" : "auto"};
    left: ${props => props.left ? props.left + "px" : "auto"};
    width: ${props => props.width ? props.width + "px" : "auto"};
    height: ${props => props.height ? props.height + "px" : "auto"};
    background-color: ${props => props.color || "rgba(0, 0, 0, 0)"};
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius ? props.borderRadius + "px" : "0px"};
`;

export default Container;