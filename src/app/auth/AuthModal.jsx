import React, { useRef } from "react";
import styled from "styled-components";

import { Row, Column, Padding, Container, Gap } from "../../common/util/LayoutExport";

import Text from '../../common/component/Text';
import RoundButton from "../../common/component/RoundButton";

import { isValidEmail } from "../../common/util/EmailValidator"

function AuthModal(props) {
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    function signIn() {
        const email = idRef.current.value;
        const password = passwordRef.current.value;

        if (!isValidEmail(email)) {
            idRef.current.style.border = '1px solid #fde8ed';
            idRef.current.setCustomValidity('유효한 이메일 주소를 입력하세요.');
            idRef.current.reportValidity();
            return;
        } else {
            idRef.current.style.border = "none";
        }

        if (password.length < 6) {
            passwordRef.current.style.border = '1px solid #fde8ed';
            passwordRef.current.setCustomValidity('비밀번호는 최소 6자 이상이어야 합니다.');
            passwordRef.current.reportValidity();
            return;
        } else {
            passwordRef.current.style.border = "none";
        }
    }

    console.log("로그인");

    const handleIdKeyDown = (event) => {
        const key = event.code;
        if (key === "Enter") {
            passwordRef.current.focus();
        }
    }

    const handlePasswordDown = (event) => {
        const key = event.code;
        if (key === "Enter") {
            signIn();
        }
    }

    if (!props.isOpen) return null;

    return (
        <Container position={"fixed"} index={"1000"} top={"20"} right={"50"} borderRadius={"10"} color={"#22191b"}>
            <Padding horizontal={"20"} vertical={"15"}>
                <Column cross={"stretch"}>
                    <Row>
                        <Column>
                            <Text color={"#fde8ed"}>이메일을 사용해 com.pjhneverdie에 로그인하세요.</Text>
                            <Gap value={20} direction="column" />
                            <Row>
                                <Text color={"#fde8ed"} fontSize="10">아직 회원이 아니신가요?</Text>
                                <Gap value={20} direction="row" />
                                <Text color={"#fde8ed"} fontSize="10" cursor={"pointer"}>회원가입</Text>
                            </Row>
                        </Column>
                    </Row>
                    <Gap value={20} direction="column" />
                    <Container height={"1"} color={"#fde8ed"} />
                    <Gap value={20} direction="column" />
                    <TextField type='text' placeholder="아이디" onKeyDown={handleIdKeyDown} ref={idRef} />
                    <TextField type='password' placeholder="비밀번호" onKeyDown={handlePasswordDown} ref={passwordRef} />
                    <Gap value={20} direction="column" />
                    <RoundButton
                        onClick={signIn}
                        color={"#a70d33"}
                        child={
                            <Padding horizontal={"15"} vertical={"10"}>
                                <Row main={"center"} cross={"center"}>
                                    <Text color={"#fde8ed"}>계속</Text>
                                </Row>
                            </Padding>
                        }
                    />
                </Column>
            </Padding>
        </Container>
    );
}

const TextField = styled.input`
    padding: 10px;
    font-size: 14px;
    background-color: #684b51;
    border: none;
    outline: none;
    box-shadow: none;
    caret-color: #fde8ed;
    color: #fde8ed;
    &::placeholder {
        color: #fde8ed;
    }
`;

export default AuthModal;
