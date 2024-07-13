import { useState, useRef, useEffect, useContext } from "react";
import MemberContext from '../../../app/auth/MemberContext';

import { Row, Gap } from "../../../common/util/LayoutExport"

import Text from "../../../common/component/Text"
import AuthModal from "../../../app/auth/AuthModal"

function HomeFooter() {

    const { member, setMember } = useContext(MemberContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const clickOutside = (e) => {
            if (isModalOpen && !whiteRef1.current.contains(e.target) && !whiteRef2.current.contains(e.target)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("mousedown", clickOutside);

        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [isModalOpen]);

    const signIn = () => {
        setIsModalOpen(true);
    };

    function signOut() {
        setMember(null);
    }


    const whiteRef1 = useRef();
    const whiteRef2 = useRef();

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
            <Text onClick={member ? signOut : signIn} cursor={"pointer"} hoverColor={"#000"} ref={whiteRef1}>
                {member ? "로그아웃" : "로그인"}
            </Text>
            <div ref={whiteRef2}>
                <AuthModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
        </Row>
    );
}

export default HomeFooter;
