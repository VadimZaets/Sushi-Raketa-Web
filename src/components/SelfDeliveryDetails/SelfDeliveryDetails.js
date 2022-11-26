import LabelForm from "../_shared/LabelForm/LabelForm";
import { Field, Formik } from "formik";
import styles from "./sass/SelfDeliveryDetails.module.scss";
import { setDeliveryInfo } from "../../redux/delivery/deliverySlice";
import { useDispatch, useSelector } from "react-redux";
import { getCartList } from "../../redux/cart/cartSelector";
import { userOrderSelfDelivery } from "../../redux/selfDelivery/selfDeliveryOperation";
import { useRouter } from "next/router";
import { LiqPayPay } from "react-liqpay";
const ButtonComponent = () => <button className={styles.btn}>test</button>;
const SelfDeliveryDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartInfo = useSelector(getCartList);
  return (
    <Formik
      initialValues={{
        email: "",
        tel: "",
        name: "",
        town: "",
        payment: "",
      }}
      //  validationSchema={authValidationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(userOrderSelfDelivery({ values, cartInfo }));

        resetForm();
        router.push("/success");
        // console.log("values", values);
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
          <form onSubmit={handleSubmit} className={styles.authFormInput}>
            <LabelForm
              type="text"
              name="name"
              placeholder="Введіть ваше Ім'я"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.name}
            />
            <LabelForm
              type="tel"
              name="tel"
              placeholder="Номер телефона"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.tel}
            />
            <LabelForm
              type="email"
              name="email"
              placeholder="Введіть ваш email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.email}
            />
            <Field
              name="town"
              as="select"
              handleChange={handleChange}
              handleBlur={handleBlur}
              className={styles.select}
            >
              <option value="value1" selected>
                Виберіть місто...
              </option>
              <option value="andrushivka">Андрушівка</option>
              <option value="chernyahiv">Черняхів</option>
              <option value="chudniv">Чуднів</option>
            </Field>
            <h4 className={styles.text}>Спосіб оплати</h4>
            <Field
              name="payment"
              handleChange={handleChange}
              handleBlur={handleBlur}
              as="select"
              className={styles.select}
            >
              <option value="value1" selected>
                Виберіть спосіб оплати...
              </option>
              <option value="money">Готівка</option>
              <option value="card">Оплата картою в закладі</option>
            </Field>
            <button type="submit" className={styles.btn}>
              Підтвердити замовлення
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SelfDeliveryDetails;
