export const dataFetchAll = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    }
}

export const getAllAssets = () => {
    return {
        type: 'FETCH_ASSETS_REQUEST'
    }
}

export const getAsset = (id: number) => {
    return {
        id,
        type: 'FETCH_ASSET_REQUEST'
    }
}