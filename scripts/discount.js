
const discountBtn = document.getElementById('discount-btn');
const discountInput = document.getElementById('discount-input');

function discountNewUser() {

    if (sheetCountArry.length > 3) {
        discountInput.removeAttribute('disabled');
        discountBtn.removeAttribute('disabled')
    }
}
function discountCheck() {
    if (discountInput.value === 'NEW15') {
        const totalPrice = document.getElementById('total-price').innerText;
        const totalPriceValue = parseInt(totalPrice);
        console.log(totalPriceValue);
        const discountAmount = totalPriceValue - (15 / 100);
        console.log(discountAmount);

    }
}



document.getElementById('discount-btn').addEventListener("click", function () {
    const totalPrize = document.getElementById('total-price').innerText;
    const totalPrizeValue = parseInt(totalPrize);

    let discountPrice = 0;
    const discountInputField = document.getElementById('discount-input').value;
    if (discountInputField !== "NEW15" && discountInputField !== "COUPLE20") {
        alert('Wrong Coopon Code');
        return;

    } else if (discountInputField == "NEW15") {

        discountPrice = totalPrizeValue * .15;
        const remainingTotal = totalPrizeValue - discountPrice;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = remainingTotal;
    }
    else if (discountInputField == "COUPLE20") {
        discountPrice = totalPrizeValue * .20;
        const remainingTotal = totalPrizeValue - discountPrice;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = remainingTotal;
    }
    const showDiscountCoupon = document.getElementById('coupon-display');
    showDiscountCoupon.innerHTML = `
            <p>Discount</p>
            <p> </p>
            <p> - BDT <span> ${discountPrice} </span></p>
       `

})

// const discountInputValue = document.getElementById('discount-input');
// const discountValue = discountInputValue.value;
// // console.log(discountValue);

// const totalPrice = document.getElementById('total-price').innerText;
// const totalPriceValue = parseInt(totalPrice);
// // console.log(totalPriceValue);

// if (discountValue === 'NEW15') {
//     const discountAmount = totalPriceValue - (15 / 100);
//     console.log(discountAmount);
// }
// else {
//     console.log('No Discount')
// }