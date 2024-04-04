// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     produits: [],
// };

// const cartSlice = createSlice({
//     name : 'cart',
//     initialState,
//     reducers : {
//         ajoutPanier : (state, action) => {
//             const indexProduitExistant = state.produits.findIndex(product => product.id === action.payload.id);
//             if (indexProduitExistant !== -1) {
//                 state.produits[indexProduitExistant].total += 1;
//                 state.produits[indexProduitExistant].prixActuel += state.produits[indexProduitExistant].prix;
//             } else {
//                 state.produits.push(action.payload);
//             }
//         },
//         ajoutQuantite: (state, action) => {
//             const index = state.produits.findIndex(product => product.id === action.payload.id);
//             if (index !== -1) {
//                 state.produits[index].total += 1;
//                 state.produits[index].prixActuel += state.produits[index].prix;
//             }
//         },
//         suppQuantite: (state, action) => {
//             const index = state.produits.findIndex(product => product.id === action.payload.id);
//             if (index !== -1 && state.produits[index].total > 0) {
//                 state.produits[index].total -= 1;
//                 state.produits[index].prixActuel -= state.produits[index].prix;
//             }
//             if (state.produits[index].total === 0) {
//                 state.produits = state.produits.filter(product => product.id !== action.payload.id);
//             }
//         },                
//         removeQuantite: (state, action) => {
//             const productId = action.payload;
//             state.produits = state.produits.filter(product => product.id !== productId);
//             console.log(state,action);
//         },    
//     }
// });

// export const { ajoutPanier, ajoutQuantite, suppQuantite, removeQuantite } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    produits: [],
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        ajoutPanier : (state, action) => {
            const indexProduitExistant = state.produits.findIndex(product => product.id === action.payload.id);
            if (indexProduitExistant !== -1) {
                state.produits[indexProduitExistant].total += 1;
                state.produits[indexProduitExistant].prixActuel = parseFloat((state.produits[indexProduitExistant].prixActuel + parseFloat(state.produits[indexProduitExistant].prix)).toFixed(2));
            } else {
                state.produits.push(action.payload);
            }
        },
        ajoutQuantite: (state, action) => {
            const index = state.produits.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.produits[index].total += 1;
                state.produits[index].prixActuel = parseFloat((state.produits[index].prixActuel + parseFloat(state.produits[index].prix)).toFixed(2));
            }
        },
        suppQuantite: (state, action) => {
            const index = state.produits.findIndex(product => product.id === action.payload.id);
            if (index !== -1 && state.produits[index].total > 0) {
                state.produits[index].total -= 1;
                state.produits[index].prixActuel = parseFloat((state.produits[index].prixActuel - parseFloat(state.produits[index].prix)).toFixed(2));
            }
            if (state.produits[index].total === 0) {
                state.produits = state.produits.filter(product => product.id !== action.payload.id);
            }
        },                
        removeQuantite: (state, action) => {
            const productId = action.payload;
            state.produits = state.produits.filter(product => product.id !== productId);
        },    
    }
});

export const { ajoutPanier, ajoutQuantite, suppQuantite, removeQuantite } = cartSlice.actions;

export default cartSlice.reducer;
