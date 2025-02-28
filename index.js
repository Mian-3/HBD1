function showMessage() {
    const messageBox = document.getElementById("message-box");
    messageBox.innerHTML = `
      <p>🌟 Surprise! 🌟</p>
      <p>You find yourself in a dreamy wonderland, surrounded by glowing fairy lights and floating cupcakes. 🎂✨</p>
      <p>Suddenly, your favorite song starts playing and everything feels magical. 🎶💃</p>
      <p>Just as you're about to take a bite of the most delicious chocolate cake ever you hear... THAPPP 👋😂</p>
      <p><strong>Chalo uthooo, school nahi jaana?</strong> Madam's voice echoes! 😆</p>
      <p>Oops! It was all a dream! But guess what? Your real birthday is even better than a dream! 🎊🥳🎁</p>
      <p>Have a blast, Ashu! 💖</p>

      <p><strong>"Ayesha, I know you must be smiling a lot while reading this! 😆💖"</strong></p>

      <p>🌸 May you always stay happy, blessed, and surrounded by love. 💖</p>
      <p>🌟 May your dreams come true, and may life bring you endless joy. ✨</p>
      <p>💍 May you find the most loving, caring, and PERFECT life partner—the one YOU truly want! ❤️🤭</p>
      <p>🎊 Wishing you a lifetime of laughter, success, and happiness! 🥳💕</p>

      <p>🌙 Ramadan is near, so please pray that I succeed in my journey! 🤲</p>
      <p>🙏 And may Allah bless you with a long, happy, and beautiful life. 💖</p>
      <p>🌟 Also, don't forget to keep your fasts! 😆 May Allah accept them all. 🤲✨</p>
    `;

    // Show the message with a fade-in effect
    messageBox.style.display = "block";
    setTimeout(() => {
      messageBox.classList.add("fade-in-visible");
    }, 100);
  }