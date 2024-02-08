import { Link } from "react-router-dom";

export default function Blog(){
    return(
        <div className="flex flex-col gap-9">
            <h1 className="text-lg font-bold">Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repudiandae labore, laudantium officia aperiam officiis provident! Impedit eaque placeat repellat.</p>
            <div className="flex justify-center">
                <Link className="text-center" to="/">Home</Link>
            </div>
        </div>
    )
} 