function helloMessage(){
    alert("today will be boring!");
}

// another comment
var data = 200;

function calculate(){
    var a =10; // local variable
    var c =10;
    var b =10 + a+ c;
    var d =10 + b;

    window.value = d;

    document.write(d);
    return d;
}



function abc() {
    console.log(window.value);
    console.log("alas");
}