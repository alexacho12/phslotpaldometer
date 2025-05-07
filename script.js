const slotsData = [
    { name: "Super Ace", jackpot: 88.2 },
    { name: "Fortune Gems 2", jackpot: 39.54 },
    { name: "Super Ace Deluxe", jackpot: 79.9 },
    { name: "Golden Empire", jackpot: 67.9 },
    { name: "Boxing King", jackpot: 67.22 },
    { name: "Crazy777", jackpot: 72.97 },
    { name: "Charge Buffalo", jackpot: 79.88 },
    { name: "Mega Ace", jackpot: 63.04 },
    { name: "Fortune Gems 3", jackpot: 40.56 },
    { name: "Money Coming", jackpot: 79.28 },
    { name: "Lucky Jaguar", jackpot: 50.77 },
    { name: "Shanghai Beauty", jackpot: 41.23 },
    { name: "Fortune Gems", jackpot: 62.59 },
    { name: "Charge Buffalo Ascent", jackpot: 23.73 },
    { name: "Wild Ace", jackpot: 19.94 }
];

// Function to update jackpot values randomly
function updateJackpotValues() {
    slotsData.forEach(slot => {
        let change = (Math.random() * 10 - 5).toFixed(2); // Changes between -5% to +5%
        slot.jackpot = Math.max(0, Math.min(100, (slot.jackpot + parseFloat(change)).toFixed(2))); // Keeps values between 0-100%
    });
}

// Function to sort and display slots
function displaySlots() {
    const sortedSlots = slotsData.sort((a, b) => b.jackpot - a.jackpot);
    const slotList = document.getElementById("sorted-slots");
    slotList.innerHTML = "";

    sortedSlots.forEach(slot => {
        const listItem = document.createElement("li");
        listItem.textContent = `${slot.name}: ${slot.jackpot}%`;
        slotList.appendChild(listItem);
    });

    document.getElementById("slot-list").style.display = "block";
}

// Run the update every 15 seconds
setInterval(() => {
    updateJackpotValues();
    displaySlots();
}, 15000);

// Display slots initially when JILI is clicked
document.querySelector(".provider-box[data-provider='JILI']").addEventListener("click", displaySlots);
