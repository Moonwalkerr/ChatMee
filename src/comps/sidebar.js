import "./sidebar.css"
import {Avatar} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Sidebar = () => {
    return ( <div className="sidebar">
        <div className="sidebar__header">
        <Avatar/>
        <div className="sidebar__headerRight">
        <ChatIcon/>
        <DonutLargeIcon/>
        <MoreVertIcon/>    
        </div>    
        </div>
        <div className="sidebar__search">
        <SearchOutlinedIcon/>
        <input type="text" name="" id=""
        placeholder="Search or Start new Chat"/>
        </div>

        <div className="sidebar__chat">

        </div>
    </div> );
}
 
export default Sidebar;