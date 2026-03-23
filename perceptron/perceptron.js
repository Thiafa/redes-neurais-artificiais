// Ajustar quando necessário, ou seja, quando a saída for diferente da saída esperada. O ajuste é feito com base na fórmula: w(t+1) = w(t) + learningRate * (expectedOutput - output) * input

export default class Perceptron {
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

    showWeights() {
       return this.weights.map(w => w.toFixed(2)).join(' ');
    }

    calNet(inputRow) {
        let net = 0;
        for (let i = 0; i < inputRow.length; i++) {
            net += inputRow[i] * this.weights[i];
        }
        return net;
    }

    updateWeights(inputs, expectedOutput, actualOutput) {
        const error = expectedOutput - actualOutput;
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = this.weights[i] + (this.learningRate * error * inputs[i]);
        }
    }

    activation(net) {
        if (net >= this.theta) {
            return 1;
        } else {
            return 0;
        }
    }

    calculateOutput(inputs) {
        for (let i = 0; i < inputs.length; i++) {
            const net = this.calNet(inputs[i]);
            const output = this.activation(net);
            console.log(`Input: ${inputs[i]} | Net: ${net.toFixed(2)} | Output: ${output}`);
        }
    }

    exec() {
        let hasError = true;
        let maxCycles = 1000;

        while (hasError && this.ciclo < maxCycles) {
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

        if (this.ciclo >= maxCycles) {
            console.log('Número máximo de ciclos atingido. Treinamento interrompido.');
            console.log('Verifique se os dados são linearmente separáveis ou ajuste os parâmetros de aprendizado.');
        }
    }
}