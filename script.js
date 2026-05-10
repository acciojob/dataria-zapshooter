function mergeCraftDates(emily, oliver) {
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