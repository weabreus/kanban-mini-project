import { useState } from "react";
import Layout from "./components/layout/Layout";
import BoardsList from "./components/BoardList/BoardsList";
import { Route, Routes } from "react-router-dom";
import BoardDetails from "./components/BoardDetails/BoardDetails";
import NotFound from "./components/NotFound/NotFound";
import AboutPage from "./components/AboutPage/AboutPage";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout setOpen={setOpen}/>}>
          <Route path={"/"} element={<BoardsList open={open} setOpen={setOpen}/>} />
          <Route path={"board/:boardId"} element={<BoardDetails />} />
          <Route path={"about"} element={<AboutPage />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
