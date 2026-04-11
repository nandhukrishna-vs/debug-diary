/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let row of image){
        row.reverse();
        for(let i=0;i<row.length;i++){
            if(row[i]===0){
                row[i]=1
            }else{
                row[i]=0;
            }
        }
    }
    return image;
};