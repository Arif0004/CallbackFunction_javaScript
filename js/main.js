
// function Calculate(num){
//     console.log(`${num} of squre is: ${num*num}`);
// }
// 0
// function higherorderfunction(x, callback){
//     callback(x)
// }

//higherorderfunction(6, Calculate)

const paymentSuccess = true;
const marks = 70;
function enroll(callback){
    console.log('Course enrollment is in progress');

    setTimeout(function(){
        if(paymentSuccess){
            callback();

        }else{
            console.log('Payment faailde!');
        }

    }, 2000);
}

function progress(callback){
    console.log('Couurse on progress...');
    setTimeout(function(){
        if(marks>=80){
            callback();
        }else{
            console.log('You could not get enough marks to get the ertifiacte');

        }
    }, 3000);
}

function getCertificate(){
    console.log('Preparing your certificate');
    setTimeout(function(){
        console.log('Congrats! you got the');

    }, 1000);
}

enroll(function(){
    progress(getCertificate)
});