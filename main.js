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
    proyecto10: {
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
    proyecto11: {
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
    // Proyecto 7
    proyecto12: {
        nombre: "Residences",
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