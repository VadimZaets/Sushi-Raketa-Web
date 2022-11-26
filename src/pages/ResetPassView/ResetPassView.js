import { Formik } from "formik";
// import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../../components/_shared/LabelForm/LabelForm";
import styles from "./sass/ResetPassView.module.scss";
import Link from "next/link";
const ResetPassView = () => {
  return (
    <div>
      <Formik
        initialValues={{ password: "", repeatPassword: "" }}
        //  validationSchema={authValidationSchema}
        onSubmit={(values, { resetForm }) => {
          // dispatch(register(values));
          resetForm();
          console.log("values", values);
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
            <h2 className={styles.authFormTitle}>Відновити пароль</h2>
            <form onSubmit={handleSubmit} className={styles.authFormInput}>
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
                Відновити пароль
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

export default ResetPassView;
