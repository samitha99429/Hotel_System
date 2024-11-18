import React from 'react'

export default function Form() {
  return (
    <div className='book'>
         <form>
        <select name="cars" placeholder="Hotel" id="cars">
          <option value="hotel">hotel</option>
          <option value="saab">Zaburi Beach</option>
          <option value="mercedes">Water Edge</option>
          <option value="audi">Blue Waters Screen</option>
        </select>
        <input type="date" id="check-in" name="check-in"/>
        <select name="Guests" value="Hotel" id="cars">
          <option value="volvo">Guests</option>
          <option value="saab">1</option>
          <option value="mercedes">2</option>
          <option value="audi">3</option>
        </select>

        <button>BOOK NOW</button>
      </form>
    </div>
  )
}
