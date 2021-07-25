const { verifyToken, isAdministrator, isSeller  } = require('./authorization');


export const middleware = Object.freeze({
    verifyToken,
    isAdministrator,
    isSeller,
});