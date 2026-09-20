function calculateWinrate() {
    const currentWR = parseFloat(document.getElementById("currentWR").value);
    const currentMatches = parseInt(document.getElementById("currentMatches").value);
    const targetWR = parseFloat(document.getElementById("targetWR").value);

    const currentWins = Math.round(currentWR / 100 * currentMatches);

    let matches = 0;

    while (
        ((currentWins + matches) / (currentMatches + matches)) * 100
        < targetWR
    ) {
        matches++;
    }

    document.getElementById("result").textContent =
        `${matches} matches needed`;
}