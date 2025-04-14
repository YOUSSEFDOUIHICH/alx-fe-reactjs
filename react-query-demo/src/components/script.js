let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Creativity is intelligence having fun.", category: "Inspiration" },
    { text: "Do not wait for opportunity. Create it.", category: "Motivation" }
  ];
  
  // Affiche une citation aléatoire
  function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (quotes.length === 0) {
      quoteDisplay.innerHTML = "<p>No quotes available.</p>";
      return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.innerHTML = `
      <p><strong>${quote.category}:</strong> "${quote.text}"</p>
    `;
  }