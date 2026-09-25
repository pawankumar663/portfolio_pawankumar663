export function numberToWords(num) {
    const ones = [
      "Zero", "One", "Two", "Three", "Four",
      "Five", "Six", "Seven", "Eight", "Nine",
      "Ten", "Eleven", "Twelve", "Thirteen",
      "Fourteen", "Fifteen", "Sixteen",
      "Seventeen", "Eighteen", "Nineteen"
    ];
  
    const tens = [
      "", "", "Twenty", "Thirty", "Forty",
      "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
  
    if (num < 20) {
      return ones[num];
    }
  
    if (num < 100) {
      return tens[Math.floor(num / 10)] +
        (num % 10 !== 0 ? " " + ones[num % 10] : "");
    }
  
    if (num < 1000) {
      return ones[Math.floor(num / 100)] + " Hundred" +
        (num % 100 !== 0 ? " " + numberToWords(num % 100) : "");
    }
  
    return "Number out of range";
  }
  