import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=gfgfvfvf';

export function fetchPosts() {
    const request = axios.get(`${ROOT}/posts${KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}