function solution() {
	let addButton = $('button')[0];//in Judge must be paste without this line
	addButton.addEventListener('click', addToShop);//in Judge must be paste without this line

	function addToShop() {//in Judge must be paste without this line
		let $christmasGiftShop = $('#christmasGiftShop');

		let $toyType = $('#toyType');
		let $toyPrice = $('#toyPrice');
		let $toyDescription = $('#toyDescription');

		if ($toyType.val() && Number($toyPrice.val()) && $toyDescription.val()) {
			let $giftDiv = $('<div>');
			$giftDiv.addClass('gift');
			let $img = $('<img src="gift.png"/>');
			let $h2 = $('<h2>');
			$h2.text($toyType.val());
			let $p = $('<p>');
			$p.text($toyDescription.val());
			let $button = $('<button>');
			$button.text(`Buy it for $${$toyPrice.val()}`);
			$button.on('click', () => $giftDiv.remove());

			$giftDiv.append($img, $h2, $p, $button);
			$christmasGiftShop.append($giftDiv);
		}

		$toyType.val('');
		$toyPrice.val('');
		$toyDescription.val('');
	}//in Judge must be paste without this line
}