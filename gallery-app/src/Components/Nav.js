import { NavLink } from "react-router-dom";

const Nav = () => {
    
    return (
        <ul>
            <li><NavLink to='#'>Silly</NavLink></li>
            <li><NavLink to='#'>Funny</NavLink></li>
            <li><NavLink to='#'>Smile</NavLink></li>
        </ul>
        )
};

export default Nav;