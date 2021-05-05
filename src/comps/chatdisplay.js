import "./chatdisplay.css";
import {Avatar, IconButton} from "@material-ui/core";
import {useState, useEffect} from "react";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import TextField from '@material-ui/core/TextField';

const ChatDisplay = () => {

    const [seed,setSeed] = useState("");

    const [input,setInput] = useState("");

    useEffect(() =>{
       setSeed(Math.floor(Math.random()*5000)); 
    },[])

    const sendMsg = (e) => {
        e.preventDefault();
        console.log("New msg", input);
        setInput("");
    }

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
        <MoreVertIcon/>
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
                <IconButton>
                <InsertEmoticonIcon/>
                 </IconButton>
                <form><TextField 
                      className="chat__footerInput"
                      value={input}
                    onChange={(e)=>setInput(e.target.value)}
                id="outlined-basic" label="Type your text here" variant="outlined" />
                    {/* <input type="text" 
                      value={input}
                    onChange={(e)=>setInput(e.target.value)} /> */}
                <button
                type="submit"
                onClick={sendMsg}
                >Send</button>
                </form>
            <IconButton>
            <MicIcon/>
            </IconButton>
        </div>
    </div> );
}
 
export default ChatDisplay;