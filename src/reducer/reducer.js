export const initialState = {
    user: null,
};

export const action = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) =>{
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user

            }
    }
}


export default  reducer;