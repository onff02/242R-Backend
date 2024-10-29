function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}

function multiPermutation(n, r) {
    return Math.pow(n, r);
}

function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function multiCombination(n, r) {
    return factorial(n + r - 1) / (factorial(r) * factorial(n - 1));
}

module.exports = {
    permutation,
    multiPermutation,
    combination,
    multiCombination
};