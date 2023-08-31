import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPhoto from "./pages/NewPhoto";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="new-photo" element={<NewPhoto />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
