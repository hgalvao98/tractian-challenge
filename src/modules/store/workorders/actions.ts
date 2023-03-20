export const getAllWork = () => {
    return {
        type: 'FETCH_ALL_WORK_REQUEST'
    }
}

export const getWork = (id: number) => {
    return {
        id,
        type: 'FETCH_WORK_REQUEST'
    }
}