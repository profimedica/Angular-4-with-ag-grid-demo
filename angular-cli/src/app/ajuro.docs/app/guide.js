'use strict';
// https://toddmotto.com/documenting-angular-dgeni

angular
  .module('docs')
  .controller('GuideController', GuideController);

function GuideController(GUIDE_DATA) {

  var ctrl = this;
  ctrl.allPages = GUIDE_DATA;

}

GuideController.$inject = ["GUIDE_DATA"];
