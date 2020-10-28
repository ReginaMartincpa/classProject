
const products = [
    ['Saw'],
    ['hammer'],
    ['screwdriver'],
    ['wrench'],
    ];
  
  
 const inStock = ['saw', 'hammer', 'screwdriver', 'wrench'];
 const search = prompt('Search for a product.');
 let message;
 
 if ( !search ) {
     message = `<strong>In stock:  </strong> ${inStock.join (‘, ‘) }`; 
 }else if ( inStock.includes(search.toLowerCase() ) ) {
     message = `Yes,we have <strong>${search}</strong>.  It’s #${inStock.indexOf(search.toLowerCase() ) +1} on the list!`;
 } else {
     message = `Sorry, we do not have <strong>${search}</strong>.`;
 }
 document.querySelector innerHTML = `<p>${message}<,/p>`;
 

