import LabelForm from "../_shared/LabelForm/LabelForm";
import { Field, Formik } from "formik";
import styles from "./sass/DeliveryDetails.module.scss";
import { userOrderDelivery } from "../../redux/delivery/deliveryOperation";
import { useDispatch, useSelector } from "react-redux";
import { getCartList, getTotalPrice } from "../../redux/cart/cartSelector";
import { clearCart } from "../../redux/cart/cartSlice";
import { deliveryValidationShema } from "../../utils/validation/deliveryValidationSchema";
import { LiqPayPay } from "react-liqpay";
const DeliveryDetails = () => {
  const dispatch = useDispatch();
  const cartInfo = useSelector(getCartList);
  const orderPrice = useSelector(getTotalPrice);

  const deliveryPrice = 35;

  const ButtonComponent = () => <button className={styles.btn}>test</button>;
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          tel: "",
          name: "",
          town: "",
          street: "",
          home: "",
          entrance: "",
          floor: "",
          flat: "",
          payment: "",
        }}
        validationSchema={deliveryValidationShema}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            dispatch(clearCart());
          }, 1000);
          dispatch(
            userOrderDelivery({
              data: cartInfo,
              ...values,
              totalPrice: orderPrice + deliveryPrice,
            })
          );

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
              {/* <LabelForm
                type="email"
                name="email"
                placeholder="Введіть ваш email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.email}
              /> */}
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

              <LabelForm
                type="text"
                name="street"
                placeholder="Вулиця"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.street}
              />
              <div className={styles.wrapp}>
                <LabelForm
                  type="text"
                  name="home"
                  placeholder="Дім"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values.home}
                />
                <LabelForm
                  type="number"
                  name="entrance"
                  placeholder="Під'їзд"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values.entrance}
                  className={styles.input}
                />
              </div>
              <div className={styles.wrapp}>
                <LabelForm
                  type="number"
                  name="floor"
                  placeholder="Поверх"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values.floor}
                />
                <LabelForm
                  type="number"
                  name="flat"
                  placeholder="Квартира"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values.flat}
                  className={styles.input}
                />
              </div>
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
                <option value="card">Оплата на сайті</option>
              </Field>
              {values.payment &&
                (values.payment === "money" ? (
                  <button type="submit" className={styles.btn}>
                    Підтвердити замовлення
                  </button>
                ) : (
                  <div>
                    <LiqPayPay
                      publicKey="sandbox_i71196736057"
                      privateKey="sandbox_NDLrFYcv6Cbv8GRGTzdUolUOQ2qIPfZmCkhgnscm"
                      amount={orderPrice}
                      description="Payment for product"
                      currency="UAH"
                      orderId={Math.floor(1 + Math.random() * 900000000)}
                      server_url=""
                      result_url=""
                      product_description="product"
                      extra={[<ButtonComponent key="1" />]}
                    />
                  </div>
                ))}
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default DeliveryDetails;
