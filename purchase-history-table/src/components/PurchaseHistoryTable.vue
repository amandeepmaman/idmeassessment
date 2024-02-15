<template>
  <div v-if="isLoading">Loading...</div>
  <table id="item-table" role="table" aria-labelledby="item-table-heading">
    <caption id="item-table-heading">
      Purchases
    </caption>
    <thead>
      <tr>
        <th class="empty-row"></th>
        <th scope="col">Name</th>
        <th scope="col">Location</th>
        <th scope="col">Purchase Date</th>
        <th scope="col">Category</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td class="empty-row desktop-view"></td>
        <td class="name font700 desktop-view">{{ item.name }}</td>
        <td class="desktop-view">
          <img :src="item.location" :alt="item.name" width="40" height="40" />
        </td>
        <td class="desktop-view">{{ formatDate(item.purchaseDate) }}</td>
        <td class="desktop-view">
          <span :class="getCategoryClass(item.category)">{{
            item.category
          }}</span>
        </td>
        <td class="desktop-view" v-html="item.description"></td>
        <td class="font700 desktop-view">
          {{ formatPurchasePrice(item.price) }}
        </td>
        <td class="three-dots desktop-view">&#xFE19;</td>
        <td class="mobile-view">
          <div class="item-info">
            <img :src="item.location" :alt="item.name" />
            <span class="name font700">{{ item.name }}</span>
            <span class="font700 purchase-price">{{
              formatPurchasePrice(item.price)
            }}</span>
          </div>
          <p class="description" v-html="item.description"></p>
          <span class="font700">Purchase Date</span><br />
          <span>{{ formatDate(item.purchaseDate) }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { formatDate, formatPurchasePrice, getCategoryClass } from "../utils";

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },

  setup() {
    const items = ref([]);
    const isLoading = ref(true);

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        items.value = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      items,
      isLoading,
      formatDate,
      formatPurchasePrice,
      getCategoryClass,
    };
  },
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #cdced9;

  caption {
    color: #16145a;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    text-align: left;
    margin-bottom: 24px;
  }

  th {
    padding: 12px;
    border-bottom: 1px solid #cdced9;
    border-top: 1px solid #cdced9;
    text-align: left;
    font-weight: 600;
    color: #272833;
  }

  tbody {
    .empty-row {
      width: 40px;
    }
    tr {
      height: 130px;
    }
    td {
      width: 164px;
    }
    .technology-category {
      border: #cdced9 1px solid;
      color: #000000;
      border-radius: 2px;
      padding: 3px 12px;
    }
    .shopping-category {
      border: #98d4a9 1px solid;
      color: #118632;
      border-radius: 2px;
      padding: 3px 12px;
    }
    .automotive-category {
      border: #ff8577 1px solid;
      color: #d94130;
      border-radius: 2px;
      padding: 3px 12px;
    }
    .entertainment-category {
      border: #89a7e0 1px solid;
      color: #2e5aac;
      border-radius: 2px;
      padding: 3px 12px;
    }

    .font700 {
      font-weight: 700;
    }
    .name {
      color: #272833;
      font-size: 16px;
      line-height: 24px;
      text-transform: capitalize; /* Capitalizes each of the first letter of the name */
    }

    img {
      max-width: 40px;
      max-height: 40px;
      border-radius: 20px;
    }
    .three-dots {
      width: 10px;
    }
  }
}
.mobile-view {
  display: none;
}

/* Styles for mobile */
@media screen and (max-width: 600px) {
  /* Table headers should not be displayed for mobile view */
  table {
    border: none;
    thead {
      display: none;
    }
    tbody {
      td {
        width: auto;
        padding: 10px;
      }
      tr {
        display: flex;
        flex-direction: column;
        border: 1px solid #cdced9;
        margin-bottom: 10px;
        height: auto;
        border-radius: 10px;
      }
    }
  }
  .desktop-view {
    display: none;
  }
  .mobile-view {
    display: block;
    margin: 10px 20px;
    border-radius: 10px;
    .description {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #272833;
      width: 300px;
    }
    img {
      margin-right: 20px;
    }
    .item-info {
      display: flex;
      align-items: center;
    }
    .name {
      color: #232326;
    }
    .purchase-price {
      font-size: 18px;
      line-height: 20px;
      letter-spacing: -0.24px;
      margin-left: auto;
    }
  }
}
</style>
