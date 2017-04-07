/* global Polymer, ReduxBehavior */

const ActionCreators = window.vientos.ActionCreators
const util = window.vientos.util

Polymer({

  is: 'vientos-shell',

  behaviors: [ ReduxBehavior, Polymer.AppLocalizeBehavior ],

  actions: {
    setLanguage: ActionCreators.setLanguage,
    setBoundingBox: ActionCreators.setBoundingBox,
    hello: ActionCreators.hello,
    fetchPerson: ActionCreators.fetchPerson,
    fetchLabels: ActionCreators.fetchLabels,
    fetchCategories: ActionCreators.fetchCategories,
    fetchCollaborationTypes: ActionCreators.fetchCollaborationTypes,
    fetchProjects: ActionCreators.fetchProjects,
    fetchIntents: ActionCreators.fetchIntents
  },

  properties: {
    config: {
      type: Object,
      value: window.vientos.config
    },
    session: {
      type: Object,
      statePath: 'session',
      observer: '_sessionChanged'
    },
    page: {
      type: String,
      reflectToAttribute: true,
      observer: '_pageChanged'
    },
    projects: {
      type: Array,
      statePath: 'projects'
    },
    filteredCategories: {
      type: Array,
      statePath: 'filteredCategories'
    },
    collaborationTypes: {
      type: Array,
      statePath: 'collaborationTypes'
    },
    boundingBox: {
      type: Object,
      statePath: 'boundingBox'
    },
    mapView: {
      type: Object
    },
    currentProject: {
      type: Object,
      value: null,
      computed: '_findProject(routeData.page, subrouteData.projectId, projects)'
    },
    visibleProjects: {
      type: Array,
      value: [],
      computed: '_filterProjects(projects, filteredCategories, collaborationTypes, boundingBox)'
    },
    visibleLocations: {
      type: Array,
      value: [],
      computed: '_extractLocations(visibleProjects, boundingBox)'
    },
    language: {
      type: String,
      statePath: 'language'
    },
    resources: {
      type: Object,
      statePath: 'labels'
    }
  },

  observers: [
    '_routePageChanged(routeData.page)',
    '_queryChanged(query)'
  ],

  _routePageChanged (page) {
    let selectedPage = page || 'projects'
    this.set('page', selectedPage)
    // if (!['map', 'project'].includes(page)) window.history.replaceState({}, '', `/${page}`)
  },

  _queryChanged (query) {
    if (query.zoom) {
      this.set('mapView', {
        latitude: Number(query.latitude),
        longitude: Number(query.longitude),
        zoom: Number(query.zoom)
      })
    }
  },

  _pageChanged (page) {
    // Load page import on demand. Show 404 page if fails
    var viewUrl
    switch (page) {
      case 'collaborations':
        viewUrl = '../vientos-collaborations/vientos-collaborations'
        break

      case 'projects':
        viewUrl = '../vientos-projects/vientos-projects'
        break

      case 'map':
        viewUrl = '../vientos-map/vientos-map'
        break

      case 'filter':
        viewUrl = '../vientos-filter/vientos-filter'
        break

      case 'me':
        viewUrl = '../vientos-me/vientos-me'
        break

      case 'project':
        viewUrl = '../vientos-project-profile/vientos-project-profile'
        break

      case 'edit-project-details':
        viewUrl = '../vientos-edit-project-details/vientos-edit-project-details'
        break
    }

    viewUrl += '.html'

    var resolvedPageUrl = this.resolveUrl(viewUrl)
    this.importHref(resolvedPageUrl, null, this._showPage404, true)
  },

  _toggleLanguage (e) {
    if (this.language === 'en') {
      this.dispatch('setLanguage', 'es')
    } else {
      this.dispatch('setLanguage', 'en')
    }
  },

  _showPage404 () {
    this.page = 'view404'
  },

  _findProject (page, projectId, projects) {
    if (page !== 'project' && page !== 'edit-project-details') return null
    return projects.find(p => p._id === util.urlFromId(projectId, 'projects'))
  },

  _filterProjects: util.filterProjects,

  _extractLocations: util.extractLocations,

  _updateBoundingBox (e, detail) {
    if (this.page === 'map') {
      this.dispatch('setBoundingBox', detail)
    }
  },

  _toggleDrawer () {
    this.$$('app-drawer').toggle()
  },

  _sessionChanged (session) {
    if (session && session.person) {
      this.dispatch('fetchPerson', session.person)
    }
  },

  ready () {
    this.dispatch('hello')
    this.dispatch('fetchLabels')
    this.dispatch('fetchCategories')
    this.dispatch('fetchCollaborationTypes')
    this.dispatch('fetchProjects')
    this.dispatch('fetchIntents')
  }

})