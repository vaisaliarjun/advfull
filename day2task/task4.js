//CALLBACK FUNCTION
//EXAMPLE

function fetchData(callback) {
    setTimeout(() => {
    console.log("Data fetched!");
    callback();
    }, 2000);
    }
    function processData() {
    console.log("Processing the fetched data...");
    }
    
    fetchData(processData);