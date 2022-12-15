import {Component} from "react";
import StorageService from "../service/storageService";
import UnauthorizedHome from "./unauthorized/UnauthorizedHome";
import UserHome from "./user/UserHome";
import AdminHome from "./admin/AdminHome";

class Home extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center mt-5">
                {
                    StorageService.isAdmin() ? <AdminHome /> :
                        StorageService.isUser() ? <UserHome /> :
                            <UnauthorizedHome />
                }
            </div>
        );
    }
}

export default Home;
