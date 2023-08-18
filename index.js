let total = 0;
let grandTotal = 0;

function handleClickBtn(button) {
    const itemName = button.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    const price = button.parentNode.childNodes[5].innerText.split(' ')[1];
    li.innerText = itemName;
    //skipping the duplicate items part
    const selectedItem = document.getElementById('selected-items');
    const child = selectedItem.children;
    for (let i of child) {
        if (i.innerText.includes(li.innerText)) {
            total = total + parseInt(price);
            document.getElementById('total').innerText = total;
            discount(total);
            return;
        }
    }
    selectedItem.appendChild(li);
    total = total + parseInt(price);
    document.getElementById('total').innerText = total;
    discount(total);
}
function discount(sum){
    const dis = parseInt(document.getElementById('discount').innerText);
    const finalTotal = sum - (sum*(dis/100));
    grandTotal = finalTotal;
    document.getElementById('grand-total').innerText = grandTotal;
}