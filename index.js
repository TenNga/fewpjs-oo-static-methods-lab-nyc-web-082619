class Formatter {
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  static sanitize(word){
    //- ' space 
    return word.replace(/[^a-z\ '-]/gim,"");
  }
  
  static titleize(word){
    const wordArr = word.split(" ");
    const except = [" ", "-", "'"];
    let result = "";
    
    wordArr.forEach((word)=>{
      if(!except.includes(word)){
        result +=word.charAt(0).toUpperCase()+word.slice(1);
      }
    })
    return result;
  }
}