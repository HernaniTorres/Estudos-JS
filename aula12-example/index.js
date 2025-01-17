let form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    let name = document.querySelector('input[name="name"]').value
    let address = document.querySelector('input[name="address"]').value
    let breadType = document.querySelector('select[name="breadType"]').value
    let main = document.querySelector('input[name="main"]').value
    let observations = document.querySelector('textarea[name="observations"]').value
    let  salad = ''

    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += " - " + item.value + '\n'
    })

    console.log({name, address, breadType, main, salad, observations})

    name = document.querySelector('input[name="name"]').value = '';
    address = document.querySelector('input[name="address"]').value = '';
    breadType = document.querySelector('select[name="breadType"]').value = '';
    main = document.querySelector('input[name="main"]').value = '';
    observations = document.querySelector('textarea[name="observations"]').value = '';

}) 

