function countElements(arr) {
     let set = new Set()
     let count = 0
     
      for(let  i = 0; i< arr.length; i++){
         set.add(arr[i])
        }
      for(let i = 0; i < arr.length; i++){
      if (set.has(arr[i] +1)){
          count++
      }
  }
 return count


}