# Ecom
system requirements:
- php >= 7.3
- node >= 10

### Setup Back End
1) Setup .env file domains for [auth package](https://laravel.com/docs/8.x/sanctum#spa-configuration)

```
  SANCTUM_STATEFUL_DOMAINS=localhost,ecom.test,98bcbdf194f7.ngrok.io
```

2) Run the following commands:   

```
  composer install
  php artisan migrate
```

3) Import CSV orders into temporary database table and run a clean `INSER SELECT FROM` into `orders` table 

```sql

INSERT INTO orders (
    product_id,
    inventory_id,
    street_address,
    apartment,
    city,
    state,
    country_code,
    zip,
    phone_number,
    email,
    name,
    order_status,
    payment_ref,
    transaction_id,
    payment_amt_cents,
    ship_charged_cents,
    ship_cost_cents,
    subtotal_cents,
    total_cents,
    shipper_name,
    payment_date,
    shipped_date,
    tracking_number,
    tax_total_cents,
    created_at,
    updated_at
)
SELECT
    product_id,
    inventory_id,
    street_address,
    apartment,
    city,
    state,
    country_code,
    zip,
    phone_number,
    email,
    name,
    order_status,
    payment_ref,
    transaction_id,
    payment_amt_cents,
    NULLIF(ship_charged_cents, 'NULL') as ship_charged_cents,
    NULLIF(ship_cost_cents, 'NULL') as ship_cost_cents,
    subtotal_cents,
    total_cents,
    shipper_name,
    payment_date,
    shipped_date,
    tracking_number,
    tax_total_cents,
    created_at,
    updated_at
FROM import.orders
```
3) Import remaining data from CSV files into their respective tables

```
inventory.csv -> inventories
users.csv -> users
products.csv -> products
```



### Front End
1) Run the following:

```
  npm install
  npm run watch
```    
