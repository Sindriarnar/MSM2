document.addEventListener("DOMContentLoaded", function() {
    const iconList = [
        "images/Ethereal-01-Plasma-Symbol.png",
        "images/Ethereal-02-Shadow-Symbol.png",
        "images/Ethereal-03-Mech-Symbol.png",
        "images/Ethereal-04-Crystal-Symbol.png",
        "images/Ethereal-05-Poison-Symbol.png"
    ];

    // Generate a random index to select an icon
    const randomIndex = Math.floor(Math.random() * iconList.length);

    // Set the favicon link to the randomly selected icon
    const favicon = document.getElementById("favicon");
    favicon.href = iconList[randomIndex];
});