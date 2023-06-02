const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog1.txt", {
  encoding: "utf8",
}); //reads file , the second parameter is to avoid buffer in hexdecimal. It will directly give in string.

const writeStream = fs.createWriteStream("./docs/blog2.txt");

//on is like event listener. In this we are listening to data stream. Remember from stream we get data chuck by chunk every time. That data comes and action is taken through

// readStream.on("data", (chunk) => {
//   console.log("<---New Chunk---->");
//   // console.log(chunk.toString());
//   console.log(chunk);
//   writeStream.write("\nNew Chunk\n");
//   writeStream.write(chunk);
// });

// piping
//pipe() method is used to transfer data from one stream to another. It allows you to connect the output of one stream as the input of another stream in a simple and efficient way.
//Its is the simpler and easier way of doing the above. Copying one file to another
readStream.pipe(writeStream);
