import { useState } from "react";
import { useContext } from "react";
import MemberContext from '../../../app/auth/MemberContext';

import { Row, Gap } from "../../../common/util/LayoutExport"

import Text from "../../../common/component/Text"
import AuthModal from "../../../app/auth/AuthModal"


function HomeFooter() {

    const memberContext = useContext(MemberContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleOutsideClick = () => {
        setIsModalOpen(false);
    };


    return (
        <Row main={"center"} cross={"center"}>
            <a
                href="https://github.com/hello-blog-JJ"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Text cursor={"pointer"} hoverColor={"#000"}>
                    &copy; https://github.com/hello-blog-JJ. All rights reserved.
                </Text>
            </a>
            <Gap value={20} direction={"row"}
            />
            <Text onClick={handleLoginClick} cursor={"pointer"} hoverColor={"#000"}>
                {memberContext ? "로그아웃" : "로그인"}
            </Text>
            <AuthModal isOpen={isModalOpen} />
        </Row>
    );
}

export default HomeFooter;
