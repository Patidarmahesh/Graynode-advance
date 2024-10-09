import React, { useState } from 'react'
import MainLayOut from '../layout/mainlayout/MainLayOut'
import Search from '../components/loadingComponent/searchResult/Search'

const News = () => {
  const [show,setShow] = useState(false);
  const img="http://graynod.dollopinfotech.com/assets/web/images/news-bg.png"
  return (
    <MainLayOut>
      <Search show={show} img={img} placeHolder="Have a question? Ask Now In A People"/>
    </MainLayOut>
  )
}

export default News
