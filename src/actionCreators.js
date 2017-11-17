import * as ActionTypes from './actionTypes'

export function setLanguage (language) {
  return {
    type: ActionTypes.SET_LANGUAGE,
    language
  }
}

export function setLabels (labels) {
  return {
    type: ActionTypes.SET_LABELS,
    labels
  }
}

export function setOnline (online) {
  return {
    type: ActionTypes.SET_ONLINE,
    online
  }
}

export function setBoundingBox (boundingBox) {
  return {
    type: ActionTypes.SET_BOUNDING_BOX,
    boundingBox
  }
}

export function updateFilteredCategories (selection) {
  return {
    type: ActionTypes.UPDATE_FILTERED_CATEGORIES,
    selection
  }
}

export function updateFilteredCollaborationTypes (selection) {
  return {
    type: ActionTypes.UPDATE_FILTERED_COLLABORATION_TYPES,
    selection
  }
}

export function updateSearchTerm (searchTerm) {
  return {
    type: ActionTypes.UPDATE_SEARCH_TERM,
    searchTerm
  }
}

export function togglePersonalFilter () {
  return {
    type: ActionTypes.TOGGLE_PERSONAL_FILTER
  }
}
