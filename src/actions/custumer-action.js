import axios from 'axios';

const REQUEST_URL = 'http://5aa6fbbdaf352a001477f5dd.mockapi.io/api/v1/';

export const fetchCustumer = () => {

    const request = axios.get(`${REQUEST_URL}/customer`);

    return {
        type: 'FETCH_CUSTUMERS',
        payload: request
    };
};

export const fetchCustumerSelected = (id) => {

    const request = axios.get(`${REQUEST_URL}/customer/`+id);

    return {
        type: 'FETCH_CUSTUMER',
        payload: request
    };
};

export function createCustumer(newCustumer) {

    const res = axios({
        method: 'post',
        data: newCustumer,
        url: `${REQUEST_URL}/customer`
    });

    return {
        type: 'CREATE_CUSTUMER',
        payload: res
    };
}

export function createPostSuccess(newCustumer) {
    return {
        type: 'CREATE_CUSTUMER_SUCCESS',
        payload: newPost
    };
}

export function createPostFailure(error) {
    return {
        type: 'CREATE_CUSTUMER_FAILURE',
        payload: error
    };
}