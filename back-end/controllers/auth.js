import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

// register
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            location,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const ecryptedPw = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            ecryptedPw,
            location,
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// log in
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(400).json({ msg: 'User does not exist.' });
        }
        const validPw = await bcrypt.compare(password, user.password);
        if (!validPw) {
            res.status(400).json({ msg: 'Invalid password. Please try again!' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}