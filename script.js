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

//=================== THEME MODAL =====================//

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// Opens modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}

// Closing modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = "none";
  }
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


// ----------------- FONTS ---------------- //

const fontSizes = document.querySelectorAll('.choose-size span');

// Remove Active class from span or font selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}

fontSizes.forEach(size => {
  
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
      fontSize = '10px';
    } else if(size.classList.contains('font-size-2')){
      fontSize = '13px';
    } else if(size.classList.contains('font-size-3')){
      fontSize = '16px';
    } else if(size.classList.contains('font-size-4')){
      fontSize = '19px';
    } else if(size.classList.contains('font-size-5')){
      fontSize = '22px';
    }

    document.querySelector('html').style.fontSize = fontSize;
  
  })
  })

// Change the font size of root head elements
var root = document.querySelector(':root');

// =============   CHANGE PRIMARY COLOURS    ==============//

const colorPalette = document.querySelectorAll('.choose-color span');

const changeActiveColorClass = () => {
  colorPalette.forEach(color => {
    color.classList.remove('active');
  })
}

colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    changeActiveColorClass();
      let primary;
      color.classList.toggle('active');

      if(color.classList.contains('color-1')){
          primaryHue = 252;
      } else if(color.classList.contains('color-2')){
        primaryHue = 52;
    } else if(color.classList.contains('color-3')){
      primaryHue = 352;
    } else if(color.classList.contains('color-4')){
      primaryHue = 152;
    } else if(color.classList.contains('color-5')){
      primaryHue = 202;
    }

    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

// ---------------- Background Color ---------------//

// const Bg1 = document.querySelector('bg-1');
// const Bg2 = document.querySelector('bg-2');
// const Bg3 = document.querySelector('bg-3');

// // Changes background color

// const changeBG = () => {
//   root.style.setProperty('--light-color-lightness', lightColorLightness);
//   root.style.setProperty('--light-color-lightness', whiteColorLightness);
//   root.style.setProperty('--light-color-lightness', darkColorLightness);
// }

// // Theme background Values

// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;

// Bg1.addEventListener('click', () => {
//   // Add ctive class
//   Bg1.classList.add('active');
//   // remove active class from others
//   Bg2.classList.remove('active');
//   Bg3.classList.remove('active');
//   changeBG();
//   // remove customizied changes from local storage
//   window.location.reload();
// });

// Bg2.addEventListener('click', () => {
//   darkColorLightness = '95%';
//   whiteColorLightness = '20%';
//   lightColorLightness = '15%';

//   // Add ctive class
//   Bg2.classList.add('active');
//   // remove active class from others
//   Bg1.classList.remove('active');
//   Bg3.classList.remove('active');
//   changeBG();
// });

// Bg3.addEventListener('click', () => {
//   darkColorLightness = '95%';
//   whiteColorLightness = '10%';
//   lightColorLightness = '15%';

//   // Add ctive class
//   Bg3.classList.add('active');
//   // remove active class from others
//   Bg1.classList.remove('active');
//   Bg2.classList.remove('active');
//   changeBG();
// });

var icon = document.getElementById("icon");
    
    
    if(localStorage.getItem("theme") == null){
        localStorage.setItem("theme", "light");
    }
    
    
    let localData = localStorage.getItem("theme");
    
    if(localData == "light"){
        icon.src = "Images/moon.png";
        document.body.classList.remove("dark-theme");
    }else if(localData == "dark"){
        icon.src = "Images/sun.png";
        document.body.classList.add("dark-theme");
    }
  
        
        icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "Images/sun.png";
            localStorage.setItem("theme", "dark");
        }else{
            icon.src = "Images/moon.png";
            localStorage.setItem("theme", "light");
        }
    }
        
