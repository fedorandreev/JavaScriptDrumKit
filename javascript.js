function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start.
    audio.play();
    key.classList.add('playing');
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform.
    console.log(e.propertyName);
    this.classList.remove('playing'); //this is equal to the actual key called
}




const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//Each key gets an event listener added to it.

window.addEventListener('keydown', playSound);