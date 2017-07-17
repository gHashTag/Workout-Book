export const customStyles = {
  text: function(size, type, col) {
  let font = 'sans-serif-' + type;
   return {
     fontSize: size,
     fontFamily: font,
     color: col
   }
 },

 size: function(dimension, per){
   return dimension * (per/ 100)
 }
}
