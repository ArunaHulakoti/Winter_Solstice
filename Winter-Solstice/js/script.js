// Select all "view-arrow" buttons
const viewArrows = document.querySelectorAll('.view-arrow');

// Add click event listeners to each button
viewArrows.forEach((arrow) => {
  arrow.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event bubbling

    const currentCard = arrow.closest('.card_1'); // The card where the button is clicked
    const images = arrow.getAttribute('data-images').split(',');

    if (arrow.textContent === '→') {
      // Change button text to "←"
      arrow.textContent = '←';

      // Find all cards
      const allCards = Array.from(document.querySelectorAll('.card_1'));
      const neighbors = allCards.filter((card) => card !== currentCard);

      // Apply changes to neighboring cards
      neighbors.forEach((card, index) => {
        // Hide original content and display image
        card.classList.add('hidden-content');

        // Remove existing images if any
        const existingImages = card.querySelectorAll('img.related');
        existingImages.forEach((img) => img.remove());

        // Add the specific image for this section
        const img = document.createElement('img');
        img.src = images[index] || images[0]; // Fallback if fewer images
        img.alt = `Related Image ${index + 1}`;
        img.classList.add('related');
        card.appendChild(img);
      });
    } else {
      // Change button text back to "→"
      arrow.textContent = '→';

      // Restore original content for all sections
      const allCards = Array.from(document.querySelectorAll('.card_1'));
      allCards.forEach((card) => {
        card.classList.remove('hidden-content');
        const images = card.querySelectorAll('img.related');
        images.forEach((img) => img.remove());
      });
    }
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 100) {
          $("#arrow i").fadeIn();
  }
      else {
          $("#arrow i").fadeOut();
  }
  
  });
  $("#arrow i").on('click',function(){
  $("html,body").animate({
      scrollTop: 0
  }, 600);
      return false;
  });
  
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('nav').addClass('nav-fixed');
    } else {
        $('nav').removeClass('nav-fixed');
    }
});