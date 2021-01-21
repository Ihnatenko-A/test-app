import { ISupplier } from 'interfaces';

export const getLocation = (supplier: ISupplier) => {
  const address = [];

  if (supplier?.hq_line1) {
    address.push(supplier?.hq_line1);
  }
  if (supplier?.hq_line2) {
    address.push(supplier?.hq_line2);
  }
  if (supplier?.hq_city) {
    address.push(supplier?.hq_city);
  }
  if (supplier?.hq_country) {
    address.push(supplier?.hq_country);
  }
  return `via ${address.join(', ')}`
}
