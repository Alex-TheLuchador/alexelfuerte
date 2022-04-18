window.addEventListener("DOMContentLoaded", (event) => {
    getVisitorCount();
});

const functionAPI = "https://getportfoliocounter.azurewebsites.net/api/GetPortfolioCounter?code=CEMKfDTE0Y1gA5TBEtzRThHxa3/s1IfhQOICcrdPdGXeWVX7bk6F1g==";
const localFunctionAPI = "http://localhost:7071/api/GetPortfolioCounter";

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