import { createStore } from 'redux'

const initialState = {
  players: [
    {
      id: 1,
      name: 'Angie Merkel',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Angela_Merkel_2019_%28cropped%29.jpg/1200px-Angela_Merkel_2019_%28cropped%29.jpg',
    },
    {
      id: 2,
      name: 'Vladimir Putin',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vladimir_Putin_%282020-02-20%29.jpg/1200px-Vladimir_Putin_%282020-02-20%29.jpg',
    },
    {
      id: 3,
      name: 'Donald Trump',
      picture:
        'https://lh3.googleusercontent.com/proxy/jN51yWtoWF8LbHJUimkZunMgo-nK6l8az0PB7soOb9g_PSpkJ7MAuW-HjV0esAJnLdVVsZHiXHMxlTIw5w5rfiUbpOrlm_5BpoejXYVav-8rQzPwLtPQwjY3',
    },
    {
      id: 4,
      name: 'India Maria',
      picture:
        'https://cnnespanol.cnn.com/wp-content/uploads/2015/05/screen-shot-2015-05-01-at-12-02-04-pm.png?w=460&h=260&crop=1',
    },
    {
      id: 5,
      name: 'Mister Beam',
      picture:
        'https://images-na.ssl-images-amazon.com/images/I/41ecZ%2BApTRL._SY445_.jpg',
    },
    {
      id: 6,
      name: 'Chavo',
      picture:
        'https://images.clarin.com/2020/08/11/en-el-libro-el-diario___BWHKlgeM8_340x340__1.jpg',
    },
    {
      id: 7,
      name: 'Boris Johnson',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg',
    },
    {
      id: 8,
      name: 'The Queen',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Queen_Elizabeth_II_in_March_2015.jpg/250px-Queen_Elizabeth_II_in_March_2015.jpg',
    },
    {
      id: 9,
      name: 'Mr Wilson',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Lk8XV1US6iCjpwGsw5ozeUInA5rJc4w5_A&usqp=CAU',
    },
    {
      id: 10,
      name: 'Olafo',
      picture:
        'https://i.pinimg.com/236x/33/35/5a/33355a47eddf59a12d34e14b0e257b45.jpg',
    },
    {
      id: 11,
      name: 'Lassie',
      picture:
        'https://image.jimcdn.com/app/cms/image/transf/dimension=300x10000:format=jpg/path/s6d64162d94adbade/image/i5d28572620b30edc/version/1295114020/lassie.jpg',
    },
    {
      id: 12,
      name: 'Don Chince',
      picture:
        'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/APXAGBTLUNFUDOUVXI54RWDZGE.jpg',
    },
  ],
  titulars: [],
  substitutes: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_titular':
      return {
        ...state,
        titulars: state.titulars.concat(action.player),
        players: state.players.filter(
          (player) => player.id !== action.player.id
        ),
      }

    case 'add_substitute':
      return {
        ...state,
        substitutes: state.substitutes.concat(action.player),
        players: state.players.filter(
          (player) => player.id !== action.player.id
        ),
      }

    case 'remove_titular':
      return {
        ...state,
        players: state.players.concat(action.player),
        titulars: state.titulars.filter(
          (player) => player.id !== action.player.id
        ),
      }

    case 'remove_substitute':
      return {
        ...state,
        players: state.players.concat(action.player),
        substitutes: state.substitutes.filter(
          (player) => player.id !== action.player.id
        ),
      }
    default:
      return state
  }
}

export default createStore(reducer)
