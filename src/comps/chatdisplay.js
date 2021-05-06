import "./chatdisplay.css";
import database from "../keys/firebaseConfig";
import {Avatar, IconButton} from "@material-ui/core";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import TextField from '@material-ui/core/TextField';
import {useStateValue} from "../stateProvider";
import {timestamp} from "../keys/firebaseConfig";

const ChatDisplay = () => {

    const [seed,setSeed] = useState("");
    const [input,setInput] = useState("");    
    const {roomId} = useParams();   
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user},dispatch] = useStateValue();
    dispatch({type:"noe"});

    useEffect(()=>{ 
         if(roomId){
        database.collection("rooms").doc(roomId).onSnapshot(snap=>{
        setRoomName(snap.data().name);
         database.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });
        });
    }
    },[roomId,messages]);

    useEffect(() =>{
       setSeed(Math.floor(Math.random()*5000)); 
    },[roomId])

    const sendMsg = (e) => {
        e.preventDefault();
        console.log("New msg", input);
        database.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .add({
            message:input,
            name:user.displayName,
            timestamp:timestamp,
        })
        setInput("");
    }

    return ( <div className="chatDisplay">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
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
             { messages.map(message =>{
            return  <p className={`chat__message ${true && "chat__receiver"}`}>
            <span className="chat__bodyName">{message.name}</span>
            {message.message}
            <span className="chat__bodyTimestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
            </p>
             })
             }
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