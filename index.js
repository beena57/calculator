const convertString = (string, delimiter) => {
    return string.split(delimiter);
}

const validateNumber = (number) => {
    if(number < 0) {
        throw Error('Negative numbers not allowed!');
    }
}

module.exports.calculate = (numberString = '', delimiter = ',') => {
     let sum = 0;
     const getConvertedString = convertString(numberString, delimiter);

     (getConvertedString || []).forEach((number) => {
        validateNumber(number);
        sum += +number;
    });

     return sum;
}

