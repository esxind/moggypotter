document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var content = this.nextElementSibling;
            toggleSection(content);
        });
    });

    function toggleSection(section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
});
function openTab(evt, tabName) {
    var i, tokenomicsContent, tokenomicsTab;
    tokenomicsContent = document.getElementsByClassName("tokenomics-content");
    for (i = 0; i < tokenomicsContent.length; i++) {
        tokenomicsContent[i].style.display = "none";
    }
    tokenomicsTab = document.getElementsByClassName("tokenomics-tab");
    for (i = 0; i < tokenomicsTab.length; i++) {
        tokenomicsTab[i].className = tokenomicsTab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
