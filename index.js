function writeCards(nameArray, event) {
    const newArray=[]
    for (let i=0; i<nameArray.length; i++){
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}

function countDown(num) {
    let countup=num+1;
    if(num<0){
        return
    }
    while(countup>0){
        countup--
        console.log(countup)
    }
}