import { PiFolderOpenThin } from "react-icons/pi";
import {
    MdOutlineFileDownload,
    MdHelpOutline,
    MdOutlineDelete,
} from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { RiTwitterLine } from "react-icons/ri";

export const sidebarData = [
    {
        name: "Open",
        icon: <PiFolderOpenThin />,
    },
    {
        name: "Save to...",
        icon: <MdOutlineFileDownload />,
    },
    {
        name: "Help",
        icon: <MdHelpOutline />,
    },
    {
        name: "Reset Canvas",
        icon: <MdOutlineDelete />,
        divider: true,
    },
    {
        name: "Excalidraw",
        icon: <IoMdGift />,
    },
    {
        name: "Github",
        icon: <FaGithub />,
    },
    {
        name: "Discord",
        icon: <RxDiscordLogo />,
    },
    {
        name: "Twitter",
        icon: <RiTwitterLine />,
        divider: true,
    },
];
