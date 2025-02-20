// Array of GIFs and messages
const gifs = [
    { src: "./gifs/gif1.gif", message: "So ye ek chota sa message mere taraf se next pe click karte jana 👉👈 !" },
    { src: "./gifs/hug.gif", message: "Ham tumhare pas nahi hai physically and birthday celebrate nahi kar sakte, but i will be always there to supoort you and love you ❤️" },
    { src: "./gifs/hands.gif", message: "School days me yaad hai ham log hath pakad ke chalte the, I wish waisehi tumhare hand hold kar ke raat ke time sea side der tak walk karte rahe jab tak tum thak na jao aur tumko uthana pade hamko 😉" },
    { src: "./gifs/sad.gif", message: "Sorry ..Hamko pata hai ham bhuat annoying hai, pareshan karte hai, and careless bhi hai , tumko bhaut hurt karte hai..ham sudhar jayege 👉👈 .. and I am really sorry for that" },
    { src: "./gifs/couple.gif", message: " You know tumko khone se ham bhaut darte hai... but usse bhi zyada is baat ka dar hai tum mujhe fir se kabhi payar nahi kar paogi ... Mere liye tum important ho, tumhari khushi important hai.. bas khush rehna please .. mujhe maro dato muh todo kuch bhi karlo bas khush rehna😅 !" },
    { src: "./gifs/Dandadan GIF.gif", message: "Tum bhaut payari ho ,carring,dil ki achi❤️, and itni sundar ki kya hi kehna... Aur jab ham khud ko dekhte hai to lagta hai akhri mujme hai hi kya... Tumne mujhe itna payar kiya... I am really greatfull to you.. I hope ek din kuch aisa kare jisse tumhe bhi mujhpe proud ho and tum sabko proudly keh sako ki ye hai mera boyfriend " },
    { src: "./gifs/gif1.gif", message: "Sorry Sorry itna pakane ke liye , today is your birthday smile😁 karo and next pe click karo😚 !" },
    { src: "./gifs/us.jpg", message: "Happy birthday to the most beautiful soul in the entire universe❤️ !" },
  ];
  
  let currentIndex = 0;
  
  // Get elements
  const gifElement = document.getElementById("gif");
  const messageElement = document.getElementById("message");
  const nextButton = document.getElementById("next-btn");
  
  // Function to update GIF and message
  function updateContent() {
    gifElement.src = gifs[currentIndex].src;
    messageElement.textContent = gifs[currentIndex].message;
  }
  
  // Event listener for the "Next" button
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % gifs.length; // Loop through the array
    updateContent();
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
  // Initialize with the first GIF and message
  updateContent();

  