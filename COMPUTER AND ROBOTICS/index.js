
document.querySelectorAll('nav a').forEach((link) =>{
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({behavior: 'smooth'});
  });
});


// this is for  UNDERGRADUATE COURSE

    document.addEventListener('DOMContentLoaded', function() {
        // Get the link and the div
        const undergradLink = document.querySelector('a[href="#bsc-msc-phd-navs"]');
        const navsBox = document.getElementById('bsc-msc-phd-navs');
        const closeButton = document.querySelector('.under-program-close');

        // Initially hide the div
        navsBox.style.display = 'none';

        // Add click event to the link
        undergradLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            navsBox.style.display = 'flex'; // Show the div
        });

        // Add click event to the close button
        closeButton.addEventListener('click', function() {
            navsBox.style.display = 'none'; // Hide the div
        });
    });

    //THIS IS FOR UNDERGRAD REQUIREMENTS
    document.addEventListener('DOMContentLoaded', function() {
      // Get the link and the div
      const undergradLink = document.querySelector('a[href="#bsc-msc-phd-navs1"]');
      const navsBox = document.getElementById('bsc-msc-phd-navs1');
      const closeButton = document.querySelector('.under-program-close1');

      // Initially hide the div
      navsBox.style.display = 'none';

      // Add click event to the link
      undergradLink.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent the default anchor behavior
          navsBox.style.display = 'flex'; // Show the div
      });

      // Add click event to the close button
      closeButton.addEventListener('click', function() {
          navsBox.style.display = 'none'; // Hide the div
      });
  });


  //THIS IS FOR GRAD MASTERS PROGRAM
  document.addEventListener('DOMContentLoaded', function() {
    // Get the link and the div
    const undergradLink = document.querySelector('a[href="#bsc-msc-phd-navs-grad"]');
    const navsBox = document.getElementById('bsc-msc-phd-navs-grad');
    const closeButton = document.querySelector('.grad-program-close');

    // Initially hide the div
    navsBox.style.display = 'none';

    // Add click event to the link
    undergradLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        navsBox.style.display = 'flex'; // Show the div
    });

    // Add click event to the close button
    closeButton.addEventListener('click', function() {
        navsBox.style.display = 'none'; // Hide the div
    });
});

//THIS IS FOR GRAD PHD PROGRAM
document.addEventListener('DOMContentLoaded', function() {
  // Get the link and the div
  const undergradLink = document.querySelector('a[href="#bsc-msc-phd-navs-grad-PHD"]');
  const navsBox = document.getElementById('bsc-msc-phd-navs-grad-PHD');
  const closeButton = document.querySelector('.grad-program-close-phd');

  // Initially hide the div
  navsBox.style.display = 'none';

  // Add click event to the link
  undergradLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default anchor behavior
      navsBox.style.display = 'flex'; // Show the div
  });

  // Add click event to the close button
  closeButton.addEventListener('click', function() {
      navsBox.style.display = 'none'; // Hide the div
  });
});
  




// Function to reveal elements on scroll
function revealOnScroll() {
  const revealElements = document.querySelectorAll('.container, .welcome, .focused-research, .excellent-academics, .active-alumni, .degree-levels, .apply-now');

  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150; // Adjust the point of reveal

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('reveal');
    }
  });
}

// Event listener for scrolling
window.addEventListener('scroll', revealOnScroll);


document.addEventListener("DOMContentLoaded", function () {
  const seeButton = document.querySelector(".see button");
  const exploreProgrammesHouse = document.querySelector(".explore-programmes-house");
  const closeButton = exploreProgrammesHouse.querySelector("p");

  seeButton.addEventListener("click", function () {
    exploreProgrammesHouse.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    exploreProgrammesHouse.style.display = "none";
  });
});

//---------------FOR NEWS BOXES---------------
// POPUP BOX ONE
document.addEventListener('DOMContentLoaded', function () {
  // Get the "Read more..." link and the pop-up box elements
  const readMoreLink = document.querySelector('.read-more1');
  const popupBox = document.getElementById('popup-box1');
  const closeBtn = document.querySelector('.close-btn1');

  // Add click event listener to "Read more..." link
  readMoreLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      popupBox.style.display = 'block'; // Show the pop-up box
      document.querySelector('.degree-house1').style.display = 'none'; // Hide the initial content
  });

  // Add click event listener to the close button
  closeBtn.addEventListener('click', function () {
      popupBox.style.display = 'none'; // Hide the pop-up box
      document.querySelector('.degree-house1').style.display = 'block'; // Show the initial content again
  });
});


// POPUP BOX TWO
document.addEventListener('DOMContentLoaded', function () {
  // Get the "Read more..." link and the pop-up box elements
  const readMoreLink = document.querySelector('.read-more2');
  const popupBox = document.getElementById('popup-box2');
  const closeBtn = document.querySelector('.close-btn2');

  // Add click event listener to "Read more..." link
  readMoreLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      popupBox.style.display = 'block'; // Show the pop-up box
      document.querySelector('.degree-house2').style.display = 'none'; // Hide the initial content
  });

  // Add click event listener to the close button
  closeBtn.addEventListener('click', function () {
      popupBox.style.display = 'none'; // Hide the pop-up box
      document.querySelector('.degree-house2').style.display = 'block'; // Show the initial content again
  });
});

// POPUP BOX THREE
document.addEventListener('DOMContentLoaded', function () {
  // Get the "Read more..." link and the pop-up box elements
  const readMoreLink = document.querySelector('.read-more3');
  const popupBox = document.getElementById('popup-box3');
  const closeBtn = document.querySelector('.close-btn3');

  // Add click event listener to "Read more..." link
  readMoreLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      popupBox.style.display = 'block'; // Show the pop-up box
      document.querySelector('.degree-house3').style.display = 'none'; // Hide the initial content
  });

  // Add click event listener to the close button
  closeBtn.addEventListener('click', function () {
      popupBox.style.display = 'none'; // Hide the pop-up box
      document.querySelector('.degree-house3').style.display = 'block'; // Show the initial content again
  });
});


// POPUP BOX FOUR
document.addEventListener('DOMContentLoaded', function () {
  // Get the "Read more..." link and the pop-up box elements
  const readMoreLink = document.querySelector('.read-more4');
  const popupBox = document.getElementById('popup-box4');
  const closeBtn = document.querySelector('.close-btn4');

  // Add click event listener to "Read more..." link
  readMoreLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      popupBox.style.display = 'block'; // Show the pop-up box
      document.querySelector('.degree-house4').style.display = 'none'; // Hide the initial content
  });

  // Add click event listener to the close button
  closeBtn.addEventListener('click', function () {
      popupBox.style.display = 'none'; // Hide the pop-up box
      document.querySelector('.degree-house4').style.display = 'block'; // Show the initial content again
  });
});


// POPUP BOX FIVE
document.addEventListener('DOMContentLoaded', function () {
  // Get the "Read more..." link and the pop-up box elements
  const readMoreLink = document.querySelector('.read-more5');
  const popupBox = document.getElementById('popup-box5');
  const closeBtn = document.querySelector('.close-btn5');

  // Add click event listener to "Read more..." link
  readMoreLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      popupBox.style.display = 'block'; // Show the pop-up box
      document.querySelector('.degree-house5').style.display = 'none'; // Hide the initial content
  });

  // Add click event listener to the close button
  closeBtn.addEventListener('click', function () {
      popupBox.style.display = 'none'; // Hide the pop-up box
      document.querySelector('.degree-house5').style.display = 'block'; // Show the initial content again
  });
});


// POPUP BOX SIX
document.addEventListener('DOMContentLoaded', function () {
  // Get the "Read more..." link and the pop-up box elements
  const readMoreLink = document.querySelector('.read-more6');
  const popupBox = document.getElementById('popup-box6');
  const closeBtn = document.querySelector('.close-btn-xi');

  // Add click event listener to "Read more..." link
  readMoreLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      popupBox.style.display = 'block'; // Show the pop-up box
      document.querySelector('.degree-house6').style.display = 'none'; // Hide the initial content
  });

  // Add click event listener to the close button
  closeBtn.addEventListener('click', function () {
      popupBox.style.display = 'none'; // Hide the pop-up box
      document.querySelector('.degree-house6').style.display = 'block'; // Show the initial content again
  });
});


// THIS SECTION IS FOR REGISTER COURSES
const registerBtn = document.getElementById('register-btn');
const questionContainer = document.getElementById('question-container');
const studentQuestion = document.getElementById('student-question');
const nonStudentQuestion = document.getElementById('non-student-question');
const studentDialog = document.getElementById('student-dialog');
const nonStudentDialog = document.getElementById('non-student-dialog');
const studentForm = document.getElementById('student-form');
const nonStudentForm = document.getElementById('non-student-form');

//Add event listener to the button
registerBtn.addEventListener('click', () =>{
questionContainer.style.display = 'block';
});

// Add event listeners to the question boxes
studentQuestion.addEventListener('click', () =>{
questionContainer.style.display = 'none';
studentDialog.style.opacity = '10';
studentDialog.style.visibility = 'visible';
});

nonStudentQuestion.addEventListener('click', () =>{
questionContainer.style.display ='none';
nonStudentDialog.style.opacity = '10';
nonStudentDialog.style.visibility = 'visible';
});

// Add event listener to the forms
studentForm.addEventListener('submit', (e) =>{
e.preventDefault();
alert('Registration Successfull!');
studentDialog.style.opacity = '0';
studentDialog.style.visibility = 'hidden';
});

nonStudentForm.addEventListener('submit', (e) =>{
e.preventDefault();
alert('Application sent!');
nonStudentDialog.style.opacity = '0';
nonStudentDialog.style.visibility = 'hidden';
});
























// FORM VALIDATION //

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   // Send the email using EmailJS
//   emailjs.send("service_t5u3jl1", "template_te0kl9k", {
//       from_name: name,
//       message: message,
//       reply_to: email,
//   }).then(function(response) {
//       // Success message
//       document.getElementById('error').innerHTML = '<p style="color: green;">Your message has been sent successfully!</p>';
//       document.getElementById('contactForm').reset(); // Clear form fields
//   }, function(error) {
//       // Error message
//       document.getElementById('error').innerHTML = '<p style="color: red;">Failed to send message, please try again.</p>';
//   });
// });


// function validateForm() {
//   // Clear previous errors
//   document.getElementById('nameError').textContent = '';
//   document.getElementById('emailError').textContent = '';
//   document.getElementById('messageError').textContent = '';
  
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   let isValid = true;

//   // Validate Name (only letters and hyphen)
//   const namePattern = /^[a-zA-Z\s-]+$/;
//   if (!namePattern.test(name)) {
//       document.getElementById('nameError').textContent = 'Name can only contain letters and hyphens.';
//       isValid = false;
//   }

//   // Validate Email (allow letters, numbers, and some special characters, reject suspicious characters like "<", ">", etc.)
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   const forbiddenChars = /<|>|'|;|"/; // reject <, >, ', ;, " for safety
//   if (!emailPattern.test(email) || forbiddenChars.test(email)) {
//       document.getElementById('emailError').textContent = 'Invalid email or contains suspicious characters.';
//       isValid = false;
//   }

//   // Validate Message (letters, numbers, and punctuation)
//   const messagePattern = /^[a-zA-Z0-9\s.,!?'-]+$/;
//   if (!messagePattern.test(message)) {
//       document.getElementById('messageError').textContent = 'Message contains invalid characters.';
//       isValid = false;
//   }

//   // If the form is valid
//   if (isValid) {
//       alert('Form submitted successfully!');
//       // Optionally, you can actually submit the form here using AJAX or form submission
//   }
// }

//back to top

const backToTopBottom = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBottom.classList.add('show');
  }
  else {
    backToTopBottom.classList.remove('show')
  }
});

backToTopBottom.addEventListener('click', () => {
  window.scrollTo({
    top: 0, behavior: 'smooth', duration: 500

  });
});

//for interval pop-ups
//const popup = document.getElementById('popup');
// const clickHere = document.getElementById('clickHere');

//const sections = [
// document.getElementById('section1'),
// document.getElementById('section2'),
// document.getElementById('section3')

//];

//popup.style.display = 'none';

//setTimeout( () => {
//  sections.forEach(section => {
//     if
//     (isInViewport(section)) {
//         popup.style.display = 'block';
//     }
// });
//}, 5000);

//isInViewport(element) {
// const react = element.getBoundingClientReact();
//  return (
// react.top >= 0 &&
//  react.left >= 0 &&
//  react.buttom <= window.innerHeight &&
//   react.right <= window.innerWidth
// );
// }

//clickHere.addEventListener('click', () => {
//  popup.style.display = 'none';
// });

//...........................................for all programs.......................................................................................................
// document.addEventListener('DOMContentLoaded', function() {
//   // Undergraduate Programs
//   const undergradLink = document.querySelector('a[href="#bsc-msc-phd-navs-undergrad"]');
//   const navsBoxUndergrad = document.getElementById('bsc-msc-phd-navs-undergrad');
//   const closeButtonUndergrad = navsBoxUndergrad.querySelector('.under-program-close');

//   undergradLink.addEventListener('click', function(e) {
//       e.preventDefault();
//       navsBoxUndergrad.style.display = 'flex';
//   });

//   closeButtonUndergrad.addEventListener('click', function() {
//       navsBoxUndergrad.style.display = 'none';
//   });

//   // Undergraduate Requirements
//   const undergradReqLink = document.querySelector('a[href="#bsc-msc-phd-navs1-undergrad"]');
//   const navsBoxUndergradReq = document.getElementById('bsc-msc-phd-navs1-undergrad');
//   const closeButtonUndergradReq = navsBoxUndergradReq.querySelector('.under-program-close');

//   undergradReqLink.addEventListener('click', function(e) {
//       e.preventDefault();
//       navsBoxUndergradReq.style.display = 'flex';
//   });

//   closeButtonUndergradReq.addEventListener('click', function() {
//       navsBoxUndergradReq.style.display = 'none';
//   });

//   // Graduate Programs
//   const gradLink = document.querySelector('a[href="#bsc-msc-phd-navs-grad"]');
//   const navsBoxGrad = document.getElementById('bsc-msc-phd-navs-grad');
//   const closeButtonGrad = navsBoxGrad.querySelector('.under-program-close');

//   gradLink.addEventListener('click', function(e) {
//       e.preventDefault();
//       navsBoxGrad.style.display = 'flex';
//   });

//   closeButtonGrad.addEventListener('click', function() {
//       navsBoxGrad.style.display = 'none';
//   });
// });
