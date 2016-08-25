export const windowResize = (width, height) => {
  return {
    type: 'WINDOW_RESIZE',
    payload: {
      screenWidth: width,
      screenHeight: height  
    }
  }
};

export const updateDropdownData = (articleLists, listLists) => {
  return {
    type: 'UPDATE_DROPDOWN_DATA',
    payload: {
      articleLists: articleLists,
      listLists: listLists
    }
  }
}

export const updateListPermalink = (permalink) => {
  return {
    type: 'UPDATE_LIST_PERMALINK',
    payload: {
      permalink: permalink
    }
  }
};

export const updateArticlePermalink = (permalink) => {
  return {
    type: 'UPDATE_ARTICLE_PERMALINK',
    payload: {
      permalink: permalink
    }
  }
};

export const updateLocale = (locale) => {
  return {
    type: 'UPDATE_LOCALE',
    payload: {
      locale: locale
    }
  };
}