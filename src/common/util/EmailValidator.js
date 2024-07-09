export function isValidEmail(props) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.email);
}