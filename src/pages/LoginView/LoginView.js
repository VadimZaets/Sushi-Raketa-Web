import { Formik } from "formik";
import LabelForm from "../../components/_shared/LabelForm/LabelForm";
import styles from "./sass/LoginView.module.scss";
import Link from "next/link";
import { loginUser } from "../../redux/users/userOperation";
import { useDispatch, useSelector } from "react-redux";
import { loginValidationSchema } from "../../utils/validation/loginUserValidatonSchema";
import { useRouter } from "next/router";
import { isUserLogin } from "../../redux/users/userSelector";
import { Notify } from "notiflix/build/notiflix-notify-aio";
const LoginView = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userLogin = useSelector(isUserLogin);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          await dispatch(loginUser(values));
          await resetForm();

          if (!userLogin) {
            router.push("/login");
            Notify.failure("Перевірте пошту або логін");
          } else {
            router.push("/");
          }
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
            <h2 className={styles.authFormTitle}>Увійти</h2>
            <form onSubmit={handleSubmit} className={styles.authFormInput}>
              <LabelForm
                type="email"
                name="email"
                placeholder="Логін"
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
              <Link href="/forgotpassword">
                <a className={styles.forgotPass}>Забули пароль?</a>
              </Link>
              <button type="submit" className={styles.btn}>
                Увійти
              </button>
              <Link href="/registration">
                <a className={styles.btn}>Реєстрація</a>
              </Link>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginView;
