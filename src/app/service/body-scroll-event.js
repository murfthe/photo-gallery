const $ = require("node_modules/jquery/dist/jquery.min.js");
const { debounce } = require("lodash");

function removeBgColorIfScrollDown() {
  $(document).scroll(debounce(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop == 0) {
      $(".gallery-menu .func-bar").removeClass("bg-dark");
    } else {
      $(".gallery-menu .func-bar").addClass("bg-dark");
    }
  }, 50));
};

export const bodyScrollEvent = {
  removeBgColorIfScrollDown
}

