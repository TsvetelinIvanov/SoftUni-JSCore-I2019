function attachEvents() {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_H1y9kL-_N";
    const kinveyUsername = "guest";
    const kinveyPassword = "guest";
    const endpoint = "players";
    const headers = {
        "Authorization": `Basic ${btoa(kinveyUsername + ":" + kinveyPassword)}`,
        "Content-Type": "application/json"
    };
    const startBulletsCount = 6;
    const startMoneyCount = 500;
    const reloadCost = 60;
    const reloadBulletsCount = 6;

    let allPlayers;
    let playerId;
    let selectedPlayer;

    loadGame();

    $("#reload").click(reload);
    $("#save").click(saveGame);
    $("#addPlayer").click(addPlayer);

    function loadGame(id) {
        let request = {
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/" + endpoint,
            headers
        };

        $.ajax(request).then((data) => {
            $('#players').empty();
            allPlayers = data;
            for (let player of data) {
                let $div = $(`
                <div class="player" data-id="${player._id}">
                    <div class="row">
                        <label>Name:</label>
                        <label class="name">${player.name}</label>
                    </div>
                    <div class="row">
                        <label>Money:</label>
                        <label class="money">${player.money}</label>
                    </div>
                    <div class="row">
                        <label>Bullets:</label>
                        <label class="bullets">${player.bullets}</label>
                    </div>
                </div>`);
                let $playBtn = $('<button class="play">Play</button>');
                let $deleteBtn = $('<button class="delete">Delete </button>');

                $playBtn.click(selectPlayer);
                $deleteBtn.click(deletePlayer);

                $div.append($playBtn, $deleteBtn);
                $("#players").append($div);
            }

            $('#save').css('display', 'block');
            $('#reload').css('display', 'block');
            $('#canvas').css('display', 'block');

            if (id) {
                selectedPlayer = allPlayers.filter(player => player._id == id)[0];
            } else {
                selectedPlayer = allPlayers[0];
            }

            playerId = selectedPlayer._id;
            loadCanvas(selectedPlayer);
        }).catch(error => console.log(error));
    }

    function reload(){
        if (selectedPlayer.money >= reloadCost){
            selectedPlayer.money -= reloadCost;
            selectedPlayer.bullets += reloadBulletsCount;
        }
    }

    async function saveGame(){
        try {
            await $.ajax({
                method: "PUT",
                url: baseUrl + "appdata/" + appKey + "/" + endpoint + "/" + playerId,
                headers,
                data: JSON.stringify(selectedPlayer)
            })
        } catch(error) {
            console.log(error);
        }
    }

    async function addPlayer(){
        try {
            let name = $("#addName").val();
            await $.ajax({
                method: "POST",
                url: baseUrl + "appdata/" + appKey + "/" + endpoint,
                headers,
                data: JSON.stringify({
                    name,
                    bullets: startBulletsCount,
                    money: startMoneyCount
                })
            })
        } catch (error){
            console.log(error);
        }

        allPlayers();
    }

    function selectPlayer(){
        let id = $(this).parent().data("id");
        clearInterval(canvas.intervalId);
        loadGame(id);
    }

    async function deletePlayer(){
        let id = $(this).parent().data("id");
        try {
            await $.ajax({
                method: "DELETE",
                url: baseUrl + "appdata/" + appKey + "/" + endpoint + '/' + id,
                headers
            });
        } catch (error){
            console.log(error);
        }
    }
}