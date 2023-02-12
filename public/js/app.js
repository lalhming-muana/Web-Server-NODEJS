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
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            console.log('error cannot connect to the site!');
        }

        else{
            console.log('location: ',data.location);
            console.log('forecast: ',data.forecast);
        }

    })
})

    
})
