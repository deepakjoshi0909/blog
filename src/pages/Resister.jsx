import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Resister = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name] : e.target.value}
    })
  }

  return (
    <section className="resister">
      <div className="container">
        <h2>Sign Up</h2>
        <form className='form resister_form'>
          <p className='form_error-message'>This is an error message</p>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type="password" placeholder='password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <input type="password" placeholder='Confirm password' name='password2' value={userData.password2} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary'>Resister</button>
        </form>
        <small>Already have an account?<Link to="/login">sign in</Link></small>
      </div>
    </section>
  )
}

export default Resister
