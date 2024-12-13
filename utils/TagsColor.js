const colorHTML = "bg-primary";
const colorCSS = "bg-info";
const colorJS = "bg-dark";
const colorPHP = "bg-secondary";

function TagsColor(stringa){
    switch(stringa){
        case "js":
            return colorJS;
        case "html":
            return colorHTML;
        case "php":
            return colorPHP;
        case "css":
            return colorCSS; 
    }
}

export default TagsColor;