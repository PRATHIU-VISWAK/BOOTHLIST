import { Link } from "react-router-dom";

export const NAVBAR = () => {
    return (
        <div className="navbarbg bg-gray-400 p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center md:space-x-7">
            <Link to="/" className="navbar py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-500 mb-2 md:mb-0 md:py-1 md:px-2">HOME</Link>
            <Link to="/fetchid" className="navbar py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-500 mb-2 md:mb-0 md:py-1 md:px-2">Voter ID</Link>
            <Link to="/fetchname" className="navbar py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-500 mb-2 md:mb-0 md:py-1 md:px-2">Voter NAME</Link>
            <Link to="/fetchfhname" className="navbar py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-500 mb-2 md:mb-0 md:py-1 md:px-2">RELATIVE NAME</Link>
        </div>
    );
};
