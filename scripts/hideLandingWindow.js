let button = document.getElementById('id-button-emergent-window');
    
function hideWindow(){
    let window = document.getElementById('id-emergent-window');
    window.style.display = "none";
}

button.addEventListener("click",hideWindow);