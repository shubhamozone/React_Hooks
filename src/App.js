import "./App.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Demo</h1>
      <h3>Basic Hooks</h3>
      <ul>
        <li>
          <Link to="/usestate">
            <Button variant="contained">useState</Button>
          </Link>
        </li>
        <li>
          <Link to="/useeffect">
            <Button variant="contained">useEffect</Button>
          </Link>
        </li>
        <li>
          <Link to="/usecontext">
            <Button variant="contained">useContext</Button>
          </Link>
        </li>
      </ul>

      <h3>Additional Hooks</h3>

      <ul>
        <li>
          <Link to="/useref">
            <Button variant="contained">useRef</Button>
          </Link>
        </li>

        <li>
          <Link to="/usereducer">
            <Button variant="contained">useReducer</Button>
          </Link>
        </li>
        <li>
          <Link to="/usememo">
            <Button variant="contained">Use Memo</Button>
          </Link>
        </li>
        <li>
          <Link to="/callback">
            <Button variant="contained">Callback</Button>
          </Link>
        </li>
        <li>
          <Link to="/uselayouteffect">
            <Button variant="contained">useLayoutEffect</Button>
          </Link>
        </li>
        <li>
          <Link to="/useimperativehandle">
            <Button variant="contained">useImperativeHandle</Button>
          </Link>
        </li>
      </ul>
      <h3>UnMounting Using UseEffect</h3>
      <ul>
        <li>
          <Link to="/practise">
            <Button variant="contained">Unmount_UseEffect</Button>
          </Link>
        </li>
      </ul>

      <h3>Making Your Own Custom Hooks</h3>
      <ul>
        <li>
          <Link to="/customhooks">
            <Button variant="contained">customhooks</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
