angular.module("myModule",[]).controller('myContact',function($scope,$http){

    $http.get('/contactlist').success(function(response){
        $scope.contactlist=response
    })
//     $scope.contactlist=[
// {
//     name:"Gulam Mustafa",
//     email:"gmustafa.mansoori@gmail.com",
//     contact:"9987780051"
// },
// {
//     name:"Gulam Ali",
//     email:"gmustafa.mansoori@gmail.com",
//     contact:"9890806960"
// },
// {
//     name:"Khalid",
//     email:"mohdkhalid@gmail.com",
//     contact:"9594850138"
// }
//     ]
})