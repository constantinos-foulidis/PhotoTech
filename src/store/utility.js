export const updateObject = (oldObject, updatedProperties) => {
    console.log("utility",oldObject);
    console.log("insided utility ",updatedProperties);
    return {
        ...oldObject,
        ...updatedProperties
    };
};
