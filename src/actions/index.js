import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=gfgfvfvf';

export function fetchPosts() {
    const request = axios.get(`${ROOT}/posts${KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT}/posts${KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}