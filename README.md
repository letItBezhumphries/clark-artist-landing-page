# clark-artist-landing-page

the component tree
  in app.jsx returns a Navbar component and a Switch with two routes

- home/landing = "/" the route for Landing component is matched 

- Landing.jsx it checks state.auth for whether the isAuthenticated or isAdmin are both true, 
if both are it renders a <Redirect> to the AdminDashboard component.

if isAuthenticated is true and not isAdmin then it renders
the <BackgroundCarousel> component


- if the Landing component is not rendered then the Routes component is returned which 
  returns a container with a Switch component for all the other routes in the application

  

For Stripe js integration

what type of payment system and flow do I want
want to allow someone who might not be signed in or have an account to 
be able to add artwork to a cart and get all the way to the checkout page without
having to create a profile, better to allow purchases without having an account. If 
all the user wants to purchase a work of art then they should be allowed to do so without 
much effort.

For one-time payments
  authenticated user
  non-authenticated user

  steps -- 1. your server creates a paymentIntent and sends back the clientSecret
``` 2. to the client / Frontend shows a payment / credit card form along that includes the clientSecret

``` 3. User enters credit card details into form and submits the form 

``` 4. Stripe's server charges the card and handles 3D secure auth if necessary

``` 5. your backend fullfills the purchase via a webhook



Want basic ability to save a payment method or credit card for future purchases

