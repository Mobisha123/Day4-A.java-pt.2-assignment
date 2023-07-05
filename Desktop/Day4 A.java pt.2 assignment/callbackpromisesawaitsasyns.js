//callbackfunction
function calculateSumCallback(numbers, callback) {
  if (numbers.length === 0) {
    callback(null, 0);
  } else {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    callback(null, sum);
  }
}

const numbers = [1, 2, 3, 4];
calculateSumCallback(numbers, (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Sum:', result);
  }
});
//  //promises
// function calculateSumPromise(numbers) {
//   return new Promise((resolve, reject) => {
//     if (numbers.length === 0) {
//       reject('Empty array');
//     } else {
//       let sum = numbers.reduce((acc, num) => acc + num, 0);
//       resolve(sum);
//     }
//   });
// }

// const numbers = [1, 2, 3, 4];
// calculateSumPromise(numbers)
//   .then(result => {
//     console.log('Sum:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//   //asyns and await
//   async function calculateSumAsync(numbers) {
//     if (numbers.length === 0) {
//       throw new Error('Empty array');
//     } else {
//       let sum = numbers.reduce((acc, num) => acc + num, 0);
//       return sum;
//     }
//   }
  
//   const numbers = [1, 2, 3, 4];
//   (async () => {
//     try {
//       const result = await calculateSumAsync(numbers);
//       console.log('Sum:', result);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   })();

