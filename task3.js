let happiness = {
    smile: 2,
    fun: 5,
    clever: 3,
    sense: 1,
    health: 4,
}

keysSorted = Object.keys(happiness);
keysSorted.sort(function(a,b){
    return happiness[b]-happiness[a];
})
console.log(keysSorted);