function countLetters(str) {
  var result = {}
  var arr = str.split("")
  arr.map(function(item,index){
    if(item !== " ") {
      if(Object.keys(result).indexOf(item) == -1) {
        result[item] = [index]
      }
      else {
        result[item].push(index)
      }
    }
  })
  return result
}

console.log(countLetters("lighthouse in the house"));
