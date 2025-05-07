document.querySelectorAll(".provider-box").forEach(button => {
    button.addEventListener("click", () => {
        const providerName = button.dataset.provider;
        const jackpotMeter = document.getElementById("jackpot-meter");
        document.getElementById("meter-title").innerText = `${providerName} Jackpot Meter`;
        document.getElementById("meter-value").innerText = `Jackpot Percentage: ${Math.floor(Math.random() * 100)}%`;
        jackpotMeter.style.display = "block";
    });
});
