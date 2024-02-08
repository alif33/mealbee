import { useState } from "react"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = e=>{
        e.preventDefault()
    }

    return(
        <div className="flex justify-center">
            <form className="w-10/12" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl font-semibold pt-10 pb-6">Login</h1>
                <div className="flex flex-col pb-3">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="w-full border h-10"
                    />
                </div>
                <div className="flex flex-col pb-7">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="w-full border h-10"
                    />
                </div>
                <div className="flex justify-center">
                    <button className="w-full py-2 bg-green-500 text-white">Submit</button>
                </div>
            </form>
        </div>
    )
} 