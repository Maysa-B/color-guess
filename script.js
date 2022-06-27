function colorBall() {
    const balls = document.getElementsByClassName('ball');

    function gerar_cor() {
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;

        return `rgb(${r}, ${g}, ${b})`;
    }

    for (let i = 0; i < balls.length; i += 1) {
        let currentBall = balls[i];

        if (currentBall.id !== 'resposta') {
            let currentColor = gerar_cor();
            currentBall.style.backgroundColor = currentColor;
        }

    }
}

function criarBalls() {
    const container = document.getElementById('balls-container');
    const balls = document.querySelectorAll('.ball');

    for (let i = 0; i < balls.length; i += 1) {
        balls[i].remove();
    }


    for (let id = 1; id <= 6; id += 1) {
        let newdiv = document.createElement('div');
        newdiv.className = 'ball';
        newdiv.id = '';
        newdiv.addEventListener('click', changeText);
        container.appendChild(newdiv);
    }
}

criarBalls();

function rbgDoGame() {
    const balls = document.querySelectorAll('.ball');
    const container = document.querySelector('#rgb-color');

    function gerar_cor() {
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;

        return `rgb(${r}, ${g}, ${b})`;
    }

    let color = gerar_cor();
    container.innerHTML = color;

    let number = Math.floor(Math.random() * 6);

    for (let i = 0; i < balls.length; i += 1) {
        let currentBall = balls[i];

        if (i === number) {
            let resposta = document.getElementById('resposta').id;

             if (resposta !== null) {
                resposta.id = '';
            }
            currentBall.style.backgroundColor = color;
            currentBall.id = 'resposta';
        }
    }

    colorBall();

}

rbgDoGame();

function changeText(event) {
    let armazenados = JSON.parse(document.querySelector('#score').innerText);
    let points = armazenados;
    const balls = document.querySelectorAll('.ball');

    if (event.target.id === 'resposta') {
        document.querySelector('#answer').innerText = 'Acertou!'
        points += 3;

        for (let i = 0; i < balls.length; i += 1){
            balls[i].removeEventListener('click', changeText);
        }

    } else if (event.target.className === 'ball') {
        document.querySelector('#answer').innerText = 'Errou! Tente novamente!';

        for (let i = 0; i < balls.length; i += 1){
            balls[i].removeEventListener('click', changeText);
        }

    } else {
        document.querySelector('#answer').innerText = 'Escolha uma cor:';
    }

    document.querySelector('#score').innerText = points;
}

const botaoreset = document.querySelector('#reset-game');
botaoreset.addEventListener('click', criarBalls);
botaoreset.addEventListener('click', rbgDoGame);
botaoreset.addEventListener('click', colorBall);
botaoreset.addEventListener('click', changeText);