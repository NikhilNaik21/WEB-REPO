function addMsg(p1){

//     let parentTag = document.querySelector('#div1');
//     let oldvalue=parentTag.innerHTML;

//     let messageTag = document.querySelector('#msg')
//     let currentmsg = messageTag.value;

//     let pos = p1? "end" : "start";
//   //  let newvalue =`<div class="msg-style" style="display:flex; justify-content:${pos}">${currentmsg} </div>`;
//     let newvalue = `<div class="msg-style" style="display: flex;justify-content:${pos}">${currentmsg}</div>`;
//     parentTag.innerHTML =  oldvalue + currentmsg ;
//     messageTag.value = "";

let parentTag = document.querySelector('#div1');
    let oldvalue = parentTag.innerHTML;

    let msgTag = document.querySelector('#msg');
    let msg = msgTag.value;

    let pos = p1 ? "end" : "start";
    let nevvalue = `<div class="msg-style" style="display: flex;justify-content:${pos}">${msg}</div>`;
    parentTag.innerHTML =  oldvalue + nevvalue ;

    msgTag.value = "";
}

function addEmoji(p1,hs)
{
    let parentTag = document.querySelector('#div1');
    let oldvalue = parentTag.innerHTML;

    let msgTag = document.querySelector('#msg');
    let msg = msgTag.value;

    let pos = p1 ? "end" : "start";
    // let nevvalue = `<p class="msg-style" style="display: flex;justify-content:${pos}">&#128512;</p>`;
    let nevvalue = hs == "s" ?  `<p class="msg-style" style="display: flex;font-size:60px;justify-content:${pos}">&#128534;</p>` : `<p class="msg-style" style="display: flex;font-size:60px;justify-content:${pos}">&#128512;</p>` ;
    parentTag.innerHTML =  oldvalue + nevvalue ;

    msgTag.value = "";
}