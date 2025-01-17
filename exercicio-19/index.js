function add_Tech() {
    // SELECIONANDO O FORM //
    let form = document.getElementById('form')

    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
    })

    // PEGANDO O VALOR DO NOME E INSERINDO NA TELA //
    let name = document.querySelector('input[name="name"]').value
    let paragraphName = document.createElement('p')
    paragraphName.textContent = name
    paragraphName.style.fontWeight = '600'
    paragraphName.id = 'name'
    form.appendChild(paragraphName);

    // CRIANDO O INPUT DE NOME DA TECNOLOGIA //
    let labelTech = document.createElement('label')
    labelTech.innerText = 'Nome da tecnologia: '
    labelTech.setAttribute('for', 'inputTech')
    labelTech.id = 'labelTech'

    let inputTech = document.createElement('input')
    inputTech.type = 'text'
    inputTech.id = 'inputTech'

    form.appendChild(labelTech)
    form.appendChild(inputTech)
    // form.appendChild(document.createElement('br'))
    form.appendChild(document.createElement('br'))

    // CRIANDO INPUT PARA OPÇÕES TEMPO DE EXPERIÊNCIA //
    let radioOptions = ['0-2 anos', '3-4 anos', '+5 anos']

    radioOptions.forEach(function (item, index) {
        let label = document.createElement('label')
        label.id = 'group' + index
        label.className = 'labelItems'
        label.innerText = item;

        let radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'group'
        radio.value = item;
        radio.id = 'input' + index


        label.appendChild(radio)

        form.appendChild(label);
        label.appendChild(document.createElement('br'))
        label.appendChild(document.createElement('br'))

    })

    let removeButton = document.createElement('button')
    removeButton.innerText = 'Resetar o cadastro'

    removeButton.addEventListener('click', function (ev) {
        ev.preventDefault()
        let labelTech = document.getElementById('labelTech')
        let inputTech = document.getElementById('inputTech')

        form.removeChild(labelTech)
        form.removeChild(inputTech)
        form.removeChild(paragraphName)

        radioOptions.forEach(function (item, index) {
            let labelToRemove = document.getElementById('group' + index)
            let inputToRemove = document.getElementById('input' + index)

            if (labelToRemove && inputToRemove) {
                labelToRemove.remove()
                inputToRemove.remove()
                removeButton.remove()
            }
        })
    })

    form.appendChild(removeButton)

    let buttonSave = document.createElement('button')
    buttonSave.innerText = 'Salvar as informações'

    buttonSave.addEventListener('click', function (ev) {
        ev.preventDefault()
        let name = document.querySelector('input[name="name"]').value
        let inputTech = document.getElementById('inputTech').value
        let experiencieDev = Array.from(document.querySelectorAll('input[name="group"]'))
        document.querySelector('input[name="name"]').value = '';
        let radioChecked = experiencieDev.filter(function (experiencie) {
            return experiencie.checked;
        })[0].value;

        buttonSave.remove()

        console.log({ name, inputTech, radioChecked })


    })

    form.appendChild(buttonSave)




}

