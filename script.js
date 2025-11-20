// Modal functionality
const modal = document.getElementById('joinModal');
const joinBtn = document.getElementById('joinBtn');
const closeBtn = document.getElementById('closeModal');
const joinForm = document.getElementById('joinForm');

// Open modal
joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle form submission
joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value,
        experience: document.getElementById('experience').value,
        message: document.getElementById('message').value
    };
    
    // Here you would normally send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your interest! We\'ll get back to you within 24-48 hours.');
    
    // Reset form and close modal
    joinForm.reset();
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
