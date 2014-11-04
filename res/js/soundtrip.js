/*
 Copyright 2014 Paul Swift <paul@swiftace.com>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Immediately Invoked Function Expression (IIFE) to define and configure the SoundTrip object.
// Uses the Singleton pattern, see http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
var SoundTrip = (function () {
    // Strict mode has intentionally different semantics to non-strict mode, and isn't supported in older browsers.
    'use strict';

    // Instance stores a reference to the Singleton
    var instance;
 
    function init() {

        // Singleton

        // Private methods and variables

        /**
         * Sound queue protoype.
         * Protoype pattern: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript
         */
        var SoundQueuePrototype = {

            // Properties
            type: '',
            spec: {
                path: '/',
                multiShot: false,
                loop: false,
                queue: false,
                crossFade: false
            },
            queue: {},

            // Methods
            push: function (soundId) {},
            pauseOn: function () {},
            pauseOff: function () {},
            volume: function () {},
            clear: function () {}

        };

        // Holds structured list of sounds
        var resources = {};

        // Holds sound queues
        var soundQueues = [];

        return {

            // Public methods and variables

            /**
             * Configuration hash of key/value pairs.
             * Includes default configuration options.
             *
             * @type object
             */
            config: {
                resourcePath: '/res/sound/',
                soundTypes: {
                    ambient: {
                        path: 'ambient/',
                        multiShot: false,
                        loop: true,
                        queue: false,
                        crossFade: true
                    },
                    music: {
                        path: 'music/',
                        multiShot: false,
                        loop: false,
                        queue: true,
                        crossFade: false
                    },
                    effect: {
                        path: 'effect/',
                        multiShot: true,
                        loop: false,
                        queue: true,
                        crossFade: false
                    }
                }
            },

            /**
             * Set sound resources.
             */
            setResources: function (resources) {
                this.resources = resources;

                return this;
            },

            /**
             * Get sound resources.
             */
            getResources: function () {
                return this.resources;
            },

            /**
             * Destroy queues and build afresh.
             */
            initialiseSoundQueues: function () {
                // todo: Stop any currently playing sounds first!
                this.soundQueues = [];

                // Loop though this.config.soundTypes and create a queue for each

                var basePath = this.config.resourcePath;
                var soundTypes = this.config.soundTypes;
                for (var key in soundTypes) {
                    var q = this.SoundQueuePrototype;

                    q.type = key;
                    q.spec = soundTypes[key];
                    q.spec.path = basePath + q.spec.path;

                    this.soundQueues.push(q)
                }
            },

            /**
             * Initialise sound queues and return rendered sound board HTML based on resources and config.
             */
            createBoard: function () {
                this.initialiseSoundQueues();

                return '<p>Hello!</p>';
            },

            /**
             * Play a sound (add to appropriate queue if a queue-able item).
             */
            soundPlay: function (soundId) {
            },

            /**
             * Pause a sound.
             */
            soundPauseOn: function (soundId) {
            },

            /**
             * Un-pause a paused sound.
             */
            soundPauseOff: function (soundId) {
            },

            /**
             * Stop a sound (remove from queue if a queue-able item).
             */
            soundStop: function (soundId) {
            },

            /**
             * Set a sound's volume as % of global volume.
             */
            soundVolume: function (soundId, volume) {
            },

            /**
             * Pause all sounds.
             */
            allPauseOn: function () {
            },

            /**
             * Un-pause all paused sounds.
             */
            allPauseOff: function () {
            },

            /**
             * Stop all sounds (empty queues of queue-able items).
             */
            allStop: function (soundId) {
            },

            /**
             * Set global volume as %.
             */
            allVolume: function (soundId, volume) {
            },

        };

    }

    return {
 
        // Get the Singleton instance if one exists or create one if it doesn't
        getInstance: function () {
 
            if ( ! instance) {
                instance = init();
            }
 
            return instance;
        }
 
    };

})();