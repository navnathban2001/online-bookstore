document.addEventListener('DOMContentLoaded', () => {
    // Simple state-based cart functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    // Add event listeners to all 'Add to Cart' buttons
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            cartCount++;
            
            // Update the UI
            cartCountElement.textContent = cartCount;
            
            // Visual feedback
            const originalText = btn.textContent;
            btn.textContent = 'Added!';
            btn.style.backgroundColor = '#2ecc71'; // Green color for success
            btn.style.color = '#fff';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = ''; // Reset to CSS default
                btn.style.color = '';
            }, 2000);
            
            // Subtle animation on cart icon
            const cartIcon = document.querySelector('.cart-btn');
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Add scroll effect to navbar to change background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinksList = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinksList.classList.toggle("active");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinksList.classList.remove("active");
            });
        });
    }
});
