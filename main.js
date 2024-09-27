window.location.href = "./projects/P1-ProductList.xlsx";
// Banco de preguntas
const bancoDePreguntas = {
    proyecto1: {
        nombre: "Product List",
        archivo: "./projects/P1-ProductList.xlsx",
        preguntas: [
            [
                [
                    "In the 'Products' spreadsheet, freeze rows 1 and 2 so that the title and column headers remain visible as you scroll.",
                    "In the 'Products' spreadsheet, freeze rows 1, 2, and 3 so that the title and column headers remain visible as you scroll.",
                    "In the 'Products' spreadsheet, freeze row 1 so that the title remains visible as you scroll.",
                    "In the 'Products' spreadsheet, freeze rows 1, 2, 3, and 4 so that the title and column headers remain visible as you scroll.",
                    "In the 'Products' spreadsheet, freeze rows 1 and 3 so that the title and column headers remain visible as you scroll."
                ],
                [
                    "On the 'Products' worksheet, in the 'Quantity' column, use conditional formatting to apply the 3 Traffic Lights (Unrimmed) format to the values.",
                    "On the 'Products' worksheet, in the 'Quantity' column, use conditional formatting to apply the 3 Arrows (Colored) format to the values.",
                    "On the 'Products' worksheet, in the 'Quantity' column, use conditional formatting to apply the Data Bars (Gradient Fill) format to the values.",
                    "On the 'Products' worksheet, in the 'Quantity' column, use conditional formatting to apply the 3 Flags format to the values.",
                    "On the 'Products' worksheet, in the 'Quantity' column, use conditional formatting to apply the Color Scale (Red-Yellow-Green) format to the values."
                ],
                [
                    "On the 'Products' worksheet, apply the White, Table Style Medium 1 style to the table.",
                    "On the 'Products' worksheet, apply the Light Blue, Table Style Light 9 style to the table.",
                    "On the 'Products' worksheet, apply the Orange, Table Style Medium 6 style to the table.",
                    "On the 'Products' worksheet, apply the Light Green, Table Style Medium 3 style to the table.",
                    "On the 'Products' worksheet, apply the Dark Gray, Table Style Medium 2 style to the table."
                ],
                [
                    "On the 'Products' worksheet, in the 'Projected Value' column, enter a formula that multiplies the value in the 'Current Value' column by the 'Increase' named range.",
                    "On the 'Products' worksheet, in the 'Projected Value' column, enter a formula that adds the value in the 'Current Value' column to the 'Increase' named range.",
                    "On the 'Products' worksheet, in the 'Projected Value' column, enter a formula that subtracts the value in the 'Current Value' column from the 'Increase' named range.",
                    "On the 'Products' worksheet, in the 'Projected Value' column, enter a formula that divides the value in the 'Current Value' column by the 'Increase' named range.",
                    "On the 'Products' worksheet, in the 'Projected Value' column, enter a formula that multiplies the value in the 'Current Value' column by the 'Increase' named range."
                ],
                [
                    "On the 'Summary' worksheet, apply the Colorful Palette 2 color to the chart.",
                    "On the 'Summary' worksheet, apply the Colorful Palette 3 to the chart.",
                    "On the 'Summary' worksheet, apply the Monochromatic Palette 1 to the chart.",
                    "On the 'Summary' worksheet, apply the Colorful Palette 4 to the chart.",
                    "On the 'Summary' worksheet, apply the Colorful Palette 1 to the chart."
                ]
            ]


        ]
    },
    // Proyecto 2 
    proyecto2: {
        nombre: "Book Publishing",
        archivo: "./projects/P2–BookPublishing.xlsx",
        preguntas: [
            // Importing Data and Formatting as a Table
            [
                "On the 'Out of Print' worksheet, starting at cell A3, import data from the 'OutOfPrint' text file located in the Documents folder. Ensure the table does not use the first row of the data source as headers, but as data.",
                "On the 'Out of Print' worksheet, starting at cell A3, import data from the 'OutOfPrint' text file located in the Documents folder. Configure the table to use the first row as data, not as headers, and ensure the result is formatted as a table."
            ],

            // Setting Horizontal Text Alignment Variations
            [
                "On the 'Inventory' worksheet, set the horizontal text alignment of cell I3 to Center.",
                "On the 'Inventory' worksheet, adjust the horizontal text alignment of cell J3 to Center Across Selection.",
                "On the 'Inventory' worksheet, set the horizontal text alignment of cells I3 to Center."
            ],

            // Adding a Column to the Table with Header Change
            [
                "On the 'Inventory' worksheet, add only column G to the 'Year-End Inventory' table and rename the header to 'Total Value'.",
                "On the 'Inventory' worksheet, insert only column G to the 'Year-End Inventory' table and change the header of the new column to 'Accumulated Value'.",
                "On the 'Inventory' worksheet, add column G to the 'Year-End Inventory' table and rename the header to 'Net Value'."
            ],

            // Finding Maximum/Minimum Value Using a Function
            [
                "On the 'Inventory' worksheet, in cell F26, use a function to display the minimum value from the 'Unit Price' column of the 'Year-End Inventory' table.",
                "On the 'Inventory' worksheet, in cell F26, use a function to show the maximum value from the 'Unit Price' column of the 'Year-End Inventory' table.",
                "On the 'Inventory' worksheet, in cell F26, use a function to find the lowest value from the 'Unit Price' column of the 'Year-End Inventory' table."
            ],

            // Creating a 3D Chart with Variations in Chart Type
            [
                "On the 'Comparison' worksheet, using the data from 'Price Comparison by Regions', create a 3D Bar Chart that shows the 'Total Value' data for each 'Region'. Display the regions as a legend and add the title 'Total Value'.",
                "On the 'Comparison' worksheet, using the data from 'Price Comparison by Regions', generate a 3D Column Chart for the 'Total Value' of each 'Region'. Ensure the regions are shown in a legend and add the title 'Total Value'.",
                "On the 'Comparison' worksheet, using the data from 'Price Comparison by Regions', create a Donut Chart for the 'Total Value' by each 'Region'. Show the regions in the legend and add the title 'Total Value'."
            ],

            // Modifying a Chart with Data Label Variations
            [
                "On the 'Inventory' worksheet, modify the chart to display the series values as data labels at the base of each column.",
                "On the 'Inventory' worksheet, adjust the chart to display the data labels at the top of each column.",
                "On the 'Inventory' worksheet, modify the chart to display the data labels at the end of each column."
            ]
        ]
    }
};

// Control del proyecto y preguntas seleccionadas
const totalProjects = Object.keys(bancoDePreguntas).length;
let currentProjectIndex = 0;
let currentQuestionIndex = 0;
let selectedVariants = [];
let timer;
let secondsRemaining = 50 * 60;

// Función para seleccionar y guardar una variante aleatoria por pregunta
function selectRandomVariants(project) {
    const projectData = bancoDePreguntas[project];
    selectedVariants = projectData.preguntas.map((variants) => {
        const randomVariant = variants[Math.floor(Math.random() * variants.length)];
        return randomVariant;
    });
}

// Función para cargar preguntas y actualizar la interfaz
function loadProjectQuestions() {
    const projectKey = Object.keys(bancoDePreguntas)[currentProjectIndex];
    const projectData = bancoDePreguntas[projectKey];
    const totalQuestions = projectData.preguntas.length;

    // Actualizar título del proyecto
    document.getElementById("project-title").textContent = `Project ${currentProjectIndex + 1} of ${totalProjects}: ${projectData.nombre}`;

    // Actualizar barra de navegación de preguntas
    const navigationBar = document.getElementById("navigation-bar");
    navigationBar.innerHTML = ''; // Limpiar botones antiguos

    const prevBtn = document.createElement('button');
    prevBtn.textContent = "◄";
    prevBtn.addEventListener("click", goPrevQuestion);
    navigationBar.appendChild(prevBtn);

    for (let i = 0; i < totalQuestions; i++) {
        const btn = document.createElement('button');
        btn.classList.add("question-btn");
        btn.textContent = (i + 1);
        btn.addEventListener("click", () => {
            currentQuestionIndex = i;
            loadQuestion(currentQuestionIndex);
        });
        if (i === 0) btn.classList.add("active");
        navigationBar.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.textContent = "►";
    nextBtn.addEventListener("click", goNextQuestion);
    navigationBar.appendChild(nextBtn);

    // Cargar la primera pregunta
    loadQuestion(currentQuestionIndex);
}

// Función para cargar la pregunta almacenada
function loadQuestion(index) {
    const projectKey = Object.keys(bancoDePreguntas)[currentProjectIndex];
    const questionText = selectedVariants[index];
    document.getElementById("question-text").textContent = questionText;

    // Actualizar la pregunta activa en la barra de navegación
    const buttons = document.querySelectorAll(".question-btn");
    buttons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
}

// Navegar entre preguntas
function goPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function goNextQuestion() {
    const projectKey = Object.keys(bancoDePreguntas)[currentProjectIndex];
    if (currentQuestionIndex < bancoDePreguntas[projectKey].preguntas.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

// Función para iniciar el temporizador regresivo
function startTimer() {
    timer = setInterval(() => {
        secondsRemaining--;
        displayTime();

        if (secondsRemaining <= 0) {
            clearInterval(timer);
            alert("Time is up! The project will be submitted.");
            submitProject();
        }
    }, 1000);
}

// Función para mostrar el tiempo en la pantalla
function displayTime() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = formatTime(secondsRemaining);
}

// Función para formatear el tiempo en mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Función para enviar el proyecto y cambiar al siguiente
function submitProject() {

    // Obtener la ruta del archivo actual y redirigir
    const projectKey = Object.keys(bancoDePreguntas)[currentProjectIndex + 1];
    const archivoProyecto = bancoDePreguntas[projectKey].archivo;
    window.location.href = archivoProyecto; // Redirigir al archivo del proyecto actual

    // Cambiar al siguiente proyecto si hay más
    if (currentProjectIndex < totalProjects - 1) {
        currentProjectIndex++;
    } else {
        currentProjectIndex = 0; // Volver al primer proyecto si se termina la lista
    }

    // Reiniciar el estado para el siguiente proyecto
    currentQuestionIndex = 0;
    secondsRemaining = 50 * 60;
    selectRandomVariants(projectKey); // Seleccionar nuevas variantes
    loadProjectQuestions(); // Cargar las preguntas del nuevo proyecto
    startTimer(); // Reiniciar el temporizador
}

// Función para detener el temporizador
function stopTimer() {
    clearInterval(timer);
}

// Inicializar con el primer proyecto
selectRandomVariants(Object.keys(bancoDePreguntas)[currentProjectIndex]);
loadProjectQuestions();
startTimer(); // Iniciar el temporizador cuando el proyecto cargue

// Enviar el proyecto manualmente al hacer clic en el botón
document.getElementById("submit-project").addEventListener("click", () => {
    alert("Proyecto enviado.");
    submitProject();
});
