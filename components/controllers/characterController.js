(function(){
    'use strict';
    
    angular.module('swRoleGenerator')
        .controller('characterController', character);
    
    function character($http, characterDataService, $route){
        
        var vm = this;
        
        activate();
        
        function activate(){
            vm.info = {
                name: characterDataService.getName(),
                specie: characterDataService.getSpecies(),
                gender: characterDataService.getGender(),
                class: characterDataService.getRandomClass(),
                availableStats: characterDataService.getAvailableStats(),
                stats: characterDataService.getStats(),
                weapon: characterDataService.getWeapon(),
                combatExpertise: characterDataService.getCombatExpertise()
            }
            
            vm.reload = function(){
                $route.reload();
            }
        } 
    }
    character.$inject = ['$http', 'characterDataService', '$route'];
    
})();