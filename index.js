const form = document.querySelector('form');
const dogName = form.querySelector('#dogName');
const dogBreed = form.querySelector('#dogBreed');

function init () {
    form.addEventListener('submit', handlePost)
}

function handlePost(event) {
    event.preventDefault();
    fetch('http://localhost:3000/dogs/', {
        // method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'dogName': dogName.value,
            'dogBreed': dogBreed.value
        })
    })
        .then(repsonse => repsonse.json())
        .then(data => console.log(data))
        .catch(error => console.log(` Whoops! \br ${error}`))
}

init();

// ! ############## Lab starts here ###########

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name': userName,
            'email': userEmail
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            appendID(data.id)
        })
        .catch(error => handleError(error))
}

function appendID(id) {
    document.body.append(id);
}

function handleError(error) {
    let div = document.createElement('div');
    div.style.border = '4px solid red';
    div.style.margin = 'auto';
    div.style.width = '500px';
    div.innerHTML = `
    <h4 style="color:red">Error!</h4>
    <p>${error}</p>
    `
    document.body.append(div);
}