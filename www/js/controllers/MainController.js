app.controller('MainController',
['$scope', function ($scope) {
    $scope.title = 'Tarefas';
    $scope.tarefas = [
        { text: "Aprender Angular", done: true},
        { text:"Aprender Android", done: false},
        { text: "Aprender C#", done: false },
        { text: "Aprender HTML5", done: false }
    ]
    $scope.TarefasRestantes = function () {
        var count = 0;
        angular.forEach($scope.tarefas, function (tarefa) {
            count += tarefa.done ? 0 : 1;
        });
        if (count > 0) {
            var texto = "Faltam "+ count +" tarefas para completar a lista.";
        } else {
            var texto = "Tarefas completas!";
        }
        return texto;
    }

    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
    $scope.products =
	[
		{
		    name: 'The Book of Trees',
		    price: 19,
		    pubdate: new Date('2014', '03', '08'),
		    cover: 'img/the-book-of-trees.jpg',
		    likes: 0,
		    dislikes: 0
		},
		{
		    name: 'Program or be Programmed',
		    price: 8,
		    pubdate: new Date('2013', '08', '01'),
		    cover: 'img/program-or-be-programmed.jpg',
		    likes: 0,
		    dislikes: 0
		},
		{
		    name: 'Aprendendo AngularJS',
		    price: 10,
		    pubdate: new Date('2015', '04', '07'),
		    cover: 'img/program-or-be-programmed.jpg',
		    likes: 0,
		    dislikes: 0
		},
		{
		    name: 'Livro sem foto',
		    price: 15,
		    pubdate: new Date('2011', '06', '10'),
		    cover: 'img/program-or-be-programmed.jpg',
		    likes: 0,
		    dislikes: 0
		}
	]
}]);