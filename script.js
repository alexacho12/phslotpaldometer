const jiliSlots = [
    { name: "Super Ace", jackpot: 89.04, volatility: 3 },
    { name: "Fortune Gems 2", jackpot: 39.85, volatility: 2 },
    { name: "Super Ace Deluxe", jackpot: 80.17, volatility: 3 },
    { name: "Golden Empire", jackpot: 67.91, volatility: 2 },
    { name: "Boxing King", jackpot: 67.89, volatility: 1 },
    { name: "Crazy777", jackpot: 72.86, volatility: 3 },
    { name: "Charge Buffalo", jackpot: 79.97, volatility: 2 },
    { name: "Mega Ace", jackpot: 63.35, volatility: 2 },
    { name: "Fortune Gems 3", jackpot: 40.87, volatility: 1 },
    { name: "Money Coming", jackpot: 79.57, volatility: 2 },
    { name: "Lucky Jaguar", jackpot: 50.72, volatility: 1 },
    { name: "Shanghai Beauty", jackpot: 41.81, volatility: 1 },
    { name: "Fortune Gems", jackpot: 62.14, volatility: 2 },
    { name: "Charge Buffalo Ascent", jackpot: 24.86, volatility: 1 },
    { name: "Wild Ace", jackpot: 19.92, volatility: 3 }
];

// Function to update jackpot values dynamically
function updateJackpotValues() {
    jiliSlots.forEach(slot => {
        let changeRange = slot.volatility * (Math.random() * 5 - 2.5); // Volatility affects change amount
        let jackpotBoost = Math.random() < 0.05 ? Math.random() * 10 : 0; // Rare jackpot boost (5% chance)

        slot.jackpot = Math.max(0, Math.min(100, (slot.jackpot + changeRange + jackpotBoost).toFixed(2))); // Keeps values between 0-100%
    });
}

// Function to sort and display slots
function displayJiliSlots() {
    const sortedSlots = jiliSlots.sort((a, b) => b.jackpot - a.jackpot);
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
function randomIntervalUpdate() {
    updateJackpotValues();
    displayJiliSlots();

    let nextUpdate = Math.random() * (25 - 10) + 10; // Random interval between 10-25 seconds
    setTimeout(randomIntervalUpdate, nextUpdate * 1000);
}

// Start the dynamic update cycle
randomIntervalUpdate();

// Display JILI slots when JILI is clicked
document.querySelector(".provider-box[data-provider='JILI']").addEventListener("click", displayJiliSlots);
