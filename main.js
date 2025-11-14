/**
 * Array of event objects containing the schedule data.
 * NOTE: The 'image' paths are hypothetical and must exist in your 'images/' folder.
 */
const events = [
    {
        title: "Mobile-First Design in Practice",
        type: "Workshop",
        date: "2025-11-20T13:00:00",
        description: "A hands-on session focusing on practical techniques for designing and building mobile-first responsive websites. Bring your laptop!",
        image: "images/mobile-first.jpg"
    },
    {
        title: "The Future of AI in Web Development",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Dr. Anya Sharma explores how generative AI and machine learning will revolutionize front-end and back-end development workflows.",
        image: "images/ai-future.jpg"
    },
    {
        title: "Building Sustainable Tech Solutions",
        type: "Panel Discussion",
        date: "2025-11-21T11:00:00",
        description: "An expert panel discusses reducing energy consumption in software and hardware development to combat climate change.",
        image: "images/sustainable-tech.jpg"
    },
    {
        title: "Advanced JavaScript ESNext Features",
        type: "Session",
        date: "2025-11-21T14:30:00",
        description: "Dive deep into the latest features of ECMAScript (ESNext), including new syntax, APIs, and modern development patterns.",
        image: "images/javascript.jpg"
    }
];

/**
 * Generates and displays the event cards on the page.
 */
function renderEventCards() {
    // 1. Select the <section id="event-container">
    const eventContainer = document.getElementById('event-container');

    // Helper function to format the date and time
    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        
        // Format the date (e.g., Nov 20)
        const datePart = date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });

        // Format the time (e.g., 1:00 PM)
        const timePart = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        return ${datePart} at ${timePart};
    };

    // 2. Loop through the events array using forEach
    events.forEach(event => {
        // 3. Create the necessary HTML elements for a card

        // Main Card Wrapper
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('event-card');

        // Image Element
        const image = document.createElement('img');
        image.src = event.image;
        image.alt = Image for ${event.title};
        // Note: For a real app, you should check if the image exists

        // Content Wrapper
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card-content');
        
        // Title (h2)
        const title = document.createElement('h2');
        title.textContent = event.title;

        // Description (p)
        const description = document.createElement('p');
        description.textContent = event.description;

        // Details Section (p)
        const details = document.createElement('p');
        details.classList.add('event-details');
        
        // Populate the details with formatted data
        details.innerHTML = `
            Type: <span class="type">${event.type}</span><br>
            Time: *${formatDateTime(event.date)}*
        `;

        // Assemble the card components
        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        contentDiv.appendChild(details);

        cardDiv.appendChild(image);
        cardDiv.appendChild(contentDiv);

        // 4. Append the final, assembled card to the <section id="event-container">
        eventContainer.appendChild(cardDiv);
    });
}

// Execute the function once the script loads to populate the schedule
document.addEventListener('DOMContentLoaded', renderEventCards);