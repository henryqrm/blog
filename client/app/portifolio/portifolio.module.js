'use strict';
angular.module('sampleApp.portifolio',[

    //dependece external
    'br.fullpage',
    'ui.router',

    //dependece internal
    'sampleApp.portifolio.controller',
    'sampleApp.portifolio.router',
    'sampleApp.portifolio.service',
    'sampleApp.portifolio.home.controller',
    'sampleApp.portifolio.profile.controller',
    'sampleApp.portifolio.skills.controller',
    'sampleApp.portifolio.contact.controller',
    'sampleApp.portifolio.contact.service'

]);
