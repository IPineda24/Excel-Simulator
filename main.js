window.location.href = "./projects/JobReport.xlsx";

// Banco de preguntas
const bancoDePreguntas = {
    proyecto1: {
        nombre: "JobReport",
        archivo: "./projects/JobReport.xlsx",
        preguntas: [

            [
                "On the *Last Quarter* worksheet, freeze row 1 so it remains visible while scrolling."
            ],
            [
                "On the *Last Quarter* worksheet, in cell A3, apply the *Strikethrough* font effect to the name *Danner, Ryan*."
            ],
            [
                "On the 'Summary' worksheet, in the 'Trend' column, insert *Line* sparklines to show the trends from 'Year 1' through 'Year 5'."
            ],
            [
                "On the 'Last Quarter' worksheet, in column F, beginning in cell F2, use a function to display each 'Job Title' from the table without retrieving duplicate entries."
            ],
            [
                "On the 'Job Openings' worksheet, modify the chart to display the Primary Vertical axis title. Enter the title 'Jobs'."
            ]
        ]



    },

    // Proyecto 4 
    proyecto4: {
        nombre: "Attendance",
        archivo: "./projects/Attendance.xlsx",
        preguntas: [
            [
                'You are preparing student attendance and grade data to present to your school\'s administrators. On the "Score" worksheet, insert page numbering in the center of the footer using the format *Page [P] of [N]*, where *[P]* is the *Page Number* and *[N]* is the *Number of Pages*.'
            ],
            [
                'On the "Score Summary" worksheet, display the formulas instead of the values.'
            ],
            [
                'On the "Attendance" worksheet, configure rows 1 through 4 to repeat on all printed pages.'
            ],
            [
                'On the "Attendance" worksheet, delete the rows that have "Elective" in the "Class" column.'
            ],
            [
                'On the "Scores" worksheet, unmerge cell A1.'
            ],
            [
                'On the "Attendance Summary" worksheet, update the chart to include the "Last Year" data.'
            ]
        ]
    },



    // Proyecto 6
    proyecto6: {
        nombre: "AccountBalances",
        archivo: "./projects/AccountBalances.xlsx",
        preguntas: [
            [
                'You are compiling confidential data regarding the performance of selected clients of Woodgrove Bank. Navigate to the range named "EducationsQ1" and change the value in the first cell of the range to "$16,000".'
            ],
            [
                'Check the workbook for accessibility issues. Correct the issue reported in the inspection result by performing the recommended action and selecting an option that displays negative numbers with a negative sign.'
            ],
            [
                'On the "Summary" worksheet, apply the *Accounting* number format to cells B4:E12. Display the numbers with only two decimal places.'
            ],
            [
                'On the "Summary" worksheet, in cell B14, enter a formula that adds all the cells in the named range "YearEnd". Use the range name in the formula instead of cell references or values.'
            ],
            [
                'On the "Health & Research" worksheet, configure the table style option to automatically emphasize the first column of the table.'
            ]


        ]
    },
    // Proyecto 3 
    proyecto3: {
        nombre: "BookPublishing",
        archivo: "./projects/BookPublishing.xlsx",
        preguntas: [
            [
                'You are preparing inventory reports for Lucerne Publishing. On the "Out of Print" worksheet, beginning at cell A3, import the data from the *OutOfPrint* text file in the *Document* folder. Ensure that the table uses the first row of the data source as headers. Note: The resulting data must be a table and not a range.'
            ],
            [
                'On the "Inventory" worksheet, set the horizontal text alignment of cells I2:J2 to *Center Across Selection*.'
            ],
            [
                'On the "Inventory" worksheet, add only column G to the "Year End Inventory" table so that "Total Value" becomes the header of a new table column.'
            ],
            [
                'On the "Inventory" worksheet, in cell F26, use a function to display the largest value from the "Unit Price" column of the "Year End Inventory" table.'
            ],
            [
                'On the "Comparison" worksheet, using the "Regional Price Comparison" data, create a *3-D Pie* chart that displays the "Total Value" data for each "Region". Display the regions as the legend. Display the title "Total Value". The exact size and position of the chart do not matter.'
            ],
            [
                'On the "Inventory" worksheet, modify the chart to display the series values as data labels in the *Center* of each column.'
            ]
        ]
    },
    // Proyecto 5
    proyecto5: {
        nombre: "FitnessEquipment",
        archivo: "./projects/FitnessEquipment.xlsx",
        preguntas: [
            [
                'You are organizing sales data to present at the next quarterly business meeting. On the "Fitness Equipment" worksheet, change the print orientation to *Landscape*.'
            ],
            [
                'On the "Sales" worksheet, apply the *White, Table Style Light 1* style to the table.'
            ],
            [
                'On the "Fitness Equipment" worksheet, in the "Commission" column, enter a formula that multiplies the value in the "Sales Amount" column by the "CommissionRate" named range. Use the column name and range name in the formula instead of cell references or values.'
            ],
            [
                'On the "Fitness Equipment" worksheet, in cell J24, use a function to count the number of transactions in the "Transaction ID" column.'
            ],
            [
                'On the "Fitness Equipment" worksheet, in the "Equipment ID" column, use a function to display the last 4 digits of the "Model" name from column D.'
            ],
            [
                'On the "Sales" worksheet, change the elements displayed on the chart by changing the chart layout to *Layout 3*.'
            ]

        ]
    },

    // Proyecto 2 
    proyecto2: {
        nombre: "StudentsGrades",
        archivo: "./projects/StudentsGrades.xlsx",
        preguntas: [
            [
                'You are analyzing grade and attendance data for a math class. In the document properties, add "Math 101" as a tag.'
            ],
            [
                'On the "Presentation Schedule" worksheet, presentations are scheduled every 30 minutes. Modify the formula in the "Time" column so that presentations are scheduled every 15 minutes from 8:00 AM.'
            ],
            [
                'On the "Grades" worksheet, in the "Attendance" column, use conditional formatting to apply the *Green Fill with Dark Green Text* format to cells that contain values greater than "97".'
            ],
            [
                'On the "Grades" worksheet, perform a multi-level sort. Sort the table data by "Final" (*Largest to Smallest*) and then by "Student ID" (Smallest to Largest).'
            ],
            [
                'On the "Grades" worksheet, in the "Bonus" column, enter a formula that multiplies the value in the "Attendance" column by cell H4.'
            ],
            [
                'On the "Grades" worksheet, in the "Posted Scores" column, use a function to display the value from the "Student ID" column, followed by the text "-Final Exam-", and the value from the "Final" column. For example: *889999-Final Exam-100*.'
            ],
            [
                'On the "Attendance Analysis" worksheet, add the alt text description "Attendance chart" to the chart.'
            ]

        ]
    },

    proyecto5P1: {
        nombre: "CoffeeInventory",
        archivo: "./projects/CoffeeInventory05.xlsx",
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

    // Proyecto 4 
    proyecto4P1: {
        nombre: "VolunteerRoster",
        archivo: "./projects/VolunteerRoster04.xlsx",
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

    // Proyecto 6
    proyecto6P1: {
        nombre: "ScoreSummary",
        archivo: "./projects/ScoreSummary06.xlsx",
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
};



document.getElementById('downloadBtn').addEventListener('click', () => {
    // Crear el contenido del archivo
    const fileContent = `Género,           Id. de inventario,            Región,              Id. de autor,           En stock,        Precio unitario
Misterio,             11222,                    Este,                 76-9160,                   3,                  180
Romance,              11636,                    Este,                 77-9133,                   12,                 190
De no ficción,        12428,                    Este,                 32-7020,                   3,                  210
De no ficción,        12702,                    Este,                 81-7230,                   8,                  210
Misterio,             12522,                    Este,                 96-9180,                   12,                 190
De no ficción,        12428,                    Este,                 32-7020,                   7,                  220
De no ficción,        12702,                    Este,                 81-7230,                   6,                  210
Misterio,             17473,                    Este,                 32-1822,                   0,                  210
Romance,              18361,                    Este,                 83-2623,                   2,                  200`;



    // Crear un Blob con el contenido del archivo
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Crear un enlace para descargar
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob); // Crear una URL para el Blob
    link.download = 'OutOfPrint.txt'; // Nombre sugerido para el archivo descargado

    // Añadir el enlace al documento y simular clic
    document.body.appendChild(link);
    link.click();

    // Eliminar el enlace y liberar la URL
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
});

// Control del proyecto y preguntas seleccionadas
const totalProjects = Object.keys(bancoDePreguntas).length;
let currentProjectIndex = 0;
let currentQuestionIndex = 0;
let selectedVariants = [];
let timer;
let secondsRemaining = 115 * 60;

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
