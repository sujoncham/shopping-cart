
function updateQuantity(product, price, isCasing){
    const caseNumber = document.getElementById(product +'-number');
    let caseInput = caseNumber.value;
    if(isCasing){
        caseInput = parseInt(caseInput) + 1;
    } else if(caseInput>0){
        caseInput = parseInt(caseInput) - 1;
    }

    caseNumber.value = caseInput;
    document.getElementById(product +'-total').innerText = parseInt(caseInput) * price;

    //update total
    calculateTotal();
}

function updateTotal(product){
    const phoneNumber = document.getElementById(product +'-number');
    const phoneInput = parseInt(phoneNumber.value);
    return phoneInput;
}

//total price
function calculateTotal(){
    const phoneTotal = updateTotal('phone')*1219;
    const caseTotal = updateTotal('case')*59;
    const subTotal = phoneTotal + caseTotal;
    // console.log(subTotal);
    const tax = subTotal/10;
    const totalAmount = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalAmount;
    
}

// Mobile Price 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateQuantity('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateQuantity('phone', 1219, false);
})


//Mobile Casing Price
document.getElementById('case-plus').addEventListener('click', function(){
    updateQuantity('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateQuantity('case', 59, false);
})


