import "./sidebar.css"
import {IconButton,Avatar} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChats";

const Sidebar = () => {
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
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div> );
}
 
export default Sidebar;