const directory = {
    'whatProduct': {
        'productType': ['Aircraft', 'Rotorcraft', 'Propeller', 'Engine'],
        'size': ['Large?', 'Small?'],
        'part': ['33', '35', '29', '27', '25', '23']
    },
    'interfaces': {
        'interface': ['Electrical', 'Loads', 'Communications', 'Avionics', 'Systems', 'Mechanical'],
        'chart': ['D', 'C1', 'C2', 'A']
    },
    'solutionType': {
        'repair': ['1 Time', 'Repeat'],
        'modification': ['Modification'],
        'replacement': ['Replacement'],
    }
}

window.onload = () => {
    // Answers
    let html = '';
    const answersQ1 = document.getElementById('answersQ1');
    const answersQ2 = document.getElementById('answersQ2');
    const answersQ3 = document.getElementById('answersQ3');
    const answersQ4 = document.getElementById('answersQ4');
    const answersQ5 = document.getElementById('answersQ5');

    // Select boxes
    const productTypeSelect = document.getElementById('productType');
    const productSizeSelect = document.getElementById('productSize');
    const interfacesInterfaceSelect = document.getElementById('interfacesInterface');
    const repairSelect = document.getElementById('repair');
    const modificationSelect = document.getElementById('modification');
    const replacementSelect = document.getElementById('replacement');

    // Form groups
    const productSizeFormGroup = document.getElementById('productSizeFormGroup');
    const interfaceInterfaceFormGroup = document.getElementById('interfaceInterfaceFormGroup');
    const solutionTypeFormGroup = document.getElementById('solutionTypeFormGroup');

    // Hide elements
    productSizeFormGroup.style.display = 'none';
    interfaceInterfaceFormGroup.style.display = 'none';
    solutionTypeFormGroup.style.display = 'none';

    // Elements
    const btnReset = document.getElementById('btnReset');

    // Populate product type drop select
    for (let i = 0; i < directory.whatProduct.productType.length; i++) {
        productTypeSelect.options[productTypeSelect.options.length] = new Option(directory.whatProduct.productType[i], directory.whatProduct.productType[i]);
    }

    // Product Type: Select
    productTypeSelect.onchange = () => {
        productSizeSelect.length = 1;

        // Populate Product Size Select
        for (let i = 0; i < directory.whatProduct.size.length; i++) {
            productSizeSelect.options[productSizeSelect.options.length] = new Option(directory.whatProduct.size[i], directory.whatProduct.size[i]);
        }

        if (productTypeSelect.value === 'Aircraft') {
            productSizeFormGroup.style.display = 'block';
            interfaceInterfaceFormGroup.style.display = 'none';
            solutionTypeFormGroup.style.display = 'none';
            answersQ1.innerHTML = '';
        } else if (productTypeSelect.value === 'Rotorcraft') {
            productSizeFormGroup.style.display = 'block';
            interfaceInterfaceFormGroup.style.display = 'none';
            solutionTypeFormGroup.style.display = 'none';
            answersQ1.innerHTML = '';
        } else if (productTypeSelect.value === 'Propeller') {
            repairSelect.length = 1;
            modificationSelect.length = 1;
            replacementSelect.length = 1;

            for (let i = 0; i < directory.solutionType.repair.length; i++) {
                repairSelect.options[repairSelect.options.length] = new Option(directory.solutionType.repair[i], directory.solutionType.repair[i]);
            }

            for (let i = 0; i < directory.solutionType.modification.length; i++) {
                modificationSelect.options[modificationSelect.options.length] = new Option(directory.solutionType.modification[i], directory.solutionType.modification[i]);
            }

            for (let i = 0; i < directory.solutionType.replacement.length; i++) {
                replacementSelect.options[replacementSelect.options.length] = new Option(directory.solutionType.replacement[i], directory.solutionType.replacement[i]);
            }
            interfaceInterfaceFormGroup.style.display = 'none';
            productSizeFormGroup.style.display = 'none';
            solutionTypeFormGroup.style.display = 'block';
            html = '';
            html += '<div class="alert alert-success">';
            html += `You need part ${directory.whatProduct.part[1]}`;
            html += '</div>';
            answersQ1.innerHTML = html;
            answersQ2.innerHTML = '';
            answersQ3.innerHTML = '';
            answersQ4.innerHTML = '';
            answersQ5.innerHTML = '';
        } else if (productTypeSelect.value === 'Engine') {
            repairSelect.length = 1;
            modificationSelect.length = 1;
            replacementSelect.length = 1;

            for (let i = 0; i < directory.solutionType.repair.length; i++) {
                repairSelect.options[repairSelect.options.length] = new Option(directory.solutionType.repair[i], directory.solutionType.repair[i]);
            }

            for (let i = 0; i < directory.solutionType.modification.length; i++) {
                modificationSelect.options[modificationSelect.options.length] = new Option(directory.solutionType.modification[i], directory.solutionType.modification[i]);
            }

            for (let i = 0; i < directory.solutionType.replacement.length; i++) {
                replacementSelect.options[replacementSelect.options.length] = new Option(directory.solutionType.replacement[i], directory.solutionType.replacement[i]);
            }
            interfaceInterfaceFormGroup.style.display = 'none';
            productSizeFormGroup.style.display = 'none';
            solutionTypeFormGroup.style.display = 'block';
            html = '';
            html += '<div class="alert alert-success">';
            html += `You need part ${directory.whatProduct.part[0]}`;
            html += '</div>';
            answersQ1.innerHTML = html;
            answersQ2.innerHTML = '';
            answersQ3.innerHTML = '';
            answersQ4.innerHTML = '';
            answersQ5.innerHTML = '';
        }
    }

    // Product Size: Select
    productSizeSelect.onchange = () => {
        interfacesInterfaceSelect.length = 1;

        // Populate interface drop select
        for (let i = 0; i < directory.interfaces.interface.length; i++) {
            interfacesInterfaceSelect.options[interfacesInterfaceSelect.options.length] = new Option(directory.interfaces.interface[i], directory.interfaces.interface[i]);
        }

        if (productTypeSelect.value === 'Aircraft' && productSizeSelect.value === 'Large?') {
            interfaceInterfaceFormGroup.style.display = 'block';
            html = '';
            html += '<div class="alert alert-success">';
            html += `You need part ${directory.whatProduct.part[4]}`;
            html += '</div>';
            answersQ1.innerHTML = html;
            answersQ2.innerHTML = '';
            answersQ3.innerHTML = '';
            answersQ4.innerHTML = '';
            answersQ5.innerHTML = '';
        } else if (productTypeSelect.value === 'Aircraft' && productSizeSelect.value === 'Small?') {
            interfaceInterfaceFormGroup.style.display = 'block';
            html = '';
            html += '<div class="alert alert-success">';
            html += `You need part ${directory.whatProduct.part[5]}`;
            html += '</div>';
            answersQ1.innerHTML = html;
            answersQ2.innerHTML = '';
            answersQ3.innerHTML = '';
            answersQ4.innerHTML = '';
            answersQ5.innerHTML = '';
        } else if (productTypeSelect.value === 'Rotorcraft' && productSizeSelect.value === 'Large?') {
            interfaceInterfaceFormGroup.style.display = 'block';
            html = '';
            html += '<div class="alert alert-success">';
            html += `You need part ${directory.whatProduct.part[2]}`;
            html += '</div>';
            answersQ1.innerHTML = html;
            answersQ2.innerHTML = '';
            answersQ3.innerHTML = '';
            answersQ4.innerHTML = '';
            answersQ5.innerHTML = '';
        } else if (productTypeSelect.value === 'Rotorcraft' && productSizeSelect.value === 'Small?') {
            interfaceInterfaceFormGroup.style.display = 'block';
            html = '';
            html += '<div class="alert alert-success">';
            html += `You need part ${directory.whatProduct.part[3]}`;
            html += '</div>';
            answersQ1.innerHTML = html;
            answersQ2.innerHTML = '';
            answersQ3.innerHTML = '';
            answersQ4.innerHTML = '';
            answersQ5.innerHTML = '';
        }
    }

    // Interface: Select
    interfacesInterfaceSelect.onchange = () => {
        repairSelect.length = 1;
        modificationSelect.length = 1;
        replacementSelect.length = 1;

        for (let i = 0; i < directory.solutionType.repair.length; i++) {
            repairSelect.options[repairSelect.options.length] = new Option(directory.solutionType.repair[i], directory.solutionType.repair[i]);
        }

        for (let i = 0; i < directory.solutionType.modification.length; i++) {
            modificationSelect.options[modificationSelect.options.length] = new Option(directory.solutionType.modification[i], directory.solutionType.modification[i]);
        }

        for (let i = 0; i < directory.solutionType.replacement.length; i++) {
            replacementSelect.options[replacementSelect.options.length] = new Option(directory.solutionType.replacement[i], directory.solutionType.replacement[i]);
        }


        solutionTypeFormGroup.style.display = 'block';


        switch (interfacesInterfaceSelect.value) {
            case 'Electrical':
                html = '';
                html += '<div class="alert alert-success">';
                html += `You need chart ${directory.interfaces.chart[2]}`;
                html += '</div>';
                answersQ2.innerHTML = html;
                answersQ3.innerHTML = '';
                answersQ4.innerHTML = '';
                answersQ5.innerHTML = '';
                break;
            case 'Loads':
                html = '';
                html += '<div class="alert alert-success">';
                html += `You need chart ${directory.interfaces.chart[3]}`;
                html += '</div>';
                answersQ2.innerHTML = html;
                answersQ3.innerHTML = '';
                answersQ4.innerHTML = '';
                answersQ5.innerHTML = '';
                break;
            case 'Communications':
                html = '';
                html += '<div class="alert alert-success">';
                html += `You need chart ${directory.interfaces.chart[0]}`;
                html += '</div>';
                answersQ2.innerHTML = html;
                answersQ3.innerHTML = '';
                answersQ4.innerHTML = '';
                answersQ5.innerHTML = '';
                break;
            case 'Avionics':
                html = '';
                html += '<div class="alert alert-success">';
                html += `You need chart ${directory.interfaces.chart[2]}`;
                html += '</div>';
                answersQ2.innerHTML = html;
                answersQ3.innerHTML = '';
                answersQ4.innerHTML = '';
                answersQ5.innerHTML = '';
                break;
            case 'Systems':
                html = '';
                html += '<div class="alert alert-success">';
                html += `You need chart ${directory.interfaces.chart[2]}`;
                html += '</div>';
                answersQ2.innerHTML = html;
                answersQ3.innerHTML = '';
                answersQ4.innerHTML = '';
                answersQ5.innerHTML = '';
                break;
            case 'Mechanical':
                html = '';
                html += '<div class="alert alert-success">';
                html += `You need chart ${directory.interfaces.chart[1]}`;
                html += '</div>';
                answersQ2.innerHTML = html;
                answersQ3.innerHTML = '';
                answersQ4.innerHTML = '';
                answersQ5.innerHTML = '';
                break;
            default:
                break;
        }
    }

    // Repair: Select
    repairSelect.onchange = () => {
        switch (repairSelect.value) {
            case '1 Time':
                html = '';
                html += '<div class="alert alert-success">';
                html += 'Major Repairs and Alterations';
                html += '</div>';
                answersQ3.innerHTML = html;
                break;
            case 'Repeat':
                html = '';
                html += '<div class="alert alert-success">';
                html += 'RS DER';
                html += '</div>';
                answersQ3.innerHTML = html;
                break;
                break;
            default:
                break;
        }
    }

    // Repair: Modification
    modificationSelect.onchange = () => {
        switch (modificationSelect.value) {
            case 'Modification':
                html = '';
                html += '<div class="alert alert-success">';
                html += 'See Above';
                html += '</div>';
                answersQ4.innerHTML = html;
                break;
            default:
                break;
        }
    }

    // Repair: Replacement
    replacementSelect.onchange = () => {
        switch (replacementSelect.value) {
            case 'Replacement':
                html = '';
                html += '<div class="alert alert-success">';
                html += 'See Above';
                html += '</div>';
                answersQ5.innerHTML = html;
                break;
            default:
                break;
        }
    }

    // Reset Page
    btnReset.onclick = () => {
        location.reload()
    }

}
