import React from 'react';
import { Link } from 'react-router-dom';
function Menu() {
    return (
        <div>

            <ul>
                <li style={{display:"inline", padding:"5px"}}> <Link to="/">Home</Link></li>
                <li style={{display:"inline", padding:"5px"}}><Link to="/Sign-Up">Sign up</Link></li>
                <li style={{display:"inline", padding:"5px"}}><Link to="/Sign-In">Sign in</Link></li>
            </ul>
        </div>
    );
}
 
export default Menu;