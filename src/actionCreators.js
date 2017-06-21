import * as ActionTypes from './actionTypes'

export function setLanguage (language) {
  return {
    type: ActionTypes.SET_LANGUAGE,
    language
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

export function hello () {
  return { type: ActionTypes.HELLO_REQUESTED }
}

export function fetchPerson (id) {
  return { type: ActionTypes.FETCH_PERSON_REQUESTED, id }
}

export function fetchPeople () {
  return { type: ActionTypes.FETCH_PEOPLE_REQUESTED }
}

export function fetchPlaces () {
  return { type: ActionTypes.FETCH_PLACES_REQUESTED }
}

// export function fetchCollaborations () {
//   return { type: ActionTypes.FETCH_COLLABORATIONS_REQUESTED }
// }

export function fetchReviews () {
  return { type: ActionTypes.FETCH_REVIEWS_REQUESTED }
}

export function bye (session) {
  return { type: ActionTypes.BYE_REQUESTED, session }
}

export function fetchLabels () {
  return { type: ActionTypes.FETCH_LABELS_REQUESTED }
}

export function fetchCategories () {
  return { type: ActionTypes.FETCH_CATEGORIES_REQUESTED }
}

export function fetchProjects () {
  return { type: ActionTypes.FETCH_PROJECTS_REQUESTED }
}

export function saveProject (project, image) {
  return {
    type: ActionTypes.SAVE_PROJECT_REQUESTED,
    project,
    image
  }
}

export function savePerson (person, image) {
  return {
    type: ActionTypes.SAVE_PERSON_REQUESTED,
    person,
    image
  }
}

export function fetchIntents () {
  return { type: ActionTypes.FETCH_INTENTS_REQUESTED }
}

export function saveIntent (intent, image) {
  return {
    type: ActionTypes.SAVE_INTENT_REQUESTED,
    intent,
    image
  }
}

export function deleteIntent (intent) {
  return {
    type: ActionTypes.DELETE_INTENT_REQUESTED,
    intent
  }
}

export function follow (person, project) {
  return {
    type: ActionTypes.FOLLOW_REQUESTED,
    following: {
      type: 'Following',
      person: person._id,
      project: project._id
    }
  }
}

export function unfollow (following) {
  return {
    type: ActionTypes.UNFOLLOW_REQUESTED,
    following
  }
}

export function favor (person, intent) {
  return {
    type: ActionTypes.FAVOR_REQUESTED,
    favoring: {
      type: 'Favoring',
      person: person._id,
      intent: intent._id
    }
  }
}

export function unfavor (favoring) {
  return {
    type: ActionTypes.UNFAVOR_REQUESTED,
    favoring
  }
}

export function toggleFilterFollowings () {
  return {
    type: ActionTypes.TOGGLE_FILTER_FOLLOWINGS
  }
}

export function toggleFilterFavorings () {
  return {
    type: ActionTypes.TOGGLE_FILTER_FAVORINGS
  }
}

export function setLocationFilter (locationFilter) {
  return {
    type: ActionTypes.SET_LOCATION_FILTER,
    locationFilter
  }
}

export function toggleBoundingBoxFilter () {
  return {
    type: ActionTypes.TOGGLE_BOUNDINBOX_FILTER
  }
}

export function startConversation (conversation) {
  return {
    type: ActionTypes.START_CONVERSATION_REQUESTED,
    conversation
  }
}

export function fetchMyConversations (person) {
  return {
    type: ActionTypes.FETCH_MY_CONVERSATIONS_REQUESTED,
    person
  }
}

export function fetchNotifications (person) {
  return {
    type: ActionTypes.FETCH_NOTIFICATIONS_REQUESTED,
    person
  }
}

export function addMessage (message) {
  return {
    type: ActionTypes.ADD_MESSAGE_REQUESTED,
    message
  }
}

export function abortConversation (conversation, review) {
  return {
    type: ActionTypes.ABORT_CONVERSATION_REQUESTED,
    conversation,
    review
  }
}

export function addReview (review) {
  return {
    type: ActionTypes.ADD_REVIEW_REQUESTED,
    review
  }
}

// export function saveCollaboration (collaboration) {
//   return {
//     type: ActionTypes.SAVE_COLLABORATION_REQUESTED,
//     collaboration
//   }
// }

export function saveSubscription (details, person) {
  return {
    type: ActionTypes.SAVE_SUBSCRIPTION_REQUESTED,
    subscription: {
      type: 'Subscription',
      endpoint: details.endpoint,
      keys: details.keys,
      person: person._id
    }
  }
}

export function savePlace (place) {
  return {
    type: ActionTypes.SAVE_PLACE_REQUESTED,
    place
  }
}

export function saveNotification (notification) {
  return {
    type: ActionTypes.SAVE_NOTIFICATION_REQUESTED,
    notification
  }
}
