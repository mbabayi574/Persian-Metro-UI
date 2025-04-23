import "./App.css";
import avatarImage from "./assets/Avatars/Avatar.jpeg";

function App() {
  return (
    <div className="App">
      <div className="MetroUi-Container">
        <div className="MetroUi-Header">
          <h1>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</h1>
          <div className="Avatar">
            <img src={avatarImage} alt="Avatar" />
            <div className="Avatar-Name">
              <h2>محمدرضا</h2>
              <h3>بابایی</h3>
            </div>
          </div>
        </div>
        <div className="MetroUi-Body">{/* Metro UI Tiles */}</div>
      </div>
    </div>
  );
}

export default App;
