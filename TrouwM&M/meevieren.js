window.onload = function () {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', function (){
        let codeInput = document.getElementById('code');
       let code = codeInput.value;
        if ( code === 'vrienden'){
            window.location.href='formulier1.html';
        }
        else if (code === 'familie'){
            window.location.href = 'formulier2.html';
        }
        else if (code === 'collega'){
            window.location.href = 'formulier3.html';
        }
        else{
            alert('de code is niet correct gelieve opnieuw te proberen of Mieke te contacteren.');
        }
        message.textContent ='de code is niet correct gelieve opnieuw te proberen of Mieke te contacteren.';
    })
}