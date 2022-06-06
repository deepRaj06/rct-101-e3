import React, { createContext, useReducer, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const initState = { isAuth:false, token:null};

function reducer(state, action){
  switch(action.type){

    case 'LOGIN_SUCCESS': {
      return{
        ...state,
        isAuth:true,
        token:action.token
      }
    }

    case 'LOGIN_FAILURE': {
      return{
        ...state,
        isAuth:false,
        token:null
      }
    }

  }
}

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  return (
  <AuthContext.Provider value={[state, dispatch]}>
    {children}
  </AuthContext.Provider>);
};
