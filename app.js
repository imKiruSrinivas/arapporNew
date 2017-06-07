var routerApp = angular.module('arapporApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home/home.html'
        })
        .state('home.calender', {
            url: 'calender',
            templateUrl: 'pages/home/home-calender.html',
            controller: function($scope) {
                $scope.dogs = ['Mission 1', 'Mission 2', 'Mission 3'];
            }
        })
        .state('home.chapter', {
            url: 'chapter',
            templateUrl: 'pages/home/home-chapter.html',
            controller: function($scope) {
                $scope.dogs = ['Account 1', 'Account 2', 'Account 3'];
            }
        })
        .state('home.volunteer', {
            url: 'volunteer',
            templateUrl: 'pages/home/home-volunteer.html',
            controller: function($scope) {
                $scope.dogs = ['Team 1', 'Team 2', 'Team 3'];
            }
        })
    .state('home.donate', {
            url: 'donate',
            templateUrl: 'pages/home/home-donate.html',
            controller: function($scope) {
                $scope.dogs = ['Team 1', 'Team 2', 'Team 3'];
            }
        })
    
        .state('about', {
            url: '/about',
            templateUrl: 'pages/about/about.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
    
        .state('about.accounts', {
            url: 'accounts',
            templateUrl: 'pages/about/about-accounts.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
     .state('about.mission', {
            url: 'mission',
            templateUrl: 'pages/about/about-mission.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
        
        // nested list with custom controller
        .state('about.team', {
            url: 'team',
            templateUrl: 'pages/about/about-team.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
            
    //
    
     .state('activities', {
            url: '/activities',
            templateUrl: 'pages/activities/activities.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
    .state('activities.act_adr', {
            url: 'act_adr',
            templateUrl: 'pages/activities/act_adr.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
    
     .state('activities.act_benamiqueen', {
            url: 'act_benamiqueen',
            templateUrl: 'pages/activities/act_benamiqueen.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
     .state('activities.act_floodrelief', {
            url: 'act_floodrelief',
            templateUrl: 'pages/activities/act_floodrelief.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
    
     .state('activities.act_illegalbanner', {
            url: 'act_illegalbanner',
            templateUrl: 'pages/activities/act_illegalbanner.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
    
     .state('activities.act_knowyourrights', {
            url: 'act_knowyourrights',
            templateUrl: 'pages/activities/act_knowyourrights.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
     .state('activities.act_lokayukta', {
            url: 'act_lokayukta',
            templateUrl: 'pages/activities/act_lokayukta.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
    .state('activities.act_reclaimwaterbodies', {
            url: 'act_reclaimwaterbodies',
            templateUrl: 'pages/activities/act_reclaimwaterbodies.html',
            controller: function($scope) {
                $scope.dogs = ['Know Your Rights', 'Benami Queen', 'Reclaim Waterbodies'];
            }
        })
    
    //
    .state('press', {
            url: '/press',
            templateUrl: 'pages/press/press-release.html'
        })
    
    //
    .state('newsletter', {
            url: '/newsletter',
            templateUrl: 'pages/newsletter/newsletter.html'
        })
    
     //
    .state('gallery', {
            url: '/gallery',
            templateUrl: 'pages/gallery/gallery.html'
        })
        
     .state('joinus', {
            url: '/joinus',
            templateUrl: 'pages/joinus/joinus.html'
        });
      
        /*// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('joinus', {
            url: '/joinus',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });*/
        
});

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});