import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center pt-10 gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Welcome to Our App</h1>

            <button
                onClick={() => navigate("/about")}
                className="text-white bg-teal-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600"
            >
                Go to About
            </button>

            <Link to="/contact" className="text-teal-500 text-sm underline">Go to Contact</Link>
        </div>
    );
}