import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faBell } from '@fortawesome/free-regular-svg-icons';

import { Row, Gap } from "../../../common/util/LayoutExport"

import Text from "../../../common/component/Text"
import CircularAvatar from "../../../common/component/CircularAvatar";

function HomeHeader() {
    return (
        <Row main={"space-between"} cross={"center"}>
            <Text color="#000" fontSize={"20"} cursor={"pointer"}>pjhTimeless</Text>
            <Row cross={"center"}>
                <Text color="#000" fontSize={"20"} cursor={"pointer"}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Text>
                <Gap value={20} direction={"row"}
                />
                <Text fontSize={"20"} cursor={"pointer"} hoverColor={"#000"}>
                    Write
                </Text>
                <Gap value={60} direction={"row"}
                />
                <Text color="#000" fontSize={"20"} cursor={"pointer"}>
                    <FontAwesomeIcon icon={faBell} />
                </Text>
                <Gap value={60} direction={"row"}
                />
                <CircularAvatar name={"J"} />
            </Row>
        </Row>
    );
}

export default HomeHeader;


