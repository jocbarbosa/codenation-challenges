const fibonacci = () => {
    let initial = 0;
    const fibonacci_array = [0]

    while (initial <= 350) {
        if (initial === 0) {
            fibonacci_array.push(1)
            initial = 1
        } else {
            const elementToAdd = fibonacci_array[fibonacci_array.length - 1] + fibonacci_array[fibonacci_array.length - 2]
            fibonacci_array.push(elementToAdd)
            initial = elementToAdd
        }

    }
    return fibonacci_array
}

const isFibonacci = (number) => {
    const isInArray = fibonacci().includes(number)

    return isInArray
}

module.exports = {
    fibonacci: fibonacci,
    isFibonacci: isFibonacci
}