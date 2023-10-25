import { NavLink } from "react-router-dom";

const Nav = ({changeQuery }) => {
    const handleClick = (e) => {
        // set the button text to the new query
        changeQuery(e.target.innerText);
    };
    
    return (
        <ul>
            <li><NavLink to='fish' onClick={(e) => handleClick(e)}>Fish</NavLink></li>
            <li><NavLink to='pokemon' onClick={(e) => handleClick(e)}>Pokemon</NavLink></li>
            <li><NavLink to='candy' onClick={(e) => handleClick(e)}>Candy</NavLink></li>
        </ul>
        )
};

export default Nav;