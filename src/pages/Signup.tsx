import Button from "../components/Button";
import { Input } from "../components/Input";

export function Signup() {
    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded-md border p-8 flex flex-col gap-4">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center items-center">
                <Button variant="primary" text="Sign Up" />
            </div>
            
        </div>
    </div>
}