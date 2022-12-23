import { setParticipantData } from "../../../actions/split";

// export function fetchInitialize(groupId){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         products: [
//         ],
//         allParticipants :[]}
//       });
//     }, 500);
//   });
// }

export function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hasChanged: false,
        profile: {
          id: 1,
          name: "A",
          amount: 2,
          payed: 1000,
          remain: 500,
        },
        bought: [
          {
            name: "Banana",
            price: 1005,
            bought_by: {id:2,name:"B"},
            used_by: [{id:1,name:"A"},{id:3,name:"C"}],
          },
        ],
      });
    }, 500);
  });
}
export function fetchProductData(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Banana",
        price: 1000,
        amount: 3,
        bought: 1,
        used: [2, 3],
      });
    }, 500);
  });
}
export function getAllParticipants() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ]);
    }, 1000);
  });
}
