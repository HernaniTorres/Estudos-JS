// ENTENDENDO O DOCUMENT //

function show () {
    let contactList = document.getElementById('contact-list')
    console.log(contactList)

    let listElements = document.getElementsByTagName('li')
    console.log(listElements)

    let contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    let contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    let firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)

    let contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)
    
}

