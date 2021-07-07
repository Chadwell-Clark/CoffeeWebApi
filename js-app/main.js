const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
const save = document.querySelector("#submit");
const DOMLocation = document.querySelector("#main");
const FormDOMLocation = document.querySelector("#bean-form");
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
});

save.addEventListener("click", () => {
    console.log("SAve");
})

const getAllBeanVarieties =() =>{
    return fetch(beanUrl).then(resp => resp.json());
}

const BeanVarHtmlRep = (obj) => {
    return(`
    <div> ${obj.name}</div>
    `)
};

const Beanform = () => {
    const FormHtml = AddBeanForm();
    DOMLocation.innerHtml= FormHtml
};

const AddBeanForm = () =>{
    return (`
    <div>
    <form><fieldset>
    <h2>Add A bean variety</h2>
    <fieldset>
    
    <label for="name" >Name</label>
    <input type = "text" name= "name" placeholder = "Required"id = "name"></input>
    </fieldset>
    <fieldset>
    <label for="region" >Region</label>
    <input type = "text" name ="region"placeholder = "Required"id = "region"></input>
    </fieldset>
    <fieldset>
    <label for="notes" >Notes</label>
    <textarea type = "text" name = "notes"id = "notes"></textarea>
    </fieldset>
    
    <button id ="submit"> SAVE </button>
    
    </fieldset></form>
    </div>
    `)
}

const getAllCoffees =() => {
    return fetch(coffeeUrl).then(resp => resp.json());
}

Beanform();
