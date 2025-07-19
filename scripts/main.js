// This file contains JavaScript code for interactive features related to cybersecurity. 

document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alertButton');
    
    if (alertButton) {
        alertButton.addEventListener('click', () => {
            alert('¡Cuidado! Mantén tus datos seguros y no compartas información personal.');
        });
    }

    const fetchCybersecurityTips = async () => {
        try {
            const response = await fetch('https://api.cybersecuritytips.com/tips');
            const tips = await response.json();
            const tipsContainer = document.getElementById('tipsContainer');

            tips.forEach(tip => {
                const tipElement = document.createElement('div');
                tipElement.classList.add('tip');
                tipElement.textContent = tip;
                tipsContainer.appendChild(tipElement);
            });
        } catch (error) {
            console.error('Error fetching cybersecurity tips:', error);
        }
    };

    fetchCybersecurityTips();
});