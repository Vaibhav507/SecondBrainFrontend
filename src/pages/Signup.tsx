import { useRef } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();


    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
        })

        alert("You have Signed up!");

        navigate("/signin");
        
    }

    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded-md border p-8 flex flex-col gap-4">
            <Input placeholder="Username" reference={usernameRef} />
            <Input placeholder="Password" reference={passwordRef} />
            <div className="flex justify-center items-center">
                <Button onClick={signup} variant="primary" text="Sign Up" />
            </div>
        </div>
    </div>
}

export default Signup;