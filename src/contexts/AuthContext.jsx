export const validateLogin = (username, password) => {
    if (username === password) {
        return true;
    }
    return false;
};