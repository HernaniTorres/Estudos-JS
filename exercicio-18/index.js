function addPlayer () {
    let positionPlayer = document.getElementById('position').value
    let namePlayer = document.getElementById('name').value
    let numberPlayer = document.getElementById('number').value

    let confirmAdd = confirm ('Deseja escalar o seguinte jogador?' + 
        '\n\nPosição: ' + positionPlayer + '\nNome: ' + namePlayer + 
        '\nCamiseta: ' + numberPlayer
    )

    if (confirmAdd) {
        let ulTeam = document.getElementById('my-team')
        let liPlayer = document.createElement('li')
        liPlayer.id = 'player- ' + numberPlayer
        liPlayer.append(numberPlayer + ' ' + namePlayer + ' - ' + positionPlayer)
        ulTeam.appendChild(liPlayer)
        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';

    } else {
        alert('Jogador não foi escalado!')
        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
    }
}

function removePlayer () {
    let inputRemove = document.getElementById('remove').value
    let liRemove = document.getElementById('player- ' + inputRemove)

    if (!liRemove) {
        alert('Jogador não encontrado!')
        return
    }

    let confirmRemove = confirm('Deseja remover o seguinte jogador da escalação? '
        + '\n\n' + liRemove.innerText
    )

    if (confirmRemove) {
        document.getElementById('my-team').removeChild(liRemove)
        document.getElementById('remove').value = '';
    }
}