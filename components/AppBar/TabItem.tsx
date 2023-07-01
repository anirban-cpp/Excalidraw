import React from "react";

interface TabItemProps {
    name: string;
    icon: React.JSX.Element;
    onClick?: () => void;
}

const TabItem = ({ name, icon, onClick }: TabItemProps) => {
    return (
        <button
            type="button"
            className="flex flex-row items-center gap-3 py-2 px-4 hover:bg-gray-100 rounded"
            onClick={onClick}
        >
            <>{icon}</>
            <p className="text-gray-500 text-sm">{name}</p>
        </button>
    );
};

export default TabItem;
