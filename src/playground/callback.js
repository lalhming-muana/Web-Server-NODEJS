
setTimeout(() => {
    console.log('Post check from the server after 2 seconds');
}, 2000);




const geocode = (address, callback)=>{
    setTimeout(() => {
        const data ={
            latitude: 0,
            longitude: 0
        }
        callback(data);
    }, 2000);
}

const data = geocode('Aizawl', (data)=>{
    console.log(data)
})
