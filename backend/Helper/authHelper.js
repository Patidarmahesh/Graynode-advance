const bcryptjs = require('bcryptjs');

const hashedPassword = (password) =>{
return bcryptjs.hash(password,10);
}

const comparePassword = (password,compPass) =>{
    return bcryptjs.compare(password,compPass);

}

module.exports = {
    hashedPassword,
    comparePassword,
}