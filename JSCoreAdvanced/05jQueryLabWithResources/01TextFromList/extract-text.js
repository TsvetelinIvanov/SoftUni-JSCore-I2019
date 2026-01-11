function extractText() {
   let $itemElements = $('#items li');
   let itemElementsArray = $itemElements.toArray();
   let itemTexts = itemElementsArray.map(li => li.textContent);
   let resultText = itemTexts.join(', ');
   let $resultElement = $('#result');
   $resultElement.text(resultText);
}
