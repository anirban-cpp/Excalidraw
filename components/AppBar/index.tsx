import React, { useState } from "react";
import ToolBar from "./ToolBar";
import { FaBars } from "react-icons/fa";

const AppBar = () => {
    const [openToolbar, setOpenToolBar] = useState<boolean>(false);

    const toogleToolbar = () => setOpenToolBar((prev) => !prev);
    return (
        <div className="w-full flex items-center justify-between">
            <div className="relative">
                <button
                    type="button"
                    className="p-[10px] border-solid border-gray-300 border rounded-lg active:border-black"
                    onClick={toogleToolbar}
                >
                    <FaBars color="#b2b4b7" size={16} />
                </button>
                {openToolbar && <ToolBar />}
            </div>
            <div>center Items</div>
            <div>Right Items</div>
        </div>
    );
};

export default AppBar;
