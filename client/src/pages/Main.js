import React from "react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import Navbar from "../components/Navbar";

export const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <div className="header_bg">
          <Navbar />
          <Header />
        </div>
      </div>
      <Banner />
    </div>
  );
};
