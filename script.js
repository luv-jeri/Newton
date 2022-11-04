// const promise = new Promise((resolve, reject) => {
//   const button = document.querySelectorAll('button');
//   if (button.length > 0) {
//     resolve(button);
//   } else {
//     reject("No button in UI");
//   }
// });

// promise.then((data) => {
//   console.log('Promise resolved ', data);
// });

// promise.catch((err) => {
//   console.log('We failed 🥲', data);
// });

const url = 'https://jsonplaceholder.typicode.com/users';

const fetchData = (url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject('Something went wrong');
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong');
    };
  });
  return promise;
};

const promise = fetchData(url);
promise.then((data) => {
  console.log('Promise resolved ', data);
});

// const promise = fetch(url);

// promise.then((responce) => {

//   const jsonPromise = responce.json();
//   jsonPromise.then((data) => {
//     console.log(data);
//   });

// });

// promise.catch((err) => {
//   console.log('We failed 🥲', err);
// });
