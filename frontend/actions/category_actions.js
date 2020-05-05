export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const UNMOUNT_CATEGORY = 'UNMOUNT_CATEGORY'

export const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
})

export const unmountCategory = () => ({
    type: UNMOUNT_CATEGORY
})

