const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function showSearchHeader() {
  var searchIcon = $(".nav-search img");
  if (searchIcon) {
    searchIcon.onclick = function () {
      var showSearch = $(".show-nav-search");
      if (showSearch.classList.contains("open")) {
        showSearch.classList.remove("open");
      } else {
        showSearch.classList.add("open");
      }
    };
  }
}

function showMenuMobile() {
  var menuIcon = $(".nav-bar-mb__items");
  var closeMenu = $(".close-menu-mb__icon");
  var showMenuMobile = $(".menu-sub-mb");
  if (menuIcon) {
    menuIcon.onclick = function () {
      showMenuMobile.classList.add("open");
    };
    closeMenu.onclick = function () {
      showMenuMobile.classList.remove("open");
    };
  }
}

function inputRange() {
  var range = $$('input[type="range"]');

  range.forEach(function (input) {
    var valueRange = input.value + "%";
    var maxRange = input.max + "%";
    input.style.backgroundSize = `${valueRange} ${maxRange}`;
    input.oninput = function (e) {
      var min = e.target.min;
      var max = e.target.max;
      var val = e.target.value;
      e.target.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";
    };
  });
}

function player() {
  var play = $(".radio-play");
  play.onclick = function () {
    var radioPlayer = $(".radio-player");
    if (radioPlayer.getAttribute("name") == "play") {
      radioPlayer.setAttribute("name", "pause");
    } else {
      radioPlayer.setAttribute("name", "play");
    }
  };
}

function mutedVol() {
  var openVol = $(".radio-volum__icon");
  openVol.onclick = function () {
    if (openVol.getAttribute("name") == "volume-high") {
      openVol.setAttribute("name", "volume-mute");
    } else {
      openVol.setAttribute("name", "volume-high");
    }
  };
}

function start() {
  showSearchHeader();
  showMenuMobile();
  inputRange();
  player();
  mutedVol();
}
start();
