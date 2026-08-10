importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBj5s357Fek6LPr0a4NPPTxbaZapVHM9_4",
  authDomain: "messageapp-6f86e.firebaseapp.com",
  projectId: "messageapp-6f86e",
  storageBucket: "messageapp-6f86e.firebasestorage.app",
  messagingSenderId: "492883088712",
  appId: "1:492883088712:web:a44b92652b852999ac8f7d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
