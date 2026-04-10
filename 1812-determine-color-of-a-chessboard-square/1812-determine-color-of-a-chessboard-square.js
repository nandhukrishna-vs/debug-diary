/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let obj={
        a:1,b:2,c:3,
        d:4,e:5,f:6,
        g:7,h:8
    }

    let col=obj[coordinates[0]];
    let row=Number(coordinates[1]);

    return (col-row)%2 !==0;
};