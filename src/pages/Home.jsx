import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center pt-16 gap-4">
            <h1>Welcome to Our App</h1>

        </div>
    )
}