let pickup_autocomplete;
let dropoff_autocomplete;

function initAutocomplete() {
  // Create the autocomplete object,restricting the search predictions to geographical location types
  pickup_autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("pickup-input"),
    { types: ["geocode"] }
  );
  pickup_autocomplete.addListener("place_changed", fillPickUpAddress);

  dropoff_autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("dropoff-input"),
    { types: ["geocode"] }
  );
  dropoff_autocomplete.addListener("place_changed", fillDropOffAddress);
}

const fillPickUpAddress = () => {
  const place = pickup_autocomplete.getPlace();
  console.log("pick up place", place);
};

const fillDropOffAddress = () => {
  const place = dropoff_autocomplete.getPlace();
  console.log("pick up place", place);
};
