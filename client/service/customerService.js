import { getCustomers } from "../service/httpService";

export let findAllCustomers = somePar => {
  const customers = getCustomers().customers;
  return customers.map(it => it.name);
};
