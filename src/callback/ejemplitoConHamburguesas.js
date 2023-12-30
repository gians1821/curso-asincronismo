function makingOrder(orden) {
    console.log(`${orden} ready!`)
}

function order(orden, callback) {
    console.log(`Taking order ${orden}`)
    setTimeout(() => {
        callback(orden)
    }, 5000);
    console.log(`Doing order ${orden}`)
}

order('Burguer', makingOrder)
