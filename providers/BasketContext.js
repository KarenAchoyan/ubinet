import React, { createContext, useEffect, useState } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [baskets, setBaskets] = useState([]);
    const [favorites, setFavorites] = useState([]);
    

    useEffect(()=>{
        setBaskets(JSON.parse(localStorage.getItem('basket')) || [])
        setFavorites(JSON.parse(localStorage.getItem('favorites')) || [])
    },[])

    useEffect(()=>{
        localStorage.setItem('basket', JSON.stringify(baskets))
    },[baskets])
    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    function add(item){
        const basket = localStorage.basket ? JSON.parse(localStorage.basket) : []
        const existingProductIndex = basket.findIndex((x) => x.id === item.id)

        if (existingProductIndex !== -1) {
            basket[existingProductIndex] = {
                ...basket[existingProductIndex],
                quantity: basket[existingProductIndex].quantity + 1,
            };
        } else {
            basket.push({...item, quantity: 1});
        }
        setBaskets(basket)
    }
    function addFavorite(item){
        const basket = localStorage.favorites ? JSON.parse(localStorage.favorites) : []
        const existingProductIndex = basket.findIndex((x) => x.id === item.id)

        if (existingProductIndex !== -1) {
            basket[existingProductIndex] = {
                ...basket[existingProductIndex],
                quantity: basket[existingProductIndex].quantity + 1,
            };
        } else {
            basket.push({...item, quantity: 1});
        }
        setFavorites(basket)
    }
    function remove(item){
        const baskets = JSON.parse(localStorage.getItem('basket')) || [];
        const updatedBasket = baskets.filter(x => x.id !== item.id);
        setBaskets(updatedBasket)
    }
    function removeFromFavorite(item){
        const baskets = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedBasket = baskets.filter(x => x.id !== item.id);
        setFavorites(updatedBasket)
    }
    function isBasket(item){
        return baskets.filter(x=>x.id === item.id).length > 0
    }
    function isFavorite(item){
        return favorites.filter(x=>x.id === item.id).length > 0
    }



    return (
        <BasketContext.Provider value={{ baskets,favorites,addFavorite, add, removeFromFavorite,remove, isFavorite, isBasket }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContext;