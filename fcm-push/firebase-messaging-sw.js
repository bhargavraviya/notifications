importScripts('https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js');

importScripts('https://www.gstatic.com/firebasejs/7.14.3/firebase-messaging.js');

importScripts('https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js');
/*Update this config*/
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
  firebase.analytics();
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
	icon: 'http://localhost/fcm-push/img/icon.png',
	image: 'http://localhost/fcm-push/img/d.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]