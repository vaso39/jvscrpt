const text = "hello world";
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

text.split('').forEach(char => {
    const element = document.createElement('div');
    element.className = 'letter';
    element.textContent = char;
    container.appendChild(element);
});

