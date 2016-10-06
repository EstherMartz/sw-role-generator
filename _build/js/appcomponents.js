!function(){function e(e,o,t,r){o.html5Mode(!1),e.when("/",{templateUrl:"views/home.html"}).when("/getCharacter",{templateUrl:"views/getCharacter.html",controller:"characterController",controllerAs:"character"}).otherwise({redirectTo:"/"}),t.interceptors.push("authInterceptor")}function o(e,o,t,r){return{request:function(e){return e.headers=e.headers||{},e},responseError:function(e){return 404===e.status?(r.path("/"),o.reject(e)):o.reject(e)}}}function t(e,o){}angular.module("swRoleGenerator",["ngRoute"]).config(e),e.$inject=["$routeProvider","$locationProvider","$httpProvider","$compileProvider"],angular.module("swRoleGenerator").factory("authInterceptor",o),o.$inject=["$rootScope","$q","LocalStorage","$location"],angular.module("swRoleGenerator").run(t),t.$inject=["$rootScope","$location"]}(),function(){angular.module("swRoleGenerator").constant("CONSTANTS",{API_URL:"http://swapi.co/api/"})}(),function(){"use strict";function e(e,o){function t(o,t){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),null===window.localStorage.getItem(o)?e.localStorage&&e.localStorage.setItem(o,angular.toJson(t)):void console.warn("localStorage with the name "+o+" already exists. Please pick another name.")}function r(o){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&angular.fromJson(e.localStorage.getItem(o))}function a(o,t){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.setItem(o,angular.toJson(t))}function n(o){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.removeItem(o)}function l(){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.clear()}function c(){return e.localStorage}var i="undefined"==typeof window.localStorage?void 0:window.localStorage,s=!(void 0===typeof i||void 0===typeof window.JSON);return angular.element(e).on("storage",function(e,t){e.key===t&&o.$apply()}),{set:t,get:r,update:a,remove:n,removeAll:l,list:c}}angular.module("swRoleGenerator").factory("LocalStorage",["$window","$rootScope",e])}(),function(){"use strict";function e(e,o){function t(e){return Math.floor(Math.random()*e)}function r(){var e=["Wedge Prince","Galen Mace","General Ben","Kir Anakin","Jaina Gilad","RahmCallista","Watto Plo","Durge Pre","Bib R2-D2","Kir Savage","Carnor Visas","Joruus Rahm","Admiral Cad","Revan Mace","Prince Princess","Ben Wedge","Kit Bossk","4-LOM Ulic","Darth Quinlan","Dengar Nom","Quinlan Count","Savage Obi-Wan","Asajj C-3PO","Emperor Jango","Bossk IG","Admiral Yoda","IG Barriss","Natasi Visas","General Plo","Durge Watto"];return e[t(e.length)]}function a(){return e.get(o.API_URL+"species/?page="+Math.floor(4*Math.random()+1)).success(function(e){name=e.results[Math.floor(Math.random()*e.results.length+1)].name}).error(function(e){console.log(e)}),name}function n(){var e=["Male","Female"];return e[Math.round(1*Math.random())]}function l(){var e=["Fringer","Noble","Scoundrel","Scout","Soldier","Tech Specialist","Force Adept","Jedi Consular","Jedi Guardian"];return e[Math.floor(Math.random()*e.length)]}function c(){var e=["STR","DEX","CON","INT","WIS","CHA"];return e}function i(){for(var e=[],o=c().length;o>0;){var t=Math.round(Math.random()*(o-1))+1;e.push(t),o-=t}for(var r=0;r<6;r++)null==e[r]&&(e[r]=0);return e}function s(){var e=["Blaster pistol","Blaster rifle","Heavy Weapons","Primitive Weapons","Slughthrowers","Vehicle Weapons","Vibro Weapons"];return e[t(e.length)]}function u(){var e=["Improved disarm","Improved Trip","Whirlwind Attack","Dodge","Mobility","Spring Attack","Martial Arts"];return e[t(e.length)]}var g={getName:r,getSpecies:a,getGender:n,getRandomClass:l,getAvailableStats:c,getStats:i,getWeapon:s,getCombatExpertise:u};return g}angular.module("swRoleGenerator").service("characterDataService",e),e.$inject=["$http","CONSTANTS"]}(),function(){"use strict";function e(e,o,t){function r(){a.info={name:o.getName(),specie:o.getSpecies(),gender:o.getGender(),"class":o.getRandomClass(),availableStats:o.getAvailableStats(),stats:o.getStats(),weapon:o.getWeapon(),combatExpertise:o.getCombatExpertise()},a.reload=function(){t.reload()}}var a=this;r()}angular.module("swRoleGenerator").controller("characterController",e),e.$inject=["$http","characterDataService","$route"]}();