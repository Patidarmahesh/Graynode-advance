import React from 'react'
import MainLayOut from '../layout/mainlayout/MainLayOut'
import ProfessionalCommunity from '../components/loadingComponent/commuinity/professional community'
import ExploreTopics from '../components/loadingComponent/topic/ExploreTopics'
import Stock from '../components/loadingComponent/stocks/Stock'
import FindJobsAndIntership from '../components/loadingComponent/findJobs'
import Query from '../components/loadingComponent/Query'

const LandingPage = () => {
  return (
    <MainLayOut>
      <ProfessionalCommunity/>
      <ExploreTopics/>
      <Stock/>
      <FindJobsAndIntership/>
      <Query/>
    </MainLayOut>
  )
}

export default LandingPage
