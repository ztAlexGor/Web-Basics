const eightElement = document.getElementById("eight-element");
eightElement.addEventListener("click", function(){
    if (eightElement.style.color == "black" || eightElement.style.color == ""){
        eightElement.style.color = "white";
        eightElement.style.backgroundColor = "black";
    }else{
        eightElement.style.color = "black";
        eightElement.style.backgroundColor = "white";
    }
});

const nineElement = document.querySelector("#nine-element");
nineElement.onclick = function(){
    if (nineElement.style.color == "black" || eightElement.style.color == ""){
        nineElement.style.color = "white";
        nineElement.style.backgroundColor = "black";
    }else{
        nineElement.style.color = "black";
        nineElement.style.backgroundColor = "white";
    }
}

function AddPhoto(){
    var image = document.createElement("img")
    image.src = "https://upload.wikimedia.org/wikipedia/commons/5/56/Wuhan_montage.png";

    var link = document.createElement("a");
    link.href = "http://www.wuhan.gov.cn/";

    link.appendChild(image)
    document.getElementById("image-container").appendChild(link);

    document.querySelector("button:nth-child(2)").removeAttribute("disabled");
    document.querySelector("button:nth-child(3)").removeAttribute("disabled");
    document.querySelector("button:nth-child(4)").removeAttribute("disabled");
    image.scrollIntoView();
}

function DeletePhoto(){
    const container = document.getElementById("image-container")
    container.removeChild(container.lastChild);
    
    if (container.childElementCount == 0){
        document.querySelector("button:nth-child(2)").setAttribute("disabled", "true");
        document.querySelector("button:nth-child(3)").setAttribute("disabled", "true");
        document.querySelector("button:nth-child(4)").setAttribute("disabled", "true");
    }
}

function ScaleDown(){
    const image = document.querySelector("a:last-child").firstElementChild;
    image.style.height = (image.clientHeight * 0.83333).toString() + "px";
}

function ScaleUp(){
    const image = document.querySelector("a:last-child").firstElementChild;
    image.style.height = (image.clientHeight * 1.2).toString() + "px";
}