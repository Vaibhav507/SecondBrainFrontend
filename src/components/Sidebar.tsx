import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 absolute left-0 top-0 flex flex-col gap-8 items-start p-6">
        <p className="text-4xl">Second Brain</p>
        <div className="pl-4 flex flex-col gap-4 items-start justify-center">
            <SidebarItem text="Tweets" icon={<XIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
        
    </div>
}