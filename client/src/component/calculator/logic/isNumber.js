export default function isNumber(item) {
    /** Match normally returns that which is in the expression */
    /** With a single ! it returns a false if in the expression */
    /** In this case, with double !! returns true if in the expression */
    return !!item.match(/[0-9]+/);
  }
  