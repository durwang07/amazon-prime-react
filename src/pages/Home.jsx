import React from 'react'
import Section from '../components/Section/Section'

const Home = () => {
  return (
    <main>
      <Section heading ={"Welcome to Prime Video"} desc={"Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals"} btn={"Sign in to join Prime"} img = {"../../../public/home page image 1.jpg"}/>
      <Section heading ={"Movie rentals on Prime Video"} desc={"Early Access to new movies, before digital subscription"} btn ={"Rent now"} img = {"../../../public/home page image 2.jpg"}/>
    </main>
  )
}

export default Home