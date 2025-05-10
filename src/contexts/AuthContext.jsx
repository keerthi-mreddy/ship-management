export const validateLogin = (username, password) => {
    if (username === password) {
        return true;
    }
    return false;
};

export const validateRegister = (username, accountType, fullName, password) => {
    if (!username || !accountType || !fullName || !password) {
        return false;
    }
    return true;
}