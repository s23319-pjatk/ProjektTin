const wiad = document.querySelector('.Wiadomo');
const szt = document.querySelector('.Sztok');
const fira1 = document.querySelector('Firm1');
const fira2 = document.querySelector('Firm2');
const fira3 = document.querySelector('Firm3');
const fira4 = document.querySelector('Firm4');
const nextBtn = document.querySelector('.Next')
const url = "http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php";

let getDane = () => {
    fetch(url)
    .then(data=> data.json())
    .then(item =>{
        wiad.textContent = `${item.news}`
        szt.textContent = `${item.stock}`
        fira1.textContent= `${number.firma1}`
        fira2.textContent= `${item.firma2}`
        fira3.textContent= `${item.firma3}`
        fira4.textContent= `${item.firma4}`
    })
}

nextBtn.addEventListener('click', getDane)

getDane()