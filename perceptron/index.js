const Perceptron = require('./perceptron');

const inputs = [
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 0],
    [1, 1, 1]
]

const expectedOutput = [
    0,
    0,
    0,
    1
]

const weights = [-0.5, 0, 0];

const perceptron = new Perceptron(
    0.1,
    0,
    weights,
    inputs,
    expectedOutput
);

perceptron.exec();
