const getLocalStorageData = () => {
    let storedItem = localStorage.getItem('DonateId')
    if (storedItem) {
        return JSON.parse(storedItem)
    }else{
        return [];
    }
}
const saveItemTolocalstorage=(cart)=>{
    let cartstringfied = JSON.stringify(cart)
    localStorage.setItem('DonateId',cartstringfied)
}
const setLocalStorageData = (id) =>{
    let cart = getLocalStorageData();
    let alreadyHave = cart.find(item => item === id);
    if (!alreadyHave) {
        cart.push(id);
        saveItemTolocalstorage(cart)
    }
}
export {getLocalStorageData,saveItemTolocalstorage,setLocalStorageData}