document.addEventListener("DOMContentLoaded", function() {
    const cardData = [
        { 
            imgSrc: "Resources/Images/MusicCover/music 1.png", 
            title: "Calm your nerves" 
        },
        { 
            imgSrc: "Resources/Images/MusicCover/music 2.png", 
            title: "Sleep Music" 
        },
        { 
            imgSrc: "Resources/Images/MusicCover/music 3.png", 
            title: "Calm your nerves" 
        },
        { 
            imgSrc: "Resources/Images/MusicCover/music 4.png", 
            title: "Calm your nerves" 
        },
        { 
            imgSrc: "Resources/Images/MusicCover/music 2.png", 
            title: "Calm your nerves" 
        },
        { 
            imgSrc: "Resources/Images/MusicCover/music 1.png", 
            title: "Calm your nerves" 
        }
    ];

    const cardContainer = document.getElementById('card-container');

    cardData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card cell medium-4 small-4';

        cardElement.innerHTML = `
            <img src="${card.imgSrc}" alt="${card.title}">
            <div class="card-section">
                <h4>${card.title}</h4>
            </div>
        `;

        cardContainer.appendChild(cardElement);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const articleData = [
        { 
            imgSrc: "Resources/Images/ArticleCover/article 1.png", 
            title: "Calm your nerves", 
            content: "Sometimes, the pace of modern life barely gives you time to stop...", 
            date: "21st April, 12:42 Am . 6 min read" 
        },
        { 
            imgSrc: "Resources/Images/ArticleCover/article 2.png", 
            title: "Calm your nerves", 
            content: "Sometimes, the pace of modern life barely gives you time to stop...", 
            date: "21st April, 12:42 Am . 6 min read" 
        },
        { 
            imgSrc: "Resources/Images/ArticleCover/article 3.png", 
            title: "Calm your nerves", 
            content: "Sometimes, the pace of modern life barely gives you time to stop...", 
            date: "21st April, 12:42 Am . 6 min read" 
        },
        { 
            imgSrc: "Resources/Images/ArticleCover/article 4.png", 
            title: "Calm your nerves", 
            content: "Sometimes, the pace of modern life barely gives you time to stop...", 
            date: "21st April, 12:42 Am . 6 min read" 
        }
    ];

    const articleContainer = document.getElementById('article-container');

    articleData.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'grid-x grid-margin-y medium-up-2 card';

        articleElement.innerHTML = `
            <div class="cell medium-12 small-12 grid-x grid-margin-x">
                <div class="cell small-4">
                    <img src="${article.imgSrc}" alt="${article.title}">
                </div>
                <div class="cell small-8">
                    <h4>${article.title}</h4>
                    <p>${article.content}</p>
                </div>
            </div>
            <div class="cell medium-12 small-12">
                <p>${article.date}</p>
            </div>
        `;

        articleContainer.appendChild(articleElement);
    });
});
