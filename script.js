//<!-- Author: Harminder Singh *-->
//audioData
const audioData = [
    { image: "Resources/Images/audio1.png", title: "Sleepod_V1" },
    { image: "Resources/Images/audio2.png", title: "Sleep Music Vol.15" },
    { image: "Resources/Images/audio3.png", title: "Calm your nerves" }
];
//articlesData
const articlesData = [
    {
        image: "Resources/Images/articleImage.png",
        title: "Good Sleep for Good Health",
        description: "Sometimes, the pace of modern life barely gives you time to stop and rest...",
        details: "21st April, 12:42 AM • 6 min read"
    },
    {
        image: "Resources/Images/articleImage.png",
        title: "The Benefits of a Regular Sleep Schedule",
        description: "Consistency is key when it comes to maintaining a healthy sleep routine...",
        details: "15th April, 11:30 PM • 4 min read"
    },
    {
        image: "Resources/Images/articleImage.png",
        title: "How to Create a Sleep-Friendly Environment",
        description: "Your sleep environment plays a significant role in the quality of your sleep...",
        details: "10th April, 9:15 PM • 5 min read"
    },
    {
        image: "Resources/Images/articleImage.png",
        title: "Understanding Sleep Stages and Cycles",
        description: "Sleep is divided into stages and cycles that are essential for different bodily functions...",
        details: "8th April, 10:20 AM • 7 min read"
    },
    {
        image: "Resources/Images/articleImage.png",
        title: "Foods That Help You Sleep Better",
        description: "Certain foods can promote better sleep by affecting sleep-related hormones...",
        details: "5th April, 8:00 PM • 3 min read"
    }
];
//sleepData
const framesData = [
    {
        textWrapper: "Awake",
        textWrapper2: "40",
        textWrapper3: "35",
        image: "Resources/Images/greenUpArrow.png"
    },
    {
        textWrapper: "Light",
        textWrapper2: "40",
        textWrapper3: "35",
        image: "Resources/Images/greenUpArrow.png"
    }
];

//audioFunction
document.addEventListener('DOMContentLoaded', () => {
    const audioSection = document.querySelector('.audio-section');
    audioData.forEach(audio => {
        const audioDiv = document.createElement('div');
        audioDiv.className = 'audio';
        audioDiv.innerHTML = `
            <img src="${audio.image}" alt="Audio Image">
            <div class="audio-title">${audio.title}</div>
        `;
        audioSection.appendChild(audioDiv);
    });
});
//ArticlesFunction
document.addEventListener('DOMContentLoaded', () => {
    const articlesSection = document.querySelector('.articles-section');
    articlesData.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `
            <img src="${article.image}" alt="Article Image">
            <div class="article-content">
                <div class="article-title">${article.title}</div>
                <div class="article-description">${article.description}</div>
                <div class="article-details">${article.details}</div>
            </div>
        `;
        articlesSection.appendChild(articleDiv);
    });
});

//sleepDataSection
document.addEventListener('DOMContentLoaded', () => {
    const framesSection = document.querySelector('.frames-section');
    framesData.forEach(frame => {
        const frameDiv = document.createElement('div');
        frameDiv.className = 'frame';
        frameDiv.innerHTML = `
            <div class="div">
                <div class="rectangle"></div>
                <div class="text-wrapper">${frame.textWrapper}</div>
            </div>
            <div class="div-2">
                <div class="div-3">
                    <div class="text-wrapper-2">${frame.textWrapper2}</div>
                    <div class="text-wrapper-3">${frame.textWrapper3}</div>
                </div>
                <img class="bxs-up-arrow" src="${frame.image}" />
            </div>
        `;
        framesSection.appendChild(frameDiv);
    });
});



document.getElementById('sleepDetails').addEventListener('click', function () {
    const overlay = document.getElementById('sleepDetails');
    overlay.classList.add('active');

    setTimeout(function () {
        window.location.href = 'sleepDetails.html'; // Replace with your actual new page URL
    }, 500); // Duration should match the CSS transition duration
});

document.getElementById('notifications').addEventListener('click', function () {
    const overlay = document.getElementById('notifications');
    overlay.classList.add('active');

    setTimeout(function () {
        window.location.href = 'notification.html'; // Replace with your actual new page URL
    }, 500); // Duration should match the CSS transition duration
});
