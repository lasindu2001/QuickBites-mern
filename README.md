# QuickBites - Food Ordering Platform

## Project Overview

QuickBites is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables users to browse restaurants, search for specific cuisines, manage their orders, and make payments through Stripe. Restaurant owners can manage their restaurant profiles and menus. The platform incorporates user authentication via Auth0 and provides real-time updates on order status for both users and restaurant owners.

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Key Features

- **User Authentication**: User login and authentication using Auth0, with protected routes for authenticated users.
- **Restaurant Management**: Restaurant owners can create, update, and manage restaurant profiles and menus.
- **Search and Filter**: Search restaurants by name or cuisine, and apply filters for pagination, sort options, and cuisine type.
- **Cart and Checkout**: Add and remove items from the cart, proceed to checkout, confirm delivery details, and make payments through Stripe.
- **Order Management**: Real-time order management and status updates for customers and restaurants.
- **Payment Integration**: Payments are processed through Stripe with webhooks for updating order statuses.

## Technologies Used

- **Frontend**: React.js, React Router, Auth0 for authentication, and Stripe for payments.
- **Backend**: Node.js, Express.js, MongoDB for data storage, and Mongoose for database modeling.
- **Other Tools**: Cloudinary for image hosting, Toast notifications, and Stripe CLI for local webhook testing.

## Installation

### Prerequisites
Ensure you have the following tools installed before proceeding:
- [Node.js](https://nodejs.org/) >= v14.x
- [MongoDB](https://www.mongodb.com/) >= v4.x
- [Stripe CLI](https://stripe.com/docs/stripe-cli) for local payment testing
- [Auth0](https://auth0.com/) and Stripe accounts for setting up authentication and payments

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/quickbites.git
2. Navigate to the backend directory:

   ```bash
   cd food-ordering-platform/backend
3. Install dependencies:

   ```bash
   npm install
4. Set up your .env file with the necessary variables

   ```bash
   MONGODB_CONNECTION_STRING=mongodb+srv://xxx:xxx@xxx.mongodb.net/?retryWrites=true&w=majority
   AUTH0_AUDIENCE=xxx-xxxx-api
   AUTH0_ISSUER_BASE_URL=https://xxx.us.auth0.com/
   CLOUDINARY_CLOUD_NAME=dr55xxx
   CLOUDINARY_API_KEY=14122xxx
   CLOUDINARY_API_SECRET=h3iPa_nR-xxx
   FRONTEND_URL=http://localhost:5173
   STRIPE_API_KEY=sk_test_xxx
   STRIPE_WEBHOOK_SECRET=whsec_xxx
5. Run the backend server:

   ```bash
   npm run dev

### Frontend Setup

1. Navigate to the backend directory:

   ```bash
   cd food-ordering-platform/frontend
2. Install dependencies:

   ```bash
   npm install
3. Update the .env file with your Auth0 and Stripe keys.

   ```bash
   VITE_API_BASE_URL=http://localhost:7000
   VITE_AUTH0_DOMAIN=dev-xxx.us.auth0.com
   VITE_AUTH0_CLIENT_ID=Cn88qxxx
   VITE_AUTH0_CALLBACK_URL=http://localhost:5173
   VITE_AUTH0_AUDIENCE=xx-xxxx-xxx-api
4. Run the backend server:

   ```bash
   npm run dev

## Usage

### Authentication
- Users can sign up or log in using Auth0.
- Only authenticated users can access protected routes such as the user profile and restaurant management.

### Managing Restaurants
- Restaurant owners can create or update restaurant profiles and manage menu items through a form.
- Images are uploaded using Cloudinary.

### Search Feature
- Users can search for restaurants by name or apply filters such as cuisine type, sort options, and pagination.

### Cart and Checkout
- Add items to the cart and proceed to checkout. Payments are processed through Stripe, and order details are updated in real-time.

### Order Management
- Users can view the status of their orders on the order status page, while restaurant owners can manage incoming orders and update their status.
