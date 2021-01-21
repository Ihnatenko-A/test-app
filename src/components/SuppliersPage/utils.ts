import suppliers from 'suppliers.json';

const getSuppliers = () => {

  return  new Promise((res, rej) => {
    setTimeout(() => {
      res(suppliers);
    }, 300)
  })

}

export { getSuppliers };
