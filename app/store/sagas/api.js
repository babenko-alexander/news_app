import { API_REQUEST } from "../../config/settings";

export function fetchNewsAPI() {
  let resp = fetch(API_REQUEST)
  .then(response => {
    return response.json();
  })
  return resp;
}

// export const getOrders = async token => {
//   let HEADER = {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   };
//   let response = await axios.get(`${URL}/driver/order`, HEADER);
//   console.log('response===', response.data);
//   return response;
// };