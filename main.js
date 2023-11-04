function correcao1() {
    q1 = document.querySelector('#q1 input[type="radio"]:checked').value;

    if (q1 == 'head') {
        document.getElementById('q1').style.background = 'green';
    } else {
        document.getElementById('q1').style.background = 'red';
    }
}

function correcao2() {
    q2 = document.querySelector('#q2 input[type="radio"]:checked').value;
    
    if (q2 == 'script') {
        document.getElementById('q2').style.background = 'green'
    } else {
        document.getElementById('q2').style.background = 'red'
    }
}

function correcao3() {
    q3 = document.querySelector('#q3 input[type="radio"]:checked').value;

    if (q3 == 'a') {
        document.getElementById('q3').style.background = 'green'
    } else {
        document.getElementById('q3').style.background = 'red'
    }
}

function correcao4() {
    q4 = document.querySelector('#q4 input[type="radio"]:checked').value;
    
    if (q4 == 'comentario2') {
        document.getElementById('q4').style.background = 'green'
    } else {
        document.getElementById('q4').style.background = 'red'
    }
}

function correcao5() {
    q5 = document.querySelector('#q5 input[type="radio"]:checked').value;
    
    if (q5 == 'r3') {
        document.getElementById('q5').style.background = 'green'
    } else {
        document.getElementById('q5').style.background = 'red'
    }
}

