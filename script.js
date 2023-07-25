const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchIcon = document.querySelector(".search-icon i");
const searchInput = document.querySelector(".search-input input");
const closeIcon = document.querySelector(".search-input i");

if (searchIcon && searchInputWrapper && searchInput) {
  searchIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.add("change");
    searchInputWrapper.classList.add("change");

    setTimeout(() => {
      searchInput.focus();
    }, 1000);
  });
}

if (closeIcon && searchIcon && searchInputWrapper) {
  closeIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.remove("change");
    searchInputWrapper.classList.remove("change");
  });
}
