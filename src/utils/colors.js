import "colors";

export function debug(text) {
    console.log("Debug ➜".cyan, text);
}

export function error(text) {
    console.error("Error ➜".red, text);
}

export function warn(text) {
    console.warn("Warning ➜".yellow, text);
}

export function info(text) {
    console.info("Info ➜".green, text);
}
