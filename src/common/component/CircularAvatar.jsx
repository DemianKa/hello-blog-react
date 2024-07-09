import styled from "styled-components";

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #ff6200;
  border-radius: 100%;
`;

const AvatarText = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

function CircularAvatar(props) {
    return (
        <AvatarContainer>
            <AvatarText>{props.name}</AvatarText>
        </AvatarContainer>
    );
}

export default CircularAvatar;