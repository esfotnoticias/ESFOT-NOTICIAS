importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "sus_credenciales",
    authDomain: "sus_credenciales",
    databaseURL: "sus_credenciales",
    projectId: "sus_credenciales",
    storageBucket: "sus_credenciales",
    messagingSenderId: "sus_credenciales",
    appId: "sus_credenciales",
    measurementId: "sus_credenciales"
});

const messaging = firebase.messaging();