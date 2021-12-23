export const ProfileFC = (props) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  const userName = props.name.split(" ")[0];
  const registryDate = props.registeredAt.toLocaleString("ru-RU", dateOptions);

  return (
    <div className="profileCard">
      <span className="greet">
        Привет, <b>{userName}!</b>
      </span>
      <br />
      <span>Дата регистрации: {registryDate}</span>
    </div>
  );
};
