import { Link } from "react-router-dom";

export default function Blog(){
    return(
        <div className="flex flex-col gap-9">
            <h1 className="text-lg font-bold">Home</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatibus aliquam maiores vero ducimus atque tempore earum consectetur quis veniam?</p>
            <div className="flex justify-center">
                <Link to="/blog">blog</Link>
            </div>
        </div>
    )
} 