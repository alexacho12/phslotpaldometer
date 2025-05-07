const slotsData = {
    JILI: [
        { name: "Super Ace", jackpot: 89.04, volatility: 3 },
        { name: "Fortune Gems 2", jackpot: 39.85, volatility: 2 },
        { name: "Super Ace Deluxe", jackpot: 80.17, volatility: 3 },
        { name: "Golden Empire", jackpot: 67.91, volatility: 2 },
        { name: "Boxing King", jackpot: 67.89, volatility: 1 },
    ],
    PG: [
        { name: "Wild Bandito", jackpot: 91.12, volatility: 3 },
        { name: "Caishen Wins", jackpot: 81.05, volatility: 2 },
        { name: "Chocolate Deluxe", jackpot: 95.48, volatility: 3 },
        { name: "Super Golf Drive", jackpot: 93.05, volatility: 3 },
        { name: "Bakery Bonanza", jackpot: 99.59, volatility: 3 },
    ]
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
        randomIntervalUpdate(provider);
    });
});
 
