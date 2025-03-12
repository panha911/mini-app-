    // 1. Get the HTML element where text will be inserted
    const insertText = document.querySelector('.insert-text');

    // 2. List of words to display
    const words = ["PANHA", "HELLO", "WELCOME"];

    // 3. Variables for typing effect
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // 4. Typing effect function
    function typeEffect() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            insertText.textContent = currentWord.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            insertText.textContent = currentWord.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }

    // 5. Start typing effect after 1 second
    setTimeout(typeEffect, 1000);
    // ===============================================================
    const colors = ["red", "blue", "green"];
    let colorIndex = 0;

    setInterval(() => {
        insertText.style.color = colors[colorIndex]; // Change text color
        colorIndex = (colorIndex + 1) % colors.length; // Loop colors
    }, 1000); // Change color every 1 second