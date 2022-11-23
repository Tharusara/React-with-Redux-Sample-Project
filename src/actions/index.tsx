import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com';


export function postsListAll(){
    const request = axios.get(`${URL}/posts?_limit=30`)
                    .then(response => response.data)

    return {
        type: 'GET_POSTS_ALL',
        payload: request   
    }
}

export function usersListAll(){
    const request = axios.get(`${URL}/users`)
                    .then(response => response.data)

    return {
        type: 'GET_USERS_ALL',
        payload: request   
    }
}

export function postDetail(id: number){
    const request = axios.get(`${URL}/posts?id=${id}`)
                    .then(response => response.data)

    return {
        type: 'GET_POST_DETAIL',
        payload: request   
    }
}

export function userDetail(id: number){
    const request = axios.get(`${URL}/users?id=${id}`)
                    .then(response => response.data)

    return {
        type: 'GET_USER_DETAIL',
        payload: request   
    }
}


export function clearUserDetail(){
    return{
        type:'CLEAR_POST_DETAIL',
        payload:null
    }
}