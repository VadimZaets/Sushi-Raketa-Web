import { ErrorMessage } from "formik";
import styles from "./sass/LabelForm.module.scss";

const LabelForm = ({
  type,
  name,
  placeholder,
  handleChange,
  handleBlur,
  values,
}) => {
  return (
    <>
      <label className={styles.inputLabel} htmlFor={name}>
        <span> {type}</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values}
        />
        <ErrorMessage
          component="div"
          name={name}
          className={styles.errorMessage}
        />
      </label>
    </>
  );
};

export default LabelForm;
