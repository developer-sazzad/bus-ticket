let sheetCountArry = [];
let totalPrice = 0;
function totalPriceCalculate(elementId){
    const sheetPrice = document.getElementById(elementId);
    totalPrice += 550;
    sheetPrice.innerText = totalPrice;
}

function buyTicket(event) {
    if (sheetCountArry.includes(event.innerText)) {
        swal("Sorry !", "You have already select this sheet !", "warning");
        return;
    }
    else if (sheetCountArry.length < 4) {
        event.classList.add('bg-green-500');
        event.classList.add('text-white');

        const text = document.getElementById('default-selected-text');
        text.classList.add = 'hidden';

        // Sheet Left
        const sheetLeft = document.getElementById('sheet-left');
        const sheetLeftValue = sheetLeft.innerText;
        const sheetLeftInt = parseInt(sheetLeftValue);
        sheetLeft.innerText = sheetLeftInt - 1;

        // total Price Calculate 
        totalPriceCalculate('total-price');

        const selectedSheetCount = document.getElementById('seleted-sheet-count');
        sheetCountArry.push(event.innerText);
        selectedSheetCount.innerText = sheetCountArry.length;

     
        // // Default Selected Text
        // const defaultSelectedText = document.getElementById('default-selected-text');
        // defaultSelectedText.classList.add('hidden');

        // Add Selected Sheet Element
        const selectedSheet = document.getElementById('selected-sheet');
        selectedSheet.innerHTML += `<li class="flex justify-between items-center">
    <span>${event.innerText}</span>
    <span>-</span>
     <span>Sovon Chair</span>
     <span>-</span>
    <span>550</span>
    </li>`

       // Discount Your Passenger
       discountNewUser();
       
    }

    else {
        swal("Ufss !", "You have already selected 4 sheet !", "error");
        return;
    }
}





// Selected Sheet Count
// const selectedSheetCount = document.getElementById('seleted-sheet-count');
// const selectedSheetCountText = selectedSheetCount.innerText;
// const selectedSheetCountInt = parseInt(selectedSheetCountText);
// selectedSheetCount.innerText = selectedSheetCountInt + 1;



document.getElementById('continue-btn').addEventListener('click', function(){
    window.location.href = 'index.html';
    
});