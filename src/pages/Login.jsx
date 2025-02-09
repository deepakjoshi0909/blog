import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name] : e.target.value}
    })
  }

  return (
    <section className="login">
      <div className="container">
        <h2>Sign Up</h2>
        <form className='form login_form'>
          <p className='form_error-message'>This is an error message</p>
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" placeholder='password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary'>LogIn</button>
        </form>
        <small>Don't have an account<Link to="/resister">sign up</Link></small>
      </div>
    </section>
  )
}

export default Login
