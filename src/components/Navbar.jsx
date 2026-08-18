import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="bg-sky-800 py-4">
            <div>
                <ul className="flex items-center justify-center gap-8 text-white font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
        </nav>
    )
}