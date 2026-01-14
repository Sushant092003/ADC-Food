// 1. Centralized Review Data
const reviewData = [
  {
    img: "../assests/images/review-1.jpg",
    text: "Hey!! Just want to let you know the barbecue bites are very tasty. The flavour is on point!!!! Plus it was super easy to cook and the chicken was juicy n tender. I'll definitely buy more of these.",
  },
  {
    img: "../assests/images/review-2.jpg",
    text: "It was so good, the flavor story is amazing. Definitely a high-quality product that actually tastes like a proper meal!",
  },
  {
    img: "../assests/images/review-3.jpg",
    text: "Best protein meal I've found. No weird aftertaste, just real food. Super easy for my busy gym schedule.",
  },
  {
    img: "../assests/images/review-1.jpg", // Duplicate for demo
    text: "Incredible taste! I was skeptical about frozen high-protein meals, but ADC really nailed the texture and spice levels.",
  },
];

const track = document.getElementById("reviewsTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

// 2. Render Review Cards Dynamically
function renderReviews() {
  track.innerHTML = reviewData
    .map(
      (review) => `
        <div class="review-card">
            <div class="review-img-box">
                <img src="${review.img}" alt="Customer Review Image">
            </div>
            <div class="review-content">
                <span class="quote-mark">“</span>
                <p>${review.text}</p>
            </div>
        </div>
    `
    )
    .join("");
}

// 3. Slider Movement Logic
function updateSlider() {
  const cards = document.querySelectorAll(".review-card");
  if (cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth;
  const gap = 30; // Matches the CSS gap
  track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
}

// 4. Navigation Events
nextBtn.addEventListener("click", () => {
  const visibleCards = window.innerWidth > 768 ? 2 : 1;
  // Loop back to start if at the end
  if (currentIndex >= reviewData.length - visibleCards) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  const visibleCards = window.innerWidth > 768 ? 2 : 1;
  // Loop to end if at the beginning
  if (currentIndex <= 0) {
    currentIndex = reviewData.length - visibleCards;
  } else {
    currentIndex--;
  }
  updateSlider();
});

// 1. FAQ Data Array
const faqData = [
  {
    question: "Is frozen food actually healthy?",
    answer:
      "Yes! Our meals are flash-frozen at peak freshness to lock in nutrients without the need for artificial preservatives.",
  },
  {
    question: "How is this better than protein powders or shakes?",
    answer:
      "Protein powders are convenient, but many people find them unsatisfying, artificial, or hard to digest. ADC gives you the same convenience, but in the form of a real, filling meal — something you actually enjoy eating and that keeps you full longer.",
  },
  {
    question: "Will this actually keep me full?",
    answer:
      "Absolutely. Because we use real whole-food protein sources and fiber, these meals provide sustained energy unlike liquid supplements.",
  },
  {
    question: "Isn't market meat better and cheaper?",
    answer:
      "While raw meat is an option, ADC saves you the hours of cleaning, marinating, and prep work while ensuring gourmet flavor every time.",
  },
  {
    question: "Who is ADC really for?",
    answer:
      "ADC is for busy professionals, gym-goers, and anyone who wants high-quality protein without spending hours in the kitchen.",
  },
];

// 2. Render Function
function renderFAQs() {
  const faqList = document.getElementById("faqList");
  faqList.innerHTML = faqData
    .map(
      (faq, index) => `
        <div class="faq-item" id="faq-${index}">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <h3>${faq.question}</h3>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `
    )
    .join("");
}

// 3. Toggle Function
function toggleFAQ(index) {
  const items = document.querySelectorAll(".faq-item");
  const targetItem = document.getElementById(`faq-${index}`);

  // Optional: Close other FAQs when one opens
  items.forEach((item) => {
    if (item !== targetItem) item.classList.remove("active");
  });

  targetItem.classList.toggle("active");
}

// Initialize
document.addEventListener("DOMContentLoaded", renderFAQs);

// 5. Initialize & Handle Resize
document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
  // Small delay to ensure styles are loaded before calculating width
  setTimeout(updateSlider, 100);
});

window.addEventListener("resize", updateSlider);
