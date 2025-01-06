import axios from "axios";
import { useRef } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function Signin() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();


    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password
        })

        const jwt = response.data.token;
        localStorage.setItem("token", jwt)
        navigate("/dashboard");
        
    }



    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded-md border p-8 flex flex-col gap-4">
            <Input placeholder="Username" reference={usernameRef}/>
            <Input placeholder="Password" reference={passwordRef}/>
            <div className="flex justify-center items-center">
                <Button variant="primary" text="Signin" onClick={signin}/>
            </div>
            
        </div>
    </div>
}

export default Signin