const getcolor = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerText = randomcode;
    document.getElementById("copycode").innerText = "Copy"
}

document.getElementById("colorbtn").addEventListener("click",getcolor);

getcolor();

function copyfun() {
    const mycolorcode = document.getElementById("color-code").innerText;
    navigator.clipboard.writeText(mycolorcode);
    document.getElementById("copycode").innerText = "Copied"
}

document.getElementById("copycode").addEventListener("click",copyfun)



