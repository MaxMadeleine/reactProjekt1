import { Link } from "react-router-dom";
import { StyledNavComponent } from "./StyledNavComponent";

export const Navbar = () => {
return (
    <StyledNavComponent>
    <nav>
        <ul>
            <li><Link to="/"><img src="public/Logo/vite.svg" alt="Home" /></Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/">More</Link></li>
            <li><Link to="/">User</Link></li>
        </ul>
    </nav>
    </StyledNavComponent>
)
};