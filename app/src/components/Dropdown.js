const Dropdown = () => {
  const list = document.querySelectorAll('.menu-dropdown');

  const enableDropdown = function() {
    this.classList.toggle('is-active');
  };

  list.forEach( (element) => {
    element.addEventListener('click', enableDropdown, false);
  } );
};

export default Dropdown;
