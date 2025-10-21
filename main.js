// Banco de preguntas
const bancoDePreguntas = {
    proyecto1: {
        nombre: "JobReport",
        archivo: "./projects/JobReport.xlsx",
        preguntas: [
            [
                "On the *Last Quarter* worksheet, freeze row 1 so it remains visible while scrolling.",
                "On the *Last Quarter* worksheet, freeze row 1 and 2 so it remains visible while scrolling."
            ],
            [
                "On the *Last Quarter* worksheet, in cell A3, apply the *Strikethrough* font effect to the name *Danner, Ryan*.",
                "On the *Last Quarter* worksheet, in cell A11, apply the *Superscript* font effect to the name *Harper, Morgan*."
            ],
            [
                "On the 'Summary' worksheet, in the 'Trend' column, insert *Line* sparklines to show the trends from 'Year 1' through 'Year 5'.",
                "On the 'Summary' worksheet, in the 'Trend' column, insert *Column* sparklines to show the trends from 'Year 1' through 'Year 5'.",
                "On the 'Summary' worksheet, in the 'Trend' column, insert *Line* sparklines to show the trends from 'Year 1' through 'Year 4'."
            ],
            [
                "On the 'Last Quarter' worksheet, in column F, beginning in cell F2, use a function to display each 'Job Title' from the table without retrieving duplicate entries."
            ],
            [
                "On the 'Job Openings' worksheet, modify the chart to display the Primary Vertical axis title. Enter the title 'Jobs'.",
                "On the 'Job Openings' worksheet, modify the chart to display the Primary Horizontal axis title. Enter the title 'Works'."
            ]
        ]
    },
    proyecto4: {
        nombre: "Attendance",
        archivo: "./projects/Attendance.xlsx",
        preguntas: [
            [
                'You are preparing student attendance and grade data to present to your school\'s administrators. On the "Score" worksheet, insert page numbering in the center of the footer using the format *Page [P] of [N]*, where *[P]* is the *Page Number* and *[N]* is the *Number of Pages*.',
                'You are preparing student attendance and grade data to present to your school\'s administrators. On the "Score" worksheet, insert page numbering in the center of the footer using the format *Page [P] - [N]*, where *[P]* is the *Number of Pages*  and *[N]* is the *Page Number*.'
            ],
            [
                'On the "Score Summary" worksheet, display the formulas instead of the values.'
            ],
            [
                'On the "Attendance" worksheet, configure rows 1 through 4 to repeat on all printed pages.',
                'On the "Attendance" worksheet, configure rows 4 through 8 to repeat on all printed pages.'
            ],
            [
                'On the "Attendance" worksheet, delete the rows that have "Elective" in the "Class" column.',
                'On the "Attendance" worksheet, delete the rows that have "History" in the "Class" column.'
            ],
            [
                'On the "Scores" worksheet, unmerge cell A1.'
            ],
            [
                'On the "Attendance Summary" worksheet, update the chart to include the "Last Year" data.'
            ]
        ]
    },
    proyecto6: {
        nombre: "AccountBalances",
        archivo: "./projects/AccountBalances.xlsx",
        preguntas: [
            [
                'You are compiling confidential data regarding the performance of selected clients of Woodgrove Bank. Navigate to the range named "EducationsQ1" and change the value in the first cell of the range to "$16,000".',
                'You are compiling confidential data regarding the performance of selected clients of Woodgrove Bank. Navigate to the range named "EducationsQ1" and change the value in the first cell of the range to "$60,000".'
            ],
            [
                'Check the workbook for accessibility issues. Correct the issue reported in the inspection result by performing the recommended action and selecting an option that displays negative numbers with a negative sign.',
                'Check the workbook for accessibility issues. Correct the issue reported in the inspection result by performing the recommended action and selecting an option that displays positive numbers with a red positive sign and parentheses. for example (1,234.10)'
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
    proyecto2: {
        nombre: "StudentsGrades",
        archivo: "./projects/StudentsGrades.xlsx",
        preguntas: [
            [
                'You are analyzing grade and attendance data for a math class. In the document properties, add "Math 101" as a tag.'
            ],
            [
                'On the "Presentation Schedule" worksheet, presentations are scheduled every 30 minutes. Modify the formula in the "Time" column so that presentations are scheduled every 15 minutes from 8:00 AM.',
                'On the "Presentation Schedule" worksheet, presentations are scheduled every 30 minutes. Modify the formula in the "Time" column so that presentations are scheduled every 45 minutes from 8:00 AM.'
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
    }
};

// Estado de la aplicación
const state = {
    projectKeys: Object.keys(bancoDePreguntas),
    currentProjectIndex: 0,
    currentQuestionIndex: 0,
    selectedVariants: [],
    timer: null,
    secondsRemaining: 40 * 60,
    questionStates: {}
};

// Utilidades
const utils = {
    formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    },

    selectRandomVariants(projectKey) {
        const { preguntas } = bancoDePreguntas[projectKey];
        state.selectedVariants = preguntas.map(variants =>
            variants[Math.floor(Math.random() * variants.length)]
        );
    },

    getCurrentProject() {
        return bancoDePreguntas[state.projectKeys[state.currentProjectIndex]];
    },

    navigateToProject(projectKey) {
        window.location.href = bancoDePreguntas[projectKey].archivo;
    }
};

// Gestión del timer
const timer = {
    start() {
        state.timer = setInterval(() => {
            state.secondsRemaining--;
            this.display();

            if (state.secondsRemaining <= 0) {
                this.stop();
                alert("Time is up! The project will be submitted.");
            }
        }, 1000);
    },

    stop() {
        clearInterval(state.timer);
    },

    display() {
        document.getElementById("timer").textContent = utils.formatTime(state.secondsRemaining);
    }
};

// Gestión de preguntas
const questions = {
    load(index) {
        document.getElementById("question-text").textContent = state.selectedVariants[index];
        this.updateNavigationButtons();
        this.updateActionButtons(index);
    },

    updateNavigationButtons() {
        const buttons = document.querySelectorAll(".question-btn");

        buttons.forEach((btn, i) => {
            btn.classList.remove("active", "completed", "review");
            const wrapper = btn.parentElement;
            const icon = wrapper.querySelector('.question-icon');

            if (i === state.currentQuestionIndex) {
                btn.classList.add("active");
            }

            const questionState = state.questionStates[i];
            if (questionState === "completed") {
                btn.classList.add("completed");
                icon.textContent = "✅";
                icon.style.display = "block";
            } else if (questionState === "review") {
                btn.classList.add("review");
                icon.textContent = "🚩";
                icon.style.display = "block";
            } else {
                icon.textContent = "";
                icon.style.display = "none";
            }
        });
    },

    updateActionButtons(index) {
        const markCompleteBtn = document.getElementById("markFC");
        const markReviewBtn = document.getElementById("markFR");
        const currentState = state.questionStates[index];

        markCompleteBtn.classList.toggle("active-btn", currentState === "completed");
        markReviewBtn.classList.toggle("active-btn", currentState === "review");
    },

    navigate(direction) {
        const project = utils.getCurrentProject();
        const maxIndex = project.preguntas.length - 1;

        if (direction === 'prev' && state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            this.load(state.currentQuestionIndex);
        } else if (direction === 'next' && state.currentQuestionIndex < maxIndex) {
            state.currentQuestionIndex++;
            this.load(state.currentQuestionIndex);
        }
    },

    toggleState(newState) {
        const { currentQuestionIndex } = state;
        const currentState = state.questionStates[currentQuestionIndex];

        if (currentState === newState) {
            delete state.questionStates[currentQuestionIndex];
        } else {
            state.questionStates[currentQuestionIndex] = newState;
        }

        this.load(currentQuestionIndex);
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

        // Botón anterior
        const prevBtn = document.createElement('button');
        prevBtn.textContent = "◄";
        prevBtn.onclick = () => questions.navigate('prev');
        nav.appendChild(prevBtn);

        // Botones de preguntas
        for (let i = 0; i < totalQuestions; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'question-btn-wrapper';

            const btn = document.createElement('button');
            btn.className = "question-btn";
            btn.textContent = i + 1;
            btn.dataset.questionIndex = i;
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

        // Botón siguiente
        const nextBtn = document.createElement('button');
        nextBtn.textContent = "►";
        nextBtn.onclick = () => questions.navigate('next');
        nav.appendChild(nextBtn);
    },

    submit() {
        const nextIndex = (state.currentProjectIndex + 1) % state.projectKeys.length;
        const nextProjectKey = state.projectKeys[nextIndex];

        utils.navigateToProject(nextProjectKey);

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
        state.secondsRemaining = 40 * 60;
        state.questionStates = {};

        const firstProjectKey = state.projectKeys[0];
        utils.selectRandomVariants(firstProjectKey);
        this.load();
        timer.start();

        utils.navigateToProject(firstProjectKey);
    }
};

// Event Listeners
document.getElementById('downloadBtn').addEventListener('click', () => {
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

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'OutOfPrint.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
});

document.getElementById("markFC").onclick = () => questions.toggleState("completed");
document.getElementById("markFR").onclick = () => questions.toggleState("review");
document.getElementById("submit-project").onclick = () => {
    alert("Proyecto enviado.");
    projects.submit();
};
document.getElementById("reset-btn").onclick = () => projects.reset();

// Inicialización
utils.selectRandomVariants(state.projectKeys[state.currentProjectIndex]);
projects.load();
timer.start();
utils.navigateToProject(state.projectKeys[0]);