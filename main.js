window.location.href = "./projects/Games_Sales.xlsx";
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

// Estado global
const state = {
    currentProjectIndex: 0,
    currentQuestionIndex: 0,
    projectKeys: [],
    secondsRemaining: 80 * 60,
    questionStates: {},
    selectedVariants: {} // NUEVO: almacena las variantes seleccionadas para cada proyecto
};

// Utilidades
const utils = {
    getCurrentProject() {
        return bancoDePreguntas[state.projectKeys[state.currentProjectIndex]];
    },

    initializeProjectOrder() {
        state.projectKeys = Object.keys(bancoDePreguntas);
        // Los proyectos ahora se cargan en orden, sin aleatorizar
    },

    // FUNCIÓN CORREGIDA: Selecciona una variante aleatoria de cada pregunta
    selectRandomVariants(projectKey) {
        const project = bancoDePreguntas[projectKey];
        state.selectedVariants[projectKey] = [];

        project.preguntas.forEach((preguntaVariantes) => {
            // Si es un array de variantes, selecciona una aleatoria
            if (Array.isArray(preguntaVariantes)) {
                const randomIndex = Math.floor(Math.random() * preguntaVariantes.length);
                state.selectedVariants[projectKey].push(preguntaVariantes[randomIndex]);
            } else {
                // Si no es array, usa la pregunta tal cual
                state.selectedVariants[projectKey].push(preguntaVariantes);
            }
        });
    },

    navigateToProject(projectKey) {
        const project = bancoDePreguntas[projectKey];
        console.log(`Navegando al proyecto: ${project.nombre}`);
        console.log(`Archivo: ${project.archivo}`);
    }
};

// Gestión de preguntas
const questions = {
    load(questionIndex) {
        const projectKey = state.projectKeys[state.currentProjectIndex];

        // CAMBIO: Usa las variantes seleccionadas en lugar del array original
        const selectedQuestions = state.selectedVariants[projectKey];
        const questionText = selectedQuestions[questionIndex];

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
        const project = utils.getCurrentProject();
        const totalQuestions = project.preguntas.length;

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

        const nextBtn = document.createElement('button');
        nextBtn.textContent = "►";
        nextBtn.onclick = () => questions.navigate('next');
        nav.appendChild(nextBtn);
    },

    submit() {
        // Obtener la ruta del archivo actual y redirigir
        const nextIndex = (state.currentProjectIndex + 1) % state.projectKeys.length;
        const nextProjectKey = state.projectKeys[nextIndex];
        const archivoProyecto = bancoDePreguntas[nextProjectKey].archivo;
        window.location.href = archivoProyecto; // Redirigir al archivo del siguiente proyecto

        // Cambiar al siguiente proyecto
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
    }
};

// Inicialización
utils.initializeProjectOrder();
utils.selectRandomVariants(state.projectKeys[state.currentProjectIndex]);
projects.load();
timer.start();
utils.navigateToProject(state.projectKeys[0]); // Descargar primer proyecto al cargar

// Event Listeners - DEBEN IR DESPUÉS DE LA INICIALIZACIÓN
document.getElementById("markFC").onclick = () => questions.toggleState("completed");
document.getElementById("markFR").onclick = () => questions.toggleState("review");
document.getElementById("submit-project").onclick = () => {
    alert("Proyecto enviado.");
    projects.submit();
};
document.getElementById("reset-btn").onclick = () => projects.reset();

// Botón de descarga de TXT (mantener funcionalidad original)
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
    downloadBtn.onclick = () => {
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
    };
}