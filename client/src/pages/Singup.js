import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

export const Singup = () => {
  const { state, dispatch } = useContext(UserContext);
  const { regName, regEmail, regPassword, info } = state;
  const navigate = useNavigate();

  const signUp = (e) => {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          dispatch({ type: "SET_INFO", payload: data.error });
          dispatch({ type: "SET_ERROR" });
        } else {
          navigate("/login");
        }
      });
  };
  return (
    <div className="conainer header">
      <div className="header_bg auth_page">
        <div className="auth">
          <div className="auth_header">
            <h1>Sign up</h1>
          </div>
          <div className="input_group">
            <label>Your name</label>
            <input
              value={regName}
              onChange={(e) =>
                dispatch({ type: "CHANGE_REG_NAME", payload: e.target.value })
              }
              type="text"
              required
              placeholder="Your name.."
            />
          </div>
          <div className="input_group">
            <label>Your email</label>
            <input
              value={regEmail}
              onChange={(e) =>
                dispatch({ type: "CHANGE_REG_EMAIL", payload: e.target.value })
              }
              type="email"
              required
              placeholder="Your email.."
            />
          </div>
          <div className="input_group">
            <label>Your passowrd</label>
            <input
              value={regPassword}
              onChange={(e) =>
                dispatch({ type: "CHANGE_REG_PASSWORD", payload: e.target.value })
              }
              type="password"
              required
              placeholder="Your password.."
            />
          </div>
          <button onClick={(e) => signUp(e)}>Submit</button>
          <p className="info_p">{info}</p>
          <Link to="/login">Do have your an account?</Link>
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};
