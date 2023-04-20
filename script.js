const btn = document.getElementById('btn');
const inp = document.getElementById('input');
const outputdiv = document.getElementById('outputdiv');

btn.addEventListener('click', getinp);
var i = 0;
function getinp(){
    const newval = inp.value;
    if(newval != ""){
        outputdiv.innerHTML+=`
        <div style="display: flex; justify-content: start; margin-bottom: 5px;" id="div${i}" class="optextdiv">
            <textarea style="height: 60px; margin-right: 5px; resize: none; font-size: 1.2em;" disabled id="t${i}">${newval}</textarea>
            <div class="editbutton" style="display:flex">
                <button id="ed" style ="background-color: aqua; margin-right: 5px; width: 50px; height:30px; cursor: pointer;" onclick="edit('t${i}','${newval}')">Edit</button>
                <button id="rm" style ="background-color: aqua; margin-right: 5px; width: 55px; height:30px; cursor: pointer;" onclick="remove('div${i}')">Delete</button>
            </div>
        </div> 
    `
    i++;
    }
    inp.value ="";
}
function edit(tid,value){
    const text = document.getElementById(tid);
    if(text.disabled){
        text.disabled = false;
    }
    else if(text.disabled === false){
        text.disabled = true;
    }
}
function remove(divid){
    const mydiv = document.getElementById(divid);
    mydiv.innerHTML="";
}