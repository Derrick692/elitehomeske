const filterButtons = document.querySelectorAll('.filter button');

filterButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const dropdown = button.nextElementSibling;

    document.querySelectorAll('.filter-dropdown').forEach((item) => {
      item.classList.remove('active');
    });

    dropdown.classList.add('active');

  });

});