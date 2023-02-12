console.log('client side javascript code running');



// fetch('http://localhost:3000/weather?address=Boston').then((response)=>{

//     response.json().then((data)=>{
//         if(data.error){
//             console.log('error cannot connect to the site!');
//         }

//         else{
//             console.log('location: ',data.location);
//             console.log('forecast: ',data.forecast);
//         }

//     })
// })


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')


messageOne.textContent = 'A in load mek ..........'
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
            messageTwo.textContent = 'A chunga error message hi chhiar la ti nawn leh rawh'
        }

        else{
            messageOne.textContent = data.location

            messageTwo.textContent = data.forecast
        }

    })
})

    
})
