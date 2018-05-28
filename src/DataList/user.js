import request from './request';

export default function getUserName(id){
    return request('/users/'+id).then((user)=>user.name);
}