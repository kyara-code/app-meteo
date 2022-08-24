import "./App.css";
// import FormCap from "./components/form-cap/form-cap.tsx";
import Header from "./components/Header/Header.tsx";
import Content from "./components/Content/Content.tsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <FormCap></FormCap> */}
      <Content></Content>
    </div>
  );
}

export default App;
