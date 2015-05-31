function mutation(arr) {
  //lower case base array
  var tmp = arr.join("").toLowerCase();
  var aww = tmp.split("");

  var base = aww.slice(0,arr[0].length).sort();
  var challenger = aww.splice(base.length,arr[0].length).sort();
  console.log("la base est", base);
  console.log("le challenger est", challenger);
  var basebase = arr[0];
  
  var found = [];
  for (var i = 0 ; i < challenger.length ; i++){
    console.log(challenger[i]);
    if (base.indexOf(challenger[i]) === -1){}
    else {
        base.splice(base.indexOf(challenger[i]),1);
    }
  }
  console.log("Longueur tableau base pre mod",basebase.length);
  console.log("Longueur tableau challenger",challenger.length);
  console.log("Longueur tableau base post mod",base.length);

  console.log("Le tableau des trucs pas trouves", base);
  if (base.length + challenger.length === basebase.length){return true;}
  else {return false;}
}
mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);