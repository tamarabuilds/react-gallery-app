import { useLocation } from "react-router-dom";
import iceCream from "./images/iceCream.jpg"


// Picked up lesson on this from: https://v5.reactrouter.com/web/example/no-match
const NoPage = () => {
    // Enables picking up the url location
    let location = useLocation();

    return (
        <div className="photo-container">
            <img src={iceCream} className="img-no-page" alt="oh no, spilled ice cream"/>
            <p className="cite">Photo by Sarah Kilian, @rojekilian on Unsplash </p>
            <h2>Oops! 404 Error! No match for {location.pathname}</h2>
        </div>
        );
};

export default NoPage;
