import React, { useState } from 'react'
import "../../src/components/homeComponent/profile.css";
import MainLayOut from '../layout/mainlayout/MainLayOut'
import Search from '../components/loadingComponent/searchResult/Search'

const People = () => {
  const [show,setShow] = useState(false);
  const img="http://graynod.dollopinfotech.com/assets/web/images/people_brdcum_img.png"
  return (
    <MainLayOut>
      <Search show={show} img={img} active placeHolder="Have a question? In A People" textButton="Find People"/>
    </MainLayOut>
  )
}

export default People
