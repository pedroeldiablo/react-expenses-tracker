export function numberWithCommas(x){
    // console.log("total", x);
    // console.log("typeof(x)", typeof(x) );
    if(typeof(x) === "number" ){
        console.log("typeof(x) ? a Number", x.toString() );
        console.log(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    } else {

        // console.log("typeof(x) ? not a Number" );
    }
   
    
}
