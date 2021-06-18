const GET_USER='GET_USER'
const TOOGE_LOADING='TOOGE_LOADING'
const SET_STATUS='SET_STATUS'

const initialState={
    users:[],
    isLoading: false,
    status: ''
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case 'GET_USER':
            return {
            ...state,
            users: action.users
        }
        case 'TOOGE_LOADING':
            return {
            ...state,
            isLoading: action.isLoading
        }
        case 'SET_STATUS':
            return {
            ...state,
            status: action.status
        }
        default: return state
    }
}

export const getUserActionCreator=(users)=>({
    type: GET_USER , users
})

export const toogeLoadingActionCreator=(isLoading)=>({
    type: TOOGE_LOADING , isLoading
})

export const getStatusActionCreator=(status)=>({
    type: SET_STATUS , status
})



export default reducer