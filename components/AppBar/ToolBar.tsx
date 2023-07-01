import { sidebarData } from "@/constants/constants";
import React from "react";
import TabItem from "./TabItem";
import Divider from "../Divider";
import { PiMoon, PiSun } from "react-icons/pi";
import { useTheme } from "@/Providers/ThemeProvider";

const ToolBar = () => {
    const { isDarkTheme, toogleTheme } = useTheme();
    return (
        <div className="w-64 border-solid border-gray-300 border rounded-lg absolute z-50 bg-white top-11 px-2 py-4 shadow-md">
            <div className="flex flex-col gap-1">
                {sidebarData.map(({ divider, ...item }) => (
                    <React.Fragment key={item.name}>
                        <TabItem {...item} />
                        {divider && <Divider />}
                    </React.Fragment>
                ))}
                <TabItem
                    name={isDarkTheme ? "Light Mode" : "Dark Mode"}
                    icon={isDarkTheme ? <PiSun /> : <PiMoon />}
                    onClick={toogleTheme}
                />
            </div>
        </div>
    );
};

export default ToolBar;
