import { ITEM_CLICKED } from "./ActionType";
const initialState = {
  client_list: [
    {
      country: "Portugal",
      clients: [
        {
          id: 1,
          name: "Aasiya Jayavant",
          selected: false,
        },
        {
          id: 2,
          name: "Luvleen Lawrence",
          selected: false,
        },
        {
          id: 3,
          name: "Ray Mibourne",
          selected: false,
        },
      ],
    },
    {
      country: "Nicargua",
      clients: [
        {
          id: 4,
          name: "Obasey Chidy",
          selected: false,
        },
        {
          id: 5,
          name: "Xenie",
          selected: false,
        },
        {
          id: 6,
          name: "Ezequiel",
          selected: false,
        },
      ],
    },
    {
      country: "Marshall Islands",
      clients: [
        {
          id: 7,
          name: "Aaron",
          selected: false,
        },
        {
          id: 8,
          name: "Jelena",
          selected: false,
        },
        {
          id: 9,
          name: "Deanna",
          selected: false,
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_CLICKED: {
      let clientId = action.payload;
      return {
        ...state,
        client_list: state.client_list.map((clients) => {
          return {
            country: clients.country,
            clients: clients.clients.map((client) => {
              if (client.id === parseInt(clientId)) {
                client.selected = !client.selected;
              }
              return client;
            }),
          };
        }),
      };
    }
    default:
      return state;
  }
};
export default reducer;
