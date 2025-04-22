let start_btn = document.getElementById('start-btn');
let stop_btn = document.getElementById('stop-btn');
let button_container = document.getElementsByClassName('button-container');
let log = document.getElementById('log');
let state = document.getElementById('state');

start_btn.addEventListener('click', () =>{
document.addEventListener('keydown', isDownkey);
document.addEventListener('keyup', isUpKey);
});

stop_btn.addEventListener('click', () => {
document.removeEventListener('keydown', isDownkey);
document.removeEventListener('keyup', isUpKey);
log.textContent = "";
state.textContent = "";
});

function isDownkey(event){
    log.textContent = `You Just Pressed ${event.key}`;
    state.textContent = "Key is Pressed";
}

function isUpKey(event){
    log.textContent = `You Just Released ${event.key}`;
    state.textContent = "Key is Released" 
}


