import React, { useEffect, useState } from 'react'

function User(props) {
   const [online,setOnline] = useState(false);
   useEffect(()=>{
        setOnline(false);
        props.onlineList.forEach(element => {
            if(element.userId === props.user.id){
                setOnline(true);
            }
        });
   },[props.onlineList,props.user,online])
  return (
    <div className='flex flex-row justify-between items-center gap-16'>
        <p className='text-start'>{props.user.username}</p> 
        <p className={online?'bg-green-500 rounded-full  w-2 h-2':'bg-slate-400 rounded-full w-2 h-2'}></p>
    </div>
  )
}

export default User