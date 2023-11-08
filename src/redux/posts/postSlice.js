import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            id: 0,
            author: "Bucky",
            message: "Hey Let's Connect",
            totalLikes: 10,
            comments: [
                {
                    author: "Vivek",
                    commentMessage: "Sure",
                },
                {
                    author: "Vicky",
                    commentMessage: "Excited",
                },
            ],
        },
        {
            id: 1,
            author: "Vivek",
            message: "Hey Its Dev Day",
            totalLikes: 99,
            comments: [
                {
                    author: "Bucky",
                    commentMessage: "Indeed",
                },
                {
                    author: "Vicky",
                    commentMessage: "Excited",
                },
            ],
        },
    ],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            const post = {
                id: nanoid(),
                author: "Bucky",
                message: action.payload,
                totalLikes: 0,
                comments: [],
            };
            state.posts.push(post);
        },
        deletePost : (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
