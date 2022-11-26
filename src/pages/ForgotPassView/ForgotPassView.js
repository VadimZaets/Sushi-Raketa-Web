import { Formik } from "formik";
// import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../../components/_shared/LabelForm/LabelForm";
import styles from "./sass/ForgotPassView.module.scss";
import Link from "next/link";
const ForgotPassView = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
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
            <h2 className={styles.authFormTitle}>Відновлення пароля</h2>
            <form onSubmit={handleSubmit} className={styles.authFormInput}>
              <LabelForm
                type="email"
                name="email"
                placeholder="Введіть ваш email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.email}
              />

              <button type="submit" className={styles.btn}>
                Підтвердити
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

export default ForgotPassView;
