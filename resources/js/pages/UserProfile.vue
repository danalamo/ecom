<template>
  <div class="profile-container">
    <h2>User Profile</h2>
    <b-form @submit.prevent="onSubmit" class="pt-4">
      <b-row>
        <b-col>
          <b-alert
            :show="error != ''"
            dismissible
            variant="danger"
            @dismissed="error = ''"
          >
            {{ error }}
          </b-alert>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6">
          <b-form-group label="Billing Plan" label-for="billing_plan">
            <div class="form-control" readonly>{{ form.billing_plan }}</div>
          </b-form-group>
          <b-form-group label="Shop Name" label-for="shop_name">
            <div class="form-control" readonly>{{ form.shop_name }}</div>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Name" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Email" label-for="email">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <div class="d-flex justify-content-end">
        <b-button type="submit" variant="warning" class="mr-1">Save</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
    <v-debug :data="$data" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { ...this.store.me },
      error: ''
    };
  },
  props: ['store'],
  methods: {
    onSubmit() {}
  }
};
</script>

<style></style>
