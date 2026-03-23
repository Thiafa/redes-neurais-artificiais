import Perceptron from './perceptron.js';

let inputsArray = [
    [100, 20],
    [100, 26],
    [100, 30],
    [100, 32],
    [102, 21],
    [105, 22],
    [107, 32],
    [110, 35],
    [111, 25],
    [114, 24],
    [116, 36],
    [118, 27],
]

// separa colunas
let col1 = inputsArray.map(i => i[0]);
let col2 = inputsArray.map(i => i[1]);

let min1 = Math.min(...col1);
let max1 = Math.max(...col1);

let min2 = Math.min(...col2);
let max2 = Math.max(...col2);

// normaliza
let inputs = inputsArray.map(([x, y]) => {
    let nx = (x - min1) / (max1 - min1);
    let ny = (y - min2) / (max2 - min2);
    return [nx, ny];
});

console.log('Dados de entrada normalizados:', inputs);

const expectedOutput = [
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    0
]

const weights = [-0.5, 0.5];
const theta = 0.4;

const perceptron = new Perceptron(
    0.6,
    theta,
    weights,
    inputs,
    expectedOutput
);

perceptron.exec();