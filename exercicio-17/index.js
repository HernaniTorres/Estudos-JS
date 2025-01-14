// Adicionar o evento submit fora da função showValue para evitar múltiplos ouvintes
let formAdd = document.getElementById('form-add');
formAdd.addEventListener('submit', function (evento) {
    evento.preventDefault();
    document.getElementById('position-player').value = '';
    document.getElementById('name-player').value = '';
    document.getElementById('number-shirt').value = '';
});

function showValue() {
    let positionPlayer = document.getElementById('position-player').value;
    let namePlayer = document.getElementById('name-player').value;
    let numberShirt = document.getElementById('number-shirt').value;
    let escalationPlayers = document.getElementById('escalation-players');
    
    // Confirmação do usuário
    let confirmAdd = confirm("Deseja escalar o jogador com os seguintes dados?\n\nPosição do jogador: " + positionPlayer + "\nNome do jogador: " + namePlayer + "\nNúmero da camiseta: " + numberShirt);

    if (confirmAdd) {
        alert('Jogador escalado!');

        let ulPlayers = document.createElement('ul');
        let liPosition = document.createElement('li');
        let liName = document.createElement('li');
        let liShirt = document.createElement('li');

        liPosition.appendChild(document.createTextNode(positionPlayer));
        liName.appendChild(document.createTextNode(namePlayer));
        liShirt.appendChild(document.createTextNode(numberShirt));

        let h3 = document.createElement('h3');
        h3.innerText = "Escalação";

        ulPlayers.append(h3, liPosition, liName, liShirt);
        escalationPlayers.appendChild(ulPlayers);
    } else {
        alert('Cancelando a escalação..');
    }
}

let formRemove = document.getElementById('form-remove')
formRemove.addEventListener('submit', function (evento) {
    evento.preventDefault();
    document.getElementById('remove-shirt').value = '';
})


function removePlayer() {
    let sectionPlayers = document.getElementById('escalation-players');
    let removeNumber = document.getElementById('remove-shirt').value;
    let players = document.getElementsByTagName('li');
    
    let found = false;

    // Itera sobre os <li> e verifica o número da camiseta (que deve estar no li correto)
    for (let i = 0; i < players.length; i++) {
        let playerNumber = players[i].innerText.trim();

        // Verifica se o texto do <li> é o número da camiseta e remove o <ul> que contém esse <li>
        if (playerNumber == removeNumber) {
            let ulParent = players[i].parentElement;  // Obtém o <ul> que contém o <li>
            sectionPlayers.removeChild(ulParent);  // Remove o <ul> que contém o jogador
            found = true;
            break;
        }
    }

    if (!found) {
        alert('Informe um número de camiseta válido!');
    }
}
