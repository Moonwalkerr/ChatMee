import "./chatdisplay.css";
import {Avatar, IconButton} from "@material-ui/core";
import {useState, useEffect} from "react";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const ChatDisplay = () => {

    const [seed,setSeed] = useState("");

    useEffect(() =>{
       setSeed(Math.floor(Math.random()*5000)); 
    },[])

    return ( <div className="chatDisplay">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen ...</p>
            </div>
             <div className="chat__headerRight">
        <IconButton>
        <SearchOutlinedIcon/>
        </IconButton>
        <IconButton>
        <AttachFileIcon/>
        </IconButton>
        <IconButton>
        <AttachFileIcon/>
        </IconButton>
        </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__bodyName">AbhiMishra</span>
                    Hey Guys <span className="chat__bodyTimestamp">3:15 pm</span>
                </p>
            </div>

            <div className="chat__footer">

            </div>
    </div> );
}
 
export default ChatDisplay;