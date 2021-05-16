function solve() {
  let storage = {}; 
  let profit = 0;
  
  let loadButton = document.getElementsByTagName('button')[0];
  loadButton.addEventListener('click', load);
  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click', buy);
  let endDayButton = document.getElementsByTagName('button')[2];
  endDayButton.addEventListener('click', endDay);
  
  let logTextarea = document.getElementsByTagName('textarea')[2];

  function load(){
    let loadedProducts = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    for(let product of loadedProducts){
      if(!storage.hasOwnProperty(product.name)){
        storage[product.name] = {
          price: product.price,
          quantity: product.quantity
        }
      } else {        
        storage[product.name].quantity += product.quantity;
      }

      logTextarea.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
    }
  }

  function buy(){
    let product = JSON.parse(document.getElementsByTagName('textarea')[1].value);
    if(storage.hasOwnProperty(product.name) && storage[product.name].quantity >= product.quantity){
      storage[product.name].quantity -= product.quantity;
      document.getElementsByTagName('textarea')[2].value += `${product.quantity} ${product.name} sold for ${product.quantity * storage[product.name].price}.\n`;
      profit += product.quantity * storage[product.name].price;
    } else {
      logTextarea.value += 'Cannot complete order.\n'
    }
  }

  function endDay(){
    logTextarea.value += `Profit: ${profit.toFixed(2)}.\n`;
    
    loadButton.removeEventListener('click', load);
    buyButton.removeEventListener('click', buy);
    endDayButton.removeEventListener('click', endDay);
  }
}
