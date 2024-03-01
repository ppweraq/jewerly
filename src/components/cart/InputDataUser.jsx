import React, { useState } from "react";
import "./inputdatauser.css";

const InputDataUser = ({ onOpenPage }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_number: "",
    user_mail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch("\testdvaphpindex.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Форма успешно отправлена!");
        History.push("/thank-you");
      } else {
        console.error("Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };

  return (
    <div className="input-container">
      <li className="input-title">Оформление заказа</li>
      <div className="form_data">
        <ul>Контактные данные</ul>
        <div className="input__form">
          <label htmlFor="user_name">Имя Фамилия</label>
          <input
            type="text"
            className="form-name-control"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input__form">
          <label htmlFor="user_number">
            Контактный телефон для подтверждения заказа
          </label>
          <input
            type="text"
            className="form-number-control"
            id="user_number"
            name="user_number"
            value={formData.user_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="input__form">
          <label htmlFor="user_mail">Email</label>
          <input
            type="text"
            className="form-mail-control"
            id="user_mail"
            name="user_mail"
            value={formData.user_mail}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="input-btn">
        <button
          type="submit"
          onClick={async () => {
            await handleFormSubmit();
            onOpenPage();
          }}
        >
          Отправить форму
        </button>
      </div>
    </div>
  );
};

export default InputDataUser;
