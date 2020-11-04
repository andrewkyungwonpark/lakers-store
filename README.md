# 2020 Los Angeles Lakers Championship Store

A full stack Node.js and React shopping cart app. Developed to be responsive for both mobile and desktop access.

## Technologies Used

- React.js
- Node
- Express
- Postgresql
- HTML5
- CSS3
- PM2
- AWS S3

## Live Demo

Try the application live at [https://lakers-store.andrewkpark.com](https://lakers-store.andrewkpark.com/)

## Features

- User can view the products for sale
- User can view the details of a product
- User can add an item to their cart
- User can view their cart summary
- User can place an order

## Preview
![lakers store 1](https://user-images.githubusercontent.com/67514987/96166864-6c222f00-0ed3-11eb-9dbe-513d73cccf11.jpg)
![lakers store 2](https://user-images.githubusercontent.com/67514987/96166880-6f1d1f80-0ed3-11eb-9f73-e816ac499c33.jpg)
![lakers store 3](https://user-images.githubusercontent.com/67514987/96166878-6e848900-0ed3-11eb-8350-71b8fe0d63b5.png)
![lakers store 4](https://user-images.githubusercontent.com/67514987/96166875-6debf280-0ed3-11eb-9ab3-28cf1141b533.jpg)
![lakers store 5](https://user-images.githubusercontent.com/67514987/96166872-6d535c00-0ed3-11eb-9cff-4238d32cc8a8.jpg)


## Development

#### System Requirements

- npm 6 or higher
- Postgresql 10 or higher

#### Getting Started

1. This application requires the use of AWS S3, 
   
   Please have an AWS Access ID, Access Key, and a Bucket name.

2. Clone the repository.

    ```shell
    https://github.com/andrewkyungwonpark/lakers-store.git
    cd lakers-store
    ```

3. Install all dependencies with NPM.

    ```shell
    npm install
    ```

4. Create environment variables.

    1. Clone the `env.example.config` file
    1. Name the cloned file to `.env`
    1. Edit the `.env` to provide your credentials

5. Import the example database to Postgresql located in `database/dump.sql`.


6. Run the custom express server.

    ```shell
    npm run dev
    ```

7. Once started you can view the application by opening http://localhost:3002 in your browser.

## Links & Socials

LinkedIn: https://www.linkedin.com/in/andrewkyungwonpark
Portfoloio: https://andrewkpark.com
