<template>
  <div class="products-container">
    <h2>Products</h2>
    <div class="pt-4">
      <!-- <p class="mt-3">Current Page: {{ currentPage }}</p>
      <v-data :data="$route.query" />
      <b-pagination
        :per-page="store.products.perPage"
        v-model="store.products.currentPage"
        :total-rows="store.products.total"
        @change="onPageChange"
        aria-controls="my-table"
      ></b-pagination> -->
      <div class="d-flex justify-content-start py-3">
        <b-form-group class="mb-0">
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              placeholder="Search"
              @input="searchProduct"
            ></b-form-input>

            <b-input-group-append>
              <b-button
                variant="primary"
                :disabled="!filter"
                @click="filter = ''"
              >
                Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </div>
      <b-table
        id="my-table"
        :fields="fields"
        :items="products"
        :per-page="store.products.perPage"
        :current-page="store.products.currentPage"
        :filter="filter"
        show-empty
        small
        responsive
      >
        <template #cell(shipping_price)="{value}">
          {{ dollars(value) }}
        </template>
        <template #cell(created_at)="{value}">
          {{ date(value) }}
        </template>
      </b-table>
      <!-- <v-data :data="store" /> -->
      <!-- <v-data :data="$root.$data" /> -->
    </div>
  </div>
</template>

<script>
import { date, dollars } from './../helpers';
export default {
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'id', sortable: true },
        { key: 'product_name', sortable: true },
        { key: 'description', sortable: true },
        { key: 'style', sortable: true },
        { key: 'brand', sortable: true },
        { key: 'product_type', sortable: true },
        { key: 'shipping_price', sortable: true },
        // { key: 'url', sortable: true },
        // { key: 'note', sortable: true },
        { key: 'created_at', sortable: true },
        // { key: 'updated_at', sortable: true },
        // { key: 'admin_id', sortable: true },
        ...[]
      ],
      filter: ''
    };
  },
  props: ['store'],
  methods: {
    onPageChange(e) {
      console.log('onPageChange e', e);
    },
    searchProduct(search) {
      console.log('searchProduct', search);
      app.getProducts({
        query: { search }
      });
    },
    dollars,
    date
  },
  computed: {
    products() {
      return this.store.products?.data || [];
    }
  }
};
</script>

<style></style>
