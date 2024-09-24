
console.log('Select Seet JS File');
// document.getElementById('a1').addEventListener('click', function(){
//     const getLeftSeet = document.getElementById('left-seet').innerHTML;
//     const getLeftSeetString = getLeftSeet.innerHTML;

//     console.log(getLeftSeet);
// })


// step-1: add event listener to the deposit button
// step-2: get the deposit amount from the deposit input field
// For input field use .value to the the value inside the input field
// step-3: get the current deposit total
// for non-input(element other than input, textarea) use innerText to get the text
// step-4: add numbers to set the total deposit
// step-5: get ballance current total
// step-6: calculate current total balance
// step-7: clear the deposit field

// document.getElementById('a1').addEventListener('click', function(){
//     const showSelectSeet = document.getElementById('a1-seet');
//     showSelectSeet.classList.remove = 'hidden';
// })

// document.getElementById('j4').addEventListener('click', function(){
//     console.log('J4 Clicked');
//     // this.classList.remove = 'bg-ticket';
// })




// const passengerName = document.getElementById('passenger-name');
// const passengerNumber = document.getElementById('passenger-number');
// const passengerEmail = document.getElementById('passenger-email');



document.getElementById('submit-btn').addEventListener('click', function () {

    // if(NaN !== false){
    //     // swl('Fill up your Form. then submit the form');
    //     return awal;
    // }
    const passengerName = document.getElementById('passenger-name').value;
    const passengerNumber = document.getElementById('passenger-number').value;
    const passengerEmail = document.getElementById('passenger-email').value;

    

    if(passengerNumber !== '' && passengerName !== '' && passengerEmail !== ''){
        swal({
            title: "Congratulations !",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          })
          .then((isOkay) =>{
            if(isOkay){
                window.location.href = 'successfuly.html';
            }
          });

    }
    else{
        swal("Sorry !", "You have not fil-up your Form!", "error");
        return;
         
    }
    // console.log(passengerName, passengerNumberString, passengerEmail);


});




