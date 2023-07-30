import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users = [
    {
        _id: userIds[0],
        firstName: "test",
        lastName: "me",
        email: "aaaaaajija@gmail.com",
        password: "iuijknjhbhjbyub",
        avatar: "https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        friends: [],
        location: "San Fran, CA",
        info: "fdjkas;fasdfkjafl"
    },
    {
        _id: userIds[1],
        firstName: "Steve",
        lastName: "Ralph",
        email: "thataaa@gmail.com",
        password: "$!FEAS@!O)_Idfamnfjeq",
        avatar: "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: "New York, CA",
        info: "fdjafjefjnvajnv"
    },
    {
        _id: userIds[2],
        firstName: "Some",
        lastName: "Guy",
        email: "someguy@gmail.com",
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        avatar: "https://images.unsplash.com/photo-1498015583783-4abcab4a760a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: "Canada, CA",
        occupation: "Data Scientist Hacker",
        info: "jgirghinjandffa"
    },
    {
        _id: userIds[3],
        firstName: "Whatcha",
        lastName: "Doing",
        email: "whatchadoing@gmail.com",
        password: "$huygytgfuyctf",
        avatar: "https://images.unsplash.com/photo-1467601558372-f99aeb150ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        location: "Korea, CA",
        info: "djfngjnjnva"
    },
    {
        _id: userIds[4],
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@gmail.com",
        password: "$koknknkjn",
        avatar: "https://images.unsplash.com/photo-1433324168539-154874446945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        friends: [],
        location: "Utah, CA",
        info: "jadskfjngejnf"
    },
];

export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],
        title: "fdjasjdfsafj",
        category: "a",
        price: 10.4,
        description: "Some really long random description",
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],
        title: "fdjasjdfsafj",
        category: "b",
        price: 12,
        description:
            "Another really long random description. This one is longer than the previous one.",
        image: "https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],
        category: "c",
        title: "fdjasjdfsafj",
        price: 23,
        description:
            "This is the last really long random description. This one is longer than the previous one.",
        image: "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        category: "b",
        title: "fdjasjdfsafj",
        price: 5,
        description:
            "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
        image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
];