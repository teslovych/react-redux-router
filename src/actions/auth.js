import axios from 'axios';
import {ROOT} from "../conf/main.conf";

const LOGIN = 'LOGIN';

export function login(loginParams, callback) {
    const request = axios.post(`${ROOT}/login`, loginParams)
        .then(() => callback());

    return {
        type: LOGIN,
        payload: request
    }
}