import "./login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "../keys/firebaseConfig";
import {action} from "../reducer/reducer";
import {useStateValue} from "../stateProvider";

const Login = () => {

    const [{},dispatch] = useStateValue();
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
            <img className="image" src="https://images-platform.99static.com//n7liZzsSMdHX6uDJpYOA2QTUVeA=/163x13:1335x1185/fit-in/500x500/99designs-contests-attachments/116/116335/attachment_116335822" alt="" />
            <div className="login__text">
                <h1>Sign In to Folks Chat</h1>
            <Button  onClick={signIn}>
                Sign In With Google
            </Button>
            </div>
        </div>
    </div> );
}
 
export default Login;