function bonAppetit (bill, k, b) {
  const filteredBill = bill.filter((_, i) => i !== k);
  const totalAnna = filteredBill.reduce((a, c) => a + c, 0);
  const costPerPerson = totalAnna / 2

  return costPerPerson >= b ? 'Bon Appetit' : b - costPerPerson;
}
