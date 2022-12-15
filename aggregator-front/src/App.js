import './App.css';
import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Toast from "./component/part/Toast";
import NotFound from "./component/part/NotFound";
import Nav from "./component/Nav";
import Home from "./component/Home";

class App extends Component {
  render() {
    return (
        <Routes>
            <Route element={<Toast />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Nav />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
  }
}

export default App;
