import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

const RemoteProducts = lazy(() => import("products/remote-app"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <RemoteProducts />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<RemoteProducts />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
