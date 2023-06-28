import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";



function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  })
  const handleInput = (event)=>{
    let name = event.target.name;
    let value =event.target.value;

    setUser({...user, [name]:value});
  }
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const {username, email, password} = user;
    try {
      const res = await fetch('/api/user/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username, email, password
        })
      })
      if(res.status === 400 || !res){
        window.alert("Aleady Used Details")
      }else{
        window.alert("REgistered Successfull");
        navigate.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-colum align-items-center text-white justify-content-center form order-2">
            <h4 className="display-4 fw-bolder">Welcome, friend</h4>
            <p className="lead text-center">Enter your detail to register</p>
            <h4 className="mb-4">OR</h4>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6">Register</h1>
            <form onSubmit={handleSubmit} method='POST'>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name='username'
                  value={user.username}
                  onChange={handleInput}
                />
                
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name='email'
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name='password'
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                accept terms and condition
                </label>
              </div>
              <button type="submit" class="btn btn-outline-primary w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;