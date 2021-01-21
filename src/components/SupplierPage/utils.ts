import suppliers from 'suppliers.json';
import { IData } from 'interfaces'

const getSupplier = (id: string) => {
  const suppliersList: IData = suppliers;

  return  new Promise((res, rej) => {
    setTimeout(() => {
      res(suppliersList[id]);
    }, 300)
  })

}

export { getSupplier };
