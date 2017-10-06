const button = document.createElement('button');

button.innerText = 'Click me';
button.onclick = () => {
    // System.import allows for web-pack code-splitting
    System.import('./image_viewer')
        .then(module => {
            module.default();
        });
};

document.body.appendChild(button);
