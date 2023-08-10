import axios from "axios";
import { urlx } from "./url";

const GetLocationFromCoordinates = async (latitude, longitude) => {
  //const API_KEY = "AIzaSyA3Ku9PODZml5k9Ema3DnNvh2MfyBljP1Y";
  console.log(urlx);
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${urlx.name}`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data && response.data.results.length > 0) {
      const location = response.data.results[0].formatted_address;
      const result = response.data.results[0];
      const locality = result.address_components.find((comp) =>
        comp.types.includes("locality")
      );
      const country = result.address_components.find((comp) =>
        comp.types.includes("neighborhood")
      );
      const neighborhood = result.address_components.find((comp) =>
        comp.types.includes("country")
      );
      const placeName = result.formatted_address;

      console.log("Locality:", locality.long_name);
      console.log("Neighborhood:", neighborhood.long_name);
      // console.log("Country:", country.long_name);
      // console.log("Place Name:", placeName);
      const locationData = { location, locality };
      return locationData;
    }
    // if (response.data && response.data.results.length > 0) {
    //   const addressComponents = response.data.results[0].address_components;
    //   const cityComponent = addressComponents.find((component) =>
    //     component.types.includes("placename")
    //   );

    //   if (cityComponent) {
    //     return cityComponent.long_name;
    //   }
    // }
    return null;
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
};

export default GetLocationFromCoordinates;
