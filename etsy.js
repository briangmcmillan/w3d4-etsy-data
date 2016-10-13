// Question #1
var total = items.reduce(function(previous, current){
    return {price: previous.price + current.price}
}, {price: 0})

var avgPrice = total.price / items.length

console.log('The average price is' + ', ' + '$' + avgPrice.toFixed(2))

// Question #2
var question2 = items.filter(function(item) {
    return item.price >=14 && item.price <=18
})
console.log('Items that cost between $14.00 USD and $18.00 USD: ' + 'title: ' + question2[0].title + ',', 'title: ' + question2[1].title + ',', 'title: ' + question2[2].title + ',', 'title: ' + question2[3].title + ',', 'title: ' + question2[4].title + ',')

//Question #3
var question3 = items.filter(function(item){
  return item.currency_code === 'GBP'
})
console.log(question3[0].title + ' £' + question3[0].price)

//Question #4
var question4 = items.filter(function(item){
  return item.materials.includes("wood")
})
console.log(question4[0].title + question4[1].title + question4[2].title + question4[3].title + question4[4].title)

//Question #5
var question5 = items.filter(function(item){
  return item.materials.length >7
})
console.log(question5[0].title + question5[1].title)

//Question #6
var question6 = items.filter(function(item){
  return item.who_made.includes('i_did')
})
console.log(question6.length + ' ' + 'were made by their sellers')
