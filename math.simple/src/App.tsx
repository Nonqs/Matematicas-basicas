import { MathJaxContext } from "better-react-mathjax";
import RoutesApp from "./routes/Routes";
import "./styles/App.css";

function App() {
  return (
    <>
      <MathJaxContext>
        <RoutesApp />
      </MathJaxContext>
    </>
  );
}

export default App;
