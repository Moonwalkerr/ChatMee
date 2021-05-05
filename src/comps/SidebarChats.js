import {Avatar} from "@material-ui/core";
import {useState, useEffect} from "react";
import "./sidebarChat.css"

const SidebarChat = ({addNewChat,id,name}) => {
    
    const [seed,setSeed] = useState("");


    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000))
    },[

    ]);

    const createChat = () => {
         const roomName = prompt("Please Enter The New Room Name");
         if(roomName){
            //  do smtng
         }
    }

    if(addNewChat){
     return  <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat +</h2>
        </div>
    }

    return ( <div
    id={id}
    className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last Message....</p>
      </div>

    </div> );
}
 
export default SidebarChat;