import React, {Component} from 'react';
import StorageService from "../../service/storageService";
import {Link} from "react-router-dom";
import ToastTemplate from "../../util/toastTemplate";

class Login extends Component {

    constructor(props) {
        super(props);

        if (StorageService.isAuthenticated()) {
            this.props.history.push("/");
        }

        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const form = this.loginForm;

        if (!form.username || !form.password) {
            ToastTemplate.warn("Заповніть всі поля");
            return;
        }

        ToastTemplate.success("Вхід до акаунту виконано");

        // AuthService.login(this.loginForm).then(() => {
        //     this.props.history.push("/redirect");
        // }).catch(error => {
        //     if (error.response) {
        //         this.setState({loginFailed: true});
        //     }
        // });
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    get loginForm() {
        return {
            username: this.state.username,
            password: this.state.password
        }
    }

    render() {
        return (
            <>
                <h2 className="text-center mt-5 mb-3">Вхід</h2>
                <form className="loginFormStyle">
                    <div className="form-group my-3">
                        <input className="form-control" name="username"
                               placeholder="Юзернейм або Пошта"
                               type="text" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group my-3">
                        <input className="form-control"
                               name="password"
                               placeholder="Пароль"
                               type="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button type="submit" onClick={this.handleSubmit} className="btn my-3 btn-dark authBtnStyle">
                            Увійти
                        </button>
                    </div>
                    <div className="col-12 mt-2 text-right p-0 d-flex justify-content-end">
                        <Link to={'/register'} className="link">Створити акаунт</Link>
                    </div>
                </form>
            </>
        );
    }
}

export default Login;
