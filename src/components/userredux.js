import React from "react";
import "../App.css";
import { useSelector , useDispatch } from "react-redux";
import { useState } from "react"
import { addUser} from "../features/user";

function Userredux() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName]=useState("");
  const [username, setUsername]=useState("");
  return (
    <div className="App">
      <div className="addUser flex justify-center mb-10">
        <input className="border-2 mx-5 p-2 rounded-md border-amber-500 hover:border-green-900 " type="text" placeholder="Name..." onChange={(event)=>{
          setName(event.target.value);
        }}/>
        <input className="border-2 mx-5 p-2 rounded-md border-amber-500 hover:border-green-900 " type="text" placeholder="Username.." onChange={(event)=>{
          setUsername(event.target.value);
        }} />
        <button className="border-2 p-2 rounded-md"onClick={()=>{dispatch(addUser({id:0,name,username}));
      }}>Add User</button>
      </div>

      <div className="logo">
        {userList.map((user)=>{
          return (
          <div className="mb-5 text-xl font-bold">
            <h1>Name:{user.name}</h1>
            <h1>username:{user.username}</h1>
            </div>
        )
        })
        }
      </div>
     
    </div>
  );
}

export default Userredux;
