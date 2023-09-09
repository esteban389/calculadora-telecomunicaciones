// Función para cargar el modelo de manera asíncrona
async function loadModel() {
    // Fetch the binary weights file (group1.bin)
fetch('path/to/group1.bin') // Replace with the correct path or URL to your binary file
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.arrayBuffer(); // This converts the response to an ArrayBuffer
})
.then(arrayBuffer => {
  // Handle the binary data in the 'arrayBuffer'
  // For example, you can use it to create a TypedArray (e.g., Uint8Array)
  const uint8Array = new Uint8Array(arrayBuffer);

  // Load the model architecture (model.json)
  tf.loadLayersModel('path/to/model.json') // Replace with the correct path or URL to your model.json
    .then(model => {
      // Manually assign the binary weights to the model's weights
      const weightsManifest = [
        {
          paths: ['group1.bin'],
          weights: [
            { name: 'conv2d/kernel', shape: [3, 3, 1, 32], dtype: 'float32' },
            { name: 'conv2d/bias', shape: [32], dtype: 'float32' },
            { name: 'conv2d_1/kernel', shape: [3, 3, 32, 64], dtype: 'float32' },
            { name: 'conv2d_1/bias', shape: [64], dtype: 'float32' },
            { name: 'dense/kernel', shape: [1600, 256], dtype: 'float32' },
            { name: 'dense/bias', shape: [256], dtype: 'float32' },
            { name: 'dense_1/kernel', shape: [256, 7], dtype: 'float32' },
            { name: 'dense_1/bias', shape: [7], dtype: 'float32' },
          ],
        },
      ];

      // Load the binary weights into the model
      for (const manifest of weightsManifest) {
        const paths = manifest.paths;
        const weights = manifest.weights;

        for (let i = 0; i < paths.length; i++) {
          const weightData = uint8Array; // Use the entire binary data
          model.weights.find(weight => weight.originalName === weights[i].name).read(weightData);
        }
      }

      // Now, 'model' contains the architecture and loaded binary weights
      // You can use 'model' for inference as usual
    })
    .catch(error => {
      console.error('Error loading model:', error);
    });
})
.catch(error => {
  console.error('Fetch error:', error);
});

    //const model = await tf.loadLayersModel('model.json');
    return model;
}

const classLabels = ["arquimedes", "eratostenes", "platon","copernico","no identificado","tycho","timocaris"]; // Reemplaza con las etiquetas reales de tus clases

// Función para clasificar la imagen
async function classifyImage() {
    const input = document.getElementById('imageInput');
    const image = input.files[0];
    const reader = new FileReader();

    reader.onload = async function(event) {
        const img = new Image();
        img.onload = async function() {
            const tensor = preprocessImage(img);
            
            // Cargar el modelo
            const model = await loadModel();
            const predictions = await model.predict(tensor).data();
            
            // Obtener la etiqueta de clase con la probabilidad más alta
            const predictedClassIndex = predictions.indexOf(Math.max(...predictions));
            const predictedClassLabel = classLabels[predictedClassIndex];

            // Mostrar la etiqueta de clase y la probabilidad en tu página
            const resultElement = document.getElementById('result');
            resultElement.textContent = `Prediccion: ${predictedClassLabel} (Probabilidad: ${Math.max(...predictions)})`;
        };
        img.src = event.target.result;

        const previewImage = document.getElementById('preview');
        previewImage.src = event.target.result;
    };

    reader.readAsDataURL(image);
}

// Función para preprocesar la imagen
function preprocessImage(image) {
    const tensor = tf.browser.fromPixels(image).toFloat();
    const resizedTensor = tf.image.resizeBilinear(tensor, [28, 28]);
    const grayTensor = resizedTensor.mean(2); // Convertir a escala de grises
    const normalizedTensor = grayTensor.div(tf.scalar(255)); // Normalizar
    const reshapedTensor = normalizedTensor.reshape([1, 28, 28, 1]); // Agregar lote y canal

    return reshapedTensor;
}

// Función que se ejecuta cuando la página ha cargado
window.onload = function() {
    // Agregar un evento al botón de clasificación
    const classifyButton = document.getElementById('classifyButton');
    classifyButton.addEventListener('click', classifyImage);
};

