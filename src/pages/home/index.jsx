import { Link } from "react-router-dom";

export default function Blog(){
    return(
        <>
            <div className="main">
                {/* <div className="pt-13"> */}
                    <h1 className="text-lg font-bold">Home</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatibus aliquam maiores vero ducimus atque tempore earum consectetur quis veniam?</p>
                    <div className="flex justify-center">
                        <Link to="/blog">blog</Link>
                    </div>
                {/* </div> */}
            </div>
            <div className="h-10">
                <ul className="flex justify-between font-semibold">
                    <li>
                        Home
                    </li>
                    <li>
                        Shop
                    </li>
                    <li>
                        Message
                    </li>
                    <li>
                        <Link to="/login">Help</Link>
                    </li>
                </ul>
            </div>
        </>
    )
} 