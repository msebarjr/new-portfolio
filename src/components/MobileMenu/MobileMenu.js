import ListItem from "@material-ui/core/List";
import { Link } from "react-scroll";
import "./style.css";

const menus = [
    {
        id: 1,
        title: "Home",
        link: "home",
    },
    {
        id: 2,
        title: "About",
        link: "about",
    },
    {
        id: 3,
        title: "Service",
        link: "service",
    },
    {
        id: 4,
        title: "Contact",
        link: "contact",
    },
];

const MobileMenu = ({ menuActive, setMenuState, clickHandler }) => {
    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div
                        className="clox"
                        onClick={() => setMenuState(!menuActive)}
                    >
                        <i className="ti-close"></i>
                    </div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem key={mn}>
                                <Link
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={clickHandler}
                                >
                                    {item.title}
                                </Link>
                            </ListItem>
                        );
                    })}
                </ul>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;
