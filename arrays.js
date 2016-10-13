//3 ways to build and Array START *****************
//Standard way that developers make lists
var invites = ['Matt', 'Susan', 'Jessica', 'John']

var tasks = new Array(3)//Number in list will equal 3
tasks[0] = 'Buy food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

var inbox = new Array('Water Bill', 'Pay Check', 'Greeting Card')//Counting => Water Bill is 0, Pay check is 1, Greeting Card is 2
//3 ways to build and Array END *****************
//Adding list items START *****************
inbox[3] = 'You have a rich uncle that wants to give you money.'

//Pop and push => end of the array
tasks.push('Do homework') //Push just pushes something onto the list at the end.
tasks.pop()//Pop removes the last thing on the list
// tasks[0] = 'Watch Hulu'//Replaces the original [#] with this new item.

//Shift and unshift => start of the array
tasks.unshift('Watch Netflix') //Unshift pushes something onto the list at the beginning
// tasks.shift()//Gets rid of the first thing on the list.

var thingIGotRidOf = tasks.shift()//Shows you what was removed. Put thingIGotRidOf in console.log
//console.log(tasks)

//SLICE = Piece out of the middle.**FOR HOMEWORK**
//var paycheck was need because slice will return a value.
var payCheck = inbox.slice(1,3)//Start at 1 and go to 2
// console.log(payCheck)

//SPLICE = Put something into the middle without deleting another list item.**FOR HOMEWORK**
//Splice will actually modify the array. Makes the inbox change permanent.
inbox.splice(1, 0, 'You are hired', 'Job offer')//#'s mean between paycheck, how many things you want to remove, specify list of things you want to put in.
// console.log(inbox)

//Get rid of something without splice
//delete inbox[0]//Deletes the value but keeps the space. Puts undefined. Means nothing is in that 0 index. Leaves a gap.
//delete inbox// Look into this
//console.log(inbox)

//Counting
inbox[inbox.length] = 'Invite to Spotify'//inbox.length equals 6. Does the same thing as push.
//console.log(inbox.length)//Length will always be 1 more than the actual index numbers
//console.log(inbox)

//FINDING THINGS IN AN ARRAY
var hasJobOffer = inbox.includes('Job offer') //This is case sensitive. Returns a boolean ***HOMEWORK****
// console.log(hasJobOffer)

var jobOfferIndex = inbox.indexOf('Job offer') //Returns an Index number.
var jobOfferIndex = inbox.indexOf('Job salary') //indexOf returns a -1 if it can't find the string
// console.log(jobOfferIndex)

inbox.push('Job salary')
// if(inbox.indexOf('Job salary') === -1){
//     console.log('No salary yet.')
// }
// else {
//     console.log('It is finally here!')
// }
// console.log(inbox)
//Find everything in our list that has the word "job" in it. Returns a single match that it can find in the list. Then stops
var matches = inbox.find(function(item){//passing in an anonymous function. Usually the goal is to return a true/false
    return item.includes('Job')
})

function checkForJob(item){
    return item.includes('Job')
}

//Functional Iterators
// var matches = inbox.filter(function(item){//filter gives you and array of all of the matches it can find in a "list/array". Usually filter is the preferred choice.
//     return item.includes('Job')
// })
var matches = inbox.filter(checkForJob)
// console.log(matches)


//Imperitive Code Start
var matches = []
for(var i = 0; i < inbox.length; i++) {
    //console.log(i + '. ' + inbox[i])
    var hasJob = checkForJob(inbox[i])
    if (hasJob) {
        matches.push(inbox[i])
    }
}
//console.log(matches)

//or the reverse way
// for(var i = inbox.length - 1; i >= 0; i--) {
//     console.log(i + '. ' + inbox[i])
// }
//Imperitive Code End



//Reversing
inbox = inbox.reverse()
//console.log(inbox)

//MAP****
var fruit = ['Apple', 'Banana', 'Cherry', 'Watermelon']

// .forEach is just looping through
fruit.forEach(function(item) {
    //console.log(item.toUpperCase())
})

// .map is permanent changes. Transforms an array of items, one item at a time. Have to assing out to variable
fruit = fruit.map(function(item, i){
    if (i === 2) {
        return `<section>${item.toUpperCase()}</section>`
    }
    else {
        return `<div>${item}</div>`
    }
    return `<div>${item}</div>`
})
//console.log(fruit)

//Reducing to a total value AVERAGE PRICE FOR HOMEWORK
var prices = [
    {price: 7.98},
    {price: 14.99},
    {price: 2.30},
    {price: 12.80}
]

var total = prices.reduce(function(previous, current){
    return {price: previous.price + current.price}
}, {price: 0})

// console.log(total)

var avgPrice = total.price / prices.length

console.log(avgPrice)
