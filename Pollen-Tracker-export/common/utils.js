// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function padToFive(i) {
  while (i.length < 5) {
    i = "0" + i;
  }
  return i;
}