let initialState = {
  screenWidth: 1024,
  screenHeight: 768,
  locale: "ko",
  active: "article",
  currentListPermalink: null,
  currentArticlePermalink: "/",
  dropdownLists: {
    articles: [],
    lists: []
  }
};

var defaultReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'WINDOW_RESIZE':
      return {
        ...state,
        screenWidth: action.payload.screenWidth,
        screenHeight: action.payload.screenHeight
      };
    case 'UPDATE_DROPDOWN_DATA':
      return {
        ...state,
        dropdownLists: {
          articles: action.payload.articleLists,
          lists: action.payload.listLists
        }
      };
    case 'UPDATE_LIST_PERMALINK': 
      return {
        ...state,
        currentListPermalink: action.payload.permalink
      }
    case 'UPDATE_ARTICLE_PERMALINK':
      return {
        ...state,
        currentArticlePermalink: action.payload.permalink
      }
    case 'UPDATE_LOCALE':
      return {
        ...state,
        locale: action.payload.locale
      };
    case 'UPDATE_ACTIVE_PAGE':
      return {
        ...state,
        active: action.payload.active
      };
    default:
      return state;
  }
};

export {
  defaultReducer
};