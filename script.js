/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

function add(a, b) {
  return a + b;
}

function forEach(arr, callback, thisObject) {
  let fcnCallback = callback
  let modified_arr = [];
  
  if (thisObject) {
    fcnCallback = callback.bind(thisObject)
  }

  for (let i = 0; i < arr.length; i++) {
    modified_arr[i] = fcnCallback(arr[i],i, arr);
  };
  
  return modified_arr
};