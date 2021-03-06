export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: '/api/users',
        data: { user }
    })
)

export const login = user => {
    return (
        $.ajax({
            method: 'POST',
            url: '/api/session',
            data: { user }
        })
    )
}

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const fetchUser = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
)

export const fetchAllUsers = () => (
    $.ajax({
        method: "GET",
        url: '/api/users'
    })
)