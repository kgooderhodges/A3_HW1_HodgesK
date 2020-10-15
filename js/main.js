(() => {

    // make an AJAX request using the Fetch API
    // fetch, like a dog. get that data i asked for
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        // handleData
        // here's where you would call the function that puts the pieces on the page
    })
    .cathch((err) => {
        console.log(err);
    })

})();