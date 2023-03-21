import React from "react"; 
import app from "./firebase";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function EasyLogin(){

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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('로그인 되었습니다.')
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert('너누구냐')
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  return(
    <>
      <form>
        <h1>Login</h1>
        <div>email : <input type='email' name="email" value={email} onChange={(e)=>{setInput(e.target)}}></input> </div>
        <div>passwd : <input type='password' name="password" value={password} onChange={(e)=>{setInput(e.target)}}></input> </div>
        <button type="submit" onClick={(e)=>{join(e)}}>로그인 하기</button>
        <button>회원가입 하러 가기</button>
      </form>
    </>
  )
}

export default EasyLogin;