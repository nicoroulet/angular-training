angular.module('app-bootstrap').controller('MarvelController', [
  '$http',
  function($http) {
    this.title = 'Characters!';
    const marvel = this;
    $http({
      url: 'http://gateway.marvel.com:80/v1/public/characters',
      method: 'GET',
      params: { apikey: '198e772c1c5cdce65a4c03afd8d87fd0' }
    }).success(function(res) {
      marvel.characters = res.data.results;
    });
  }
]);
