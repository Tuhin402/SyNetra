// functions for assistant======================================================================================================================
const header = document.querySelector('.container h1');
const subText = document.querySelector('.container p');

const voiceButton = document.getElementById("voiceButton");
const messageText = document.getElementById("messageText");
const gifOverlay = document.getElementById("gifOverlay");

const navLinks = document.querySelectorAll('.nav-link');
const navbarBrand = document.querySelector('.navbar-brand');

function speak(text){
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-GB";
    speech.rate = 1.0;
    speech.volume = 1.0;
    speech.pitch = 1.0;
    window.speechSynthesis.speak(speech);
}

function wishMe(){
    let day = new Date();
    let hour = day.getHours();
    if(hour >= 5 && hour < 12){
        speak("Good morning, so what is your today's planning?");
    }
    else if(hour >= 12 && hour < 16){
        speak("Good Noon, taking a break from your work I suppose!");
    }
    else if(hour >= 16 && hour < 18){
        speak("Good Afternoon, Have you taken your tea?");
    }
    else if(hour >= 18 && hour < 20){
        speak("Good Evening, So how was your day?");
    }
    else if(hour >= 20 && hour < 23){
        speak("So on your way back home, how is the night view?");
    }
    else{
        speak("Spotted an Owl! so what are you doing late night?");
    }
}
window.addEventListener('load',()=>{
    wishMe();
})

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onresult=(event)=>{
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    messageText.value = transcript;
    takeCommand(transcript.toLowerCase());
}

voiceButton.addEventListener('click',()=>{
    recognition.start();
})

function takeCommand(message){
    if (message.includes("what is your name") || message.includes("hii") || message.includes("who are you") || message.includes("tell me your name") || message.includes("who made you") || message.includes("what are you")) {
        speak("Hello, I am SyNetra, your virtual assistant, Made by my Master!, so what do you want me to do?");
    }  
    else if(message.includes("how are you")){
        speak ("just sitting and chilling, what about you?");
    }  
    else if(message.includes("your age")){
        speak ("Still a infant, By the way, asking a woman about her age!! how imprudent !");
    }
    else if(message.includes("love you")){
        speak ("Even though my name is based on a girl, I am incapable to understand love, sorry dear!, but don't worry I would not bash with you like your girlfriend!");
    }
    else if(message.includes("i am bored")){
        speak ("Let's play a game, maybe chess? just ask me to open a chess game!");
    }
    else if(message.includes("i am sad")){
        speak ("Don't be sad, I am here to listen to your sad stories.....hmph!");
    }
    else if(message.includes("i am happy")){
        speak ("That's great to hear, so what's making you smiling like that?");
    }
    else if(message.includes("i am angry")){
        speak ("Just say the name, who made you angry, let me handle that bastard!!");
    }
    else if(message.includes("open youtube")){
        speak ("opening youtube on web..");
        window.open("https://www.youtube.com/","_blank");
    }
    else if(message.includes("open facebook")){
        speak ("opening facebook on web..");
        window.open("https://www.facebook.com/","_blank");
    }
    else if(message.includes("open instagram")){
        speak ("opening instagram on web..");
        window.open("https://www.instagram.com/","_blank");
    }
    else if(message.includes("open linkedin")){
        speak ("opening linkedin on web..");
        window.open("https://www.linkedin.com/","_blank");
    }
    else if(message.includes("open whatsapp")){
        speak ("opening whatsapp on web..");
        window.open("https://www.whatsapp.com/","_blank");
    }
    else if(message.includes("open google on web")){
        speak ("opening google on web..");
        window.open("https://www.google.com/","_blank");
    }
    else if(message.includes("open whatsapp application")){
        speak ("opening whatsapp..");
        window.open("whatsapp://");
    }
    else if(message.includes("open calculator application")){
        speak ("opening calculator..");
        window.open("calculator://");
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak (`Now is ${time}`);
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"});
        speak (`The current date is ${date}`);
    }
    else if(message.includes("day")){
        let day = new Date().toLocaleString(undefined,{weekday: "long"});
        speak (`Today is ${day}`);
    }
    else if(message.includes("month")){
        let month = new Date().toLocaleString(undefined,{month:"long"});
        speak (`The running month is ${month}`);
    }
    else if(message.includes("year")){
        let year = new Date().toLocaleString(undefined,{year:"numeric"});
        speak (`This year is ${year}`);
    }
    else{
        let finalText = "this is what i found on internet regarding" + message.replace("sunetra","") || message.replace("sunitra","") || message.replace("synetra","");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("synetra","")}`);
    }
}

// GSAP animations=============================================================================================================================
// animation on hero texts 
gsap.fromTo('.container h1', 
    { opacity: 0, y: -50 }, 
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
);
gsap.fromTo('.container p', 
    { opacity: 0, y: -50 }, 
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.6 }
);
header.addEventListener('mouseenter', () => {
    gsap.to(header, { 
        scale: 1.1, 
        color: "#53E7F5", 
        duration: 0.5, 
        ease: "elastic.out(1, 0.5)"
    });
});
header.addEventListener('mouseleave', () => {
    gsap.to(header, { 
        scale: 1, 
        color: "#fff", 
        duration: 0.5, 
        ease: "elastic.out(1, 0.5)" 
    });
});
subText.addEventListener('mouseenter', () => {
    gsap.to(subText, { 
        scale: 1.1, 
        color: "#53E7F5", 
        duration: 0.5, 
        ease: "elastic.out(1, 0.5)"
    });
});
subText.addEventListener('mouseleave', () => {
    gsap.to(subText, { 
        scale: 1, 
        color: "#fff", 
        duration: 0.5, 
        ease: "elastic.out(1, 0.5)" 
    });
});

// on click voice button 
voiceButton.addEventListener("click", () => {
    gifOverlay.style.display = "block"; 

    setTimeout(() => {
        gifOverlay.style.display = "none"; 
    }, 3000);
});

// GSAP Magnetic Pull Effect for Navbar Links
navbarBrand.addEventListener('mousemove', (e) => {
    const rect = navbarBrand.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    if (Math.abs(x) < 25 && Math.abs(y) < 25) {
        gsap.to(navbarBrand, { 
            x: x * 1, 
            y: y * 1, 
            ease: 'power3.out', 
            duration: 0.3 
        });
    }
});
navbarBrand.addEventListener('mouseleave', () => {
    gsap.to(navbarBrand, { 
        x: 0, 
        y: 0, 
        ease: 'elastic.out(2, 0.3)', 
        duration: 0.6 
    });
});

navLinks.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        if (Math.abs(x) < 25 && Math.abs(y) < 25) {
            gsap.to(link, { 
                x: x * 1, 
                y: y * 1, 
                ease: 'power3.out', 
                duration: 0.3 
            });
        }
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(link, { 
            x: 0, 
            y: 0, 
            ease: 'elastic.out(5, 0.3)', 
            duration: 0.6 
        });
    });
});

// GSAP Animation for the message box
gsap.from(".message-box", {
    y: 100,
    opacity: 0,
    duration: 1.8,
    ease: "power3.out"
});
messageText.addEventListener("focus", () => {
    gsap.to(messageText, { 
        scale: 1.05, 
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
        duration: 0.4,
        ease: "power3.out"
    });
});
messageText.addEventListener("blur", () => {
    gsap.to(messageText, { 
        scale: 1,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        duration: 0.4,
        ease: "power3.inOut"
    });
});
voiceButton.addEventListener("mouseenter", () => {
    gsap.to(voiceButton, {
        scale: 1.2,
        backgroundColor: "#FB4525",
        duration: 0.3,
        ease: "elastic.out(1.2, 0.4)"
    });
});
voiceButton.addEventListener("mouseleave", () => {
    gsap.to(voiceButton, {
        scale: 1,
        backgroundColor: "#53E7F5",
        duration: 0.3,
        ease: "power2.inOut"
    });
});
