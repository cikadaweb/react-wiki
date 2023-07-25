import { Button } from "antd";

import logo from "@/logo.svg";

import "@/App.css";

function App() {
  const sayHello: string = "Vue";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Hello from {sayHello}</div>
          <Button type="primary">Go to Vue</Button>
        </a>
      </header>
    </div>
  );
}

export default App;
