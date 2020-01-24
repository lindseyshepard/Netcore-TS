function sayHello() {
    const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
    const framework = (document.getElementById("framework") as HTMLInputElement).value;
    return `Hello from ${compiler} and ${framework}!`;
}
function helloWorld() {


    const theMessage = (document.getElementById("theMessage") as HTMLInputElement).value;
    return `Your message ${theMessage}`;

}