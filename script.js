const totalInput = document.getElementById("currentMatches");
const wrInput = document.getElementById("currentWR");
const targetInput = document.getElementById("targetWR");
const result = document.getElementById("result");

function calculateWinrate() {
    const total = parseInt(totalInput.value);
    const wr = parseFloat(wrInput.value);
    const targetWR = parseFloat(targetInput.value);

    // Total Match
    if (!Number.isInteger(total) || total <= 0) {
        result.textContent = "Input valid match total";
        return;
    }

    // WR
    if (isNaN(wr) || wr <= 0 || wr >= 100) {
        result.textContent = "Input valid winrate";
        return;
    }

    // Sama persis dengan Kotlin:
    // val win = ((w / 100) * t).toInt()
    const win = Math.trunc((wr / 100) * total);

    // Sama dengan:
    // val lose = t - win
    const lose = total - win;

    let funText;

    // Target WR
    if (
        !isNaN(targetWR) &&
        targetWR > 0 &&
        targetWR < 100
    ) {
        const needed =
            ((targetWR / 100 * total - win) /
            (1 - targetWR / 100));

        if (needed <= 0) {
            funText = "Your Winrate is already above target!";
        } else {
            funText =
                `Need ${Math.trunc(needed)} win without lose to reach ${targetWR}%`;
        }

    } else {
        funText = "Input Winrate Target";
    }

    result.innerHTML = `
        <strong>Win: ${win} | Lose: ${lose}</strong>
        <br>
        <span>${funText}</span>
    `;
}

// Android lu menghitung setiap input berubah,
// jadi web-nya kita bikin sama.
totalInput.addEventListener("input", calculateWinrate);
wrInput.addEventListener("input", calculateWinrate);
targetInput.addEventListener("input", calculateWinrate);