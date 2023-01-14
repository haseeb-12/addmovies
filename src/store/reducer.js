
export const reducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_MOVIES':
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
            case 'SEARCH':
                return{
                    ...state,
                    input:action.payload
                }

    }
}
