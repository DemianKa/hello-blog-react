import React, { useState, useRef, useContext } from "react";

import styled from "styled-components";

import MemberContext from "./MemberContext";

import { Row, Column, Padding, Container, Gap } from "../../common/util/LayoutExport";
import { isValidEmail } from "../../common/util/EmailValidator";

import Text from '../../common/component/Text';
import RoundButton from "../../common/component/RoundButton";
import ProgressIndicator from "../../common/component/ProgressIndicator";


function AuthModal(props) {
    const [isLoading, setIsLoading] = useState(false);
    const memberContext = useContext(MemberContext);

    const idRef = useRef(null);
    const passwordRef = useRef(null);

    function submit() {
        if (validateForm()) {
            signIn();
        }
    }

    function validateForm() {
        const email = idRef.current.value;
        const password = passwordRef.current.value;

        if (!isValidEmail(email)) {
            idRef.current.style.border = '1px solid #fde8ed';
            idRef.current.setCustomValidity('유효한 이메일 주소를 입력하세요.');
            idRef.current.reportValidity();
            return false;
        } else {
            idRef.current.style.border = "none";
        }

        if (password.length < 6) {
            passwordRef.current.style.border = '1px solid #fde8ed';
            passwordRef.current.setCustomValidity('비밀번호는 최소 6자 이상이어야 합니다.');
            passwordRef.current.reportValidity();
            return false;
        } else {
            passwordRef.current.style.border = "none";
        }

        return true;
    }

    async function signIn() {
        setIsLoading(true);

        const email = idRef.current.value;
        const password = passwordRef.current.value;

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const response = await fetch("http://43.203.65.244:8080/member/signIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const responseText = await response.text();
                const data = responseText ? JSON.parse(responseText) : null;

                if (data === null) {
                    alert("이메일 또는 비밀번호가 일치하지 않습니다.");
                    return;
                }

                memberContext.setMember(data);
                props.setIsModalOpen(false);
            }
        } catch (err) {
            console.log(err);
            alert("죄송합니다. 서버에 문제가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleIdKeyDown = (event) => {
        const key = event.code;
        if (key === "Enter") {
            passwordRef.current.focus();
        }
    }

    const handlePasswordDown = (event) => {
        const key = event.code;
        if (key === "Enter") {
            submit();
        }
    }

    if (!props.isModalOpen) return null;

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
                    {isLoading ? <ProgressIndicator /> : <Container height={"1"} color={"#fde8ed"} />}
                    <Gap value={20} direction="column" />
                    <TextField type='text' placeholder="아이디" onKeyDown={handleIdKeyDown} ref={idRef} />
                    <TextField type='password' placeholder="비밀번호" onKeyDown={handlePasswordDown} ref={passwordRef} />
                    <Gap value={20} direction="column" />
                    <RoundButton
                        onClick={submit}
                        color={"#3b82f6"}
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
