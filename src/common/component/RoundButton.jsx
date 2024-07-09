import { Container } from "../util/LayoutExport";

function RoundButton(props) {
    return (
        <Container color={props.color} borderRadius={"20"} style={{ cursor: 'pointer' }} onClick={props.onClick}>
            {props.child}
        </Container>
    );
}

export default RoundButton;
