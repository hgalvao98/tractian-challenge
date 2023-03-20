export const getAllUnits = () => {
    return {
        type: 'FETCH_UNITS_REQUEST'
    }
}

export const getUnit = (id: number) => {
    return {
        id,
        type: 'FETCH_UNIT_REQUEST'
    }
}