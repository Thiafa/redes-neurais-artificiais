const Perceptron = require('./perceptron');

let inputs = [
    [1, 0, 0, 1],
    [1, 1, 1, 0]
]

const expectedOutput = [
    0,
    1,
]

const weights = [-0.5, 0.4, -0.6, 0.6];
const theta = 0;

const perceptron = new Perceptron(
    0.4,
    theta,
    weights,
    inputs,
    expectedOutput
);

perceptron.exec();

inputs = [
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 1],
]

perceptron.calculateOutput(inputs);