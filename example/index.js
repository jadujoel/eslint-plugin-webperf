// for each
{
  const arr = [1,2,3]
  arr.forEach(x => {
    console.log(x)
  })
  for (const x of arr) {
    console.log(x)
  }
}

// canvas
{
  // Pass: Using OffscreenCanvas in a Worker
  if (window.Worker && window.OffscreenCanvas) {
    const offscreen = new OffscreenCanvas(256, 256);
    const worker = new Worker('offscreen-canvas-worker.js');
    worker.postMessage({canvas: offscreen}, [offscreen]);
  }

  // Fail: Directly using CanvasRenderingContext2D on the main thread
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
}

// Example that would pass the check
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const newElement = document.createElement('div');
  fragment.appendChild(newElement);
}
document.body.appendChild(fragment);

// Example that would fail the check
for (let i = 0; i < 5; i++) {
  const newElement = document.createElement('div');
  document.body.appendChild(newElement); // Multiple appendChild calls inside a loop
}

{
  // Example that would pass the check
  if (someVariable) {
    // some action
  }
}
{
  // Example that would fail the check
  if (someVariable !== undefined) {
    // some action
  }
}


// Example that would pass the check
{
  const container = document.getElementById('container');
  const newElement = document.createElement('div');
  newElement.textContent = 'New content';
  container.appendChild(newElement);
}
// Example that would fail the check
{
  const container = document.getElementById('container');
  container.innerHTML = '<div>New content</div>';
}

// <div>
//   <img src="image.png" loading="lazy" alt="An example image" />
//   <img src="image.png" alt="An example image" />
// </div>

//debounce
{
  window.addEventListener('scroll', debounce(function() {
    console.log('Scroll event triggered');
  }));

  window.addEventListener('scroll', function() {
    console.log('Scroll event triggered');
  });
}

// textcontent
{
  // Example that would pass the check
  const element = document.getElementById('example');
  element.textContent = 'Hello, world!';
}
{
  // Example that would fail the check
  const element = document.getElementById('example');
  element.innerText = 'Hello, world!';
}

const arr = [1, 2, 3, 4, 5];

// Should NOT trigger the rule
const resultGood = arr.reduce((acc, cur) => {
  if (cur % 2 === 0) acc.push(cur * 2);
  return acc;
}, []);

// Should trigger the rule
const resultBad = arr.map(x => x + 1).filter(x => x % 2 === 0);

console.log(resultGood, resultBad);

{
  window.addEventListener('scroll', debounce(function() {
    // Implementation for handling scroll events
    console.log('Scroll event detected!');
  }));

  window.addEventListener('resize', debounce(function() {
    // Implementation for handling resize events
    console.log('Resize event detected!');
  }));


  // Using IntersectionObserver instead of scroll event listener
  let observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // Element is in view
        console.log('Element is visible!');
      }
    };
  });

  // Observe an element
  observer.observe(document.querySelector('#someElement'));

  // Using ResizeObserver instead of resize event listener
  let resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const cr = entry.contentRect;
      console.log('Element size:', cr.width, cr.height);
    }
  });

  // Observe an element
  resizeObserver.observe(document.querySelector('#anotherElement'));
};

// no await in for loop
async function noAwaitInLoop() {
  const arr = [1, 2, 3];
  for (const item of arr) {
    await someFunction(item);
  }
}

async function someFunction(item) {
  console.log(item);
}
