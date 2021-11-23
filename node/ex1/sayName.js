const sayName = () =>{
    console.log('Hello');
}

const sayAddress = () => {
    console.log('address is: ....')
}

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;