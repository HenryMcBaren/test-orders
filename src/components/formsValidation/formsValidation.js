const email = value => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

const phone = value => {
  return (
    value && /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value)
  );
};
const date = value => {
  return /^([0-9]{2}[.][0-9]{2}[.][0-9]{2})$/.test(value);
};
const orderFormValidation = order => {
  let invalid = false;
  let warning = [];
  for (let key in order) {
    if (!order[key] && key !== "comment") {
      return "Заполните все поля";
    }
  }
  if (!email(order.email)) {
    invalid = true;
    warning.push("некорректный email");
  }
  if (!phone(order.phone)) {
    invalid = true;
    warning.push("некорректный телефон");
  }
  if (!invalid) {
    return false;
  }
  return warning.join(", ");
};
const editFormValidation = order => {
  if (!order) return `Заполните любое поле или нажмите "ОТМЕНА"`;
  const msg = "Введите дату формата дд.мм.гг";
  if (order.date) {
    if (!date(order.date)) return msg;
  }
  if (order.dateToDone) {
    if (!date(order.dateToDone)) return msg;
  }
  return false;
};

export { orderFormValidation, editFormValidation };
