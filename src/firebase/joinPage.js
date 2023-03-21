import React from "react"; 
import app from "./firebase";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function JoinLogin(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const setInput = (e) =>{
    if(e.name === 'email'){
      setEmail(e.value)
    } else {
      setPassword(e.value)
    }
  }

  const join = (e) =>{
    e.preventDefault()

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  return(
    <>
      <form>
        <h1>Join</h1>
        <div>email : <input type='email' name="email" value={email} onChange={(e)=>{setInput(e.target)}}></input> </div>
        <div>passwd : <input type='password' name="password" value={password} onChange={(e)=>{setInput(e.target)}}></input> </div>
        <button type="submit" onClick={(e)=>{join(e)}}>회원가입 하기</button>
        <button>로그인 하러 가기</button>
      </form>
    </>
  )
}

export default JoinLogin;