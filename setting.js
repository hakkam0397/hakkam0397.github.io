document.addEventListener("DOMContentLoaded", function() {
    const settingsData = [
        { 
            text: "Help", 
            link: "#", 
            imageSrc: "Resources/Images/nextArrow.png" 
        },
        { 
            text: "Policy", 
            link: "privacy.html", 
            imageSrc: "Resources/Images/nextArrow.png" 
        },
        { 
            text: "Support", 
            link: "#", 
            imageSrc: "Resources/Images/nextArrow.png" 
        }
    ];

    const settingContainer = document.getElementById('setting-container');

    const ul = document.createElement('ul');
    settingsData.forEach(setting => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p>${setting.text}</p>
            <img src="${setting.imageSrc}" alt="Next">
        `;
        li.addEventListener('click', () => {
            location.href = setting.link;
        });
        ul.appendChild(li);
    });
    settingContainer.appendChild(ul);

});