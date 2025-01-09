import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import Button from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface ModalProps {
    open: boolean,
    onClose: () => void
}

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({ open, onClose }: ModalProps) {

    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title,
            link,
            type
        },{
            headers: {
                "token": localStorage.getItem("token")
            }
        })

        onClose();

    }


    return (
        <div>
            {open && <div className="w-screen h-screen bg-black top-0 left-0 bg-gray-50 absolute flex justify-center z-10 items-center">
                <div className="flex justify-center bg-white p-4 rounded-md">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CloseIcon />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input reference={titleRef} placeholder="Title" />
                            <Input reference={linkRef} placeholder="Link" />
                        </div>
                        <div className="flex flex-col gap-2 justify-center">
                            <h1>Type</h1>
                            <div className="flex gap-2 justify-between items-center">
                                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {setType(ContentType.Youtube)}} />
                                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {setType(ContentType.Twitter)}} />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" text="Submit" onClick={addContent}/>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

