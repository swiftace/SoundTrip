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

// This ensures that the global scope has only one SoundTrip defined, making it act as a singleton.
var SoundTrip = SoundTrip || {};

// Immediately Invoked Function Expression (IIFE) to define and configure the SoundTrip object.
(function() {
    // Strict mode has intentionally different semantics to non-strict mode, and isn't supported in older browsers.
    'use strict';

    /**
     * Configuration hash of key/value pairs.
     * Includes default configuration options.
     *
     * @type object
     */
    SoundTrip.config = {
        'resourcePath': '/resource/sound/'
        'ambient': {
            'path': 'ambient/',
            'multiShot': false,
            'loop': true,
            'queue': false,
            'crossFade': true
        },
        'music': {
            'path': 'music/',
            'multiShot': false,
            'loop': false,
            'queue': true,
            'crossFade': false
        },
        'effect': {
            'path': 'effect/',
            'multiShot': true,
            'loop': false,
            'queue': true,
            'crossFade': false
        }
    };

    /**
     * 
     */
    SoundQueue.prototype = {
        push: function(soundId) {
        }

        pause: function(soundId) {
        }

        clear: function(soundId) {
        }
    };

    /**
     * Add sound resource data.
     */
    SoundTrip.addResources = function() {
    };

    /**
     * Render sound board HTML based on resources.
     */
    SoundTrip.renderBoard = function() {
    };

    /**
     * Play a sound (add to appropriate queue if a queue-able item).
     */
    SoundTrip.soundPlay = function(soundId) {
    };

    /**
     * Pause a sound.
     */
    SoundTrip.soundPauseOn = function(soundId) {
    };

    /**
     * Un-pause a paused sound.
     */
    SoundTrip.soundPauseOff = function(soundId) {
    };

    /**
     * Stop a sound (remove from queue if a queue-able item).
     */
    SoundTrip.soundStop = function(soundId) {
    };

    /**
     * Set a sound's volume as % of global volume.
     */
    SoundTrip.soundVolume = function(soundId, volume) {
    };

    /**
     * Pause all sounds.
     */
    SoundTrip.allPauseOn = function() {
    };

    /**
     * Un-pause all paused sounds.
     */
    SoundTrip.allPauseOff = function() {
    };

    /**
     * Stop all sounds (empty queues of queue-able items).
     */
    SoundTrip.allStop = function(soundId) {
    };

    /**
     * Set global volume as %.
     */
    SoundTrip.allVolume = function(soundId, volume) {
    };

}());