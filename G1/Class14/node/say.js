function hello(name) {
    return `Hey there ${name}`;
}

function bye(name) {
    return `Goodbye there ${name}`;
}

module.exports = {
    sayHello: hello,
    sayBye: bye
}