/**
 * Create a timestamp.
 * @param isString
 */
export function createTimeStamp(isString: boolean) {
  if (isString) {
    return new Date().getTime().toString();
  } else {
    return new Date().getTime();
  }
}