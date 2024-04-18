document.addEventListener("DOMContentLoaded", function() {
    const userIcon = document.getElementById("user-icon");
    const dropdownContent = document.getElementById("dropdown-content");

    userIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!dropdownContent.contains(event.target) && event.target !== userIcon) {
            dropdownContent.style.display = "none";
        }
    });
});

// for links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        
        // Check if the link is not a dropdown toggle
        if (!link.parentElement.classList.contains('dropdown-toggle')) {
            // Perform specific actions for non-dropdown links
            window.location.href = link.getAttribute('href');
        } else {
            // Handle dropdown toggle behavior
            const dropdown = link.nextElementSibling;
            if (dropdown.classList.contains('dropdown-active')) {
                dropdown.classList.remove('dropdown-active');
            } else {
                document.querySelectorAll('.dropdown.dropdown-active').forEach(activeDropdown => {
                    activeDropdown.classList.remove('dropdown-active');
                });
                dropdown.classList.add('dropdown-active');
            }
        }
    });
});


// Add event listener to Edit Profile button
document.querySelector('.edit-profile').addEventListener('click', function() {
    // Redirect user to edit profile page
    window.location.href = './edit_profile.html';
});

