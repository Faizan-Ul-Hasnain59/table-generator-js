function tableGenerator(event) {
  event.preventDefault();
  let userInput = document.querySelector('#user_input').value;
  let result = document.querySelector('#display');

  result.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
   
    result.innerHTML += `${userInput} x ${i} = ${userInput * i}<br>`;
  }

}

document.addEventListener('submit', tableGenerator);

