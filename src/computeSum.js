function computeSum() {
    //input
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    //algoritm
    let result = sum(a,b);

    //output
    document.getElementById("sum").innerHTML = result
}
