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
    //Handle the error in subsequent async operation
    await someAsyncOperationThatMightFail();
  } catch (error) {
    console.error('Error processing file or async operation:', error);
  }
}

async function someAsyncOperationThatMightFail(){
    return new Promise((resolve,reject)=>{  
        setTimeout(()=>{reject(new Error('Simulated Async Operation Failure'))},100)
    })
}

processFile();
```