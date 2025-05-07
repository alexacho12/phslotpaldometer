const slotsData = {
    JILI: [...],
    PG: [...],
    FaChai: [...],
    BNG: [...],
    JDB: [...],
    YB: [...],
    CQ9: [...],
    JFF: [...],
    AW: [...],
    MW: [...],
    RSG: [...],
    R88: [...],
    KA: [...],
    SG: [...]
};

// Function to update jackpot values dynamically
function updateJackpotValues(provider) {
    slotsData[provider].forEach(slot => {
        let changeRange = slot.volatility * (Math.random() * 5 - 2.5);
        let jackpotBoost = Math.random() < 0.05 ? Math.random() * 10 : 0;

        slot.jackpot = Math.max(0, Math.min(100, (slot.jackpot + changeRange + jackpotBoost).toFixed(2)));
    });
}

// Function to sort and display slots
function displaySlots(provider) {
    document.getElementById("slot-title").innerText = `${provider} Slot Games`;

    const sortedSlots = slotsData[provider].sort((a, b) => b.jackpot - a.jackpot);
    const slotList = document.getElementById("sorted-slots");
    slotList.innerHTML = "";

    sortedSlots.forEach(slot => {
        const listItem = document.createElement("li");
        listItem.textContent = `${slot.name}: ${slot.jackpot}%`;
        slotList.appendChild(listItem);
    });

    document.getElementById("slot-list").style.display = "block";
}

// Function to trigger updates at random intervals
function randomIntervalUpdate(provider) {
    updateJackpotValues(provider);
    displaySlots(provider);

    let nextUpdate = Math.random() * (25 - 10) + 10;
    setTimeout(() => randomIntervalUpdate(provider), nextUpdate * 1000);
}

// Add event listeners for provider buttons
document.querySelectorAll(".provider-box").forEach(button => {
    button.addEventListener("click", () => {
        const provider = button.dataset.provider;
        if (slotsData[provider]) {
            randomIntervalUpdate(provider);
        } else {
            console.log(`Provider ${provider} not found`);
        }
    });
});
