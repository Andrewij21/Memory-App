import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPhoto from "./pages/NewPhoto";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import RequireAuth from "./pages/auth/RequireAuth";
import Unauthorized from "./pages/auth/Unauthorized";
import Admin from "./pages/Admin";
import PresistLogin from "./pages/auth/PresistLogin";
import Profile from "./pages/Profile";

const ROLES = {
  User: 2000,
  Admin: 2001,
};

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route element={<PresistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="new-photo" element={<NewPhoto />} />
              <Route path="profile" element={<Profile />} />
              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path="admin" element={<Admin />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
