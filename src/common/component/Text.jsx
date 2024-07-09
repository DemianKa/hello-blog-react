import styled from "styled-components";

const Text = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  color: ${(props) => props.color || "#6b6b6b"};
  font-weight: ${(props) => props.fontWeight || "500"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  ${(props) => props.cursor && `cursor: ${props.cursor};`}
  ${(props) =>
    props.hoverColor &&
    `
    &:hover {
      color: ${props.hoverColor};
    }
  `}
`;

export default Text;

