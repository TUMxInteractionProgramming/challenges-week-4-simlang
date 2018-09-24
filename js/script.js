var currentChannel;
var currentLocation = {longitude: 48.264729, latitude: 11.671401, what3words: 'builder.eyelid.scam'};

/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channel Channel which is set
 */
function switchChannel(channel) {
    //Log the channel switch
    console.log("Tuning in to channel", channel);

    currentChannel = channel;

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channel.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/' + channel.createdBy + '" target="_blank"><strong>' + channel.createdBy + '</strong></a>';

    /* #6 #liking channels on #click */
    $('#channel-star').attr('class', ((channel.starred) ? 'fas' : 'far') + ' fa-star')

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channel.name + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    currentChannel.starred = !currentChannel.starred;
    var startype = currentChannel.starred ? 'fas fa-star' : 'far fa-star';
    $('#channels .selected .fa-star').attr('class', startype);
    $('#channel-star').attr('class', startype);
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

//Message methods

function sendMessage(text) {
    var newMessage = new Message(text);
    console.log(newMessage);

    var newElement = $('<div>');
    newElement.addClass('message');

    if(newMessage.own)
        newElement.addClass('own');

    newElement.html(createMessageObject(newMessage));
    
    $('#messages').append(newElement);

    $('#messages').scrollTop($('#messages').height());
    $('#message-field').val('');
}

function createMessageObject(messageObject) {
    var expiresIn = Math.round((((messageObject.expiresOn - Date.now()) % 86400000) % 3600000) / 60000);
    

    var messageElement = 
    //'<div class="message">' +
    '<h3><a href="' + messageObject.createdBy + '" target="_blank"><strong>' + messageObject.createdBy + '</strong></a>' +
        messageObject.createdOn.toDateString() + ', ' + messageObject.createdOn.toTimeString().substring(0, 5) + '<em>' + expiresIn + ' min. left</em></h3>' +
    '<p>' + messageObject.text + '</p>' + 
    '<button>+5 min.</button>';
    //'</div>';

    return messageElement;
}

function Message(text) {
    this.createdBy = currentLocation.what3words;
    this.longitude = currentLocation.longitude;
    this.latitude = currentLocation.latitude;
    this.createdOn = new Date(Date.now());
    this.expiresOn = new Date(Date.now() + 900000); //900_000 millis are 15 mins
    this.text = text;
    this.own = true;
}