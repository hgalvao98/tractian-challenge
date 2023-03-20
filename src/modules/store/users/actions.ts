export const getAllUsers = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

export const getUser = (id: number) => {
    return {
        id,
        type: 'FETCH_USER_REQUEST'
    }
}