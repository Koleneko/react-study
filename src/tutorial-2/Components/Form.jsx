import "../App.css";

const Form = () => {
  let email;
  let password;

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "email":
        email = event.target.value;
        break;
      case "password":
        password = event.target.value;
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      console.log({ email, password });
      email = null;
      password = null;
      event.target.reset();
    } else {
      alert("Заполните все поля");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="E-mail"
        name="email"
        onChange={handleFormChange}
      />
      <input
        type="password"
        placeholder="Пароль"
        name="password"
        onChange={handleFormChange}
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Form;
