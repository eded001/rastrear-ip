let p = document.getElementsByTagName('p')[0];

fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const ip = data.ip;
    console.log('Endereço IP:', ip);

    p.innerText = ip;
})
.catch(error => {
    console.error('Ocorreu um erro:', error);
});