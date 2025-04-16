// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = "Text changed successfully using JavaScript!";
        dynamicText.style.color = 'red';
    });

    // 2. Modify CSS styles via JavaScript
    const styleTarget = document.getElementById('style-target');
    const resetStyleBtn = document.getElementById('reset-style-btn');

    const defaultStyles = {
        backgroundColor: '',
        padding: '',
        fontSize: '',
        border: ''
    };

    // Apply new styles on click
    styleTarget.addEventListener('click', function() {
        this.style.backgroundColor = 'lightblue';
        this.style.padding = '20px';
        this.style.fontSize = '1.2em';
        this.style.border = '2px dashed blue';
    });
    resetStyleBtn.addEventListener('click', function() {
        styleTarget.style.backgroundColor = defaultStyles.backgroundColor;
        styleTarget.style.padding = defaultStyles.padding;
        styleTarget.style.fontSize = defaultStyles.fontSize;
        styleTarget.style.border = defaultStyles.border;
    });
    

    // 3. Add or remove element when button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const toggleContainer = document.getElementById('toggle-container');
    let originalContent = toggleContainer.innerHTML;
    let isRemoved = false;
    
    toggleElementBtn.addEventListener('click', function() {
        if (isRemoved) {
            toggleContainer.innerHTML = originalContent;
            this.textContent = 'Remove Element';
            isRemoved = false;
        } else {
            toggleContainer.innerHTML = '';
            this.textContent = 'Add Element Back';
            isRemoved = true;
        }
    });
});