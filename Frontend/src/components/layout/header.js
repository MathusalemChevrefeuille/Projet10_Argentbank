import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/argentBankLogo.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux'
import {Logout} from "../login/loginfunc"

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const firstName = useSelector(state => state.login.firstName);
    const isLog = useSelector(state => state.login.isLog);

    const logout = async (event) => {
        event.preventDefault();
        await Logout(navigate, dispatch);
    };

    
    return (
        <nav className="main-nav">
            <Link to={"/"}>
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
                </Link>
            <div className={"r-header"}>
                <FontAwesomeIcon icon={faCircleUser}/>
                <p>{isLog ? firstName : null}</p>
                <Link onClick={isLog ? logout : null} className="main-nav-item" to="/login">
                    {isLog? <FontAwesomeIcon icon={faRightFromBracket} /> : null }
                    {isLog ? "Sign out" : "Sign In"}
                </Link>
            </div>
        </nav>
    )
}

export default Header;