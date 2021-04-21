export function decodeHtml(html: string): string {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

//Algorithm to shuffle array. Thanks to https://gist.github.com/nikolas/96586a0b56f53eabfd6fe4ed59fecb98
export function shuffleArray(array: string[]) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
