import {
  SET_PARTICIPANT_DATA,
  SET_PARTICIPANT_PROFILE,
  SET_PRODUCT_DATA,
  SET_ALL_PARTICIPANTS,
} from "../actions/types";
const initialState = {
  hasChanged: false,
  participant: {
    profile: {
      id: null,
      name: "-",
      amount: -1,
      payed: -1,
      remain: -1,
    },
    bought: [
      {
        name: "Banana",
        price: 1005,
        bought_by: {id:2,name:"B"},
        used_by: [{id:1,name:"A"},{id:3,name:"C"}],
      },
    ],
    used: [],
  },
  product: {
    name: "Banana",
    price: 1005,
    bought: 2,
    used: [1, 3],
  },
  allParticipants: [],
};
export default function splitReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_PARTICIPANTS:
      return { ...state, allParticipants: payload };
    case SET_PARTICIPANT_DATA:
      return { ...state, participant: { ...payload } };
    case SET_PARTICIPANT_PROFILE:
      return { ...state, participant: { profile: payload } };
    case SET_PRODUCT_DATA:
      return { ...state, product: payload };
    default:
      return state;
  }
}
