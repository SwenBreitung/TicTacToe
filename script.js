const fields = [
    null,
    null,
    null,
    "circle",
    null,
    "cross",
    null,
    null,
    null,
];


let currentPlayer = 'circle'; // Initialer Spieler

function init() {
    render();
}

function handleClick(index) {
    const fieldValue = fields[index];

    if (!fieldValue) {
        if (currentPlayer === 'circle') {
            fields[index] = 'circle';
            currentPlayer = 'cross';
        } else {
            fields[index] = 'cross';
            currentPlayer = 'circle';
        }

        render();
    }
}

function render() {
    const container = document.getElementById("container");
    let tableHTML = '<table>';

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';

        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            const fieldValue = fields[index];
            let displayValue = '';

            if (!fieldValue) {
                const onclick = `handleClick(${index})`;
                displayValue = `<td onclick="${onclick}"></td>`;
            } else if (fieldValue === 'circle') {
                displayValue = `<td>${generateCircleSVG()}</td>`;
            } else if (fieldValue === 'cross') {
                displayValue = `<td>${generateCrossSVG()}</td>`;
            }

            tableHTML += displayValue;
        }

        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    container.innerHTML = tableHTML;
}

init();

function generateCircleSVG() {
    const color = "#00B0EF";
    const width = 70;
    const height = 70;

    const svgHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <circle cx="${width/2}" cy="${height/2}" r="${width/2}" fill="none" stroke="${color}" stroke-width="2">
          <animate attributeName="r" from="0" to="${width/2}" dur="3s" fill="freeze" />
          <animate attributeName="stroke-width" from="0" to="2" dur="3s" fill="freeze" />
        </circle>
      </svg>
    `;

    return svgHTML;
}

function generateCrossSVG() {
    const color = "#FFCC00"; // Dunkles Gelb für das Kreuz
    const width = 70;
    const height = 70;

    const crossSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="${color}" stroke-width="4">
          <animate attributeName="x2" from="0" to="${width}" dur="1s" fill="freeze" />
        </line>
        <line x1="0" y1="${height}" x2="${width}" y2="0" stroke="${color}" stroke-width="4">
          <animate attributeName="x1" from="${width}" to="0" dur="1s" fill="freeze" />
        </line>
      </svg>
    `;

    return crossSVG;
}