import React from "react";
const dateOptions = { year: "numeric", month: "long", day: "numeric" };

class ProfileClassC extends React.Component {
  userName = this.props.name.split(" ")[0];
  registryDate = this.props.registeredAt.toLocaleString("ru-RU", dateOptions);

  render() {
    return (
      <div className="profileCard">
        <span className="greet">
          Привет, <b>{this.userName}!</b>
        </span>
        <br />
        <span>Дата регистрации: {this.registryDate}</span>
      </div>
    );
  }
}

export default ProfileClassC;
