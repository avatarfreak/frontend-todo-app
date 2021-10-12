import React from "react";

//setter 
type setValue<T> = React.Dispatch<React.SetStateAction<T>>

//return tuples
function useLocalStorage<T>(key: string, initialValue: T): [T, setValue<T>] {
    const [state, setState] = React.useState(() => {
        //prevent window error as undefined during build time
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            //fetch value from local storage else return initial value
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return;
        }
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}
export { useLocalStorage }