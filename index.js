// Your code here
//accept an Array of integers as a parameter, which will represent each side of a shape.
class Polygon{
    constructor(array){
        this.array = array
    }
    //counts the number of sides (each index in the array).
    get countSides(){
        return this.array.length
    }
    // calculates the sum of each side (each index in the array) of the polygon.
    get perimeter(){
        let sum = 0
        for (let len of this.array){
            sum += len
        }
        return sum
    }
}
//  automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.
class Triangle extends Polygon{
    get isValid(){
        for(let i=0; i<this.array.length; i++){
            for(let j=i+1; j<this.array.length; j++){
                const twoSides = this.array[i]+this.array[j]
                if(twoSides<=this.perimeter-twoSides){
                    return false
                }
            }
        }
        return true
    }
}
//  automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
// Use the get keyword to make a getter method area that calculates the area of the square.

class Square extends Polygon{
    get isValid(){
        for(let i=0; i<this.array.length; i++){
            for(let j=i+1; j<this.array.length; j++){
                if(this.array[i]!==this.array[j]){
                    return false
                }
            }
        }
        return true
    }

    get area(){
        return this.array[0]*this.array[1]
    }
}