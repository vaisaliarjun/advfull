import { Link } from "react-router-dom";
var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul className="ul">
                    <li className="li"><Link to='/'>Home</Link></li>
                    <li className="li"><Link to='/about'>About</Link></li>
                    <li className="li"><Link to='/gallery'>Gallery</Link></li>
                    <li className="li"><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar