const colors : Array<string> = [
    "#F44336",
    "#3F51B5",
    "#4CAF50",
    "#2196F3",
    "#FFC107"
]
const parts : number = 3 
const scGap : number = 0.02 
const strokeFactor : number = 90 
const sizeFactor : number = 13.2 
const delay : number = 20 
const backColor : string = "#bdbdbd"

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}