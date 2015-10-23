import exists from "./utils/exists";

export const COLORS = {
    gold: "#FFD053",
    blue: "#BFBE89",
    orange: "#FF6E00",
    grey: "#3F4142",
    red: "#E53A00",
    white: "#FFFCF0",
};

const pickPosition = (position, top, right, bottom, left) => {
    return {
        position,
        top: exists(top) ? top : null,
        right: exists(right) ? right : null,
        bottom: exists(bottom) ? bottom : null,
        left: exists(left) ? left : null,
    }
};

export const MIXINS = {
    pickAbsolute(top, right, bottom, left) {
        return pickPosition("absolute", top, right, bottom, left);
    },

    pickFixed(top, right, bottom, left) {
        return pickPosition("fixed", top, right, bottom, left);
    },

    pickRelative(top, right, bottom, left) {
        return pickPosition("relative", top, right, bottom, left);
    },

    boxShadow(color, hshadow, vshadow, blur, spread, inset) {
        const getDefault = (value, def) => exists(value) ? value : def;
        const str = `${color} ${getDefault(hshadow, 0)} ${getDefault(vshadow, 0)} ${getDefault(blur, "")} ${getDefault(spread, "")} ${getDefault(inset, "")}`
        return {
            WebkitBoxShadow: str,
            MozBoxShadow: str,
            boxShadow: str,
        }
    },

    forceHardwareAcceleration() {
        return {
            WebkitBackfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
        };
    },

    transition(properties={}) {
        let str = map(properties, (value, key) => `${key} ${value}`).join(", ");

        return {
            WebkitTransition: `-webkit-transform, ${str}`,
            MozTransition: `-moz-transform, ${str}`,
            transition: `transform, ${str}`,
        };
    },

    centerBox({height, width}) {
        return {
            position: "absolute",
            top: "50%",
            left: "50%",
            width: `${width}px`,
            height: `${height}px`,
            marginLeft: `-${width/2}px`,
            marginTop: `-${height/2}px`,
        };
    },
};
