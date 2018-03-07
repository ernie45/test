import operate from './operate';
import isNumber from './isNumber';

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {

  /** If AC is pressed clear the state variables */
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }


  /** If the buttonName is a number */
  if (isNumber(buttonName)) {

    /** And if buttonName is 0 and the next buttonName is zero */
    if (buttonName === '0' && obj.next === '0') {
      /** Perform no action */
      return {};
    }

    /** If an operation is defined */
    if (obj.operation) {
      /** And if next is defined */
      if (obj.next) {
        /** Allow concatination of button names */
        /** This allows multiple digits */
        return { next: obj.next + buttonName };
      }
      /** If next is not yet defined */
      /** Return next as the buttonName to create the first digit of next */
      return { next: buttonName };
    }

    /** If next has a value */
    if (obj.next) {
      /** Add to next */
      return {
        /** concatinate to next */
        next: obj.next + buttonName,
        /** Maintain the total as undefined */
        total: null,
      };
    }

    /** And if operation is not defined */
    /** And if next is not defined */
    return {
      /** Assign next to buttonName */
      /** The total remains null */
      next: buttonName,
      total: null,
    };
  }


  /** If the decimal is pressed */
  if (buttonName === '.') {

    /** And if next is defined */
    if (obj.next) {
      /** And next already contains a period */
      /** This makes sure there are no double decimals */
      if (obj.next.includes('.')) {
        /** Perform no action */
        return {};
      }
      /** If next doesn't already include a period */
      /** Concatinate the period */
      return { next: obj.next + '.' };
    }

    /** If next is not currently defined */
    /** And if operation is defined */
    if (obj.operation) {
      /** Return a decimal less than 1 by adding a zero in the beginning of next */
      return { next: '0.' };
    }

    /** If next and operation are not defined */
    /** And if total is defined */
    if (obj.total) {
      /** And if total includes a decimal */
      if (obj.total.includes('.')) {
        /** Perform no action */
        /** This makes sure a decimal can't add to the total twice */
        return {};
      }
      /** If total doesn't include a decimal */
      /** Add a decimal to the total */
      return { total: obj.total + '.' };
    }
    /** If total isn't defined */
    /** Return a total with a zero in the beginning */
    return { total: '0.' };
  }


  /** If buttonName is an equal sign */
  if (buttonName === '=') {

    /** And next and operation are defined */
    if (obj.next && obj.operation) {
      return {
        /** Perform the operate function */
        total: operate(obj.total, obj.next, obj.operation),
        
        /** Clear next and operation */
        next: null,
        operation: null,
      };
    }

    /** If next and/or object are not defined */ 
    else {
      /** Perform nothing */
      /** This makes sure no calculation is performed if the first two arguments aren't ready */
      return {};
    }
  }

  /** If buttonName is an operation */
  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
