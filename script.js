function calculatePrice() {
    var weight = parseFloat(document.getElementById("weight").value);
    var purity = parseFloat(document.getElementById("purity").value);
    var goldPricePerGram = 3586 / 31.1034768; // Sample gold price per troy ounce
  
    // Calculate purity factor as a decimal value
    var purityFactor = purity / 24;
    
    // Perform calculations based on weight, purity factor, and gold price per gram
    var price = weight * purityFactor * goldPricePerGram;
    
    // Display the result with highlighting
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<span class='highlight'>Gold Price: $" + price.toFixed(2) + "</span>";
  }
