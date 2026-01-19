
<!-- JavaScript -->
<script>
    document.addEventListener("DOMContentLoaded", () => {

        /* =========================
           MOBILE MENU TOGGLE
        ========================= */
        window.toggleMenu = function () {
            const navLinks = document.getElementById("navLinks");
            if (navLinks) {
                navLinks.classList.toggle("active");
            }
        };

        /* =========================
           TAB SYSTEM
        ========================= */
        window.openTab = function (evt, tabName) {
            const tabContent = document.querySelectorAll(".tab-content");
            const tabButtons = document.querySelectorAll(".tab-btn");

            // Hide all tab contents
            tabContent.forEach(content => {
                content.style.display = "none";
                content.classList.remove("active");
            });

            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));

            // Show selected tab
            const activeTab = document.getElementById(tabName);
            if (activeTab) {
                activeTab.style.display = "block";
                setTimeout(() => {
                    activeTab.classList.add("active");
                }, 10);
            }

            // Activate clicked button
            if (evt && evt.currentTarget) {
                evt.currentTarget.classList.add("active");
            }
        };

        /* =========================
           CLOSE MOBILE MENU ON LINK CLICK
        ========================= */
        const navLinksContainer = document.getElementById("navLinks");
        const navLinks = document.querySelectorAll(".nav-links a");

        if (navLinksContainer && navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener("click", () => {
                    navLinksContainer.classList.remove("active");
                });
            });
        }

    });
</script>
