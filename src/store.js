import { createStore } from 'redux';

const accion12 = (state, action) => {
    return {
        ...state,
        user1: state.user1 = action.valor
    };
}

const updateBannerType = (state, action) => {
    return {
        ...state,
        bannerType: state.bannerType = action.valor
    };
}

const reducer = (state, action) => {
    if(action.type === "EJECUTAR_ACCION_1"){
        accion12(state, action);
    }else if(action.type==='UPDATE_BANNER_TYPE'){
        updateBannerType(state, action);
    }/*else if(action.type==='SET_PRODUCTOS'){
        setProducts(state, action);
        setQuantity(state, action);
    }*/

    return state;
}

export default createStore(reducer, { bannerType: 1, user1: '1', user2:'2',baseUrl:'http://localhost:8080/Alfilsoft/Api/v1/' });