import { Link, Outlet } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <div className="contents">
            <header>
                <Link to="/">Profile</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/Resume">Resume</Link>

            </header>
            <Outlet />
        </div>
        
    );
}
export default Layout;
