import { ErrorMessage, Formik } from "formik";
import LabelForm from "../../components/_shared/LabelForm/LabelForm";
import styles from "./sass/RegisterView.module.scss";
import Link from "next/link";
import { registerValidationSchema } from "../../utils/validation/registerValidationSchema";
import { registerUser } from "../../redux/users/userOperation";
import { useDispatch } from "react-redux";

const RegisterView = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          repeatPassword: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(registerUser(values));
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className={styles.wrapper}>
            <h2 className={styles.authFormTitle}>Реєстрація</h2>
            <form onSubmit={handleSubmit} className={styles.authFormInput}>
              <LabelForm
                type="text"
                name="name"
                placeholder="Ім'я"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.name}
              />
              <LabelForm
                type="email"
                name="email"
                placeholder="Почта"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.email}
              />
              <LabelForm
                type="password"
                name="password"
                placeholder="Пароль"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.password}
              />
              <LabelForm
                type="password"
                name="repeatPassword"
                placeholder="Повторіть пароль"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.repeatPassword}
              />

              <button type="submit" className={styles.btn}>
                Зареєструватись
              </button>
              <Link href="/login">
                <a className={styles.login}>Повернутись до входу</a>
              </Link>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterView;
