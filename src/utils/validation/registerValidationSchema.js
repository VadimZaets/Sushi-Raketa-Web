import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Заповніть будь-ласка поле")
    .min(2, "Введіть більше 2 символів")
    .max(254, "Максимально 100 символів"),
  email: Yup.string()
    .required("Заповніть будь-ласка поле")
    .email("Будь-ласка введіть пошту")
    .max(254, "Максимально 100 символів"),
  password: Yup.string()
    .required("Заповніть будь-ласка поле")
    .min(8, "Введіть більше ніж 8 символів")
    .max(100, "Максимально 100 символів"),
  repeatPassword: Yup.string()
    .required("Заповніть будь-ласка поле")
    .oneOf([Yup.ref("password"), null], "Паролі мають бути однакові!"),
});
