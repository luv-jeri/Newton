try {
  const promise = fetch('https://jsonplaceholder.typicode.com/users');

  const res = await promise;
  const data = await res.json();

  console.log(data);
} catch (e) {
  console.log(e);
} finally {
  console.log('I run regardless of the result');
}

// promise.then((data)=>{
//   console.log(data)
// })

// try {
//   console.log('line1');
//   console.log('line2');
//   console.log('line3');
//   console.log('line');
// } catch (err) {
//   console.log('Fallback', err);
// }
