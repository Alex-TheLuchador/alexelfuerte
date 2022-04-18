window.addEventListener("DOMContentLoaded", (event) => {
    getVisitorCount();
});

const functionAPI = "http://localhost:7071/api/GetPortfolioCounter";

const getVisitorCount = () => {
    let count = 30;
    fetch(functionAPI).then(response => {
        return response.json()
    }).then(response => {
        console.log("The website has called the function API...");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error) {
        console.log(error);
    });

    return count;
}