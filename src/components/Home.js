import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import User from "./User";

const socket = io.connect("http://localhost:5000",{query:{"userId":sessionStorage.getItem("id")}});

function Home() {
  const [info,setInfo] = useState({
    id:'',
    username:'',
    email:'',
    online:false
  })
  const [usersOnline,setUsersOnline] = useState([{}]);
  const [users,setUsers] = useState([{}]);
   useEffect(()=>{
    setInfo({...info,
      id:sessionStorage.getItem("id"),
      username:sessionStorage.getItem("userName"),
      email:sessionStorage.getItem("email"),
      online:true
    })
    if(info.online){
      socket.on("users",(data)=>{
        setUsersOnline(data.users);
      })
    }
  },[info.online,socket]);

  useEffect(()=>{
    fetch("/users").then(
      response => response.json()
    ).then(data=>{
      setUsers(data.users.filter((ele=>{
        return ele.id != sessionStorage.getItem("id");
      })));
    })
  },[])
  
  return (
    <div className="m-2 text-center">
      <h1>Welcom {info.username} !</h1>
      <h1>Your email is {info.email}</h1>
      <div className="max-w-fit m-auto">{users.map(user => <User user={user} onlineList={usersOnline} />)}</div>
    </div>
  );
}

export default Home;



 