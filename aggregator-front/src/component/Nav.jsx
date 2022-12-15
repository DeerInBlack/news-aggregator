import {Component} from "react";
import StorageService from "../service/storageService";
import UnauthorizedNav from "./unauthorized/UnauthorizedNav";

class Nav extends Component {
    render() {
        return (
            <>
                {
                    StorageService.isAdmin() ? <div>Admin</div> :
                        StorageService.isUser() ? <div>User</div> :
                            <UnauthorizedNav />
                }
            </>
        );
    }
}

export default Nav;
