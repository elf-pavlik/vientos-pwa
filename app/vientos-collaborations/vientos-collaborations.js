/* global Polymer, ReduxBehavior */

Polymer({
  is: 'vientos-collaborations',
  behaviors: [ ReduxBehavior, Polymer.AppLocalizeBehavior ],

  properties: {
    intents: {
      type: Array,
      statePath: 'intents'
    },
    language: {
      type: String,
      statePath: 'language'
    },
    resources: {
      type: Object,
      statePath: 'labels'
    }
  }
})
