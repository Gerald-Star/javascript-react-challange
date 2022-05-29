
import React from 'react'

export default function App() {
  const firstName = 'Joe'
  const lastName = 'Chima'
  const date = new Date()
   
  // OR more short code decalre date.getHours as const

  const hours = date.getHours() % 15

// return is what your component needs to show on the screen
  
  // anothher example with else if

    const time = date.getHours()
    let timeOfDay

    if (time < 12) {
    timeOfDay = 'morning'

      // changing of here returns different time
    } else if (time >= 10 && time < 12) {
    timeOfDay = 'afternoon'
    } else {
    timeOfDay = 'night'
    }

   return ( 
    <div>
      {/* the hello still maintains the jsx mode.
      Anything inside the curly bracket is considered as a javascript code */}
      <h1>Hello {firstName} {lastName}</h1>
      <h2> I have a date by {date.getHours() % 20} o'clock!</h2>

      {/* short code by passing hours in js curly bracket */}

       <p>It is currently about {hours} o'clock!</p>
       
    
       <h3>it is {timeOfDay}</h3>
       
    </div>
  )
}

