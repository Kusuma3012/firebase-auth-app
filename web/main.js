// main.js (Firebase v8 style - works with your current script tags)
const firebaseConfig = {
  apiKey: "AIzaSyAYgwHlIkWl2RBG71ceageTmdVN1P2xOP4",
  authDomain: "fir-auth-webapp-9bf99.firebaseapp.com",
  projectId: "fir-auth-webapp-9bf99",
  storageBucket: "fir-auth-webapp-9bf99.appspot.com",
  messagingSenderId: "871756302821",
  appId: "1:871756302821:web:360f86cc4d45e071f5470c",
  measurementId: "G-H7YS2R6LKW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Signup
document.getElementById("signup-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch((error) => alert(error.message));
});

// Login
document.getElementById("login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch((error) => alert(error.message));
});

// Dashboard user check
firebase.auth().onAuthStateChanged((user) => {
  if (!user && window.location.pathname.includes("dashboard.html")) {
    window.location.href = "index.html";
  } else if (user && window.location.pathname.includes("dashboard.html")) {
    document.getElementById("welcome-msg").innerText = `Welcome, ${user.email}`;
  }
});

// Logout
document.getElementById("logout-btn")?.addEventListener("click", () => {
  firebase.auth().signOut().then(() => window.location.href = "index.html");
});
