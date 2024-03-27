import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);  //uso del localStorage para almacenar datos

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));      //1ro hay q sringifiarlo para pasar a strin(texto)
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);         //2do el resultado lo parseamos para q vuelva a ser array
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);


  const saveItem = (newItem) => {   //funcion que actualice al estado y al localStorage al mismo tiempo 
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };