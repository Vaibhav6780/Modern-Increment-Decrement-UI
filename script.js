

function incr() {
    let current = parseInt(document.getElementById("number").textContent);
    current++;
    document.getElementById("number").textContent = current;
}

function reduc() {
    let current = parseInt(document.getElementById("number").textContent);
    current--;
    document.getElementById("number").textContent = current;
}
