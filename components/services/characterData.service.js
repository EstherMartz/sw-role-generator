(function(){
    'use strict';
    
    angular
        .module('swRoleGenerator')
        .service('characterDataService', characterData)
    
    function characterData($http, CONSTANTS){
        
        var service = {
            getName: getName,
            getSpecies: getSpecies,
            getGender: getGender,
            getRandomClass: getRandomClass,
            getAvailableStats: getAvailableStats,
            getStats: getStats,
            getWeapon: getWeapon,
            getCombatExpertise: getCombatExpertise
        }
        
        function getRandomValue(length){
            return Math.floor(Math.random()*(length));
        }
        
        return service;
        
        function getName(){
            var name = ["Wedge Prince","Galen Mace","General Ben","Kir Anakin","Jaina Gilad","RahmCallista","Watto Plo","Durge Pre","Bib R2-D2","Kir Savage", "Carnor Visas","Joruus Rahm","Admiral Cad","Revan Mace","Prince Princess","Ben Wedge","Kit Bossk","4-LOM Ulic","Darth Quinlan","Dengar Nom", "Quinlan Count","Savage Obi-Wan","Asajj C-3PO","Emperor Jango","Bossk IG","Admiral Yoda","IG Barriss","Natasi Visas","General Plo","Durge Watto"]
            
            return name[getRandomValue(name.length)]
        }
        
        function getSpecies(){
            $http.get(CONSTANTS.API_URL + 'species/?page=' + Math.floor(Math.random()*4+1))
                .success(function(data){
                name = data.results[Math.floor(Math.random()*(data.results.length)+1)].name;
            })
                .error(function(err){
                console.log(err);
            })
            return name;
        }
        
        function getGender(){
            var gender = ['Male','Female'];
            return gender[Math.round(Math.random() * 1)]
        }
        
        function getRandomClass(){
            var classList = ['Fringer', 'Noble', 'Scoundrel', 'Scout', 'Soldier', 'Tech Specialist', 'Force Adept', 'Jedi Consular', 'Jedi Guardian'];
            
            return classList[Math.floor(Math.random()*(classList.length))]
        }
        
        function getAvailableStats(){
            var availableStats = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
            
            return availableStats
        }
        
        function getStats(){
            var stats = [];
            var statsSum = getAvailableStats().length;
            
            while (statsSum > 0){
                var stat = Math.round(Math.random() * (statsSum - 1)) + 1;
                stats.push(stat);
                statsSum -= stat;
            }
            
            for(var i = 0; i < 6; i++){
                if(stats[i] == null)
                    stats[i] = 0;
            }
            return stats; 
        }
        
        function getWeapon(){
            var weapons = ['Blaster pistol', 'Blaster rifle', 'Heavy Weapons', 'Primitive Weapons', 'Slughthrowers', 'Vehicle Weapons', 'Vibro Weapons']
            
            return weapons[getRandomValue(weapons.length)]
        }
        
        function getCombatExpertise(){
            var combatExpertise = ['Improved disarm', 'Improved Trip', 'Whirlwind Attack', 'Dodge', 'Mobility', 'Spring Attack', 'Martial Arts']
            
            return combatExpertise[getRandomValue(combatExpertise.length)]
        }
    }
    
    characterData.$inject = ['$http', 'CONSTANTS'];
})();