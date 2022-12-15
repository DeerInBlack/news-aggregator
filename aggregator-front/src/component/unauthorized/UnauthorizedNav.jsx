import {Outlet} from "react-router-dom";
import {Component} from "react";
import LoginButton from "../part/button/LoginButton";
import RegisterButton from "../part/button/RegisterButton";

class UnauthorizedNav extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <p className="navbar-brand topic my-2">AGnews</p>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <button className="btn btn-light active" type="submit">Новини</button>
                            </ul>
                            <form className="d-flex" role="search">
                                <LoginButton/>
                                <RegisterButton/>
                            </form>
                        </div>
                    </div>
                </nav>
                <main>
                    <Outlet/>
                </main>
            </>
        );
    }
}

export default UnauthorizedNav;
