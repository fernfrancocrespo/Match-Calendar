import _ from 'lodash';
import template from './template.html';

class AppCacheUpdaterCtrl {
    constructor($window, $interval) {
        this.$window = $window;

        this.status = 'unsupported';
        this.progress = 0;

        if (!_.isUndefined($window.applicationCache)) {
            const cache = $window.applicationCache;

            // Show nothing for 'noupdate' (cache is fine) 'obsolete' (cache manifest gone) and 'cached' (initial cache)
            cache.addEventListener('noupdate', () => {
                this.status = 'idle';
            });
            cache.addEventListener('obsolete', () => {
                this.status = 'idle';
            });
            cache.addEventListener('cached', () => {
                this.status = 'idle';
            });

            // All other events set their own status
            ['checking', 'downloading', 'updateready', 'error', 'progress']
                .forEach(event => cache.addEventListener(event, () => {
                    this.status = event;
                }));

            // Listen to progress events to update the percentage
            cache.addEventListener('progress', progress => {
                this.progress = progress.loaded / progress.total * 100;
            });

            // Recheck cache every hour
            $interval(() => cache.update(), 1000 * 60 * 60);
        }
    }

    shouldShow() {
        return this.status !== 'idle' && this.status !== 'unsupported';
    }

    reload() {
        this.$window.location.reload();
    }
}
AppCacheUpdaterCtrl.$inject = ['$window', '$interval'];

/**
 * @ngdoc directive
 * @name directive:appCacheUpdater
 * @description Keeps track of appcache status and show download progress + offers to restart
 */
function appCacheUpdater() {
    return {
        restrict: 'EA',
        template,
        scope: {},
        controller: AppCacheUpdaterCtrl,
        controllerAs: 'updater',
        bindToController: true
    };
}
appCacheUpdater.$inject = [];

export default appCacheUpdater;
