import React from 'react'
import ContactHero from '../Components/contacts/ContactHero'
import Form from '../Components/contacts/Form'
import Faq from '../Components/contacts/Faq'
import Joinus from '../Components/contacts/Joinus'

const page = () => {
  return (
    <div>
      <ContactHero/>
      <Form/>
      <Faq/>
      <Joinus/>
    </div>
  )
}

export default page
