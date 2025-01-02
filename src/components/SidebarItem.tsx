import { ReactElement } from "react";

interface ItemProps {
    text: 'Tweets' | 'Youtube',
    icon: ReactElement
}

export function SidebarItem({ text, icon }: ItemProps) {
    return <div className="flex gap-4 items-center justify-center cursor-pointer text-gray-800">
        {icon}
        <p>{text}</p>
    </div>
}