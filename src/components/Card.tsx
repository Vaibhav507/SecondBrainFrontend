import { ShareIcon } from "../icons/ShareIcon";
import { TrashIcon } from "../icons/TrashIcon";

interface CardProps {
    title: string,
    // icon: ReactElement,
    link: string,
    type: 'twitter' | 'youtube'
}

const defaultStyles = "flex flex-col gap-5 justify-center items-start bg-white rounded-md border outline-gray-200 p-8 w-fit h-fit"

const Card = ({ title, link, type }: CardProps) => {
    return (
        <div className={`${defaultStyles}`}>
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-1 justify-center items-center text-md">
                    <div className="text-gray-600">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className=" flex gap-1 justify-center items-center">
                    <div className="text-gray-600">
                        <ShareIcon />
                    </div>
                    <div className="text-gray-600">
                        <TrashIcon />
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && <iframe className="rounded-md w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
                {type === "twitter" && <blockquote className="twitter-tweet"> <a href={link.replace("x.com","twitter.com")}></a> </blockquote> }
            </div>
        </div>
    )
}

export default Card