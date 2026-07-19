import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    isOnborded: {
        type: Boolean,
        default: false,
    },

    onboarding: {
        goal : {
            type: String,
            enum : ['Placement', 'Gate(DA)'],
        },

        level : {
            type: String,
            enum : ['Beginner', 'Intermediate', 'Advanced'],
        },

        placementDate : {
            type: Date,
        }
    },

    goalstartDate: {
        type: Date,
    },

    goalDuration: {
        type: Number
    },

    lastActiveDate: {
        type: Date,
    },
    
    isVarified: {
        type: Boolean,
        default: false,
    },

    varificationToken: {
        type: String,
    },

    varificationTokenExpiry: {
        type: Date,
    },

    refreshToken: {
        type: String,
    }
}, { timestamps: true });



userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    this.password = await bcrypt.hash(this.password,10)
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,

        },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
        },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
    );
}

const User = mongoose.model('User', userSchema);

export default User;