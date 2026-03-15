const Perceptron = require('./perceptron');

const inputs = [
    [1, 1, 1, 0, 1], // João
    [1, 0, 0, 1, 0], // Pedro
    [1, 1, 1, 0, 0], // Maria
    [1, 1, 0, 1, 1], // José
    [1, 1, 0, 0, 1], // Ana
    [1, 0, 0, 1, 1]  // Leila
];

const expectedOutput = [0, 1, 1, 0, 1, 0];

const weights = [0.1, 0.2, -0.2, -0.2, -0.3];
const theta = 0;
const learningRate = 0.4;

const perceptron = new Perceptron(
    learningRate,
    theta,
    weights,
    inputs,
    expectedOutput
);

perceptron.exec();