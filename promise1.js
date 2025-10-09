function performTask(task, callback) {
    console.log("Performing task: " + task);
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function () {
      console.log("Task completed: " + task);
      // Invoke the callback function after the task is completed
      callback();
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  // Callback function to be executed after the task is completed
  function callbackFunction() {
    console.log("Callback function executed!");
  }
  
  // Calling the performTask function with the callback
  performTask("Fetching data", callbackFunction);