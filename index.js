class Formatter {
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  static sanitize(word){
    //- ' space 
    return word.replace(/[^a-z\ '-]/gim,"");
  }
}