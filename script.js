let tela = document.getElementById("tela");
let ctx = tela.getContext("2d")
var audio = document.getElementById("audio")
var interval
var number = 0

circle = {
    x: -380,
    y: 250,
    raio: 120,
    begin:0.8 ,
    end: 5.5
}

circleEye = {
    x: -360,
    y: 190,
    raio: 12,
    begin: 0,
    end: 2 * Math.PI
}

mouth = {
    x: -370,
    y: 250,
    xx: -60
}

enemy = {
    x: -220,
    y: 165,
}



function play(){
    pause()
    audio.play()
    interval = setInterval(draw, 10)
    let hide = document.getElementById("play")
    hide.style.display = "none"
    let show = document.getElementById("pause")
    show.style.display = "block"
}
function pause (){
    audio.pause()
    clearInterval(interval)
    let show = document.getElementById("play")
    show.style.display = "block"
    let hide = document.getElementById("pause")
    hide.style.display = "none"
}


    document.getElementsByClassName("vol")[1].addEventListener("click", function plus(){ 
        audio.playbackRate += 0.2
    
    })

    document.getElementsByClassName("vol")[0].addEventListener("click", function minus(){ 
        audio.playbackRate -= 0.2
    
    })

function draw(){
    ctx.beginPath()      
    ctx.rect(0,0,1200,500)
    ctx.fillStyle = "black"
    ctx.fill()

    ctx.beginPath()
    circle.x += 4
    ctx.arc(circle.x, circle.y, circle.raio, circle.begin, circle.end)
    ctx.fillStyle = "yellow"
    ctx.lineTo(circle.x, circle.y)
    ctx.fill()

    ctx.beginPath()
    circleEye.x += 4
    ctx.arc(circleEye.x, circleEye.y, circleEye.raio, circleEye.begin, circleEye.end )
    ctx.fillStyle = "black"
    ctx.fill()

    ctx.beginPath()
    mouth.x += 4
    mouth.xx += 4 
    ctx.moveTo(mouth.x, mouth.y)
    ctx.lineTo(mouth.xx, mouth.y)
    ctx.strokeStyle = "black"
    ctx.lineWidth = 5
    ctx.stroke()
    
    let img = new Image();
    img.src = "./assets/ghost.jpg"
    img.onload = desenharImg

    function desenharImg(){
    enemy.x += 4

    ctx.drawImage(this, enemy.x, enemy.y, 180,180)} 
    
    loop()
    timer()
}


function loop(){
    if (circle.x >1420){
        circle.x = -280
    } else if( circleEye.x > 1460){
        circleEye.x = -240
    } else if(mouth.x > 1420){
        mouth.x = -280
    } else if(enemy.x > 1480){
        enemy.x = -220
    }
}

function timer(){
    if (number <= 30){
        circle.begin = 0
        circle.end = 2 * Math.PI
    }
    else if (number >=31 && number <= 60){
        circle.begin = 0.8
        circle.end = 5.5
        
        
    } else if ( number >= 61){
        number = 0
        
    }
    clearInterval(timer)
    number += 1
}



    








