function Login(){
    userName=document.getElementById("user").value;
    localStorage.setItem("User",userName);
    window.location="room.html";
}