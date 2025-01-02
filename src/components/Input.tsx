export function Input({onChange, placeholder}: {onChange?: () => {}, placeholder: string}) {
    return <div>
        <input type={"text"} className="px-4 py-2 border outline-gray-200 rounded-md" placeholder={placeholder} onChange={onChange}></input>
    </div>
    
}