
interface ModalProps {
    open: boolean,
    onClose: () => void
}

import { CloseIcon } from "../icons/CloseIcon";
import Button from "./Button";
import { Input } from "./Input";

export function CreateContentModal({ open, onClose }: ModalProps) {
    return (
        <div>
            {open && <div className="w-screen h-screen bg-black top-0 left-0 opacity-50 absolute flex justify-center z-10 items-center">
                <div className="flex justify-center bg-white opacity-100 p-4 rounded-md">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CloseIcon />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input  placeholder="Title" />
                            <Input  placeholder="Link" />
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" text="Submit" />
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

