const fs= require('fs');   //it is core module filesystem

//READING FILES

//it takes two parameters. first is relative path second is a callback function
//this is an asynchronous method. it takes sometime
// fs.readFile('./docs/blog1.txt', (error,data)=>{
//     if(error){
//       console.log(error);
//     }
//     console.log(data.toString()); //if we only write data then we get a buffer from the file. to convert the buffer we use toString
// })

// console.log("last line");



//WRITING FILES

// it takes 3 parameters.first is relative path, second is the content to update, third is a callback function
//it is a synchronous method
// fs.writeFile('./docs/blog1.txt','i have updated the file using writeFile',()=>{
//   console.log('file was updated');
// })

//if there is no file by the given name then it will create it in the folder and update it. 

// fs.writeFile('./docs/blog2.txt','i have created a file using fs and written this text',()=>{
//   console.log('file was updated');
// })

//DIRECTORIES

if(!fs.existsSync("./assests")){ 

  fs.mkdir('./assests',(error)=>{
  if (error) {
    console.log(error);
  }
  console.log("folder created");
})

}


//DELETE Files
if(fs.existsSync('./docs/blog2.txt')){
  fs.unlink('./docs/blog2.txt',(error)=>{
    if(error){
      console.log(error)
    }

  })
}


