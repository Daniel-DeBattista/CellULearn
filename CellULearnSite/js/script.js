// Collapsible boxes functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', function() {
            const container = this.closest('.collapsible-container');
            container.classList.toggle('collapsed');
        });
    });
});