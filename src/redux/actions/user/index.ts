import * as types from '../../../redux'

export type UserType = {
    name: string
    avatar_url: string
    message: string
}

export function getUserRequest(name: string): {
    // Qual a action a ser chamada
    type: string
    // Qual o dado passado
    payload: string
} {
    return {
        // Quem estou chamando
        type: types.GET_USER_REQUEST,
        payload: name
    }
}
export function getUserSuccess(user: UserType): {
    type: string
    payload: UserType
} {
    return {
        type: types.GET_USER_SUCCESS,
        payload: user
    }
}
export function getUserFailure(user: UserType): {
    type: string
    payload: UserType
} {
    return {
        type: types.GET_USER_FAILURE,
        payload: user
    }
}