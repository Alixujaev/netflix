import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

export const Login = () => {
  const {state, dispatch} = useContext(UserContext)
  const {logEmail, logPassword, info} = state
  const navigate = useNavigate()

  const login = (e) => {
    fetch("/loginauth", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: logEmail,
        password: logPassword
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          dispatch({ type: "SET_INFO", payload: data.error });
          dispatch({ type: "SET_ERROR" });
        } else {
          dispatch({type: "CLEAR_INPUT"})
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          navigate("/");
        }
      })
  }

  return (
    <div className='conainer header'>
      <div className='header_bg auth_page'>
      <div className='auth'>
        <div className='auth_header'>
          <h1>Login</h1>
        </div>
        <div className='input_group'>
        <label>Your email</label>
        <input value={logEmail} onChange={(e) => dispatch({type: "CHANGE_LOG_EMAIL", payload: e.target.value})} type="email" required placeholder="Your email.."/>
        </div>
        <div className='input_group'>
        <label>Your passowrd</label>
        <input value={logPassword} onChange={(e) => dispatch({type: "CHANGE_LOG_PASSWORD", payload: e.target.value})} type="password" required placeholder="Your password.."/>
        </div>
        <button onClick={(e) => login(e)}>Submit</button>
        <p className="info_p">{info}</p>
        <Link to="/create">Create your account?</Link>
        <Link to="/">Go to Home</Link>
      </div>
      </div>
    </div>
  )
}
