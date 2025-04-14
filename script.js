document.querySelectorAll(".faq-question").forEach((question) => {
   question.addEventListener("click", () => {
     const parent = question.parentElement;
     const isActive = parent.classList.contains("active");
     
     document.querySelectorAll(".faq-item").forEach((item) => {
       item.classList.remove("active");
       item.querySelector("span").textContent = "+";
     });

     if (!isActive) {
       parent.classList.add("active");
       question.querySelector("span").textContent = "-";
     }
   });
 });



 const searchInput = document.getElementById('searchInput');
  const searchForm = document.getElementById('localSearchForm');
  const cards = document.querySelectorAll('.card');

  function filterCards(query) {
    query = query.toLowerCase().trim();
    let found = false;

    cards.forEach(card => {
      const title = card.querySelector('h2')?.textContent.toLowerCase() || '';
      const price = card.querySelector('.price')?.textContent.toLowerCase() || '';
      const color = card.dataset.color?.toLowerCase() || '';

      const isMatch =
        title.includes(query) ||
        price.includes(query) ||
        color.includes(query);

      card.style.display = isMatch ? 'block' : 'none';
      if (isMatch) found = true;
    });

    // Если нужно — можешь тут добавить сообщение "ничего не найдено"
  }

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    filterCards(searchInput.value);
  });

  searchInput.addEventListener('input', function () {
    filterCards(searchInput.value);
  });