function showSlots(provider) {
    const slots = {
        "JILI": ["Crazy Jungle", "Fortune Tree"],
        "PG": ["Dragon Legend", "Lucky Neko"],
        "FC": ["Wild West", "Golden Buffalo"],
        "MG": ["Mega Moolah", "Thunderstruck"],
        "BB": ["Bonanza", "Buffalo King"]
    };
    document.getElementById("slots-list").innerHTML = slots[provider].map(slot => `<p>${slot}</p>`).join("");
    document.getElementById("slots-section").classList.remove("hidden");
}
