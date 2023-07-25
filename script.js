const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i");

if (searchIcon && searchInputWrapper) {
  searchIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.add("change");
    searchInputWrapper.classList.add("change");
  });
}

if (closeIcon && searchIcon && searchInputWrapper) {
  closeIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.remove("change");
    searchInputWrapper.classList.remove("change");
  });
}
