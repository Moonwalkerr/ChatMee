import {createContext, useReducer, useContext} from "react";


// Preparing the context :- data Layer where every state lives
export const StateContext = createContext();

// State Provider 
export const StateProvider = ({ reducer,initialState, children}) =>{
  return  <StateContext.Provider value={useReducer(reducer,initialState)}>
       {children} 
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext);