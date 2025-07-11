function solve() {
    let buttonRebuildAKingdom = document.getElementsByTagName('button')[0];
    let buttonJoin = document.getElementsByTagName('button')[1];
    let buttonAttack = document.getElementsByTagName('button')[2];

    buttonRebuildAKingdom.addEventListener('click', rebuildAKingdom);
    buttonJoin.addEventListener('click', joinKingdom);
    buttonAttack.addEventListener('click', war);

    function rebuildAKingdom() {
        let inputKingdom = buttonRebuildAKingdom.parentElement.children[0];
        let inputKing = buttonRebuildAKingdom.parentElement.children[1];
        let kingdom = inputKingdom.value;
        let king = inputKing.value;
        if (!king instanceof String || king.length < 2) {
            inputKing.value = '';
            
            return;
        }

        let kingdoms = ['castle', 'dungeon', 'fortress', 'inferno', 'necropolis', 'rampart', 'stronghold', 'tower', 'conflux'];
        if (!kingdoms.includes(kingdom.toLowerCase())) {
            inputKingdom.value = '';
            
            return;
        }

        let h1 = document.createElement('h1');
        h1.innerHTML = kingdom.toUpperCase();
        let divCastle = document.createElement('div');
        divCastle.classList.add(kingdom.toLowerCase());
        let h2 = document.createElement('h2');
        h2.innerHTML = king.toUpperCase();
        let fieldset = document.createElement('fieldset');
        let legend = document.createElement('legend');
        legend.innerHTML = 'Army';
        let pTanks = document.createElement('p');
        pTanks.innerHTML = 'TANKS - 0';
        let pFighters = document.createElement('p');
        pFighters.innerHTML = 'FIGHTERS - 0';
        let pMages = document.createElement('p');
        pMages.innerHTML = 'MAGES - 0';
        let divArmyOutput = document.createElement('div');
        divArmyOutput.classList.add('armyOutput');

        fieldset.appendChild(legend);
        fieldset.appendChild(pTanks);
        fieldset.appendChild(pFighters);
        fieldset.appendChild(pMages);
        fieldset.appendChild(divArmyOutput);

        if (document.getElementById(kingdom.toLowerCase()).style.display == 'none') {
            document.getElementById(kingdom.toLowerCase()).appendChild(h1);
            document.getElementById(kingdom.toLowerCase()).appendChild(divCastle);
            document.getElementById(kingdom.toLowerCase()).appendChild(h2);
            document.getElementById(kingdom.toLowerCase()).appendChild(fieldset);
            document.getElementById(kingdom.toLowerCase()).style.display = 'inline-block';
        }
    }

    function joinKingdom() {
        if (!Array.from(document.getElementsByName('characterType')).some(rb => rb.checked)) {
            return;
        }

        let inputCharacter = buttonJoin.parentElement.children[0];
        let inputKingdom = buttonJoin.parentElement.children[1];
        let character = inputCharacter.value;
        let kingdom = inputKingdom.value;
        if (!character instanceof String || character.length < 2) {
            inputCharacter.value = '';
            
            return;
        }

        let kingdoms = ['castle', 'dungeon', 'fortress', 'inferno', 'necropolis', 'rampart', 'stronghold', 'tower', 'conflux'];
        if (!kingdoms.includes(kingdom.toLowerCase())) {
            inputKingdom.value = '';
            
            return;
        }

        if (document.getElementById(kingdom.toLowerCase()).style.display === 'none') {
            inputKingdom.value = '';
            
            return;
        }

        document.getElementById(kingdom.toLowerCase()).children[3].children[4].innerHTML += character + ' ';

        let checkedRadioButton = Array.from(document.getElementsByName('characterType')).filter(rb => rb.checked)[0].value;
        switch (checkedRadioButton) {
            case 'tank':
                let tankText = document.getElementById(kingdom.toLowerCase()).children[3].children[1].innerHTML;
                let tankCount = tankText.split(' - ')[1];
                document.getElementById(kingdom.toLowerCase()).children[3].children[1].innerHTML = 'TANKS - ' + (Number(tankCount) + 1);
                break;
            case 'fighter':
                let fighterText = document.getElementById(kingdom.toLowerCase()).children[3].children[2].innerHTML;
                let fighterCount = fighterText.split(' - ')[1];
                document.getElementById(kingdom.toLowerCase()).children[3].children[2].innerHTML = 'FIGHTERS - ' + (Number(fighterCount) + 1);
                break;
            case 'mage':
                let mageText = document.getElementById(kingdom.toLowerCase()).children[3].children[3].innerHTML;
                let mageCount = mageText.split(' - ')[1];
                document.getElementById(kingdom.toLowerCase()).children[3].children[3].innerHTML = 'MAGES - ' + (Number(mageCount) + 1);
                break;
            default:
                break;
        }
    }

    function war() {
        let inputAttacker = buttonAttack.parentElement.children[1];
        let inputDefender = buttonAttack.parentElement.children[2];
        let attackerName = inputAttacker.value;
        let defenderName = inputDefender.value;

        let kingdoms = ['castle', 'dungeon', 'fortress', 'inferno', 'necropolis', 'rampart', 'stronghold', 'tower', 'conflux'];
        if (!kingdoms.includes(attackerName.toLowerCase()) || !kingdoms.includes(defenderName.toLowerCase())) {
            inputAttacker.value = '';
            inputDefender.value = '';
            
            return;
        }
        
        if (document.getElementById(attackerName.toLowerCase()).style.display === 'none' || document.getElementById(defenderName.toLowerCase()).style.display === 'none') {
            inputAttacker.value = '';
            inputDefender.value = '';
            
            return;
        }

        let attacker = document.getElementById(attackerName.toLowerCase());
        let defender = document.getElementById(defenderName.toLowerCase());

        let attackerPoints = 0;
        attackerPoints += Number(attacker.children[3].children[1].innerHTML.split(' - ')[1]) * 20;
        attackerPoints += Number(attacker.children[3].children[2].innerHTML.split(' - ')[1]) * 50;
        attackerPoints += Number(attacker.children[3].children[3].innerHTML.split(' - ')[1]) * 70;

        let defenderPoints = 0;
        defenderPoints += Number(defender.children[3].children[1].innerHTML.split(' - ')[1]) * 80;
        defenderPoints += Number(defender.children[3].children[2].innerHTML.split(' - ')[1]) * 50;
        defenderPoints += Number(defender.children[3].children[3].innerHTML.split(' - ')[1]) * 30;

        if (attackerPoints > defenderPoints) {
            defender.children[2].innerHTML = attacker.children[2].innerHTML;
        }
    }
}

//in Judje must be paste without this below
//solve();
