import { Link } from "react-router-dom";
import "../App.css"
export const NAVBAR = () => {
    return (
        <div className="navbarbg bg-gray-400 p-4 flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4">
            <Link to="/" className="navbar hover:text-gray-900 py-2 px-4 rounded bg-gray-300 hover:bg-gray-500 mt-2 md:mt-0">HOME</Link>
            <Link to="/fetchid" className="navbar  hover:text-gray-900 py-2 px-4 rounded bg-gray-300 hover:bg-gray-500 mt-2 md:mt-0">Fetch using ID</Link>
            <Link to="/fetchname" className="navbar  hover:text-gray-900 py-2 px-4 rounded bg-gray-300 hover:bg-gray-500 mt-2 md:mt-0">Fetch using NAME</Link>
            <Link to="/fetchfhname" className="navbar  hover:text-gray-900 py-2 px-4 rounded bg-gray-300 hover:bg-gray-500 mt-2 md:mt-0">Fetch using FATHER or HUSBAND NAME</Link>
        </div>
    );
};
