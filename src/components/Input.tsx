interface InputProps {
    placeholder: string;
    reference?: any
}

export function Input({placeholder, reference}: InputProps) {
    return <div>
        <input type={"text"} className="px-4 py-2 border outline-gray-200 rounded-md" placeholder={placeholder} ref={reference}></input>
    </div>
    
}