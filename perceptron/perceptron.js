// Ajustar quando necessário, ou seja, quando a saída for diferente da saída esperada. O ajuste é feito com base na fórmula: w(t+1) = w(t) + learningRate * (expectedOutput - output) * input

module.exports = class Perceptron {
    ciclo = 0;
    constructor(
        learningRate,
        theta,
        weights,
        inputs,
        expectedOutput
    ) {
        this.learningRate = learningRate;
        this.theta = theta;
        this.weights = weights;
        this.inputs = inputs;
        this.expectedOutput = expectedOutput;
    }

    setWeights(weights) {
        this.weights = weights;
    }

    showWeights(len) {
        return this.weights[0].toFixed(2) + ' ' + this.weights[1].toFixed(2) + ' ' + this.weights[2].toFixed(2);
    }

    calNet (inputs) {
        return inputs[0] * this.weights[0] + inputs[1] * this.weights[1] + inputs[2] * this.weights[2];
    }

    updateWeights(inputs, expectedOutput, actualOutput) {
        const error = expectedOutput - actualOutput;
        for (let i = 0; i < inputs.length; i++) {
            this.weights[i] = this.weights[i] + this.learningRate * error * inputs[i];
        }
    }

    activation(net) {
        if (net >= this.theta) {
            return 1;
        } else {
            return 0;
        }
    }

    exec() {
        let hasError = true;
        
        while (hasError) {
            hasError = false;
            console.log('Ciclo: ' + (this.ciclo += 1));

            this.inputs.forEach((item, index) => {
                let net = this.calNet(item);
                let output = this.activation(net);
                let expected = this.expectedOutput[index];
                
                console.log(`Padrão ${index + 1}: Net=${net.toFixed(2)}, Output=${output}, Esperado=${expected} | Pesos: [${this.showWeights().split(' ').join(', ')}]`);
                
                if (output !== expected) {
                    hasError = true;
                    this.updateWeights(item, expected, output);
                    console.log('Pesos atualizados: ' + this.showWeights());
                }
            });
            
            if (!hasError) {
                console.log('Treinamento concluído!');
            }
        }
    }
}