export function getList(payload) {
    return {
        type: 'list/GET',
        payload,
    };
}

export function setList(payload) {
    return {
        type: 'list/SET',
        payload
    }
}