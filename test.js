const name = "precious";


const greetings = ["Hi", "Hello", "Welcome", "Nice to meet you", "Hey"]

const greet = () => {
    let pick = Math.round(Math.random() * 4);
    console.log(`${greetings[pick]} ${name} :)`);
}

greet()