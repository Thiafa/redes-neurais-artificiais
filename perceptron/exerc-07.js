const Perceptron = require('./perceptron');

let inputs = [
    [1, 1, 1, 1, 1], 
    [0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 1]
];

const expectedOutput = [
    1,
    0,
    0,
    1,
    0,
    1,
];

const weights = [0.2, -0.1, 0.1, -0.2, 0.3];
const theta = 0.5;
const learningRate = 0.3;

const perceptron = new Perceptron(
    learningRate,
    theta,
    weights,
    inputs,
    expectedOutput
);

perceptron.exec();

inputs = [
    [1, 0, 1, 0],
    [0, 1, 0, 0]
]
perceptron.calculateOutput(inputs);
