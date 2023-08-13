import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
