function calculateYears(principal, interest, tax, desired) {
    if(desired <= principal) return 0
    
    let years = 0;
    let profit_year = 0
    
    while(profit_year < desired){
      let value_without_tax = (principal * interest)
      let value_tax_deduce = (value_without_tax * tax).toFixed(2)
      profit_year = (value_without_tax - value_tax_deduce) + principal
      principal = profit_year
      years++
    }
    
    return years
}

calculateYears(1000, 0.05, 0.18, 1100) // 3
calculateYears(1000,0.01625,0.18,1200) // 14
calculateYears(1000,0.05,0.18,1000) // 0