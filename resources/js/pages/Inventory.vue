<template>
  <div class="inventory-container">
    <h2>inventory</h2>
    <div class="pt-4">
      <div class="d-flex justify-content-start py-3">
        <b-form-group class="mb-0">
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              placeholder="Search"
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
        :items="inventory"
        :per-page="store.inventory.perPage"
        :current-page="store.inventory.currentPage"
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
        <template #cell(total_cents)="{value}">
          {{ dollars(value) }}
        </template>
      </b-table>
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
        // { key: 'apartment', sortable: true },
        { key: 'city', sortable: true },
        // { key: 'zip', sortable: true },
        // { key: 'country_code', sortable: true },
        { key: 'email', sortable: true },
        // { key: 'inventory_id', sortable: true },
        { key: 'name', sortable: true },
        { key: 'order_status', sortable: true },
        // { key: 'payment_amt_cents', sortable: true },
        // { key: 'payment_date', sortable: true },
        // { key: 'payment_ref', sortable: true },
        // { key: 'phone_number', sortable: true },
        // { key: 'product_id', sortable: true },
        // { key: 'ship_charged_cents', sortable: true },
        // { key: 'ship_cost_cents', sortable: true },
        // { key: 'shipped_date', sortable: true },
        // { key: 'shipper_name', sortable: true },
        // { key: 'state', sortable: true },
        // { key: 'street_address', sortable: true },
        // { key: 'subtotal_cents', sortable: true },
        // { key: 'tax_total_cents', sortable: true },
        { key: 'total_cents', label: 'Total', sortable: true },
        { key: 'created_at', sortable: true },
        // { key: 'tracking_number', sortable: true },
        // { key: 'transaction_id', sortable: true },
        // { key: 'updated_at', sortable: true },
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
    dollars,
    date
  },
  computed: {
    inventory() {
      return this.store.inventory?.data || [];
    }
  }
};
</script>

<style></style>
