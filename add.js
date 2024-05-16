const value=document.querySelector('.write');
function decrement(){
    let val=parseInt(value.innerHTML);// to convert string into integer
    val=val-1;
    value.innerHTML=val;
}
function increment(){
    let val=parseInt(value.innerHTML);// to innerhtml pass karega vo string hoga to usse integer mai convert karne ke liya
    val=val+1;
    value.innerHTML=val;
}

// USING EVENTLISTENER

// const butt1=document.querySelector('.but1');
// butt1.addEventListener('click',()=>{
//     let val=parseInt(value.innerHTML);
//     val=val-1;
//     value.innerHTML=val;
// });
// const butt2=document.querySelector('.but2');
// butt2.addEventListener('click',()=>{
//     let val=parseInt(value.innerHTML);
//     val=val+1;
//     value.innerHTML=val;
// })
