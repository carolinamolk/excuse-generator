// ===== EXCUSE DATA =====
// All excuses are completely ridiculous for maximum humor
const excuses = {
  priorCommitments: [
    "I'm volunteering to teach penguins how to fly",
    "I have to attend a very important meeting with my houseplants... yes, the same ones from last week",
    "I'm competing in the World Championship of Sitting Very Still",
    "I promised to help my neighbor organize their collection of interesting rocks",
    "I'm participating in a 24-hour staring contest with my cat (currently in hour 3, can't quit now)",
    "I have to judge a competition between my left and right sock",
    "I'm attending a seminar on the proper way to watch paint dry... it's a 6-part series",
    "I need to help my goldfish practice synchronized swimming",
    "I'm committed to a very important appointment to count the number of holes in Swiss cheese",
    "I have to attend a meeting of the International Society of People Who Stand in Lines (I'm the treasurer now, somehow)",
    "I'm participating in the annual convention for people who collect lint from dryer vents",
    "I promised to help my refrigerator reorganize its contents by expiration date",
    "I'm competing in the World Championships of Watching Grass Grow... defending champion, actually",
    "I have to attend a mandatory workshop on the art of unnecessary meetings (ironically, it's the third one this month)",
    "I'm volunteering to teach squirrels proper etiquette for stealing bird food",
    "I need to supervise my shadow's performance review",
    "I'm committed to a very important seminar on the psychology of doorknobs",
    "I have to attend my houseplant's therapy session for abandonment issues... we're making real progress",
    "I'm participating in a 48-hour marathon of watching elevators go up and down",
    "I promised to help my neighbor's cat write its autobiography",
    "I have to attend my furniture's annual meeting (they're discussing a coup)",
    "I'm committed to teaching my plants the proper way to photosynthesize... they've been slacking",
    "I promised to help my ceiling fan write its memoirs about all the things it's seen",
    "I'm participating in a 72-hour intensive course on proper dust appreciation",
    "I have to attend a summit for people who own too many throw pillows",
    "I'm committed to mediating a dispute between my left and right earbuds",
    "I promised to help my microwave learn to tell better jokes",
    "I'm attending the world's first conference for people who collect expired coupons",
    "I have to supervise my alarm clock's anger management therapy",
    "I'm committed to a very important workshop on the psychology of lost bobby pins"
  ],
  
  health: [
    "My doctor says I'm allergic to events that happen on days ending in 'y'... yes, I got a second opinion",
    "I'm on a strict diet that doesn't allow me to attend social gatherings",
    "I've developed a rare condition where I can only attend events underwater (the specialist was very thorough)",
    "My therapist says I need to avoid all events with more than 3.7 people",
    "I'm allergic to the color of the day you're having this event",
    "I can only leave my house during months that don't contain the letter 'R'",
    "My doctor prescribed me 14 hours of continuous Netflix watching... medicinal purposes only, of course",
    "I'm currently in quarantine because I caught a case of the Mondays (it's highly contagious, apparently)",
    "I've been diagnosed with Chronic Event Avoidance Syndrome... there's no cure, sadly",
    "My doctor says I'm allergic to crowds larger than my immediate family",
    "I can only breathe properly when I'm lying horizontally on my couch",
    "My therapist says attending social events triggers my fear of having fun (we're working on it in therapy... slowly)",
    "I'm on medication that makes me violently allergic to small talk... the side effects are quite specific",
    "I've developed a rare condition where I can only speak in movie quotes",
    "My doctor prescribed mandatory isolation until I finish every show on Netflix (I'm only on season 3 of everything)",
    "I'm allergic to events that occur during any month with an 'A' in it",
    "I've been diagnosed with Acute Social Gathering Intolerance",
    "My therapist says I need to avoid all places where people might expect me to smile",
    "I can only attend events that are held in complete darkness and silence",
    "My doctor says I'm suffering from Chronic Responsibility Avoidance Disorder",
    "I've been diagnosed with Seasonal Social Disorder... it's social season",
    "My therapist says I'm allergic to making eye contact with people I know in public",
    "I'm on a strict no-plans diet prescribed by my mental health professional",
    "My doctor says I need to avoid all events that require me to wear matching socks",
    "I've developed a rare condition where I can only communicate through interpretive dance",
    "My therapist prescribed 12 hours of mandatory blanket fort construction",
    "I'm currently quarantined due to a severe case of 'I just can't even'",
    "My doctor says I'm allergic to events that happen before noon... or after noon",
    "I've been diagnosed with Acute Small Talk Intolerance Syndrome",
    "My medical team says I need to avoid all gatherings with more than zero people"
  ],
  
  professional: [
    "I have to work late counting how many times the word 'the' appears in the dictionary... again",
    "I'm conducting very important research on the migration patterns of lost socks (breakthrough imminent, I swear)",
    "I have a conference call with some very demanding houseplants",
    "I'm leading a seminar on proper doorknob appreciation techniques",
    "I need to finish my thesis on why pizza boxes are square but pizzas are round... my advisor is getting impatient",
    "I'm training to become a professional cloud watcher (yes, there's a certification for that)",
    "I have an urgent deadline to reorganize my collection of bottle caps",
    "I'm conducting interviews for the position of 'Chief Dust Bunny Inspector'",
    "I have to finish my research project on the aerodynamics of falling toast... the data is finally making sense",
    "I'm leading a very important team meeting with my rubber duck collection",
    "I need to complete my certification in Advanced Procrastination Techniques (I keep putting off the final exam)",
    "I'm consulting on a top-secret project involving the proper storage of air",
    "I have to write a detailed report on the psychological impact of wearing mismatched socks... again",
    "I'm conducting critical research on why hot dogs come in packs of 10 but buns come in packs of 8 (this conspiracy goes deep)",
    "I need to attend a mandatory workshop on the proper technique for avoiding work",
    "I'm training to become a professional nap evaluator",
    "I have an urgent deadline to categorize all the different types of silence",
    "I'm leading a focus group on the optimal temperature for thinking deep thoughts",
    "I need to finish my dissertation on the philosophy of refrigerator magnets... chapter 12 is really coming together",
    "I'm conducting very important quality control testing on my couch's comfort levels",
    "I have an urgent deadline to organize my collection of unfinished to-do lists",
    "I'm leading a groundbreaking study on why emails multiply overnight",
    "I need to attend a mandatory training session on advanced coffee break techniques",
    "I'm consulting on a top-secret project involving the optimal angle for office chair spinning",
    "I have to finish my research on the correlation between Monday mornings and existential dread",
    "I'm training to become a certified professional snack drawer organizer",
    "I need to complete my thesis on why printers can sense fear",
    "I'm conducting interviews for the position of 'Chief Motivational Meme Curator'",
    "I have an urgent meeting with my computer screen to discuss our toxic relationship",
    "I'm leading a focus group on the psychological impact of 'Reply All' emails"
  ],
  
  transportation: [
    "My car only drives to places that rhyme with 'potato'... I've tried everything",
    "I can only travel by unicycle and it's in the shop (third time this month, very suspicious)",
    "My GPS is broken and only gives directions to imaginary places... currently stuck in Narnia, apparently",
    "I'm currently boycotting all forms of transportation invented after 1823",
    "My car has developed a fear of leaving the driveway (the mechanic says it's psychological)",
    "I can only travel in vehicles that are lime green, and I don't own any",
    "My transportation method involves trained squirrels, and they're on strike (union negotiations are intense)",
    "I'm waiting for my flying carpet to come back from the dry cleaners",
    "My car only runs on premium tears of joy, and I'm fresh out... the economy, you know?",
    "I can only travel during months that end in silent letters",
    "My vehicle is solar-powered and it's been cloudy for three weeks straight",
    "I'm currently boycotting all roads that contain the letter 'E'",
    "My car's GPS has been hacked by my cat and only navigates to tuna factories (she's surprisingly tech-savvy)",
    "I can only travel by riding on the backs of very large turtles",
    "My transportation method requires a full moon and we're in a new moon phase",
    "I'm waiting for my hoverboard to be approved by the Department of Gravity",
    "My car only starts if I sing the entire alphabet backwards in French",
    "I can only travel to places that are exactly 7.3 miles away from my house",
    "My vehicle runs on pure enthusiasm and I'm feeling quite pessimistic today... maybe tomorrow?",
    "I'm currently training a flock of geese to carry me places but they're not ready yet (week 47 of training, slow progress)",
    "My Uber driver is my imaginary friend and they're having a bad day",
    "I can only travel during months that contain exactly 3 vowels",
    "My transportation method involves a complex system of trampolines that aren't set up yet",
    "I'm waiting for my teleportation license to be approved by the Department of Impossible Things",
    "My car only accepts cryptocurrency as fuel and the market is too volatile",
    "I can only travel to places that are featured in at least 3 Taylor Swift songs",
    "My vehicle runs on pure motivation and I'm currently experiencing technical difficulties",
    "I'm boycotting all forms of transportation that don't come with complementary snacks",
    "My GPS has developed trust issues and refuses to give me directions anymore",
    "I can only travel during solar eclipses and the timing just isn't right"
  ],
  
  family: [
    "My pet rock is having an existential crisis and needs emotional support (it's been questioning its purpose lately)",
    "My imaginary friend is moving and I promised to help them pack... to a better imagination, apparently",
    "My houseplants are throwing a surprise party and I can't miss it (they've been planning for weeks)",
    "My shadow has been acting up lately and needs supervision... can't trust it alone anymore",
    "I need to attend my rubber duck's graduation ceremony (summa cum laude, I'm so proud)",
    "My invisible dog has a vet appointment",
    "I'm babysitting my neighbor's pet cactus",
    "My goldfish is going through a midlife crisis and needs counseling (bought a tiny sports car, very concerning)",
    "My imaginary twin has a very important job interview that day",
    "I promised to help my dust bunnies relocate to a bigger space under the couch",
    "My pet spider is getting married and I'm the best man... yes, all eight rings are ready",
    "I need to attend family therapy with my collection of vintage spoons (the soup spoons and tea spoons aren't speaking)",
    "My imaginary grandmother is visiting and she doesn't approve of me leaving the house",
    "I'm hosting a reunion for all my old imaginary friends",
    "My pet cactus is finally blooming and I can't miss this once-in-a-lifetime event (I've been waiting 7 years for this)",
    "I promised to help my refrigerator's vegetables stage an intervention for the expired milk",
    "My sock puppet family is having their annual holiday dinner... I'm bringing the lint casserole",
    "I need to attend my houseplant's wedding to my neighbor's houseplant",
    "My imaginary childhood pet is having a birthday party in my dreams",
    "I'm helping my collection of rubber ducks plan their escape from the bathtub",
    "My imaginary dog's real feelings are hurt and we need to talk it out",
    "I have to attend a custody hearing between my left and right AirPods",
    "My houseplant's evil twin showed up and now there's family drama",
    "I need to help my refrigerator food items resolve their territorial disputes",
    "My socks are staging a revolution and I need to negotiate peace terms",
    "I have to attend my coffee mug's intervention... it's addicted to being washed",
    "My shadow's extended family is visiting and they don't approve of me",
    "I need to mediate a heated argument between my pillow and my alarm clock",
    "My imaginary cat's real birthday party is today and I'm the only guest",
    "I have to help my collection of pens figure out why they keep disappearing"
  ]
};

// ===== DOM ELEMENTS =====
const eventInput = document.getElementById('eventInput');
const generateBtn = document.getElementById('generateBtn');
const outputSection = document.getElementById('outputSection');
const excuseText = document.getElementById('excuseText');
const copyBtn = document.getElementById('copyBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const categorySelect = document.getElementById('categorySelect');
const decisionFatigueMessage = document.getElementById('decisionFatigueMessage');
const messageText = document.getElementById('messageText');

// ===== CORE FUNCTIONS =====

/**
 * Generate a random excuse
 * Selects random category and random excuse from that category
 */
function generateExcuse() {
  // Button is disabled if requirements aren't met, but double-check
  if (!eventInput.value.trim() || !categorySelect.value) {
    return;
  }
  
  const selectedCategory = categorySelect.value;
  
  let category;
  if (selectedCategory === 'random') {
    // Select random category if "You choose for me"
    const categories = Object.keys(excuses);
    category = categories[Math.floor(Math.random() * categories.length)];
  } else {
    // Use selected category
    category = selectedCategory;
  }
  
  // Select random excuse from category
  const categoryExcuses = excuses[category];
  const randomExcuse = categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)];
  
  // Format excuse with template
  const formattedExcuse = formatExcuse(randomExcuse);
  
  // Display excuse
  displayExcuse(formattedExcuse);
  
  // Show copy/regenerate buttons
  showOutputSection();
  
  // Mark that we've generated for this event
  hasGeneratedForCurrentEvent = true;
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
  // Check if user has a saved preference
  const savedPreference = localStorage.getItem('darkMode');
  
  // If no saved preference exists, default to dark mode
  // Otherwise, use the saved preference
  const isDarkMode = savedPreference === null ? true : savedPreference === 'true';
  
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  
  updateDarkModeIcon(isDarkMode);
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
  // Don't clear input - let user try different categories
});

// Enter key in input field
eventInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // If category is not selected, focus on it
    if (!categorySelect.value) {
      e.preventDefault();
      categorySelect.focus();
    } else {
      // Generate excuse if both fields are filled
      generateExcuse();
      // Don't clear input - let user try different categories
    }
  }
});

// Function to check if button should be enabled
function updateButtonState() {
  const hasEvent = eventInput.value.trim();
  const hasCategory = categorySelect.value;
  
  if (hasEvent && hasCategory) {
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
}

// Variable to track if we have generated an excuse for this event
let hasGeneratedForCurrentEvent = false;

// Reset screen when user starts typing new event
eventInput.addEventListener('input', () => {
  // If we've generated an excuse and user starts typing something different
  if (hasGeneratedForCurrentEvent) {
    // Hide output section
    outputSection.classList.add('hidden');
    // Reset category dropdown
    categorySelect.value = '';
    // Hide decision fatigue message
    decisionFatigueMessage.classList.add('hidden');
    messageText.innerHTML = '';
    // Reset button text
    generateBtn.textContent = 'What\'s my excuse?';
    // Reset flag
    hasGeneratedForCurrentEvent = false;
  }
  
  // Update button state
  updateButtonState();
});

// Copy button click
copyBtn.addEventListener('click', copyToClipboard);

// Dark mode toggle
darkModeToggle.addEventListener('click', toggleDarkMode);

// Category dropdown change
categorySelect.addEventListener('change', () => {
  handleCategoryChange();
  updateButtonState();
});

// Keyboard navigation for dropdown
categorySelect.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    // If dropdown is open and category selected, generate excuse
    if (categorySelect.value && eventInput.value.trim()) {
      generateExcuse();
    }
  }
  // Arrow keys are handled natively by the select element
});

// Global keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Cmd/Ctrl + Enter to generate excuse from anywhere
  if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
    e.preventDefault();
    if (eventInput.value.trim() && categorySelect.value) {
      generateExcuse();
    }
  }
  
  // Tab navigation is handled by default browser behavior
  
  // Escape key to reset
  if (e.key === 'Escape') {
    // Reset all fields
    eventInput.value = '';
    categorySelect.value = '';
    outputSection.classList.add('hidden');
    decisionFatigueMessage.classList.add('hidden');
    messageText.innerHTML = '';
    generateBtn.textContent = 'What\'s my excuse?';
    hasGeneratedForCurrentEvent = false;
    updateButtonState();
    eventInput.focus();
  }
});

// ===== INITIALIZATION =====

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeDarkMode();
  focusInput(); // Focus input for immediate use
  updateButtonState(); // Set initial button state
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

/**
 * Fade in text effect
 * @param {string} text - Text to display
 * @param {HTMLElement} element - Element to display text in
 */
function fadeInText(text, element) {
  element.textContent = text;
  element.style.opacity = '0';
  element.style.fontWeight = '300';
  element.style.transition = 'opacity 1s ease-in-out';
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 100);
}

/**
 * Handle category selection changes
 */
function handleCategoryChange() {
  const selectedValue = categorySelect.value;
  
  // Clear any existing text and reset
  messageText.style.opacity = '0';
  messageText.innerHTML = '';
  
  if (selectedValue === 'random') {
    // Show decision fatigue message with fade in effect
    decisionFatigueMessage.classList.remove('hidden');
    setTimeout(() => fadeInText('No thoughts, head empty, vibes only', messageText), 100);
  } else if (selectedValue === 'priorCommitments') {
    // Show prior commitments message with fade in effect
    decisionFatigueMessage.classList.remove('hidden');
    setTimeout(() => fadeInText('It\'s not your fault you\'re popular...', messageText), 100);
  } else if (selectedValue === 'health') {
    // Show health message with fade in effect
    decisionFatigueMessage.classList.remove('hidden');
    setTimeout(() => fadeInText('Self-care isn\'t selfish, bestie', messageText), 100);
  } else if (selectedValue === 'professional') {
    // Show professional message with fade in effect
    decisionFatigueMessage.classList.remove('hidden');
    setTimeout(() => fadeInText('That grindset life chose you', messageText), 100);
  } else if (selectedValue === 'transportation') {
    // Show transportation message with fade in effect
    decisionFatigueMessage.classList.remove('hidden');
    setTimeout(() => fadeInText('Not all who wander are lost... but you are', messageText), 100);
  } else if (selectedValue === 'family') {
    // Show family message with fade in effect
    decisionFatigueMessage.classList.remove('hidden');
    setTimeout(() => fadeInText('Ohana means nobody gets left behind... except you', messageText), 100);
  } else {
    // Hide message if another option is selected
    decisionFatigueMessage.classList.add('hidden');
    messageText.innerHTML = '';
  }
}