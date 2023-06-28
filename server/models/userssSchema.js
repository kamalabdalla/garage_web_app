const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    tokens:[{
        type: String,
        require: true
    }]
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
 
// userSchema.pre('save', async function(next){
//     if(this.isModified('password')){
//         this.password = bcrypt.hashSync(this.password, 10);
//     }
//     next();
// })

userSchema.methods.generateToken = async function(){
    try {
        let generateToken =jwt.sign({_id: this._id}, process.env.SECRETY_KEY);
        // this.token = this.token({token: generateToken});
        await this.save();
        return generateToken;
    } catch (error) {
        console.log(error)
    }
}

// const generateToken = userId =>{
//     return jwt.sign({id: userId}, process.env.JWT_SECRET_KEY, {
//         expiresIn: '30d',
//     });
// }; 

// userSchema.methods.isPasswordMatch = async function (enterdPassword){
//     return await bcrypt.compare(enterdPassword, this.password);
// }

const userss = mongoose.model('userss', userSchema);
module.exports = userss;