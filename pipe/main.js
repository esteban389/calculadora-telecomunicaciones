// Función para cargar el modelo de manera asíncrona
async function loadModel() {
    
    const model = await tf.loadLayersModel("model.json");
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

