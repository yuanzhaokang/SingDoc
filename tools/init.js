let fs = require('fs')

function geFileList(path) {
   let filesList = [];
   let targetObj = {};
   readFile(path, filesList, targetObj);
   return filesList;
}

function readFile(path, filesList, targetObj) {
   files = fs.readdirSync(path);
   files.forEach(walk);
   function walk(file) {
      states = fs.statSync(path + '/' + file);
      if(states.isDirectory() && file != 'images') {
         let item;
         if(targetObj["children"]) {
            item = {name: file, children: []};
            targetObj["children"].push(item);
         }
         else {
            item = {name: file, children: []};
            filesList.push(item);
         }

         readFile(path + '/' + file, filesList, item);
      }
      else {
         let obj = new Object();
         obj.size = states.size;
         obj.name = file;
         obj.path = path + '/' + file;

         if(file.endsWith(".md")) {
            if(targetObj["children"]) {
               let item = {name: file, value: obj.path}
               targetObj["children"].push(item);
            }
            else {
               let item = {name: file, value: obj.path};
               filesList.push(item);
            }
         }
      }
   }
}

function writeFile(fileName, data) {
   fs.writeFile(fileName, data, 'utf-8', complete);
   function complete() {
      console.log("success");
   }
}

let list = geFileList("./md");
writeFile("./config/config.json", JSON.stringify(list));
