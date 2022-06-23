const testHeading = document.getElementById('p1');
    testHeading.textContent = 'JS is probably working.';

const button = document.getElementById('pb1');
button.onclick = function(){alert('JS is working.')};

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

while (1==1) {
    alert('JS is working');
    await delay(7000);
}