var app = angular.module('flapperNews', []);
app.controller('MainCtrl', [
'$scope',
function($scope) {
    $scope.test = 'Hello world!';
    $scope.posts = [
        {title: 'post 1', upvotes: 5, link: 'http://www.vg.no'},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ];

    $scope.addPost = function() {
        if(!$scope.title || $scope === '') { return; }
        $scope.posts.push({title: $scope.title, upvotes: 0});
        $scope.title = '';
    };

    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    }

    $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
            title: $scope.title, 
            link: $scope.link,
            upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
    }
}]);

