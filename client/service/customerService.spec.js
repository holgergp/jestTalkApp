import { findAllCustomers } from "./customerService";

jest.mock("./httpService", () => {
  const getCustomerMock = () => {
    return {
      customers: [{name: 'Walter'}, {name: 'Käthe'}]
    };
  };
  return {
    getCustomers: getCustomerMock
  };
});

describe("customerService shoukd", () => {
  it("work with returned customers", () => {
    const data = findAllCustomers();
    expect(data).toEqual(["Walter", "Käthe"]);
  });
});
