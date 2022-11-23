// eslint-disable-next-line import/no-anonymous-default-export
export default function(state={},action){

    switch(action.type){
        case 'GET_POSTS_ALL':
            return {...state,postsList:action.payload}
        case 'GET_POST_DETAIL':
            return {...state,post:action.payload}
        case 'GET_USERS_ALL':
            return {...state,usersList:action.payload}
        case 'GET_USER_DETAIL':
            return {...state,user:action.payload}
        case 'CLEAR_POST_DETAIL':
            return {}
        default:
            return state;
    }

}