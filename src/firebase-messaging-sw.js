importScripts('https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.5/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBDDhx0wZEjNRlpPf8U4kQ-9OHsXaH__mo",
    authDomain: "dalbusco-push-tutorial.firebaseapp.com",
    projectId: "dalbusco-push-tutorial",
    storageBucket: "dalbusco-push-tutorial.appspot.com",
    messagingSenderId: "916585607238",
    appId: "1:916585607238:web:cb66297f4e7dcbd40ada47",
    vapidKey: "BP6nOWyPSENyL0j7kg3O4QDECvC9pzIEEmuKpg5EPX1DFgeb8MnBFbNq3RK6ZDoltDAnZKlSxSveEOWWEWWaEXY"
});

const messaging = firebase.messaging();