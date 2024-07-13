import React, { useContext, useEffect } from "react";

import MemberContext from "../../../app/auth/MemberContext";

import { Column, Padding, Container } from '../../../common/util/LayoutExport'

import HomeHeader from "../component/HomeHeader";
import HomeFooter from "../component/HomeFooter";

function HomePage() {
    const { setMember } = useContext(MemberContext);

    // useEffect(() => {
    //     const fetchMe = async () => {

    //         try {
    //             const response = await fetch("http://43.203.65.244:8080/member/me", {
    //                 method: "GET",
    //                 credentials: "include",
    //             });

    //             if (response.ok) {
    //                 const responseText = await response.text();
    //                 const member = responseText ? JSON.parse(responseText) : null;

    //                 if (member) {
    //                     console.log("회원");
    //                     setMember(member);
    //                 }

    //                 console.log("비회원");
    //             }
    //         } catch (err) {
    //             console.log(err);
    //             alert("죄송합니다. 서버에 문제가 발생했습니다.");
    //         }
    //     };

    //     fetchMe();
    // }, []);

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