$("document").ready(() => {
    let presses = 0;
    let money = 0;
    let isFirstPress = true;

    const getRandomChance = chance => {
        let randomNumber = Math.floor(Math.random() * 101);
        if (randomNumber <= (chance - 1)) {
            return true;
        } else {
            return false;
        }
    }

    const updateInterface = () => {
        if (presses >= 0) {
            $("#timesPressed").html(`Times Pressed: ${presses}`);
        } else {
            $("#timesPressed").html(`You died :(`);
        }
        $("#moneyEarned").html(`Money Earned: $${money}`);
    }

    const buttonPressed = () => {
        if (presses >= 0) {
            presses += 1;
            if (isFirstPress) {
                isFirstPress = false;
                money = 100;
            } else {
                money *= 2;
                if (getRandomChance(1)) {
                    presses = -1;
                }
            }
            updateInterface();
        }
    }

    $("#redButton").hover(function () {
        $(this).css("cursor", "pointer");
    }, function () {
        $(this).css("cursor", "default");
    });

    $("#redButton").mousedown(function() {
        $(this).attr("src", "./images/button-pressed.svg");
        buttonPressed();
    });

    $("#redButton").mouseup(function() {
        $(this).attr("src", "./images/button.svg");
    });
});