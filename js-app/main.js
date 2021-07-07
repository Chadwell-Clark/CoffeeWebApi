const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
const DOMLocation = document.querySelector("#main");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            let HTMLForDOM = "";
            beanVarieties.forEach(element => {
                HTMLForDOM += BeanVarHtmlRep(element);
            
            });
            DOMLocation.innerHTML = HTMLForDOM;
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
            
            
            
        })
});

function getAllBeanVarieties() {
    return fetch(beanUrl).then(resp => resp.json());
}

const BeanVarHtmlRep = (obj) => {
    return(`
    <div> ${obj.name}</div>
    `)
};

function getAllCoffees() {
    return fetch(coffeeUrl).then(resp => resp.json());
}
})