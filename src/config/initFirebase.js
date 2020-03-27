const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBBLAUkFHgKSXU7m1fBZNKUQMcY0uuI5Jw",
        authDomain: "redsocialmonse.firebaseapp.com",
        databaseURL: "https://redsocialmonse.firebaseio.com",
        projectId: "redsocialmonse",
        storageBucket: "redsocialmonse.appspot.com",
        messagingSenderId: "765610516891",
        appId: "1:765610516891:web:ad4f24083409fd76f8c13e",
        measurementId: "G-WE66BGH2GT"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
}

export default initFirebase;