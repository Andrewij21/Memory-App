import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPhoto from "./pages/NewPhoto";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-photo" element={<NewPhoto />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
