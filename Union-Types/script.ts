function toNumber(value: string | number) {
    if (typeof value === 'string') {
        return console.log('É uma string');
    } else if (typeof value === 'number') {
        return console.log(value);
    } else {
        console.error('O valor não é uma string ou um número'); 
    }
}

