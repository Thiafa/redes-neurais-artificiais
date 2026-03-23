import Perceptron from './perceptron.js';

// Equipamento Temperatura Vibração Ruído Corrente Diagnóstico
// E1 1 1 1 1
// E2 0 0 0 0
// E3 1 0 0 1
// E4 1 1 1 0
// E5 0 1 1 0
// E6 1 0 1 1

let inputs = [
    [1, 1, 1, 1, 1], // E1
    [1, 0, 0, 0, 0], // E2
    [1, 1, 0, 0, 1], // E3
    [1, 1, 1, 1, 0], // E4
    [1, 0, 1, 1, 0], // E5
    [1, 1, 0, 1, 1]  // E6
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
const theta = 0;
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
