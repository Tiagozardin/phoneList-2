const estadoInicial = [];

export default function list(state = estadoInicial, action) {
    switch(action.type) {
        case 'list/GET':
            return state;
        
        case 'list/SET':
            return [...state, action.payload];
            
        default:
            return state;
    }
}