function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br>
        <br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display"></ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    
    $(selector).html(form);
    const maxCapacity = 150;

    let $inputProduct = $('input[class="custom-select"]');
    //let $inputProduct = $('.custom-select');
    let $inputPrice = $('#price');
    let $inputQuantity = $('#quantity');
    let $buttonSubmit = $('#submit');
    let $ulInventory = $('ul[class="display"]');
    //let $ulInventory = $('.display');
    let $outputCapacity = $('#capacity');
    let $outputPrice = $('#sum');

    // $inputProduct.on('input', () => {
    //     let isEmpty = $inputProduct.val() === '';
    //     $buttonSubmit.attr('disabled', isEmpty);
    // });
    $inputProduct.on('input', () => {
        if ($inputProduct.val() === '') {
            $buttonSubmit.attr('disabled', true);            
        }
        else {
            $buttonSubmit.attr('disabled', false);            
        }
    });

    $buttonSubmit.on('click', addProduct);

    function addProduct() {
        let product = $inputProduct.val();
        let price = Number($inputPrice.val());
        let quantity = Number($inputQuantity.val());
        let oldCapacity = Number($outputCapacity.val());

        let capacity = oldCapacity + quantity;
        if (capacity < maxCapacity) {
            let $li = $('<li>');
            $li.text(`Product: ${product} Price: ${price} Quantity: ${quantity}`);
            $ulInventory.append($li);
            
            $outputCapacity.val(capacity);
            let totalPrice = Number($outputPrice.val());
            totalPrice += price;
            $outputPrice.val(totalPrice);            
        }
        else {            
            $outputCapacity.val('full');
            $outputCapacity.addClass('fullCapacity');
            disableInputFields();
        }       

        resetInputFields();
    }

    function disableInputFields() {
        $inputProduct.attr('disabled', true);
        $inputPrice.attr('disabled', true);
        $inputQuantity.attr('disabled', true);
        $buttonSubmit.attr('disabled', true);
    }

    function resetInputFields() {
        $inputProduct.val('');
        $inputPrice.val(1);
        $inputQuantity.val(1);
        $buttonSubmit.attr('disabled', true);
    }
}
