import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-blue-200 p-5">
            <div className="logo">
                <p>logo</p>
            </div>
            <div className="nav-item flex items-center gap-5">
                <div className="flex items-center gap-5">
                    <Link to='/task'>Task</Link>
                    <Link to='/users'>Users</Link>
                </div>
                <ModeToggle/>
            </div>
        </div>
    );
};

export default Navbar;