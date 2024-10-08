window.location.href = "./projects/P1-ProductList.xlsx";
// Banco de preguntas
const bancoDePreguntas = {
    proyecto1: {
        nombre: "Product List",
        archivo: "./projects/P1-ProductList.xlsx",
        preguntas: [

            [
                "In the'Products' spreadsheet, freeze rows 1 and 2 so that the title and column headers remain visible as you scroll."
            ],
            [
                "On the “Products” worksheet, in the “Quantity” column, use conditional formatting to apply the 3 Traffic Lights (Unrimmed) format to the values. 🚦"
            ],
            [
                "On the ‘Products’ worksheet, apply the White, Table Style Medium 1 style to the table."
            ],
            [
                "On the “Products” worksheet, in the “Projected Value” column, enter a formula that multiplies the value in the “Current Value” column by the “Increase” named range. Use the column name and range name in the formula instead of cell references or values.",
            ],
            [
                "On the “Summary” worksheet, apply the Colorful Palette 2 color to the chart.",
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
                "On the “Out of Print” worksheet, starting at cell A3, import data from the OutOfPrint text file located in the Documents folder. Ensure that the table uses the first row of the data source as headers. Note: Ensure that the resulting data is formatted as a table, not a range."
            ],

            // Setting Horizontal Text Alignment Variations
            [
                "In the “Inventory” worksheet, set the horizontal text alignment of cells I3:J3 to Center Across Selection."
            ],

            // Adding a Column to the Table with Header Change
            [
                "In the “Inventory” worksheet, add only column G to the “Year-End Inventory” table, so that “Total Value” becomes the header of the new table column."
            ],

            // Finding Maximum/Minimum Value Using a Function
            [
                "In the “Inventory” worksheet, in cell F26, use a function to display the maximum value from the “Unit Price” column of the “Year-End Inventory” table."
            ],

            // Creating a 3D Chart with Variations in Chart Type
            [
                "On the “Comparison” sheet, using the data from “Price Comparison by Regions”, create a 3D Pie Chart that displays the “Total Value” data for each “Region.” Show the regions as a legend. Display the title “Total Value.” The exact position and size of the chart are not relevant."
            ],

            // Modifying a Chart with Data Label Variations
            [
                "On the “Inventory” sheet, modify the chart to display the series values as data labels in the center of each column."
            ]
        ]
    },

    // Proyecto 3 
    proyecto3: {
        nombre: "Clients",
        archivo: "./projects/P3-Clients.xlsx",
        preguntas: [
            [
                "On the “Customer Billing” sheet, change the margins to Narrow"
            ],

            // Adjusting Page Breaks (No Variants)
            [
                "On the “Consultants” worksheet, adjust the page breaks so that the worksheet prints on two pages. Cells A1:D23 should print on the first page, and the entire chart should print on the second page."
            ],

            // Variants of Using the RANDBETWEEN Function for Random Number Generation
            [
                "3.	On the “New Clients” worksheet, in cells C4:C13, use the “RANDBETWEEN” function to generate a random “Consultant ID” number from 1 to 10 in each cell."
            ],

            // Variants of Applying Styles to Cell A1 on the "New Clients" Worksheet
            [
                "4.	On the ‘New Clients’ worksheet, apply the Title style to cell A1"
            ],

            // Variants of Sorting Clients in Ascending or Descending Order
            [
                "On the ‘New Clients’ worksheet, in cells B4:B13, use a function to display the clients from cells E4:E13 in ascending order."
            ],

            // Variants of Adding Alt Text to the Chart on the "Consultants" Worksheet
            [
                "On the “Consultants” worksheet, add the alt text description “Weekly hours chart” to the chart."
            ]
        ]
    },

    // Proyecto 4 
    proyecto4: {
        nombre: "VolunteerRoster",
        archivo: "./projects/P4–VolunteerRoster.xlsx",
        preguntas: [
            [
                "On the “Training” worksheet, add the Current Date to the right header cell. Use a technique that updates the date each time."
            ],

            // Insert a Note or Comment
            [
                "On the ‘Roster’ worksheet, in cell E4, insert a New Note with the text “Bonus for 10+ years”."

            ],

            // Conditional Function Using Volunteer Data
            [
                "On the “Roster” worksheet, in the “Award Type” column, use a function to display “Gold” for each volunteer with 10 or more years of service. Otherwise, leave the “Award Type” blank."
            ],

            // Formula for Display Name Format (Last Name, First Name)
            [
                "On the “Roster” worksheet, in the “Display Name” column, enter a formula to display the volunteers’ names in the Last Name, First Name format. For example: Barr, Adam"
            ]
        ]
    },

    // Proyecto 5
    proyecto5: {
        nombre: "CoffeeInventory",
        archivo: "./projects/P5–CoffeeInventory.xlsx",
        preguntas: [
            //  Inserting a Hyperlink
            [
                "On the 'Roasting' worksheet, in cell A10, insert a hyperlink to 'http://fourthcoffee.com'. Display the text 'More information' in the cell."
            ],

            // Question 2: Copy and Paste Options
            [
                "On the 'Inventory' worksheet copy cells A1: D33. Select cell A1 of the 'Archive' worksheet and paste the copied cells, retaining the Column widths from the source worksheet."

            ],

            // Applying Number Formats
            [
                "On the 'Inventory' worksheet, apply the Currency number format to cells D4: D33. Display the numbers with only two decimal places"

            ],

            // Table Style Options
            [
                "On the 'Roasting' worksheet, configure the table style options to automatically shade every other table row."

            ]
        ]
    },

    // Proyecto 6
    proyecto6: {
        nombre: "ScoreSummary",
        archivo: "./projects/P6–ScoreSummary.xlsx",
        preguntas: [
            //  Inserting a Hyperlink
            [
                "Configure the “Students” sheet so that only cells C3:E18 are printed"
            ],

            // Question 2: Copy and Paste Options
            [
                "On the ‘Scores’ worksheet, configure A3:F3 to automatically wrap the text"

            ],

            // Applying Number Formats
            [
                "On the “Scores” sheet, in the “Trend” column, insert Line sparklines to compare the results of “Test 1,” “Test 2,” and “Test 3."

            ],

            // Table Style Options
            [
                "On the “Students” worksheet, in the “Graduation Year” column, use a function to display the first 4 numbers of the “Student Number” from column A."

            ],
            // Table Style Options
            [
                "On the ‘Scores’ worksheet, update the chart to include the ‘Test 2’ and ‘Test 3’ scores. Note: The data series should display in the order ‘Test 1’, ‘Test 2’, ‘Test 3’."

            ]
        ]
    },
    // Proyecto 7
    proyecto7: {
        nombre: "CoffeeInventory",
        archivo: "./projects/P7–Residences.xlsx",
        preguntas: [
            //  Inserting a Hyperlink
            [
                "In the document properties, add ‘Rent’ as a tag."
            ],

            // Question 2: Copy and Paste Options
            [
                "On the ‘Income’ worksheet, name the range B2:B4 ‘Income’"

            ],

            // Applying Number Formats
            [
                "On the ‘Real Estate’ worksheet, filter the table data to hide all rows with ‘Studio’ in the ‘Type’ column."

            ],

            // Table Style Options
            [
                "On the “Real Estate” worksheet, in the “Rent Increase” column, enter a formula that multiplies the value in the “Monthly Rent” column by cell C25."

            ],
            [
                "On the ‘Income’ worksheet, modify the chart to display the legend to the right of the chart."

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
