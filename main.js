// Banco de preguntas
const bancoDePreguntas = {
    proyecto1: {
        nombre: "Games_Sales",
        archivo: "./projects/Games_Sales.xlsx",
        preguntas: [
            [
                "In the *Videojuegos* sheet, keep only the last entry for each Video Game and remove all other duplicate rows based on Gender.",
                "In the *Videojuegos* sheet, eliminate duplicate entries for each Video Game, retaining only the most oldest record according to Gender.",
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

    // Proyecto 2 
    proyecto4: {
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

    // Proyecto 6
    proyecto6: {
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
                'In the Pivote sheet, add two row fields to the pivot table: : "Editorial" and "Genero"  , and in the values section, the sum and average of "Ventas USA".',
                'Configure the pivot table in the Pivote sheet by adding "Editorial" and "Plataforma" as row fields, and including both the sum and average of "Ventas EU" in the values area.',

            ],
            [
                'Use a Slicer to filter the pivot table by the Plataforma field, showing the 3DS records. The size and location of the slicer are not relevant.',
                'Insert a Slicer for the Plataforma field to filter the pivot table and display only SAT data. Positioning and dimensions are not important.',
                'Add a Slicer to filter the pivot table by Plataforma, selecting GBA records. The slicer\'s size and placement are not critical.'
            ]
        ]
    }

};

// Estado de la aplicación
const state = {
    projectKeys: [],
    currentProjectIndex: 0,
    currentQuestionIndex: 0,
    selectedVariants: [],
    timer: null,
    secondsRemaining: 80 * 60,
    questionStates: {}
};

// Utilidades
const utils = {
    formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    },

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    initializeProjectOrder() {
        state.projectKeys = this.shuffleArray(Object.keys(bancoDePreguntas));
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
        state.secondsRemaining = 80 * 60;
        state.questionStates = {};

        utils.initializeProjectOrder();
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
utils.initializeProjectOrder();
utils.selectRandomVariants(state.projectKeys[state.currentProjectIndex]);
projects.load();
timer.start();
utils.navigateToProject(state.projectKeys[0]);