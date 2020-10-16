(() => {

    // make an AJAX request using the Fetch API
    fetch('./data/classData.json') 
    .then(res => res.json()) 
    // you can change the name data to anything, but not res.
    // data is the handler
    .then(data => {
        
        // here's where you would call the function that puts the pieces on the page
        
        let classSection = document.querySelector(".profPanelText").children;
        
        debugger;
        
        classSection[0].textContent = (data.coursename + ' - ' + data.coursecode);
        classSection[1].textContent = ('Professor - ' + data.profname);
        classSection[2].textContent = data.classtime;
    })
    


    .catch((err) => {
        console.log(err);
    })
    
})();