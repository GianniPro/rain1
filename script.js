//Sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // Nav Shadow
  document.addEventListener('DOMContentLoaded', function() {
  const navigation = document.getElementById('myNavigation');

  window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
      navigation.classList.add('nav-box-shadow');
  } else {
      navigation.classList.remove('nav-box-shadow');
  }
});
})

//Search
const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i ");

searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInputWrapper.classList.add("change");

  setTimeout(() => {
    searchInput.focus();
  }, 1000);
});

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchInputWrapper.classList.remove("change");
});