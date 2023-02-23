import logo from "./logo.svg";
import "./App.css";
import Main from "./layouts/Main";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={Routes}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
