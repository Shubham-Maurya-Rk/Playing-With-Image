let controls=document.querySelectorAll('.container input');
console.log(controls)

function update(){
    let sizing=this.dataset.sizing==='px'?this.dataset.sizing: '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+sizing)
}

controls.forEach((element) => {
    element.addEventListener('change',update);
    element.addEventListener('mousemove',update);
});