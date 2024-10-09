import { Link } from "react-router-dom";

const Navbar = () =>{
        return(
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        )
}

export default  Navbar;