//  -- 1. -- Title limiter //
function trimString(string, length) {
  return string.length > length ?
    string.substring(0, length) + '...' :
  string;
};
// Apply to all title instances //
document.querySelectorAll('.trim-input-title-wrapp').forEach((titleChar) => {
  // vars //
  let charLimit = titleChar.getAttribute('data-char-limit');
  let charLimitdotChoice = titleChar.getAttribute('data-char-limit-dotctr');
  // trim //
  if(charLimitdotChoice) {
    titleChar.innerHTML = trimStringNoDot(titleChar.innerHTML, charLimit);
  } else {
    titleChar.innerHTML = trimString(titleChar.innerHTML, charLimit);
  }
});
// useage example - class="trim-input-title-wrapp" data-char-limit="42" //
// -- 2. -- Custom number count animation //
let cstCountAnimation;
// Function //
cstCountAnimation = (EL) => {
  // vars //
  const duration = 4000; 
  const start = parseInt(EL.textContent, 10); 
  const end = parseInt(EL.dataset.counter, 10); 
  const range = end - start; // Get the range
  let curr = start; // Set current at start position
  const timeStart = Date.now();
  // prevent if equal to end point //
  if (start === end) return;
  // create animation by comparing current timestamp with speed selection //
  const loop = () => {
    let elaps = Date.now() - timeStart;
    if (elaps > duration) elaps = duration; // Stop the loop
    const frac = elaps / duration; // Get the time fraction
    const step = frac * range; // Calculate the value step
    curr = start + step; // Increment or Decrement current value
    const bruh = Math.trunc(curr); // Setup end value
    EL.textContent = bruh.toLocaleString(); // Apply commas and send to frontend
    if (elaps < duration) requestAnimationFrame(loop); // Loop
  };
  // ping it //
  requestAnimationFrame(loop); // Start the loop!
};

// exports //
export { cstCountAnimation };