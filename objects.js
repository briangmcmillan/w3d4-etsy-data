//How Objects are made and work!

//Object method
var pizza = new Object()
pizza.meat = 'Sausage'
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'
//Literal method
var pizza = {
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies: 'Olives',
}

pizza.meat = 'Pepperoni'
//console.log(pizza.meat)

var topping = 'cheese'
//console.log(pizza[topping])

//Loop through all of the properties
var props = Object.keys(pizza)//keys are meat, cheese, & veggies. Key === Property

props.forEach(function(prop){
    //console.log(pizza[prop])
})
//console.log(props)

//Arrays of objects
var movies = [
    {
        title: 'Star Wars',
        genre: 'Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas'
            },
            {
                name: 'JarJar'
            }
        ]
    },
    {
        title: 'Forest Gump',
        genre: 'Drama',
        year: 1995,
        directors: [
            {
                name: 'Robert Zemechas'
            }
        ]
    },
]
movies.forEach(function(movie) {
    var directors = movie.directors.map(function(director){
        return director.name
    })
    directors = directors.join(', ')
    console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ') - Directed by ' + directors) //movie.directors[0].name)
})






//
