```javascript
const fs = require('fs');

async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function processFile() {
  try {
    const data = await readFileAsync('./my-file.txt');
    console.log('File content:', data);
    // Some asynchronous operation that might fail
    await someAsyncOperationThatMightFail();
  } catch (error) {
    console.error('Error processing file:', error);
  }
}

async function someAsyncOperationThatMightFail(){
    return new Promise((resolve,reject)=>{  
        setTimeout(()=>{reject(new Error('Simulated Async Operation Failure'))},100)
    })
}

processFile();
```