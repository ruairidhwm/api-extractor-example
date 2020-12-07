/**
 *
 * @param message - Tells you a thing is cool.
 * @public
 * @description
 * This appends '- cool huh?' to the message that you pass through.
 */
const CoolFunction = (message: string): string => {
  return `${message} - cool huh?`;
};

export default CoolFunction;
