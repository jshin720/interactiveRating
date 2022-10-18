import "./App.css";
import "./reset.css;"
import Main from "./components/main/main";
// import Card from "./components/maincard/Card";
// import Thankyou from "./components/thankyouCard/ThankyouCard";

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Thankyou/> */}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        Coded by <a href="#">Jeffrey Shin</a>.
      </div>
    </div>
  );
}

export default App;
