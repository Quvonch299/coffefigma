import React from 'react'
import CoffeeCollection from '../HOME/CoffeeCollection'
import WhyChooseUs from '../HOME/WhyChooseUs'
import ChooseOne from '../HOME/ChooseOne'
import Hero from '../HOME/Hero'

export default function Main() {
  return (
    <div> 
      <Hero/>
        <CoffeeCollection/>
        <WhyChooseUs/>
        <ChooseOne/>
    </div>
  )
}
