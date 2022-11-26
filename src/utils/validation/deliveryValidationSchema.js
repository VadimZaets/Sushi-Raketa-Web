import * as Yup from "yup";

export const deliveryValidationShema = Yup.object().shape({
  name: Yup.string()
    .required("Будь-ласка введіть ім'я")
    .max(254, "Максимально 100 символів"),
  tel: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Введіть номер телефону"
    )
    .required("Заповніть будь-ласка поле"),
  street: Yup.string()
    .required("Будь-ласка введіть назву вулиці")
    .max(254, "Максимально 100 символів"),
});

//  town: "",

//  home: "",
//  entrance: "",
//  floor: "",
//  flat: "",
//  payment: "",
