var fs = require('fs');
var argv = require('yargs')
    .usage('Usage: $0 [-c OR -p] ')
    .default("p", false)
    .default("c", false)
    .alias('p', 'promise')
    .alias('c', 'callback')
    .describe('p', 'Run promise test')
    .describe('c', 'Run callback test')
    .help('h')
    .alias('h', 'help')
    .argv;

//options needed to open files correctly for reading
var options = {
    encoding: 'UTF8',
    flag: 'r'
};

function open_file(file,callbackFn){
    fs.readFile(file,options,function(err,data){
        if(err){
            throw (err);
        }
        callbackFn(data);
    });
}

var files = ["sample1.txt","sample2.txt","sample3.txt","sample4.txt","sample5.txt"];

function print_string_array(data){
    console.log("---\nEntered print_string_array() function. Should be done reading by this point");
    console.log(data.length + " elements in data array");
    for(var f in data){
        console.log(data[f]);
    }
    console.log("End print_string_array()\n---");
}

//load an array of files - callback style
function callback_files_test(){
    var results = [];
    for(var f in files){
        //queue up all the file calls
        open_file(files[f],(data) => {
            results.push(data); //push data read in
            console.log("Finished reading: " + data);
        });
    }

    //print the result - how to fix? with promises
    print_string_array(results);
}








function open_file_promisified(file) {
    return new Promise(function (fulfill, reject) {
        fs.readFile(file, options, function (err, data) {
            if (err) {
                reject(err);
            }
            fulfill(data);
        });
    });
}

//load an array of files - promise style
function promise_files_test(){
    var promises = [];
    for(var f in files){
        //queue up all the file calls
        promises.push(open_file_promisified(files[f])
            .then((data) => {
                console.log("Finished reading: " + data);
                return data;
            }));
    }
    //print the result
    Promise.all(promises) //block until promises are done
        .then(function(results){ //note how results are in order
            print_string_array(results);
        });
}

if (argv.callback)
    callback_files_test();
else if (argv.promise)
    promise_files_test();
else
    console.log("No test specified. Please use the -h flag for more info");
