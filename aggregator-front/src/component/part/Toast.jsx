import {Component} from "react";
import {ToastContainer} from "react-toastify";
import {Outlet} from "react-router-dom";

class Toast extends Component {
    render() {
        return (
            <>
                <ToastContainer />
                <main>
                    <Outlet />
                </main>
            </>
        );
    }
}

export default Toast;
