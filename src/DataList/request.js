export default function(url){
    return new Promise((res, rej)=>{res(url);}).then((res)=>console.log(res));
}