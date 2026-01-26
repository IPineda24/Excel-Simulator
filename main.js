// Redirigir al primer proyecto
window.location.href = "./projects/Games_Sales.xlsx";

// Banco de preguntas
const bancoDePreguntas = {
    proyecto1: {
        nombre: "Games_Sales",
        archivo: "./projects/Games_Sales.xlsx",
        preguntas: [
            [
                "In the *Videojuegos* sheet, keep only the last entry for each Video Game and remove all other duplicate rows based on Gender.",
                "In the *Videojuegos* sheet, remove all duplicate rows for each Video Game, keep only the most oldest entry according to Gender.",
            ],
            [
                `In the *Profesiones* sheet, in the *Employee ID* column, apply a custom number format to automatically display each ID with the "#" symbol followed by five digits. The existing number must be padded with zeros on the left side. To create the five digits, follow this example:
For example, '123' will be displayed as '#00123'`,
                `Apply a custom number format in the *Profesiones* sheet for the *Employee ID* column that shows the "$" symbol plus six digits, padding numbers with leading zeros. Example: '123' becomes '$000123'`,
                `In the *Profesiones* sheet, format the *Employee ID* column with a custom format displaying "#" followed by a four number with left-side zero padding (e.g., '123' displays as '#0123').`
            ],
            [
                "Require users to use the password 123456 and prevent users from adding, deleting, moving, and hiding sheets in the current workbook by protecting its structure.",
                "Protect the workbook structure with password KZRE44 to prevent users from adding, deleting, moving, or hiding sheets.",
                "Apply structure protection to the workbook using password JHSAHJVASHJV33, restricting users from modifying, removing, relocating, or concealing sheets."
            ],
            [
                `In the "Ganancias" sheet, use Goal Seek to determine the change in cell E6 that would result in a Quantity Sold of $96 in cell G6.`,
                `Apply Goal Seek in the "Ganancias" sheet to calculate what value cell E6 needs to achieve a Quantity Sold of $500 in cell G6.`,
                `In the "Ganancias" sheet, utilize Goal Seek to find the required value for cell E8 to reach a target Quantity Sold of $96 in cell G8.`
            ],
            [
                `In the Ganancias sheet, write a formula in cell J13 that returns the "highest" Quantity Sold based on the Platform and Genre shown in cells J10 and J11.`,
                `Create a formula in cell J13 of the Ganancias sheet that calculates "Lowest" Quantity Sold for the Platform and Genre specified in cells J10 and J11.`
            ]
        ]
    },

    proyecto2: {
        nombre: "PivoteTable",
        archivo: "./projects/PivoteTable.xlsx",
        preguntas: [
            [
                'In the Analisis de videojuegos sheet, modify the pivot table to group the data in 5-day intervals, accepting the default start and end dates.',
                'Adjust the pivot table in the Analisis de videojuegos sheet to organize data into 8-day groupings using the default starting and ending dates.',
                'In the Analisis de videojuegos sheet, configure the pivot table grouping by 10-day periods with automatic start and end date settings.'
            ],
            [
                'In the Resumen sheet, configure the Pivot Table to display a blank line below the last Genre in each Platform section.',
            ],
            [
                'Configure Microsoft Excel to automatically save a recovered version of each open file every 16 minutes.',
                'Set Excel to create AutoRecover backups of all open files at 10-minute intervals.',
                'Adjust Excel settings to automatically save recovery versions of open workbooks every 25 minutes.'
            ],
            [
                'In the "Aventuras" sheet, in cells C8:G8, use Fill Series to project a Geometric trend of 12 percent for each year in the London office.',
                'Apply Fill Series in cells C8:G8 of the "Aventuras" sheet to generate a Geometric progression with a 18 percent growth rate for the London office yearly data.',
                'In the "Aventuras" sheet, utilize the Fill Series feature in the range C8:G8 to create a Geometric sequence showing 63 percent annual increase for London office.'
            ],
            [
                'All cells in the "Localidades" sheet are unlocked. Lock only cells F4:F10. Ensure that users can select and format cells after protecting the sheet. Protect the sheet with the password 4567.',
                'In the "Localidades" sheet, lock exclusively the range F4:F10 while allowing cell selection and formatting. Apply sheet protection using password dfnijsdhb.',
                'Lock cells F4:F10 in the "Localidades" sheet (all other cells remain unlocked), permit users to select and format cells, and protect the sheet with password HELLOWORLD.'
            ]
        ]
    },

    proyecto3: {
        nombre: "Formating",
        archivo: "./projects/Formating.xlsx",
        preguntas: [
            [
                'In the Ciberjuegos sheet, in the Total Sales column, design a conditional formatting rule that uses the Icon Sets style to display a pink circle when the value is greater than or equal to "7", a yellow circle when the value is less than "7" and greater than or equal to "4", and a gray circle when it is less than "4".',
                'Create a conditional formatting rule in the Total Sales column of the Ciberjuegos sheet using Icon Sets: pink circle for values ≥ 8, red circle for values between 5 and 7.99, and gray circle for values < 5.',
                'In the Ciberjuegos sheet, apply Icon Sets conditional formatting to the Total Sales column showing red circles (≥ 7), gray circles (4 to < 7), and pink circles (< 4).'
            ],
            [
                'The Bicycle company will give gift cards for $100, $200, $300 to customers who have shown loyalty during the first quarter of the year. In cell C4, write a formula that uses the RANDARRAY function to randomly determine the gift card amount that each one will receive. As part of the formula, you may use arithmetic functions.',
            ],
            [
                'In the Pivote sheet, add two row fields to the pivot table: "Editorial" and "Genero", and in the values section, the sum and average of "Ventas USA".',
                'Configure the pivot table in the Pivote sheet by adding "Editorial" and "Plataforma" as row fields, and including both the sum and average of "Ventas EU" in the values area.',
            ],
            [
                'Use a Slicer to filter the pivot table by the Plataforma field, showing the 3DS records. The size and location of the slicer are not relevant.',
                'Insert a Slicer for the Plataforma field to filter the pivot table and display only SAT data. Positioning and dimensions are not important.',
                'Add a Slicer to filter the pivot table by Plataforma, selecting GBA records. The slicer\'s size and placement are not critical.'
            ]
        ]
    },

    proyecto4: {
        nombre: "Proyecto_Excel_Charts_And_Formulas",
        archivo: "./projects/Proyecto_Excel_Charts_And_Formulas.xlsx",
        preguntas: [
            [
                'In the Regiones worksheet, create a Histogram chart that displays the values from the Sales column. Ensure that the bin widths are not modified, and configure the chart to display an overflow bin for values greater than 25,000. Apply number formatting to the bin range so that values display with 0 decimal places, while keeping all other settings at their default. The size and location of the chart are not relevant.'
            ],
            [
                'In the Bicicletas worksheet, in cell G3, review the formula to display the total quantity of items that have an expiration date earlier than the current date. Do not include the current date.'
            ],
            [
                'In the Zonas worksheet, create a chart that displays "Production Units" by location as a clustered column chart and "Maximum Units" by location as a line chart with markers on the same chart. Display the location cities as the horizontal axis labels. The size and position of the chart are not relevant.'
            ],
            [
                'In the Resultados worksheet, in the Best Result column, modify the conditional formatting rule applied to the top 3 scores. Change the font style to bold and apply the color Green, Accent 6, Darker 25% from the theme color palette. There is no need to create new rules or delete existing ones.'
            ],
            [
                'In the Tratamientos worksheet, in cell H3, enter a formula that returns the total amount charged for records marked as "YES" in the Discount column.'
            ],
            [
                'In the Exportación worksheet, in cell D5, enter a formula that displays the data from cells A5:B25 sorted by Price in descending order.'
            ]
        ]
    },

    proyecto5: {
        nombre: "Advanced_Excel_Features",
        archivo: "./projects/Advanced_Excel_Features.xlsx",
        preguntas: [
            [
                'In the Analisis worksheet, configure the PivotChart to display the Axis Field Buttons and the Value Field Buttons.'
            ],
            [
                'In the Notas worksheet, use an Excel feature to group all rows in the table that have the value "A" in the Section column. Note: Do not create any other groups in the worksheet.'
            ],
            [
                'In the Notas 2 worksheet, in the Resultados table, create a conditional formatting rule. Use a formula to format the Name column with red text (standard colors) if the average of the four exam scores is greater than 70.'
            ],
            [
                'In the Result worksheet, update the PrintTitleRows and PrintGridlines properties so that the macro automatically prints rows 1:3 as title rows without printing gridlines. Macros are disabled for security reasons, but you may use the Visual Basic Editor.'
            ],
            [
                'Use an Excel function to ungroup the data in the table.'
            ],
            [
                'In the Unit Cost column, create a conditional formatting rule that displays a red check mark when a Unit Cost value exists. No cell icon should be displayed when there is no Unit Cost value.'
            ]
        ]
    }
};

// Estado global
const state = {
    currentProjectIndex: 0,
    currentQuestionIndex: 0,
    projectKeys: Object.keys(bancoDePreguntas),
    secondsRemaining: 80 * 60,
    questionStates: {},
    selectedVariants: {}
};

// Utilidades
const utils = {
    getCurrentProject() {
        return bancoDePreguntas[state.projectKeys[state.currentProjectIndex]];
    },

    selectRandomVariants(projectKey) {
        const project = bancoDePreguntas[projectKey];
        state.selectedVariants[projectKey] = project.preguntas.map(variants =>
            Array.isArray(variants)
                ? variants[Math.floor(Math.random() * variants.length)]
                : variants
        );
    }
};

// Gestión de preguntas
const questions = {
    load(questionIndex) {
        const projectKey = state.projectKeys[state.currentProjectIndex];
        const questionText = state.selectedVariants[projectKey][questionIndex];

        document.getElementById("question-text").textContent = questionText;
        this.updateNavigationState(questionIndex);
    },

    updateNavigationState(currentIndex) {
        const buttons = document.querySelectorAll('.question-btn');
        const icons = document.querySelectorAll('.question-icon');
        const projectKey = state.projectKeys[state.currentProjectIndex];

        buttons.forEach((btn, idx) => {
            btn.classList.toggle('active', idx === currentIndex);

            const stateKey = `${projectKey}-${idx}`;
            const questionState = state.questionStates[stateKey];

            icons[idx].textContent = '';
            icons[idx].className = 'question-icon';

            if (questionState === 'completed') {
                icons[idx].textContent = '✓';
                icons[idx].classList.add('completed');
            } else if (questionState === 'review') {
                icons[idx].textContent = '!';
                icons[idx].classList.add('review');
            }
        });
    },

    navigate(direction) {
        const totalQuestions = utils.getCurrentProject().preguntas.length;

        if (direction === 'next' && state.currentQuestionIndex < totalQuestions - 1) {
            state.currentQuestionIndex++;
        } else if (direction === 'prev' && state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
        }

        this.load(state.currentQuestionIndex);
    },

    toggleState(newState) {
        const projectKey = state.projectKeys[state.currentProjectIndex];
        const stateKey = `${projectKey}-${state.currentQuestionIndex}`;

        if (state.questionStates[stateKey] === newState) {
            delete state.questionStates[stateKey];
        } else {
            state.questionStates[stateKey] = newState;
        }

        this.updateNavigationState(state.currentQuestionIndex);
    }
};

// Temporizador
const timer = {
    intervalId: null,

    start() {
        if (this.intervalId) return;

        this.intervalId = setInterval(() => {
            if (state.secondsRemaining > 0) {
                state.secondsRemaining--;
                this.update();
            } else {
                this.stop();
                alert("¡El tiempo ha terminado!");
            }
        }, 1000);

        this.update();
    },

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    },

    update() {
        const minutes = Math.floor(state.secondsRemaining / 60);
        const seconds = state.secondsRemaining % 60;
        document.getElementById("timer").textContent =
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
};

// Gestión de proyectos
const projects = {
    load() {
        const project = utils.getCurrentProject();
        const totalProjects = state.projectKeys.length;

        state.questionStates = {};

        document.getElementById("project-title").textContent =
            `Project ${state.currentProjectIndex + 1} of ${totalProjects}: ${project.nombre}`;

        this.renderNavigationBar(project.preguntas.length);
        questions.load(state.currentQuestionIndex);
    },

    renderNavigationBar(totalQuestions) {
        const nav = document.getElementById("navigation-bar");
        nav.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.textContent = "◄";
        prevBtn.onclick = () => questions.navigate('prev');
        nav.appendChild(prevBtn);

        for (let i = 0; i < totalQuestions; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'question-btn-wrapper';

            const btn = document.createElement('button');
            btn.className = "question-btn";
            btn.textContent = i + 1;
            btn.onclick = () => {
                state.currentQuestionIndex = i;
                questions.load(i);
            };

            if (i === 0) btn.classList.add("active");

            const icon = document.createElement('span');
            icon.className = 'question-icon';

            wrapper.appendChild(btn);
            wrapper.appendChild(icon);
            nav.appendChild(wrapper);
        }

        const nextBtn = document.createElement('button');
        nextBtn.textContent = "►";
        nextBtn.onclick = () => questions.navigate('next');
        nav.appendChild(nextBtn);
    },

    submit() {
        const nextIndex = (state.currentProjectIndex + 1) % state.projectKeys.length;
        const nextProjectKey = state.projectKeys[nextIndex];
        const archivoProyecto = bancoDePreguntas[nextProjectKey].archivo;

        window.location.href = archivoProyecto;

        state.currentProjectIndex = nextIndex;
        state.currentQuestionIndex = 0;

        utils.selectRandomVariants(nextProjectKey);
        this.load();
    },

    reset() {
        if (!confirm("¿Estás seguro de que quieres reiniciar? Se perderá todo el progreso actual.")) {
            return;
        }

        timer.stop();

        state.currentProjectIndex = 0;
        state.currentQuestionIndex = 0;
        state.secondsRemaining = 80 * 60;
        state.questionStates = {};

        utils.selectRandomVariants(state.projectKeys[0]);
        this.load();
        timer.start();
    }
};

// Inicialización
utils.selectRandomVariants(state.projectKeys[0]);
projects.load();
timer.start();

// Event Listeners
document.getElementById("markFC").onclick = () => questions.toggleState("completed");
document.getElementById("markFR").onclick = () => questions.toggleState("review");
document.getElementById("submit-project").onclick = () => {
    alert("Proyecto enviado.");
    projects.submit();
};
document.getElementById("reset-btn").onclick = () => projects.reset();