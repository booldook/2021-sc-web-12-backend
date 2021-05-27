const plusZero = n => (n < 10) ? '0'+n : n;
const cutTail = str => (str.length > 20) ? str.substr(0, 20) + '...' : str;

module.exports = { plusZero, cutTail }