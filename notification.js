/* Author: Samruddhi Deolekar */

document.addEventListener("DOMContentLoaded", function () {
  const notifications = [
    {
      title: "Coffee not for me, more like a nap please",
      content: "Hello Dhruv, yesterday you went to bed late. A short nap today will do you good!",
      date: "Today",
      button: {
        text: "Set a QuickSnoozz",
        link: "#"
      }
    },
    {
      title: "The benefits of nap",
      content: "Promote napping and some information on how to properly take a nap. Tap to read more!",
      date: "Today",
      button: {
        text: "Read More",
        link: "#"
      }
    },
    {
      title: "Simple steps to a good night’s sleep",
      content: "Learn how to create the perfect sleep environment. To read more tap here.",
      date: "1 day ago",
      button: {
        text: "Learn More",
        link: "#"
      }
    },
    {
      title: "Relaxing sleep music",
      content: "This is a call to reason accompanied by soft tones of music; tap to play the music now.",
      date: "2 days ago",
      button: {
        text: "Play Music",
        link: "#"
      }
    },
    {
      title: "Guided sleep meditation",
      content: "Enjoy your power nap with this guided meditation. Let me start it for you, let the sound of my voice help you drift off to sleep. Tap to listen now!",
      date: "5 days ago",
      button: {
        text: "Listen Now",
        link: "#"
      }
    }
  ];

  const notificationsContainer = document.getElementById('notifications');

  notifications.forEach(notification => {
    const notificationElement = document.createElement('div');
    notificationElement.className = 'notification';

    notificationElement.innerHTML = `
        <div class="notification-content">
          <h5>${notification.title}</h5>
          <p>${notification.content}</p>
          <small>${notification.date}</small>
        </div>
        <a href="${notification.button.link}" class="button">${notification.button.text}</a>
        <button class="close-btn">&times;</button>
      `;

    notificationsContainer.appendChild(notificationElement);

    // Add event listener to the close button
    const closeButton = notificationElement.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
      notificationElement.style.display = 'none';
    });
  });
});

document.getElementById('backNotification').addEventListener('click', function () {
  const overlay = document.getElementById('backNotification');
  overlay.classList.add('active');

  setTimeout(function () {
      window.location.href = 'index.html'; // Replace with your actual new page URL
  }, 500); // Duration should match the CSS transition duration
});
