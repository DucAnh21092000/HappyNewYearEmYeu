const audio = document.querySelector('.audio')

function openVolumn(){ 
       audio.play();
 
}
const muted = () =>{
    audio.pause()
}

const btn__ready = document.querySelector('.btn__ready')
const noClick = document.querySelector('.noClick')

const ready = () => {
    noClick.classList.add("d-none")
    audio.play();
}