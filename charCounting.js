function countLetters(str) {
  var result = {}
  var arr = str.replace(/ /g,'').split("")
  arr.map(function(item){
    if(Object.keys(result).indexOf(item) == -1) {
      result[item] = 1
    }
    else {
      result[item] += 1
    }
  })
  return result
}

console.log(countLetters("lighthouse in the house"));
