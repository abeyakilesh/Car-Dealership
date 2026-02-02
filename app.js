document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATA: 6 Car Models ---
    const carData = [
        {
            id: 'gt-sport',
            name: 'GT Sport',
            price: '₹145,000',
            image: 'https://cdn.motor1.com/images/mgl/LRAQQ/s1/2019-ford-mustang-shelby-gt350.webp',
            desc: 'A twin-turbocharged V8 grand tourer designed for the open road. The GT Sport combines aggressive aerodynamics with a luxurious cabin.',
            specs: { acceleration: '3.2s', speed: '195 mph', power: '580 HP', engine: '4.0L V8 Twin-Turbo' }
        },
        {
            id: 'stradale',
            name: 'Stradale',
            price: '₹220,000',
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
            desc: 'Track-focused precision meeting street-legal luxury. Features a complete carbon fiber chassis and active aerodynamics.',
            specs: { acceleration: '2.8s', speed: '210 mph', power: '720 HP', engine: '5.2L V10 N/A' }
        },
        {
            id: 'electra',
            name: 'Electra',
            price: '₹180,000',
            image: 'https://imageio.forbes.com/specials-images/imageserve/5d2d75f74c687b00085cc8ab/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
            desc: 'The future of silence and speed. Pure electric performance with instant torque and a futuristic cockpit.',
            specs: { acceleration: '2.4s', speed: '180 mph', power: '1020 HP', engine: 'Tri-Motor Electric' }
        },
        {
            id: 'suv-corsa',
            name: 'Corsa SUV',
            price: '₹130,000',
            image: 'https://catalog-management.s3.ap-south-1.amazonaws.com/htmobile1/mercedesbenz_gls-2024/images/exterior_mercedes-benz-gls-2024_front-left-side_600x400.jpg',
            desc: 'Dominance on any terrain. The Corsa SUV brings supercar performance to a spacious, family-friendly form factor.',
            specs: { acceleration: '3.6s', speed: '190 mph', power: '640 HP', engine: '4.0L V8 Turbo' }
        },
        {
            id: 'spyder',
            name: '918 Spyder',
            price: '₹260,000',
            image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800',
            desc: 'Infinite headroom. The Spyder offers an unfiltered auditory experience with its retractable hardtop.',
            specs: { acceleration: '3.0s', speed: '202 mph', power: '670 HP', engine: '3.8L Flat-6' }
        },
        {
            id: 'limo',
            name: 'Rover SVJ',
            price: '₹350,000',
            image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
            desc: 'The pinnacle of executive luxury. Extended wheelbase, reclining rear seats, and a silent hybrid powertrain.',
            specs: { acceleration: '4.5s', speed: '155 mph', power: '500 HP', engine: '6.0L W12 Hybrid' }
        }
    ];

    // --- 1. POPULATE CAROUSEL (Index Page) ---
    const carouselContent = document.getElementById('carousel-content');
    if (carouselContent) {
        // We need to group items for the carousel logic (3 per slide for desktop)
        // Note: For a simpler pure JS approach without complex swipe logic, 
        // we will render single slides that contain a Grid of 3 on Desktop, 1 on Mobile.
        
        // Simple logic: Create 2 slides, each containing 3 cars (for desktop view)
        let html = '';
        
        // Chunk array into groups of 3
        const chunkSize = 3;
        for (let i = 0; i < carData.length; i += chunkSize) {
            const chunk = carData.slice(i, i + chunkSize);
            const isActive = i === 0 ? 'active' : '';
            
            html += `<div class="carousel-item ${isActive}">
                        <div class="row g-4 justify-content-center">`;
            
            chunk.forEach(car => {
                html += `
                    <div class="col-md-4">
                        <div class="card h-100 border-0 shadow-sm car-card">
                            <img src="${car.image}" class="card-img-top" alt="${car.name}">
                            <div class="card-body">
                                <h5 class="card-title">${car.name}</h5>
                                <p class="card-text text-muted text-truncate">${car.desc}</p>
                                <a href="model-details.html?id=${car.id}" class="btn btn-outline-dark w-100 stretched-link">View Details</a>
                            </div>
                        </div>
                    </div>
                `;
            });

            html += `   </div>
                     </div>`;
        }
        carouselContent.innerHTML = html;
    }

    // --- 2. POPULATE DETAILS PAGE (Model Details Page) ---
    const detailsContainer = document.getElementById('details-container');
    if (detailsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const carId = urlParams.get('id');
        const car = carData.find(c => c.id === carId);

        if (car) {
            detailsContainer.innerHTML = `
                <div class="col-lg-7">
                    <img src="${car.image}" class="img-fluid rounded shadow-lg w-100 mb-4" alt="${car.name}">
                </div>
                <div class="col-lg-5 ps-lg-5">
                    <h5 class="text-danger fw-bold mb-2">VELOCE COLLECTION</h5>
                    <h1 class="display-4 fw-bold mb-3">${car.name}</h1>
                    <h3 class="text-muted mb-4">${car.price}</h3>
                    <p class="lead mb-4">${car.desc}</p>
                    
                    <div class="bg-white p-4 rounded shadow-sm border mb-4">
                        <h5 class="mb-3 border-bottom pb-2">Technical Specifications</h5>
                        <div class="row g-3">
                            <div class="col-6">
                                <small class="text-muted text-uppercase d-block">0-60 MPH</small>
                                <span class="fw-bold fs-5">${car.specs.acceleration}</span>
                            </div>
                            <div class="col-6">
                                <small class="text-muted text-uppercase d-block">Top Speed</small>
                                <span class="fw-bold fs-5">${car.specs.speed}</span>
                            </div>
                            <div class="col-6">
                                <small class="text-muted text-uppercase d-block">Horsepower</small>
                                <span class="fw-bold fs-5">${car.specs.power}</span>
                            </div>
                            <div class="col-6">
                                <small class="text-muted text-uppercase d-block">Engine</small>
                                <span class="fw-bold fs-5">${car.specs.engine}</span>
                            </div>
                        </div>
                    </div>

                    <a href="contact.html?model=${car.name}" class="btn btn-primary btn-lg w-100 custom-btn">Book an Appointment</a>
                </div>
            `;
        } else {
            detailsContainer.innerHTML = '<div class="col-12 text-center text-danger"><h3>Car model not found.</h3><a href="index.html" class="btn btn-dark mt-3">Return Home</a></div>';
        }
    }

    // --- 3. Navbar Active State Logic (Existing) ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });

    // --- 4. Login Logic (Existing) ---
    const authLinkContainer = document.getElementById('auth-link');
    if (localStorage.getItem('isLoggedIn') === 'true' && authLinkContainer) {
        authLinkContainer.innerHTML = '<a class="nav-link btn btn-outline-light ms-lg-3 px-3" href="#" id="logoutBtn">Log Out</a>';
        document.getElementById('logoutBtn').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (document.getElementById('username').value === 'admin' && document.getElementById('password').value === '1234') {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }
});

