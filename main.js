window.location.href = "./projects/P1-ProductList.xlsx";
// Banco de preguntas
const bancoDePreguntas = {
    proyecto1: {
        nombre: "Product List",
        archivo: "./projects/P1-ProductList.xlsx",
        preguntas: [
            ["In the 'Products' spreadsheet, freeze rows 1 and 2 so that the title and column headers remain visible as you scroll.",
                "In the 'Sales Data' worksheet, freeze rows 1 and 3 so that the main title and section headers remain visible as you scroll.",
                "In the 'Orders' worksheet, freeze the first two rows so the title and filter options stay visible as you scroll.",
                "In the 'Employee List' spreadsheet, freeze rows 1 and 4 so that the title and department headers remain visible as you scroll.",
                "In the 'Expenses' worksheet, freeze the first three rows so that the header and subheader remain visible while scrolling down the list."
            ],
            ["On the 'Products' worksheet, in the 'Quantity' column, use conditional formatting to apply the 3 Traffic Lights (Unrimmed) format to the values.",
                "On the 'Orders' worksheet, in the 'Units Shipped' column, use conditional formatting to apply the 3 Traffic Lights (Rimmed) format to the values.",
                "In the 'Inventory' worksheet, apply conditional formatting to the 'Stock Level' column using the 3 Traffic Lights (Unrimmed) format.",
                "On the 'Sales Report' worksheet, apply conditional formatting with the 3 Traffic Lights (Rimmed) to the 'Monthly Targets' column values.",
                "On the 'Employee Performance' worksheet, use conditional formatting to apply the 3 Traffic Lights (Unrimmed) format to the 'Attendance' column."
            ],
            ["On the 'Products' worksheet, apply the White, Table Style Medium 1 style to the table.",
                "On the 'Sales Data' worksheet, apply the Light Blue, Table Style Light 9 style to the table.",
                "In the 'Expense Report' worksheet, apply the Orange, Table Style Medium 6 to the existing table.",
                "On the 'Customer Orders' worksheet, apply the Light Green, Table Style Medium 3 to the table data.",
                "On the 'Inventory List' worksheet, use the Dark Gray, Table Style Medium 2 for the table."
            ],
            ["On the 'Products' worksheet, in the 'Projected Value' column, enter a formula that multiplies the value in the 'Current Value' column by the 'Increase' named range.",
                "On the 'Revenue' worksheet, in the 'Projected Sales' column, enter a formula that multiplies the value in the 'Sales Amount' column by the 'GrowthRate' named range.",
                "On the 'Orders' worksheet, in the 'Total Revenue' column, use a formula that multiplies the 'Units Sold' by the 'PriceIncrease' named range.",
                "In the 'Budget' worksheet, calculate the 'Estimated Cost' by multiplying the 'Current Cost' by the 'InflationRate' named range.",
                "On the 'Performance' worksheet, enter a formula in the 'Adjusted Score' column that multiplies 'Score' by the named range 'AdjustmentFactor'."
            ],
            ["On the 'Summary' worksheet, apply the Colorful Palette 2 color to the chart.",
                "On the 'Sales Overview' worksheet, apply the Colorful Palette 3 to the pie chart.",
                "In the 'Performance Review' worksheet, apply the Monochromatic Palette 1 to the bar chart.",
                "On the 'Expense Summary' worksheet, change the line chart colors to the Colorful Palette 4.",
                "On the 'Revenue Breakdown' worksheet, apply the Colorful Palette 1 to the column chart."
            ]

        ]
    },
    // Proyecto 2 
    proyecto2: {
        nombre: "Proximamente",
        archivo: "./projects/P1-ProductList.xlsx",
        preguntas: [
            ["Variante 1.1", "Variante 1.2", "Variante 1.3"],
            ["Variante 2.1", "Variante 2.2", "Variante 2.3"],
            ["Variante 3.1", "Variante 3.2", "Variante 3.3"],
            ["Variante 4.1", "Variante 4.2", "Variante 4.3"],
            ["Variante 5.1", "Variante 5.2", "Variante 5.3"],
            ["Variante 6.1", "Variante 6.2", "Variante 6.3"]
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
    stopTimer(); // Detener el temporizador

    // Obtener la ruta del archivo actual y redirigir
    const projectKey = Object.keys(bancoDePreguntas)[currentProjectIndex];
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
