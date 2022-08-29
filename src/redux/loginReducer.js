import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./loginActionType";
const initialState={userDetail:{email:"",password:""}}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:
            return {
                ...state,
                loading:true,
               
            }

            case LOGIN_SUCCESS:
                return {
                    ...state,userDetail:{...state.userDetail,payload},
                    loading:false
                }

                case LOGIN_ERROR:
                    return {
                    ...state,
                    loading:false,
                    error:true
                    }

            default: 
            return state;
    }
}