/*
    https://stackoverflow.com/a/21273362    
    will only match null or undefined, this won't match false
*/
const not = (input: unknown): boolean => input == null;

export default not;
