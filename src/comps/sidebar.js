import "./sidebar.css"
import {useState, useEffect} from "react";
import {IconButton,Avatar} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChats";
import database from "../keys/firebaseConfig";


const Sidebar = () => {

    const [rooms, setRooms] = useState([]);
    
    useEffect(()=>{     // realtime snapshot update every time data is updated on firebase
        // Realtime listener and updates the rooms var
    const unSubscribe = database.collection("rooms").onSnapshot(snap=>{
                setRooms(snap.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data(),
                })))
        });

        // Cleanup function
        return ()=>{
            unSubscribe();
        }
    },[])


    return ( <div className="sidebar">
        <div className="sidebar__header">
        <Avatar/>
        <div className="sidebar__headerRight">
        <IconButton>
        <ChatIcon/>
        </IconButton>
        <IconButton>
        <DonutLargeIcon/>
        </IconButton>
        <IconButton>
        <MoreVertIcon/>    
        </IconButton>
        </div>    
        </div>
        <div className="sidebar__search">
        <div className="sidebar__searchContainer">
            <SearchOutlinedIcon/>
        <input type="text" name="" id=""
        placeholder="Search or Start new Chat"/>
        
        </div>
        </div>

        <div className="sidebar__chats">
            <SidebarChat addNewChat/>
            {rooms.map(room =>{
                return  <SidebarChat
                key={room.id}
                name={room.data.name}
                />

            })}
        </div>
    </div> );
}
 
export default Sidebar;