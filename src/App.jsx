import { useState } from "react";
import Layout from "./components/layout/Layout";
import BoardsList from "./components/BoardList/BoardsList";
import { Route, Routes } from "react-router-dom";
import BoardDetails from "./components/BoardDetails/BoardDetails";
function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path={"/"} element={<BoardsList />} />
          <Route path={"board/:boardId"} element={<BoardDetails />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
