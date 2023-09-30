// form validation start
const form=document.getElementById("loginForm")
var pass=document.getElementById("password");
var user=document.getElementById("username");
var passCheck=document.getElementById("passConfirm");
var userCheck=document.getElementById("userConfirm");

// VALIDATION FUNCTIONS
function validateUser(){
    if(user.value=="admin"){ 
        user.style.border="";
        userCheck.innerText="";       
        return true;
    }else if(user.value==""){
        user.style.border="2px solid red";
        user.style.borderRadius="4px";
        userCheck.innerText="This field cannot be left blank";
    }else{
        user.style.border="2px solid red";
        user.style.borderRadius="4px";
        userCheck.innerText="Invalid Username";
}}
function validatePass(){
if(pass.value=="12345"){
    pass.style.border="";
    passCheck.innerText=""   
    return true;
}else{
    pass.style.border="2px solid red";
    pass.style.borderRadius="4px";
    passCheck.innerText="Wrong Password"
    return false
}}
function resetUser(){
    user.style.border="";
    userCheck.innerText="";
}
function resetPass(){
    pass.style.border="";
    passCheck.innerText="";
}

// VALIDATION
form?.addEventListener('submit', function(e){
        var validUser=validateUser();
        var validPass=validatePass(); 
        e.preventDefault();

        if(validUser===true&&validPass===true){
            form.submit();
            window.location.href= 'todo.html';
        }else if(validUser===false&&validPass===false){
            alert("Invalid credentials");
        }else if(validPass===false){
            alert("Wrong Password");
        }else if(validUser===false){
            alert("Wrong Password");
        }else{
            alert("Login error. Please try again.");
        }
});
// form validation end

// todolist start
var list = document.getElementById("list");
var tabBody= document.getElementById("table-body");
var logout = document.getElementById("logout");
var box = document.getElementById("box");
var done = 0;

window.onload=function get(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4&&this.status==200){
            var jFile=this.responseText;
            test(jFile);
        }}
    xhttp.open("GET",'https://jsonplaceholder.typicode.com/todos',true);
    xhttp.send();
}


function test(data){
    var jList = JSON.parse(data);
    for(var n=0;n<jList.length;n++){
        if(jList[n].completed== true){
            tabBody.innerHTML += `<tr><td>${jList[n].title}</td><td><input class="form-check-input" type="checkbox" checked="true" disabled = "true"></input></td></tr>`
        }
        else{
            tabBody.innerHTML += `<tr><td>${jList[n].title}</td><td><input class="form-check-input" type="checkbox" onclick="val(this)" id="box"></input></td></tr>`
        }
    }
}
function val(c){
    if(c.checked){
        done++;
        console.log(done);
        displayMsg();
    }
    else{
        done--;
        console.log(done);
    }
}
function displayMsg(){
    let promiseFn = new Promise(function(resolve,reject){
        if(done==5){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
    })
    promiseFn.then(function(i){
        alert(i);
    })
}

logout.onclick = function(){
    window.location = "./index.html";
}

// end
