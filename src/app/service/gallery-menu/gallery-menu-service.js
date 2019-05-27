const $ = require("node_modules/jquery/dist/jquery.min.js");
const { debounce } = require("lodash");
import { GlobalVariable } from "../common/global/global.variable";

function toggleMenuIfScroll() {
  $(document).scroll(debounce(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop == 0) {
      $(".gallery-menu .btn-group").removeClass("hidden");
      if (!GlobalVariable.isHomePage) {
        $(".gallery-menu #returnBtn").removeClass("hidden");
      }
    } else {
      $(".gallery-menu .btn-group").addClass("hidden");
      if (!GlobalVariable.isHomePage) {
        $(".gallery-menu #returnBtn").addClass("hidden");
      }
    }
  }, 50));
};

function toggleReturnButton() {
  if (GlobalVariable.isHomePage) {
    $(".gallery-menu #returnBtn").addClass("hidden");
  } else {
    $(".gallery-menu #returnBtn").removeClass("hidden");
  }
}

export const GalleryMenuService = {
  toggleMenuIfScroll,
  toggleReturnButton
}

