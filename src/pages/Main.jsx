import React from 'react'
import Header from '../components/Header'
import { sections } from '../data/sectionData';

const Main = () => {
  return (
    <>
      <Header sections={sections}  title='Asem'/>
    </>
  )
}

export default Main