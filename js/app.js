(function(){

var app = angular.module('universityApp',[ ]);



app.controller('listCtrl', ['$scope', function($scope){
 

$scope.persons=[
      {
        "id": 0,
        "gender": "Male",
        "name": "Albert Thomas",
        "image": "albert.jpg",
        "phone": "(826) 453-3497",
        "mobile": "(801) 9175-8136"
      },
      {
        "id": 1,
        "gender": "Female",
        "name": "Anna Williams",
        "image": "anna.jpg",
        "phone": "(824) 438-2499",
        "mobile": "(801) 8595-8337"
      },
      {
        "id": 2,
        "gender": "Female",
        "name": "Eva Lewis",
        "image": "eva.jpg",
        "phone": "(817) 512-2258",
        "mobile": "(801) 9375-3830"
      },
      {
        "id": 3,
        "gender": "Female",
        "name": "Jane Patricks",
        "image": "jane.jpg",
        "phone": "(842) 413-3023",
        "mobile": "(801) 9555-1729"
      },
      {
        "id": 4,
        "gender": "Female",
        "name": "Laura Smith",
        "image": "laura.jpg",
        "phone": "(966) 520-2696",
        "mobile": "(801) 9324-4423"
      },
      {
        "id": 5,
        "gender": "Male",
        "name": "Martin Pox",
        "image": "martin.jpg",
        "phone": "(996) 595-3896",
        "mobile": "(801) 8195-2732"
      },
      {
        "id": 6,
        "gender": "Male",
        "name": "Peter Piazza",
        "image": "peter.jpg",
        "phone": "(967) 527-3286",
        "mobile": "(801) 8074-5225"
      },
      {
        "id": 7,
        "gender": "Male",
        "name": "Tom James",
        "image": "tom.jpg",
        "phone": "(994) 465-3542",
        "mobile": "(801) 9044-7522"
      },
      {
        "id": 8,
        "gender": "Male",
        "name": "Conan O'Brien",
        "image": "conan.jpg",
        "phone": "(848) 499-2977",
        "mobile": "(801) 8495-0625"
      },
      {
        "id": 9,
        "gender": "Female",
        "name": "Louis Daniels",
        "image": "louis.jpg",
        "phone": "(982) 580-3235",
        "mobile": "(801) 8184-2624"
      }
    ];



}]);





})();
