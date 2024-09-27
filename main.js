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
                "Import data from the 'OutOfPrint' text file into cell A3 of the 'Out of Print' worksheet, ensuring the table uses the first row of the data source as headers.",
                "Import data from the 'OutOfStock' text file into cell A4 of the 'Out of Stock' worksheet, ensuring the first row of the data source is used as headers and formatted as a table.",
                "On the 'Out of Print' sheet, import data starting at cell B3 from the 'OutOfDate' text file, formatted as a table with the first row as headers.",
                "Import data from the 'Backlog' text file into the 'Inventory Overview' sheet at cell A5, ensuring the first row is used as headers and is formatted as a table.",
                "In the 'Out of Print' sheet, import data from the 'OldEditions' text file into cell A2, and ensure the table uses the first row as headers.",
                "Import data from the 'ArchivedBooks' text file into cell C3 of the 'Out of Print' worksheet and format it as a table with headers."
            ],
            // Setting Horizontal Text Alignment
            [
                "Set the horizontal text alignment of cells I3 on the 'Inventory' worksheet to Center Across Selection.",
                "On the 'Inventory' sheet, set the horizontal text alignment of cells H3 to Center Across Selection.",
                "In the 'Inventory Report' worksheet, center the text across cells J3 using Center Across Selection.",
                "On the 'Inventory' worksheet, align the text in cells G2 horizontally using Center Across Selection.",
                "Center the text horizontally across cells F3 in the 'Inventory Overview' sheet using Center Across Selection.",
                "Apply Center Across Selection to cells L2 on the 'Stock Summary' worksheet.",
                "On the 'Inventory' worksheet, align the text in cells K4 using Center Across Selection."
            ],
            // Adding a Column to the Table
            [
                "Add only column G to the 'Year-End Inventory' table so that 'Total Value' becomes the header of the new table column.",
                "On the 'Year-End Report' sheet, add column H to the table and name the new header 'Net Sales.'",
                "Add column F to the 'Year-End Inventory' table in the 'Inventory' worksheet, and name the new header 'Gross Margin.'",
                "In the 'Inventory' sheet, add column J to the table, and name the header of the new column 'Sales Forecast.'",
                "On the 'Year-End Summary' sheet, add column G to the table and label the header as 'Stock Turnover.'",
                "Add column I to the 'Inventory Status' table, and rename the header of the new column 'Average Cost.'",
                "In the 'Year-End Inventory' sheet, add column E to the table, and use 'Total Sales' as the new column header."
            ],
            // Finding Maximum Value Using a Function
            [
                "In cell F26 of the 'Inventory' worksheet, use a function to display the maximum value from the 'Unit Price' column of the 'Year-End Inventory' table.",
                "On the 'Sales Report' worksheet, use a function in cell E30 to find the maximum value from the 'Quantity Sold' column.",
                "In cell D15 of the 'Inventory Summary' worksheet, use a function to find the highest value from the 'Revenue' column in the 'Year-End Sales' table.",
                "In the 'Stock Overview' worksheet, use a function in cell G20 to calculate the maximum value from the 'Stock Remaining' column.",
                "On the 'Inventory' sheet, use a function in cell H26 to find the maximum value from the 'Discount' column of the table.",
                "In the 'Product Sales' worksheet, use a function in cell F28 to calculate the maximum value from the 'Profit Margin' column.",
                "Use a function in cell I25 of the 'Inventory' worksheet to display the maximum value from the 'Total Cost' column."
            ],
            // Creating a 3D Pie Chart
            [
                "On the 'Comparison' sheet, create a 3D Pie Chart using 'Total Value' data from 'Price Comparison by Regions.' Include a title and legend.",
                "On the 'Analysis' worksheet, create a 3D Pie Chart using 'Sales by Regions' data, showing 'Net Sales' per region. Include the title 'Regional Sales.'",
                "In the 'Comparison' sheet, create a 3D Pie Chart for the 'Total Revenue' data from 'Product Comparison by Regions.' Include a legend and title 'Revenue by Region.'",
                "On the 'Sales Overview' worksheet, create a 3D Pie Chart for the 'Gross Sales' data by product categories, showing the title 'Sales Distribution.'",
                "On the 'Regional Analysis' sheet, create a 3D Pie Chart using the 'Units Sold' data by region. Add a legend and the title 'Units Sold by Region.'",
                "In the 'Inventory Report' sheet, create a 3D Pie Chart for 'Inventory Value' data, showing the breakdown per region with the title 'Inventory Distribution.'",
                "Create a 3D Pie Chart on the 'Product Comparison' sheet, showing 'Net Profit' data by region. Title the chart 'Profit Comparison.'"
            ],
            // Modifying a Chart
            [
                "Modify the chart on the 'Inventory' sheet to display the series values as data labels in the center of each column.",
                "On the 'Sales' worksheet, modify the bar chart to display series values as data labels inside the end of each bar.",
                "In the 'Revenue Overview' worksheet, modify the line chart to show data labels for the series values at each point along the line.",
                "Modify the pie chart on the 'Product Sales' sheet to show percentage data labels next to each slice.",
                "In the 'Inventory Summary' sheet, adjust the bar chart to display the series values as data labels above each column.",
                "On the 'Year-End Report' worksheet, modify the line chart to display the series values as data labels below each point.",
                "Modify the area chart on the 'Sales Analysis' sheet to display the series values as data labels within the filled area."
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
