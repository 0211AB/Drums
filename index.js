
let btn1 = document.getElementById('65');
let btn2 = document.getElementById('83');
let btn3 = document.getElementById('68');
let btn4 = document.getElementById('70');
let btn5 = document.getElementById('71');
let btn6 = document.getElementById('72');
let btn7 = document.getElementById('74');
let btn8 = document.getElementById('75');
let btn9 = document.getElementById('76');

btn1.addEventListener('click', play);
btn2.addEventListener('click', play);
btn3.addEventListener('click', play);
btn4.addEventListener('click', play);
btn5.addEventListener('click', play);
btn6.addEventListener('click', play);
btn7.addEventListener('click', play);
btn8.addEventListener('click', play);
btn9.addEventListener('click', play);

window.addEventListener('keydown', function (e) {
    let elm = document.getElementById(e.key);
    if (!elm)
        return;

    elm.currentTime = 0;
    elm.play();

    console.log(e.which)

    let btn = document.getElementById(e.which);
    console.log(btn);
    btn.classList.add('playing');
    console.log(btn);

    setTimeout(function(){
        btn.classList.remove('playing');
    },300)
})


function play(e) {
    let elm = document.getElementById(e.path[0].classList[1]);
    elm.currentTime = 0;
    elm.play();
}

