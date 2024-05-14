import { Buffer } from "buffer";
import "./App.css";
import IframeComponent from "./iFrame";

function App() {
  global.Buffer = global.Buffer || require("buffer").Buffer;
  Buffer.from("anything", "base64");
  return <IframeComponent />;
}

export default App;
