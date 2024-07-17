// Function to simulate typing effect
function typeWriter(textElement, speed) {
    const text = textElement.innerHTML;
    textElement.innerHTML = '';
  
    let i = 0;
    const typingInterval = setInterval(() => {
      textElement.innerHTML += text.charAt(i);
      i++;
  
      if (i > text.length) {
        clearInterval(typingInterval);
      }
    }, speed);
  }
  
  // Select the h1 element
  const nameElement = document.getElementById('name');
  
  // Call the typing function with your desired speed (adjust as needed)
  typeWriter(nameElement, 100);
  