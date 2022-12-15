import * as Yup from "yup";

class Validator {

    validateCreate = values => {
        try {
            this.getValidationCreateSchema().validateSync(values, {abortEarly: false});
            return {};
        } catch (error) {
            return this.getErrorsFromValidationError(error);
        }
    };

    getValidationCreateSchema = () => {
        return Yup.object().shape({
            username: Yup.string()
                .min(4, 'Юзернейм повинен містити мінімум 4 символи')
                .max(20, 'Юзернейм повинен містити максимум 20 символів')
                .required('Юзернейм не може залишатись пустим'),
            password: Yup.string()
                .min(4, 'Пароль повинен містити мінімум 4 символи')
                .max(128, 'Пароль повинен містити максимум 128 символів')
                .required('Пароль не може залишатись пустим'),
            rePassword: Yup.string()
                .required('Це поле не може залишатись пустим')
                .oneOf([Yup.ref('password'), null], 'Паролі не співпадають'),
            email: Yup.string()
                .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Невірний формат електронної адреси')
                .required('Електронна пошта не може залишатись пустою')
        });
    };

    getErrorsFromValidationError = validationError => {
        const FIRST_ERROR = 0;
        return validationError.inner.reduce((errors, error) => {
            return {
                ...errors,
                [error.path]: error.errors[FIRST_ERROR]
            };
        }, {});
    };
}

export default new Validator();
