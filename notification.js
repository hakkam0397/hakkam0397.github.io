document.addEventListener("DOMContentLoaded", function() {
    const notifications = [
      { title: "Coffee not for me, more like a nap please", content: "Hello Dhruv, yesterday you went to bed late. A short nap today will do you good!", date: "Today" },
      { title: "The benefits of nap", content: "Promote napping and some information on how to properly take a nap. Tap to read more!", date: "Today" },
      { title: "Simple steps to a good night's sleep", content: "Learn how to create the perfect sleep environment. To read more tap here.", date: "1 day ago" },
      { title: "Relaxing sleep music", content: "This is a call to reason accompanied by soft tones of music; tap to play the music now.", date: "2 days ago" },
      { title: "Guided sleep meditation", content: "Enjoy your power nap with this guided meditation. Let me start it for you, let the sound of my voice help you drift off to sleep. Tap to listen now!", date: "5 days ago" }
    ];
  
    const notificationsContainer = document.getElementById('notifications');
  
    notifications.forEach(notification => {
      const notificationElement = document.createElement('div');
      notificationElement.className = 'notification';
  
      notificationElement.innerHTML = `
        <h5>${notification.title}</h5>
        <p>${notification.content}</p>
        <small>${notification.date}</small>
      `;
  
      notificationsContainer.appendChild(notificationElement);
    });
  });
  