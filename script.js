let btn = document.getElementById('btn');
let output = document.getElementById('output-text')

let number = Math.floor(Math.random() * 100)
let count = 1;
let win = false;

btn.addEventListener('click', function () {
    let input = document.getElementById('user-input').value;
    console.log(count)
    if (count >= 5 && !win) {
        console.log('entra')
        output.innerHTML = `You loose, I have ${number}!`
        
    }
    else if (input == number || win) {
        output.innerHTML = `You guessed it, I have ${number}!`
        win = true;
        output.style.color = "#052d7c";
    } else if (input < number && !win) {

        output.innerHTML = 'You guessed too low!'

        output.style.color = "#8a0007";
    }
    else if (input > number && !win) {
        output.innerHTML = ' You guessed too High!'
        
        output.style.color = "#8a0007";
    }


    count++;
})


