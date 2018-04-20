/**
 * Trim char on left or right.
 * @param {String} char 
 * @param {String} type 'left' or 'right'
 */
String.prototype.trim = function (char, type) {
   if(char) {
      if(type == 'left') {
         return this.replace(new RegExp('^\\' + char + '+', 'g'), '');
      } else if(type == 'right') {
         return this.replace(new RegExp('\\' + char + '+$', 'g'), '');
      }
      return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
   }
   return this.replace(/^\s+|\s+$/g, '');
};