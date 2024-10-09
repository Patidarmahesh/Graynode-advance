import React, { useState } from "react";
import MainLayOut from "../layout/mainlayout/MainLayOut";
import "../../src/components/homeComponent/profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../components/loadingComponent/searchResult/Search";

const Business = () => {
  const [show,setShow] = useState(true);
  const img="http://graynod.dollopinfotech.com/assets/web/images/bussiness-peop.png"
  return (
    <MainLayOut>
      <Search show={show} img={img} active placeHolder="Have a question? Ask Now In A Business" textButton="Find Business"/>
    </MainLayOut>
  );
};

export default Business;
