/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements. See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership. The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$(document).one("pagecreate", "#page1", function () {
var deals = [{"id":1, "user":"otherUser", "picLink":"img/pikachuCrop.jpg", "category":"misc",
"description":"It's a good deal bc it's cool and stuff and stuff and stuff anddd Pikachuuuu", 
"store":"Target", "city":"Fredericksburg", "state":"Virginia", "timestamp": 1403238709123},

{"id":2, "user":"otherUser", "picLink":"img/dinoHatCrop.jpg", "category":"clothes",
"description":"It's a good deal bc it's cool and stuff and stuff and stuff and dino hat for the winnnnnn", 
"store":"DeviantArt", "city":"Ashburn", "state":"Virginia", "timestamp": 1403238637001},

{"id":3, "user":"otherUser", "picLink":"img/beardHatCrop.jpg", "category":"clothes",
"description":"It's a good deal bc it's cool and stuff and stuff and stuff and bearded hat baby for the winnnnn!!!!", 
"store":"Target", "city":"Fredericksburg", "state":"Virginia", "timestamp": 1404005128000},

{"id":4, "user":"otherUser", "picLink":"img/turtleCrop.jpg", "category":"food",
"description":"It's a good deal bc it's cool and stuff and stuff and stuff and super cute bc turtle eating strawberry", 
"store":"StrawberryLand", "city":"Centreville", "state":"Virginia", "timestamp": 1404005940012}];



deals.sort(function(a,b) { return b.timestamp - a.timestamp } );



var dealsTemplate = _.template($('#deals-list-template').html(), {deals:deals});
$("#deals").html(dealsTemplate).enhanceWithin();
//$("#deals").append(dealsTemplate).enhanceWithin();
//console.log(dealsTemplate);
});
