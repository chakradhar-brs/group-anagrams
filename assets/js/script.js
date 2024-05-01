
function groupAnagrams() {
    const inputStrs = document.getElementById("strs").value;
    const strs = inputStrs.split(",").map((str) => str.trim());
  
    const map = new Map();
  
    // Iterate through each string in the array
    for (const str of strs) {
      // Sort the characters of the string to make it the key for the map
      const sortedStr = str.split("").sort().join("");
  
      // Check if the sorted string is already in the map
      if (!map.has(sortedStr)) {
        // If not, add it as a new key with an empty array as its value
        map.set(sortedStr, []);
      }
      // Push the original string to the array corresponding to the sorted string key
      map.get(sortedStr).push(str);
    }
  
    // Create the result array by converting the map values to an array
    const result = Array.from(map.values());
  
    // Display the result in the HTML
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    result.forEach((group) => {
      const listItem = document.createElement("li");
      listItem.textContent = group.join(", ");
      resultElement.appendChild(listItem);
    });
  }
  