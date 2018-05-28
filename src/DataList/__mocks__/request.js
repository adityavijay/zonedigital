const users = {
    4:{name:'Mark'},
    5:{name:'Paul'}
}

export default function request(url){
    return new Promise((res,rej)=>{
        const id = parseInt(url.substr('/users/'.length),10);
        console.log(33);
        process.nextTick(()=>users[id]?res(users[id]):rej(new Error('Not Valid')));
       //users[id]?res(users[id]):rej(new Error('Not Valid'));
    });
}