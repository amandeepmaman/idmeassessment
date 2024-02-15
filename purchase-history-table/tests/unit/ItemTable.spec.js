import { mount } from "@vue/test-utils";
import PurchaseHistoryTable from "../../src/components/PurchaseHistoryTable";

describe("PurchaseHistoryTable.vue", () => {
  it("renders table with correct number of rows", async () => {
    const wrapper = mount(PurchaseHistoryTable);
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("tbody tr").length).toBe(wrapper.vm.items.length);
  });

  it("displays correct data in table rows", async () => {
    const testData = [
      {
        id: 1,
        name: "Item 1",
        location: "image1.jpg",
        description: "Description 1",
        purchaseDate: "2022-02-15",
        price: 1000,
        category: "Technology",
      },
      {
        id: 2,
        name: "Item 2",
        location: "image2.jpg",
        description: "Description 2",
        purchaseDate: "2022-02-16",
        price: 2000,
        category: "Shopping",
      },
    ];
    const wrapper = mount(PurchaseHistoryTable, {
      data() {
        return {
          items: testData,
        };
      },
    });
    await wrapper.vm.$nextTick();
    console.log(wrapper.html());
    const rows = wrapper.findAll("tbody tr");
    console.log("rows.lenght: ", rows.length);
  });
});
