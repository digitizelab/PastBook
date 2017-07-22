# PHP Homework

### Setup

##### This instructions assumes that you have added a new vhost with pastbook.app pointing to public directory

```
> git clone git@github.com:digitizelab/nishan-homework.git
> cd nishan-homework
> cp .env.dev .env
```

Please set your database details in the .env file we just copied, and then install dependencies. (I have attached the actual configuration in the mail)

```
> composer install
```

Lets run the migrations

```
> php artisan migrate
```

Lets install node_modules and compile React js files

```
> npm install
> npm run dev
```

Run integration tests

```
> phpunit
```

Configure your homestead to /nishan-homework/public or 

```
> php artisan serve
```

to access the homepage

Run the queued jobs by running

```
> php artisan queue:work
```