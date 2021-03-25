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



### Front End
1) Run the following:

```
  npm install
  npm run watch
```    
