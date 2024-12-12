import { Link } from "react-router-dom";
import { StyledNavComponent } from "./StyledNavComponent";

export const Navbar = ({ bgColor, ulColor }) => {
  return (
    <StyledNavComponent bgColor={bgColor} ulColor={ulColor}>
      <nav>
        <ul>
          <li><Link to="/"><img src="/Logo/vite.svg" alt="Home" /></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/">More</Link></li>
          <li><Link to="/">User</Link></li>
        </ul>
      </nav>
    </StyledNavComponent>
  );
};