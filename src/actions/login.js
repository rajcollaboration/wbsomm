import {LOGIN} from "../constant"

export const login = (userName,pass)=>{
    return{
        type:LOGIN ,
        payload: {
            userName: userName,
            pass: pass
        }
    }
}