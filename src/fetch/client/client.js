import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Client(){

  const [todoList, setTodoList] = useState(null)


  useEffect(() => {
    fetch('http://localhost:3000/api/todo')
      .then((res) => res.json())
      .then((data) => setTodoList(data));
  },[]);

  const onSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    fetch('http://localhost:3000/api/todo',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        text,
        done,
      })
    })
    .then(()=>
      fetch('http://localhost:3000/api/todo')
      .then((res) => res.json())
      .then((data) => setTodoList(data))
    );
  };

  return(
    <div>
      <h1>TODO LIST</h1>

      <form onSubmit={(e)=>{onSubmit(e)}}>
        <input type="text" name="text"/>
        <input type="checkbox" name="done"/>
        <input type="submit" value='추가'/>
      </form>

      {todoList?.map((el,idx)=>{
        return(
        <div key={idx}>
          <div>{el.id}</div>
          <div>{el.text}</div>
          <div>{el.done ? 'y' : ' n'}</div>
        </div>
        )
      })}
    </div>
  )
}

export default Client;