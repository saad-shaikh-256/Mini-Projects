// FAQ Data Array
const faqs = [
  {
    question: "What is HTML?",
    answer: "The standard language for creating webpages.",
  },
  {
    question: "What is CSS?",
    answer: "A stylesheet language for styling HTML content.",
  },
  {
    question: "What is JavaScript?",
    answer: "A scripting language to make webpages interactive.",
  },
  {
    question: "What is Tailwind?",
    answer: "A utility-first CSS framework for rapid UI building.",
  },
  {
    question: "What is the DOM?",
    answer: "A tree-like structure of your webpage for scripting.",
  },
  {
    question: "What is a CSS class?",
    answer: "A reusable set of styles applied to HTML elements.",
  },
  {
    question: "What is Git?",
    answer: "A version control system for tracking code changes.",
  },
  {
    question: "What is a responsive design?",
    answer: "A layout that adapts to all screen sizes.",
  },
];

// Get the FAQ container
const faqContainer = document.getElementById("faq-container");

// Render FAQs using map()
faqContainer.innerHTML = faqs
  .map(
    (faq) => `
    <div class="faq-Wrapper h-fit w-full flex flex-col py-2 border-b-[1.5px] border-slate-300 text-sm sm:text-base gap-2">
      <div class="question-Wrapper h-fit w-full flex-Between gap-2 text-neutral-800 cursor-pointer">
        <div class="faq-Question h-fit w-full font-medium">
          ${faq.question}
        </div>
        <i class="hgi hgi-stroke hgi-arrow-down-01 font-semibold transition-transform duration-300"></i>
      </div>
      <div class="faq-Answer h-fit w-full text-neutral-700 hidden">
        ${faq.answer}
      </div>
    </div>
  `
  )
  .join("");

// Accordion Functionality
const faqWrappers = document.querySelectorAll(".faq-Wrapper");

faqWrappers.forEach((wrapper) => {
  const questionWrapper = wrapper.querySelector(".question-Wrapper");
  const answer = wrapper.querySelector(".faq-Answer");
  const icon = wrapper.querySelector("i");

  questionWrapper.addEventListener("click", () => {
    const isOpen = !answer.classList.contains("hidden");

    // Close all
    faqWrappers.forEach((w) => {
      w.querySelector(".faq-Answer").classList.add("hidden");
      w.querySelector("i").classList.remove("rotate-180");
    });

    // Toggle current
    if (!isOpen) {
      answer.classList.remove("hidden");
      icon.classList.add("rotate-180");
    }
  });
});
