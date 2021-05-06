import "./login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "../keys/firebaseConfig";
import {action} from "../reducer/reducer";
import {useStateValue} from "../stateProvider";

const Login = () => {

    const [{a={}},dispatch] = useStateValue();
            console.log(a);
    const signIn = ()=> {
        auth.signInWithPopup(provider)
        .then(res=>{
            // Pushing the user details to centralized data layer
            dispatch({
                type:action.SET_USER,
                user:res.user,
            });
        })
        .catch(err=>alert(err.message));
    }
    return ( <div className="login">
        <div className="login__container">
            <img className="image" src="./assets/FolksChatFavicon.png" alt="" />
            <div className="login__text">
                <h1>Sign In to Folks Chat</h1>
            <Button className="login__btn"  onClick={signIn}>
                Sign In With Google
            </Button>
            </div>
        </div>
    </div> );
}
 
export default Login;