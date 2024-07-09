import { Column, Padding, Container } from '../../../common/util/LayoutExport'

import HomeHeader from "../component/HomeHeader";
import HomeFooter from "../component/HomeFooter";

function HomePage(props) {

    return (
        <Container color={"#fff"}>
            <Padding horizontal={"30"} vertical={"15"}>
                <Column cross={"stretch"}>
                    <HomeHeader />
                    <HomeFooter />
                </Column>
            </Padding>
        </Container>
    );
}

export default HomePage;