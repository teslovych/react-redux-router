import axios from 'axios';
import {ROOT} from "../conf/main.conf";

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
    const request = axios.get(`${ROOT}/posts`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT}/posts/${id}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT}/posts/${id}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT}/posts`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}