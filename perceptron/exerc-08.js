import Perceptron from './perceptron.js';

// a) Adote taxa de aprendizagem η = 0.5 
// b) Vetor de pesos iniciais: w=[−0.1 0.3 0.2 −0.2 0.1]  
// c) Codificação dos atributos  
// • S = 1 
// • N = 0 
// d) Saída desejada  
// • Spam → yd = 1 
// • Normal → yd = 0

let inputs = [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
];

const expectedOutput = [
    1,
    0,
    0,
    1,
    0,
    1,
];

const weights = [-0.1, 0.3, 0.2, -0.2, 0.1];
const theta = 0.5;
const learningRate = 0.5;

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
    [0, 1, 0, 1]
]

perceptron.calculateOutput(inputs);
