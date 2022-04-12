let counterContainer = document.getElementById("counter");
let visitCount = localStorage.getItem("page_view");

// localStorage entry will be absent on first viewing
if (!visitCount) {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
} else {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
}

counterContainer.innerHTML = visitCount;