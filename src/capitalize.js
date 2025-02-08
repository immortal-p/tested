const capitalize = (txt) => {
    if(txt === '') return txt;
    
    const firstChar = txt[0].toUpperCase();
    const restSubstring = txt.slice(1);
    return `${firstChar}${restSubstring}`
}

export default capitalize;