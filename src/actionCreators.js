/**
 * End points
* */
const accion1 = (valor1, valor2) => {
    //console.log(valor1);
    //console.log(valor2);
    return {
        type: "EJECUTAR_ACCION_1",
        valor: "este es otro valor"
    };
};

const updateBannerType = (bannerType) => {
    return {
        type: "UPDATE_BANNER_TYPE",
        valor: bannerType
    };
};

export { accion1, updateBannerType };