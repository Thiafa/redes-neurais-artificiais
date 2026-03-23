// Exemplo de Perceptron usando TensorFlow.js
import * as tf from '@tensorflow/tfjs-node';

const rawInputs = tf.tensor2d([
 [100,20],
 [100,26],
 [100,30],
 [100,32],
 [102,21],
 [105,22],
 [107,32],
 [110,35],
 [111,25],
 [114,24],
 [116,36],
 [118,27]
]);

const rawOutputs = tf.tensor2d([
  [0], [1], [1], [1], 
  [0], [0], [1], [1], 
  [0], [0], [1], [0]
]);

const inputMin = rawInputs.min(0);
const inputMax = rawInputs.max(0);
const inputs = rawInputs.sub(inputMin).div(inputMax.sub(inputMin));

console.log('Dados de entrada normalizados:', inputs.arraySync());

const perceptron = tf.sequential();

perceptron.add(tf.layers.dense({
  units: 8,
  inputShape: [2],
  activation: 'relu'
}))

// perceptron.add(tf.layers.dense({
//   units: 4,
//   inputShape: [2],
//   activation: 'relu'
// }))

perceptron.add(tf.layers.dense({
  units: 1,
  activation: 'sigmoid'
}));

perceptron.compile({
  optimizer: tf.train.adam(0.05), 
  loss: 'binaryCrossentropy',
  metrics: ['accuracy']
});

async function train() {
  console.log('Iniciando treinamento...');
  await perceptron.fit(inputs, rawOutputs, {
    epochs: 300,
    verbose: 0,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        if (epoch % 10 === 0) console.log(`Época ${epoch}: Erro = ${logs.loss.toFixed(4)}`);
      }
    }
  });
  console.log('Treinamento concluído!');
  
  const finalPrevisao = perceptron.predict(inputs);
  console.log('Resultado Final (Binário):');
  finalPrevisao.greater(0.5).cast('int32').print();
}

train()

// perceptron.predict([[100, 20], [110, 35], [116, 36]]);



// // definir os dados de entrada (características) e saída (rótulos)
// console.log(outputs)
// const model = tf.sequential();

// model.add(tf.layers.dense({
//   units: 1,
//   inputShape: [2],
//   activation: 'sigmoid'
// }));

// model.compile({
//   optimizer: tf.train.adam(),
//   loss: 'binaryCrossentropy'
// });

  
// // async function train(){
// //   await model.fit(inputs, outputs, {
// //     epochs: 1000,
// //     callbacks:{
// //       onEpochEnd:(epoch,logs)=>{
// //         console.log(epoch, logs.loss);
// //       }
// //     }
// //   });

// //   console.log("Treinamento concluído");

// //   model.predict(inputs).print();
// // }

// // train();