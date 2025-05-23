document.addEventListener('DOMContentLoaded', function () {
    // Get tab elements
    const skillsTab = document.getElementById('skills-tab');
    const specializationsTab = document.getElementById('specializations-tab');
    const skillsContent = document.getElementById('skills-content');
    const specializationsContent = document.getElementById('specializations-content');

    function switchTab(activeTab, activeContent, inactiveTab, inactiveContent) {
        // Remove active class from inactive elements
        inactiveTab.classList.remove('active');
        inactiveContent.classList.remove('active');

        // Add active class to active elements
        activeTab.classList.add('active');
        activeContent.classList.add('active');
    }

    // Skills tab click event
    skillsTab.addEventListener('click', function (e) {
        e.preventDefault();
        if (!this.classList.contains('active')) {
            switchTab(skillsTab, skillsContent, specializationsTab, specializationsContent);
        }
    });

    // Specializations tab click event
    specializationsTab.addEventListener('click', function (e) {
        e.preventDefault();
        if (!this.classList.contains('active')) {
            switchTab(specializationsTab, specializationsContent, skillsTab, skillsContent);
        }
    });
});