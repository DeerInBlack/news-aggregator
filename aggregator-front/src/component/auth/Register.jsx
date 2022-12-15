import React, {Component} from 'react';
import StorageService from "../../service/storageService";
import {Link} from "react-router-dom";
import ToastTemplate from "../../util/toastTemplate";
import {LoadCanvasTemplateNoReload, loadCaptchaEnginge, validateCaptcha} from "react-simple-captcha";
import {Formik} from "formik";
import FormikUtils from "../../util/formikUtils";
import Validator from "../../util/validator";

class Register extends Component {

    constructor(props) {
        super(props);

        if (StorageService.isAuthenticated()) {
            this.props.history.push("/");
        }

        this.state = {
            captcha: ''
        };
    }

    handleCaptcha = event => {
        this.setState({captcha: event.target.value});
    }

    handleSubmit = (values, {setErrors}) => {
        if (!validateCaptcha(this.state.captcha)) {
            ToastTemplate.warn("Введіть капчу правильно");
        }
        //     AuthService.register(FormikUtils.formUser(values)).then(() => {
        //         this.props.history.push("/login");
        //     }).catch(error => {
        //         if (error.response.data.error) {
        //             if (error.response.data.error === 'UsernameNotUniqueException') {
        //                 setErrors({username: 'Username already exists'});
        //             } else if (error.response.data.error === 'EmailNotUniqueException') {
        //                 setErrors({email: 'Email already exists'});
        //             }
        //         }
        //     });
        // }
    }

    componentDidMount() {
        loadCaptchaEnginge(4);
    }

    render() {
        return (
            <div className="container mt-3 registerFormStyle">
                <h2 className="text-center mt-5 mb-5">Реєстрація</h2>
                <Formik
                    initialValues={FormikUtils.initUser()}
                    validate={Validator.validateCreate}
                    validationSchema={this.validationSchema}
                    onSubmit={this.handleSubmit}>
                    {({
                          errors,
                          touched,
                          values,
                          handleBlur,
                          handleChange,
                          handleSubmit
                      }) => (
                        <form onSubmit={handleSubmit}>
                            {errors.non_field_errors && <div>{errors.non_field_errors}</div>}
                            <div className="form-group required row my-3">
                                <label htmlFor="inputUsername" className="col-sm-2 col-form-label">
                                    Юзернейм
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                           className={'form-control' + (touched.username && errors.username ? ' is-invalid' : '')}
                                           name="username"
                                           id="inputUsername"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.username}/>
                                    {touched.username && errors.username && <div className={'error'}>{errors.username}</div>}
                                </div>
                            </div>
                            <div className="form-group required row my-3">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                    Пароль
                                </label>
                                <div className="col-sm-10">
                                    <input type="password"
                                           className={'form-control' + (touched.password && errors.password ? ' is-invalid' : '')}
                                           name="password"
                                           id="inputPassword"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.password}/>
                                    {touched.password && errors.password && <div className={'error'}>{errors.password}</div>}
                                </div>
                            </div>
                            <div className="form-group required row my-3">
                                <label htmlFor="inputPasswordAgain" className="col-sm-2 col-form-label">
                                    Повторити пароль
                                </label>
                                <div className="col-sm-10">
                                    <input type="password"
                                           className={'form-control' + (touched.rePassword && errors.rePassword ? ' is-invalid' : '')}
                                           name="rePassword"
                                           id="inputPasswordAgain"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.rePassword}/>
                                    {touched.rePassword && errors.rePassword && <div className={'error'}>{errors.rePassword}</div>}
                                </div>
                            </div>
                            <div className="form-group required row my-3">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                                    Електронна пошта
                                </label>
                                <div className="col-sm-10">
                                    <input type="email"
                                           className={'form-control' + (touched.email && errors.email ? ' is-invalid' : '')}
                                           name="email"
                                           id="inputEmail"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.email}/>
                                    {touched.email && errors.email && <div className={'error'}>{errors.email}</div>}
                                </div>
                            </div>
                            <div className="form-group row my-3">
                                <div className="col-sm-2 col-form-label">
                                    <LoadCanvasTemplateNoReload />
                                </div>
                                <div className="col-sm-10">
                                    <input type="text"
                                           className="form-control"
                                           name="captchaConfirm"
                                           id="inputCaptcha"
                                           value={this.state.captcha}
                                           onChange={this.handleCaptcha}/>
                                    <div className="invalid-feedback">Invalid captcha</div>
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-end">
                                <div className="col-sm-10 d-flex justify-content-end">
                                    <Link to={'/login'} id="auth" className="btn btn-light mx-3">Відміна</Link>
                                    <button type="submit" className="btn btn-dark authBtnStyle">Зареєструватись</button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default Register;
