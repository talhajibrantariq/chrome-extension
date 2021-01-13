var firebaseConfig = {
    apiKey: "AIzaSyB-D4kvthqy1O0BNz4JRzp7AkWIYKv2wRs",
    authDomain: "notes-8b1f6.firebaseapp.com",
    databaseURL: "https://notes-8b1f6.firebaseio.com",
    projectId: "notes-8b1f6",
    storageBucket: "notes-8b1f6.appspot.com",
    messagingSenderId: "938676510183",
    appId: "1:938676510183:web:f0ac3c3a10bd7fc55e7142",
    measurementId: "G-1PM40BBHHL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);


chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command == 'fetchNotes') {
        firebase.database().ref('/notes').once('value').then(function (snapshot) {
            response({
                type: "result",
                status: "success",
                data: snapshot.val(),
                request: msg
            })
        })
    }
    return true;
})