function calculateSalesTax(salesData, taxRatesData) {
  var result = {}
  for (var i=0 ; i < salesData.length ; i++) {
    if(!result[salesData[i].name]) {
      var sales = calculateTotalSales(salesData[i].sales)
      var taxes = calculateTax(salesData[i].sales,taxRatesData[salesData[i].province])
      result[salesData[i].name] = {totalSales:sales, totalTaxes:taxes}
    }
    else {
      var sales = calculateTotalSales(salesData[i].sales)
      var taxes = calculateTax(salesData[i].sales,taxRatesData[salesData[i].province])
      result[salesData[i].name].totalSales += sales
      result[salesData[i].name].totalTaxes += taxes
    }
  }
  return result
}

// calculate the sum of the sales
function calculateTotalSales (arr) {
  return arr.reduce(function(a,b){return a+b})
}

// calculate the tax on sales
function calculateTax(arr,taxRate) {
  return calculateTotalSales(arr)*taxRate
}


//----------------------------------------------------test data-----------------------------------------------
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// call the function with the test data and log it to the console
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)
