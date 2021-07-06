const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
const DOMLocation = document.querySelector("#main");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            beanVarieties.forEach(element => {
                DOMLocation.innerHTML = element;
            });
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
            coffees.forEach(element => {
                DOMLocation.innerHTML = element;
            });
            
        })
});

function getAllBeanVarieties() {
    return fetch(beanUrl).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(coffeeUrl).then(resp => resp.json());
}
})