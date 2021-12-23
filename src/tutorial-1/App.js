import "./App.css";
import ProfileClassC from "./Components/ProfileClassC";
import { ProfileFC } from "./Components/ProfileFC";

function App() {
  return (
    <div className="container">
      <ProfileClassC name="Вася Пупкин" registeredAt={new Date(2021, 5, 22)} />
      <ProfileFC name="Дима Уткин" registeredAt={new Date(1987, 11, 29)} />
    </div>
  );
}

export default App;
