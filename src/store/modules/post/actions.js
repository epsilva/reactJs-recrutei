export function request() {
    return {
        type: '@post/REQUEST',
    };
}

export function requestSucces(datas, count) {
    return {
        type: '@post/REQUEST_SUCCESS',
        payload: { datas, count },
    };
}

export function insertRequest(data, count) {
    return {
        type: '@post/INSERT_REQUEST',
        payload: { data, count },
    };
}

export function insertSucces(data, count) {
    return {
        type: '@post/INSERT_SUCCESS',
        payload: { data, count },
    };
}

export function updateRequest(data, count) {
    return {
        type: '@post/UPDATE_REQUEST',
        payload: { data, count },
    };
}

export function updateSucces(data, count) {
    return {
        type: '@post/UPDATE_SUCCESS',
        payload: { data, count },
    };
}

export function deleteRequest(data, count) {
    return {
        type: '@post/DELETE_REQUEST',
        payload: { data, count },
    };
}

export function deleteSucces(data, count) {
    return {
        type: '@post/DELETE_SUCCESS',
        payload: { data, count },
    };
}

export function postFailure() {
    return { type: '@post/POST_FAILURE' };
}
