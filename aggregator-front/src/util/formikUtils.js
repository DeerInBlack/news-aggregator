class FormikUtils {

    initUser() {
        return {
            username: '',
            password: '',
            rePassword: '',
            email: '',
        };
    }

    formUser(values) {
        return {
            username: values.username,
            password: values.password,
            email: values.email,
        }
    }
}

export default new FormikUtils();
