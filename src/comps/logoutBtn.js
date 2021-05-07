import {IconButton} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {auth} from "../keys/firebaseConfig";
import {useStateValue} from "../stateProvider";
import {action} from "../reducer/reducer";


const LogoutBtn = () =>{

    const [{user},dispatch] = useStateValue();
    async function logout() {
      try{  
          await auth.signOut();
          console.log(user);
          dispatch({
              type:action.SET_USER,
              user:null,
          })
    }catch{
        alert("Failed to logout!");
    }
  }
return (
        <div className="logout">
            <IconButton >
                <ExitToAppIcon onClick={logout}/>
            </IconButton>
        </div>
      )
}

export default LogoutBtn;