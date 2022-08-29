import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./loginActionType"

export const loginLoading=(data)=>({
    type:LOGIN_LOADING,
    
})

export const loginSuccess=(data)=>({
    type:LOGIN_SUCCESS,
    payload:data,
})

export const loginError=(err)=>({
    type:LOGIN_ERROR,
    payload:err,
})

export const getUserDetails = (userData) => (dispatch) => {
    try {
        dispatch(loginLoading())
      fetch(`https://tummoc2.herokuapp.com/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        mode:"no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((e) => e.json())
        .then((res) => {
            dispatch(loginSuccess(res))
           console.log("userData",res)
        });
    } catch (e) {
      alert("Could not post data");
      dispatch(loginError(e))
      console.log("error in posting Data", e);
    }
  };
  

  export const signInWithGoogle = (userData) => (dispatch) => {
    try {
        dispatch(loginLoading())
      fetch(`https://tummoc2.herokuapp.com/auth/google`, {
       
       mode:"no-cors" 
      })
        .then((e) => e.json())
        .then((res) => {
            dispatch(loginSuccess(res))
           console.log("userData",res)
        });
    } catch (e) {
      alert("Could not post data");
      dispatch(loginError(e))
      console.log("error in posting Data", e);
    }
  };

export const getLoginData=()=>(dispatch)=>{
   
    dispatch(loginLoading())
     fetch("https://tummoc2.herokuapp.com/login")
   .then((d)=>d.json()).then((data)=>{
       dispatch(loginSuccess(data))
       console.log("loginData",data)

   })

  .catch((e)=>{
   dispatch(loginError(e))
  })
}