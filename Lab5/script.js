const name_regex = /^[А-ЯІЇ][А-Яа-яІЇії'\- ]+ [А-ЯІЇ]\.[А-ЯІЇ]\.$/;
const variant_regex = /^[1-9]\d{0,2}$/;
const telephone_regex = /^\(0\d{2}\)-\d{3}-\d\d-\d\d$/
const faculty_regex = /^[А-ЯІЇ]{3,5}$/;
const city_regex = /^м. [А-ЯІЇ][А-Яа-яІЇії'\- ]+$/;

const validators = [(str) => name_regex.test(str),
                    (str) => variant_regex.test(str),
                    (str) => telephone_regex.test(str),
                    (str) => faculty_regex.test(str),
                    (str) => city_regex.test(str)]

function clear_results(){
    document.querySelectorAll("#results-container div").forEach(element => {
        element.textContent = element.textContent.slice(0, element.textContent.indexOf(":") + 1);
    });
}

function validate_input() {
    clear_results();
    const inputs = document.querySelectorAll("input");
    var f = true;

    for(var i = 0; i < 5; i++) {
        if(validators[i](inputs[i].value))  {
            inputs[i].style.boxShadow = "2px 2px 2px rgb(255, 255, 90)";
        }
        else {
            inputs[i].style.boxShadow = "2px 2px 2px rgb(255, 0, 0)";
            f = false;
        }
    }
    if(f) {
        var outputs = document.querySelectorAll("#results-container div");
        for(var i = 0; i < 5; i++) {
            outputs[i].textContent += " " + inputs[i].value;
        }
    }
}

// second task

function random_color(element){
    var R = Math.round(Math.random() * 255);
    var G = Math.round(Math.random() * 255);
    var B = Math.round(Math.random() * 255)
    element.style.background = "rgb(" + R + "," + G + "," + B + ")";
}

function selected_color(element){
    element.style.background = document.querySelector('input[type="color"]').value;
}

function select_rows(element){
    var ip = element.parentElement.rowIndex;
    //var jp = element.cellIndex;

    const rows = document.querySelectorAll("tr");
    for(var i = ip; i < 6; i++) {
        const cells = rows[i].children;
        for(var j = 0; j < 6; j++) {
            if(i % 2 == ip % 2){
                if (cells[j].style.background == "rgb(200, 200, 200)"){
                    cells[j].style.background = document.querySelector('input[type="color"]').value;
                    element.style.background = document.querySelector('input[type="color"]').value;
                }
                else cells[j].style.background = "rgb(200, 200, 200)";
            }
        }
    }
}