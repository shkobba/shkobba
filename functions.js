function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
 
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }


function tableReduce(card,table){
    return filter(table,function(element){
        return card.num >= element.num
    })

}
function eachCardReduce(kaf,table){ 
    var result = []
    for(var i = 0; i < kaf.length; i++){           // ta3mel reduce lel array trajja3 array of arrays
        result.push(tableReduce(kaf[i],table))
    }
    return result
}
function foundComboOfOneCard3(card,arr){               // second parameter would take the output of eachCardReduce
    var combo = []
    var result = []
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i+1; j < arr.length; j++){
            for(var l = j+1; l < arr.length; l++){
                if(card.num === arr[i] + arr[j] +arr[l]){
                    combo.push(arr[i])
                    combo.push(arr[j])                                   /* mahyech mrigla barcha */
                    combo.push(arr[l])
                    result.push(combo)
                    combo = []
                }
                else if(card.num === arr[i] + arr[j]){
                    combo.push(arr[i])
                    combo.push(arr[j])
                    result.push(combo)
                    combo = []
                }
                else if(card.num === arr[i]){
                    combo.push(arr[i])
                    combo.push(arr[j])
                    result.push(combo)
                    combo = []

                }

            }
        }
    }
    return result 
}
