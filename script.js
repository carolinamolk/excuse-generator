// ===== EXCUSE DATA =====
// All excuses are completely ridiculous for maximum humor
const excuses = {
  priorCommitments: [
    "I'm volunteering to teach penguins how to fly",
    "I have to attend a very important meeting with my houseplants",
    "I'm competing in the World Championship of Sitting Very Still",
    "I promised to help my neighbor organize their collection of interesting rocks",
    "I'm participating in a 24-hour staring contest with my cat",
    "I have to judge a competition between my left and right sock",
    "I'm attending a seminar on the proper way to watch paint dry",
    "I need to help my goldfish practice synchronized swimming",
    "I'm committed to a very important appointment to count the number of holes in Swiss cheese",
    "I have to attend a meeting of the International Society of People Who Stand in Lines",
    "I'm participating in the annual convention for people who collect lint from dryer vents",
    "I promised to help my refrigerator reorganize its contents by expiration date",
    "I'm competing in the World Championships of Watching Grass Grow",
    "I have to attend a mandatory workshop on the art of unnecessary meetings",
    "I'm volunteering to teach squirrels proper etiquette for stealing bird food",
    "I need to supervise my shadow's performance review",
    "I'm committed to a very important seminar on the psychology of doorknobs",
    "I have to attend my houseplant's therapy session for abandonment issues",
    "I'm participating in a 48-hour marathon of watching elevators go up and down",
    "I promised to help my neighbor's cat write its autobiography",
    "I'm busy guiding moths to the light"
  ],
  
  health: [
    "My doctor says I'm allergic to events that happen on days ending in 'y'",
    "I'm on a strict diet that doesn't allow me to attend social gatherings",
    "I've developed a rare condition where I can only attend events underwater",
    "My therapist says I need to avoid all events with more than 3.7 people",
    "I'm allergic to the color of the day you're having this event",
    "I can only leave my house during months that don't contain the letter 'R'",
    "My doctor prescribed me 14 hours of continuous Netflix watching",
    "I'm currently in quarantine because I caught a case of the Mondays",
    "I've been diagnosed with Chronic Event Avoidance Syndrome",
    "My doctor says I'm allergic to crowds larger than my immediate family",
    "I can only breathe properly when I'm lying horizontally on my couch",
    "My therapist says attending social events triggers my fear of having fun",
    "I'm on medication that makes me violently allergic to small talk",
    "I've developed a rare condition where I can only speak in movie quotes",
    "My doctor prescribed mandatory isolation until I finish every show on Netflix",
    "I'm allergic to events that occur during any month with an 'A' in it",
    "I've been diagnosed with Acute Social Gathering Intolerance",
    "My therapist says I need to avoid all places where people might expect me to smile",
    "I can only attend events that are held in complete darkness and silence",
    "My doctor says I'm suffering from Chronic Responsibility Avoidance Disorder"
  ],
  
  professional: [
    "I have to work late counting how many times the word 'the' appears in the dictionary",
    "I'm conducting very important research on the migration patterns of lost socks",
    "I have a conference call with some very demanding houseplants",
    "I'm leading a seminar on proper doorknob appreciation techniques",
    "I need to finish my thesis on why pizza boxes are square but pizzas are round",
    "I'm training to become a professional cloud watcher",
    "I have an urgent deadline to reorganize my collection of bottle caps",
    "I'm conducting interviews for the position of 'Chief Dust Bunny Inspector'",
    "I have to finish my research project on the aerodynamics of falling toast",
    "I'm leading a very important team meeting with my rubber duck collection",
    "I need to complete my certification in Advanced Procrastination Techniques",
    "I'm consulting on a top-secret project involving the proper storage of air",
    "I have to write a detailed report on the psychological impact of wearing mismatched socks",
    "I'm conducting critical research on why hot dogs come in packs of 10 but buns come in packs of 8",
    "I need to attend a mandatory workshop on the proper technique for avoiding work",
    "I'm training to become a professional nap evaluator",
    "I have an urgent deadline to categorize all the different types of silence",
    "I'm leading a focus group on the optimal temperature for thinking deep thoughts",
    "I need to finish my dissertation on the philosophy of refrigerator magnets",
    "I'm conducting very important quality control testing on my couch's comfort levels"
  ],
  
  transportation: [
    "My car only drives to places that rhyme with 'potato'",
    "I can only travel by unicycle and it's in the shop",
    "My GPS is broken and only gives directions to imaginary places",
    "I'm currently boycotting all forms of transportation invented after 1823",
    "My car has developed a fear of leaving the driveway",
    "I can only travel in vehicles that are lime green, and I don't own any",
    "My transportation method involves trained squirrels, and they're on strike",
    "I'm waiting for my flying carpet to come back from the dry cleaners",
    "My car only runs on premium tears of joy, and I'm fresh out",
    "I can only travel during months that end in silent letters",
    "My vehicle is solar-powered and it's been cloudy for three weeks straight",
    "I'm currently boycotting all roads that contain the letter 'E'",
    "My car's GPS has been hacked by my cat and only navigates to tuna factories",
    "I can only travel by riding on the backs of very large turtles",
    "My transportation method requires a full moon and we're in a new moon phase",
    "I'm waiting for my hoverboard to be approved by the Department of Gravity",
    "My car only starts if I sing the entire alphabet backwards in French",
    "I can only travel to places that are exactly 7.3 miles away from my house",
    "My vehicle runs on pure enthusiasm and I'm feeling quite pessimistic today",
    "I'm currently training a flock of geese to carry me places but they're not ready yet"
  ],
  
  family: [
    "My pet rock is having an existential crisis and needs emotional support",
    "My imaginary friend is moving and I promised to help them pack",
    "My houseplants are throwing a surprise party and I can't miss it",
    "My shadow has been acting up lately and needs supervision",
    "I need to attend my rubber duck's graduation ceremony",
    "My invisible dog has a vet appointment",
    "I'm babysitting my neighbor's pet cactus",
    "My goldfish is going through a midlife crisis and needs counseling",
    "My imaginary twin has a very important job interview that day",
    "I promised to help my dust bunnies relocate to a bigger space under the couch",
    "My pet spider is getting married and I'm the best man",
    "I need to attend family therapy with my collection of vintage spoons",
    "My imaginary grandmother is visiting and she doesn't approve of me leaving the house",
    "I'm hosting a reunion for all my old imaginary friends",
    "My pet cactus is finally blooming and I can't miss this once-in-a-lifetime event",
    "I promised to help my refrigerator's vegetables stage an intervention for the expired milk",
    "My sock puppet family is having their annual holiday dinner",
    "I need to attend my houseplant's wedding to my neighbor's houseplant",
    "My imaginary childhood pet is having a birthday party in my dreams",
    "I'm helping my collection of rubber ducks plan their escape from the bathtub"
  ]
};

// ===== DOM ELEMENTS =====
const eventInput = document.getElementById('eventInput');
const generateBtn = document.getElementById('generateBtn');
const outputSection = document.getElementById('outputSection');
const excuseText = document.getElementById('excuseText');
const copyBtn = document.getElementById('copyBtn');
const darkModeToggle = document.getElementById('darkModeToggle');

// ===== CORE FUNCTIONS =====

/**
 * Generate a random excuse
 * Selects random category and random excuse from that category
 */
function generateExcuse() {
  // Get all category keys
  const categories = Object.keys(excuses);
  
  // Select random category
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  // Select random excuse from category
  const categoryExcuses = excuses[randomCategory];
  const randomExcuse = categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)];
  
  // Format excuse with template
  const formattedExcuse = formatExcuse(randomExcuse);
  
  // Display excuse
  displayExcuse(formattedExcuse);
  
  // Show copy/regenerate buttons
  showOutputSection();
}

/**
 * Format excuse with standard template
 * @param {string} excuse - The raw excuse text
 * @returns {string} - Formatted excuse
 */
function formatExcuse(excuse) {
  // Add standard prefix with line break and ensure proper capitalization
  return `Sorry, I can't make it!\n${excuse.charAt(0).toUpperCase() + excuse.slice(1)}.`;
}

/**
 * Display the generated excuse in the output section
 * @param {string} excuse - The formatted excuse text
 */
function displayExcuse(excuse) {
  // Split the excuse into greeting and actual excuse
  const parts = excuse.split('\n');
  const greeting = parts[0]; // "Sorry, I can't make it!"
  const actualExcuse = parts[1]; // The actual excuse
  
  // Clear previous content
  excuseText.innerHTML = '';
  
  // Create greeting element and add it first
  const greetingElement = document.createElement('span');
  greetingElement.className = 'excuse-greeting';
  greetingElement.textContent = greeting;
  greetingElement.style.opacity = '0';
  excuseText.appendChild(greetingElement);
  
  // Add line break
  excuseText.appendChild(document.createElement('br'));
  
  // Create reason element and add it
  const reasonElement = document.createElement('span');
  reasonElement.className = 'excuse-reason';
  reasonElement.textContent = actualExcuse;
  reasonElement.style.opacity = '0';
  excuseText.appendChild(reasonElement);
  
  // Animate elements appearing one by one
  setTimeout(() => {
    greetingElement.style.transition = 'opacity 0.6s ease-out';
    greetingElement.style.opacity = '1';
  }, 100);
  
  setTimeout(() => {
    reasonElement.style.transition = 'opacity 0.8s ease-out';
    reasonElement.style.opacity = '1';
  }, 700);
}

/**
 * Show the output section with smooth animation
 */
function showOutputSection() {
  outputSection.classList.remove('hidden');
  // Small delay to ensure the element is visible before animating
  setTimeout(() => {
    outputSection.style.opacity = '1';
    outputSection.style.transform = 'translateY(0)';
  }, 10);
  
  // Change button text after first generation
  generateBtn.textContent = 'Another excuse?';
}

/**
 * Copy excuse text to clipboard
 * Uses modern Clipboard API with fallback
 */
async function copyToClipboard() {
  const text = excuseText.textContent;
  
  try {
    // Try modern Clipboard API first
    await navigator.clipboard.writeText(text);
    showCopySuccess();
  } catch (err) {
    // Fallback for older browsers
    fallbackCopyToClipboard(text);
  }
}

/**
 * Fallback copy method for older browsers
 * @param {string} text - Text to copy
 */
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showCopySuccess();
  } catch (err) {
    console.error('Failed to copy text: ', err);
    showCopyError();
  }
  
  document.body.removeChild(textArea);
}

/**
 * Show copy success feedback
 */
function showCopySuccess() {
  const originalText = copyBtn.textContent;
  copyBtn.textContent = '✅';
  copyBtn.classList.add('copied');
  
  // Reset after 2 seconds
  setTimeout(() => {
    copyBtn.textContent = originalText;
    copyBtn.classList.remove('copied');
  }, 2000);
}

/**
 * Show copy error feedback
 */
function showCopyError() {
  const originalText = copyBtn.textContent;
  copyBtn.textContent = '❌';
  
  // Reset after 2 seconds
  setTimeout(() => {
    copyBtn.textContent = originalText;
  }, 2000);
}

/**
 * Toggle dark mode
 * Saves preference to localStorage
 */
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Save preference
  localStorage.setItem('darkMode', isDarkMode);
  
  // Update toggle icon
  updateDarkModeIcon(isDarkMode);
}

/**
 * Update dark mode toggle icon
 * @param {boolean} isDarkMode - Whether dark mode is active
 */
function updateDarkModeIcon(isDarkMode) {
  const toggleIcon = document.querySelector('.toggle-icon');
  toggleIcon.textContent = isDarkMode ? '☀️' : '🌙';
}

/**
 * Check for saved dark mode preference on page load
 */
function initializeDarkMode() {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  
  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
  }
  
  updateDarkModeIcon(savedDarkMode);
}

/**
 * Clear input field after generating excuse
 */
function clearInput() {
  eventInput.value = '';
}

/**
 * Focus input field for better UX
 */
function focusInput() {
  eventInput.focus();
}

// ===== EVENT LISTENERS =====

// Generate button click
generateBtn.addEventListener('click', () => {
  generateExcuse();
  clearInput();
});

// Enter key in input field
eventInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    generateExcuse();
    clearInput();
  }
});

// Copy button click
copyBtn.addEventListener('click', copyToClipboard);

// Dark mode toggle
darkModeToggle.addEventListener('click', toggleDarkMode);

// ===== INITIALIZATION =====

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeDarkMode();
  focusInput(); // Focus input for immediate use
});

// ===== UTILITY FUNCTIONS =====

/**
 * Get random item from array
 * @param {Array} array - Array to select from
 * @returns {*} - Random item from array
 */
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Debounce function for performance
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}