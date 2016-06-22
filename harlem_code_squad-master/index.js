var reviews = [
  {
    id: 1,
    rating: 5,
    user: "Emily",
    comment: "Loved the place and Judy was a great host!",
  },
  {
    id: 2,
    rating: 5,
    user: "Jamal",
    comment: "Our stay was super comfortable and we wish we could have stayed longer.",
  },
  {
    id: 3,
    rating: 4,
    user: "Maja",
    comment: "The studio was in a great location. I would recommend this place if you don't need a lot of room.",
  },
  {
    id: 4,
    rating: 4,
    user: "Juan",
    comment: "Everything was great with the place.",
  },
];

var listing = {
  name: "Cozy Studio in East Village",
  host: "Judy",
  hostPicture: "./host.png",
  description: "You'll love my cozy studio in the heart of East Village. It's close to the subway and many restaurants.",
  picture: "./room.jpg",
  reviews: reviews,
};

var ListingPage = React.createClass({
  render() {
    console.log(this.props);
    return (
      <div>
        Hello World! Lets build a simple listing page :)
    <button>Click Me</button> 
    <ListingImage picture={this.props.listing.picture} />
      </div>
    );
  }
});
var ListingImage = React.createClass ({
  render() {
    console.log(this.props);
    return (
      <img src={this.props.picture} />
      );
  }
});


ReactDOM.render(
  React.createElement(ListingPage, {listing: listing}),
  document.getElementById('container')
);
