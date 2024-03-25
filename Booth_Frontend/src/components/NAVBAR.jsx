import { Link } from "react-router-dom"

export const NAVBAR = () => {
    return (
        <div>
            <Link to="/">HOME</Link>
            <br />         
            <Link to="/fetchid">Fetch using ID</Link>
            <br />
            <Link to="/fetchname">Fetch using  NAME</Link>
            <br />
            <Link to="/fetchfhname">Fetch using  FATHER or HUSBAND NAME</Link>
        </div>
    )
}