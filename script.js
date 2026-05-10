window.mergeCraftDates = function mergeCraftDates(emily, oliver) {
  const merged = [];
  let i = 0, j = 0;

  while (i < emily.length && j < oliver.length) {
    if (emily[i] <= oliver[j]) {
      merged.push(emily[i]);
      i++;
    } else {
      merged.push(oliver[j]);
      j++;
    }
  }

  while (i < emily.length) {
    merged.push(emily[i]);
    i++;
  }

  while (j < oliver.length) {
    merged.push(oliver[j]);
    j++;
  }

  return merged;
}

// Example
console.log(mergeCraftDates([3, 7, 12, 20], [1, 5, 8, 18, 25]));
// Output: [1, 3, 5, 7, 8, 12, 18, 20, 25]