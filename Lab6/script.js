function add_person_info(person_info){
    var person_box = document.createElement("div");
    var img = document.createElement("img");
    var cell = document.createElement("p");
    var city = document.createElement("p");
    var postcode = document.createElement("p");
    var email = document.createElement("p");

    person_box.setAttribute("class", "person-box");
    img.setAttribute("src", person_info.picture.large);
    cell.innerHTML = "Cell:" + person_info.cell;
    city.innerHTML = "City: " + person_info.location.city;
    postcode.innerHTML = "Postcode: " + person_info.location.postcode;
    email.innerHTML = "Email: " + person_info.email;

    person_box.appendChild(img);
    person_box.appendChild(cell);
    person_box.appendChild(city);
    person_box.appendChild(postcode);
    person_box.appendChild(email);

    document.querySelector(".content").appendChild(person_box);
}

function load() {
    const my_fetch = fetch("https://randomuser.me/api");
    my_fetch.then(response => {
        return response.json();
    }).then(person => {
        add_person_info(person.results[0]);
    });
}

// function add_maket(person_info) {
//     const person = document.createElement("div");
//     person.setAttribute("class", "person");
//     const image = document.createElement("img");
//     console.log(person_info.picture.medium);
//     image.setAttribute("src", person_info.picture.large);
//     image.setAttribute("alt", "NO_IMG");
//     const name = document.createElement("p");
//     const city = document.createElement("p");
//     const country = document.createElement("p");
//     const postcode = document.createElement("p");
//     name.innerHTML = "Name: " + person_info.name.first + " " + person_info.name.last;
//     city.innerHTML = "City: " + person_info.location.city;
//     country.innerHTML = "Country: " + person_info.location.country;
//     postcode.innerHTML = "Postcode: " + person_info.location.postcode;
//     person.appendChild(image);
//     person.appendChild(name);
//     person.appendChild(city);
//     person.appendChild(country);
//     person.appendChild(postcode);
//     const block = document.querySelector(".content");
//     block.appendChild(person);
// }