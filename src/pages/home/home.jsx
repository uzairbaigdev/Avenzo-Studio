import React from 'react'
import Navigation from '../../components/navigation/navigation.jsx'
import FirstSection from '../../components/homeComponents/firstSection.jsx'
import SecondSection from '../../components/homeComponents/secondSection.jsx'
import ThirdSection from '../../components/homeComponents/thirdSection.jsx'
import FourthSection from '../../components/homeComponents/fourthSection.jsx'
import FifthSection from '../../components/homeComponents/fifthSection.jsx'
import SixthSection from '../../components/homeComponents/sixthSection.jsx'

const Home = () => {
  return (
    <>
      <Navigation />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </>
  )
}

export default Home