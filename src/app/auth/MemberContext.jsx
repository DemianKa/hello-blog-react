import React, { useState, createContext } from "react";

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
    const [member, setMember] = useState(null);

    return (
        <MemberContext.Provider value={{ member, setMember }}>
            {children}
        </MemberContext.Provider>
    );
};

export default MemberContext;