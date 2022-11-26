import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Заповніть будь-ласка поле")
    .email("Будь-ласка введіть пошту")
    .max(254, "Максимально 100 символів"),
  password: Yup.string()
    .required("Заповніть будь-ласка поле")
    .min(8, "Введіть більше ніж 8 символів")
    .max(100, "Максимально 100 символів"),
});
