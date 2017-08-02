importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js');

var config = {
  apiKey: 'AIzaSyD8cVGW-e4zCLa98ivZmBp42VpFP53_dvg',
  authDomain: 'natural-broker-164116.firebaseapp.com',
  databaseURL: 'https://natural-broker-164116.firebaseio.com',
  projectId: 'natural-broker-164116',
  storageBucket: 'natural-broker-164116.appspot.com',
  messagingSenderId: '492763510386',
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const title = payload.notification.title;
  const option = {
    body: payload.notification.body,
  };
  return self.registration.showNotification(title, options);
});
