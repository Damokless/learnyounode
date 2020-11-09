const fs = require('fs')
const { resourceUsage } = require('process')

fs.readdir (process.argv[2], (err, data) =>{
    if (err) { 
        console.log('error')
    }

    //let results = data.match(RegExp(/[a-zA-Z]/))
    console.log(data)
})