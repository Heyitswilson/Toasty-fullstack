export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const UNMOUNT_SEARCH = "UNMOUNT_SEARCH";

export const receiveSearch = (search) => ({
    type: RECEIVE_SEARCH,
    search
})

export const unmountSearch = () => ({
    type: UNMOUNT_SEARCH
})