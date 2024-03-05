import React, { useState } from "react";
import "./inputdatauser.css";

const InputDataUser = ({ onOpenPage }) => {
  const [formData, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const sendFeedback = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data, 'отправлено');
        // History.push("/thank-you");
      } else {
        console.error("Ошибка при отправке формы");
        alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
      }
    } catch (error) {
      console.error("Произошла ошибка", error);
      alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFeedback(formData);
    console.log("sended", formData);
  };

  return (
    <div className="input-container">
      <li className="input-title">Оформление заказа</li>
      <div className="form_data">
        <ul>Контактные данные</ul>
        <form onSubmit={handleSubmit}>
          <div className="input__form">
            <label htmlFor="user_name">Имя Фамилия</label>
            <input
              className="form-name-control"
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="input__form">
            <label htmlFor="user_number">
              Контактный телефон для подтверждения заказа
            </label>
            <input
              type="tel"
              className="form-number-control"
              id="user_number"
              name="user_number"
              value={formData.user_number}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="input-btn">
            <button type="submit" onClick={onOpenPage}>
              Отправить форму
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputDataUser;
