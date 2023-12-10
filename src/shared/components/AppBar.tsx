import React from "react";
import { useNavigate } from 'react-router-dom';

const AppBar = (): JSX.Element => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="p-3 border-2 border-b-[#D9D9D9] shadow-sm">
                <h1 className="text-4xl font-bold text-center cursor-pointer" onClick={() => navigate('/')}>Modern Walk</h1>
            </div>
        </>
    )
}

export default AppBar;