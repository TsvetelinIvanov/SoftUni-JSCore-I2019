function dart() {
    const maxScore = 100;
    // const colorMapping = {
    //     firstLayer: 'Green',
    //     secondLayer: 'Yellow',
    //     thirdLayer: 'Orange',
    //     fourthLayer: 'Red',
    //     fifthLayer: 'Purple',
    //     sixsthLayer: 'Blue'
    // };
    const colorMapping = {
        firstLayer: 0,
        secondLayer: 1,
        thirdLayer: 2,
        fourthLayer: 3,
        fifthLayer: 4,
        sixthLayer: 5
    };

    $('#playBoard').on('click', 'div', onPlayBoardClick);

    function onPlayBoardClick(event) {
        event.stopPropagation();

		let points = getScore(event.target.id);
		
        selectPlayer(points);
    }

    function getScore(id) {
        return +$('#scoreBoard')
            .find('tbody tr')
            .eq(colorMapping[id])
            .children()
            .eq(1)
            .text()
            .split(' ')[0];
    }

    let isHome = true;
    function selectPlayer(score) {
        let selector = '';
        isHome ? selector = '#Home' : selector = '#Away';
        
        let $pointsElement = $(selector).children().eq(0);
        $pointsElement.text((i, t) => Number(t) + score);
        
        if(isHome){
            $('#turns').children().eq(0).text('Turn on Away');
            $('#turns').children().eq(1).text('Next is Home');
        }
        else{
            $('#turns').children().eq(0).text('Turn on Home');
            $('#turns').children().eq(1).text('Next is Away');
        }

        let currentPoints = Number($pointsElement.text());
        if (currentPoints >= maxScore){
            if(isHome){
                $('#Home').children().eq(1).css({
                    backgroundColor: 'green'
                });
                $('#Away').children().eq(1).css({
                    backgroundColor: 'red'
                });
            }
            else {
                $('#Away').children().eq(1).css({
                    backgroundColor: 'green'
                });
                $('#Home').children().eq(1).css({
                    backgroundColor: 'red'
                });
            }
            
            $('#playBoard').off('click');
        } 
        isHome = !isHome;     
    } 
}