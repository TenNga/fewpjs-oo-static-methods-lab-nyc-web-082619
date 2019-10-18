class Formatter {
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  static sanitize(word){
    //- ' space 
    return word.replace(/[^a-z\ '-]/gim,"");
  }
  
  // static titleize(word){
  //   const wordArr = word.split(" ");
  //   const except = [" ", "-", "'"];
  //   let result = "";
    
  //   wordArr.forEach((word)=>{
  //     if(!except.includes(word)){
  //       result +=word.charAt(0).toUpperCase()+word.slice(1)+" ";
  //     }
  //   })
  //   return result;
  // }
  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}