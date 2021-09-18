import  {LOGIN}  from '../constant';

const initialState={
   list : []
}

export const loginReducer = (state= initialState, actions)=>{
    switch (actions.type) {
        case LOGIN:
            const {userName,pass} = actions.payload;
            return{
                ...state,
              list:[
                ...state.list,
                  {
                    userName:userName,
                    pass:pass
                }
            ]
            }
    
        default:return state
    }
}
export default loginReducer;

