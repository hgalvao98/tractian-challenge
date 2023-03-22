import { Status } from "../types"

export const parseStatus = (status: Status) => {
    switch (status) {
        case 'inAlert':
            return 'In Alert'
        case 'inDowntime':
            return 'In Downtime'
        default:
            return 'In Operation'
    }
}