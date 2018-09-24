
var yummy = 
    {name: "#Yummy", createdOn: new Date(2016, 3, 1), createdBy: "minus.plus.yummy", starred: false, expiresIn: 100, messageCount: 999};
var sevenContinents = 
    {name: "#SevenContinents", createdOn: new Date(2016, 3, 1), createdBy: "minus.plus.yummy", starred: true, expiresIn: 100, messageCount: 999};
var killerApp = 
    {name: "#KillerApp", createdOn: new Date(2016, 3, 1), createdBy: "minus.plus.yummy", starred: false, expiresIn: 100, messageCount: 999};
var firstPersonOnMars = 
    {name: "#FirstPersonOnMars", createdOn: new Date(2016, 3, 1), createdBy: "minus.plus.yummy", starred: true, expiresIn: 100, messageCount: 999};
var octoberfest = 
    {name: "#Octoberfest", createdOn: new Date(2016, 3, 1), createdBy: "minus.plus.yummy", starred: false, expiresIn: 100, messageCount: 999};



function listChannels(){
    $('#channels ul').append(createChannelObject(yummy));
    $('#channels ul').append(createChannelObject(sevenContinents));
    $('#channels ul').append(createChannelObject(killerApp));
    $('#channels ul').append(createChannelObject(firstPersonOnMars));
    $('#channels ul').append(createChannelObject(octoberfest));
}
    
function createChannelObject(channelObject){
    var newChannelObject = $('<li>'); 
    newChannelObject.click(function() {
        switchChannel(channelObject);
    });
    newChannelObject.html(channelObject.name);

    var channelSpan = $('<span>').attr('class', 'channel-meta');
    channelSpan.append($('<i>').attr('class', (channelObject.starred? 'fas' : 'far') + ' fa-star'));
    channelSpan.append($('<span>').html(channelObject.expiresIn + ' min'));
    channelSpan.append($('<span>').html(channelObject.messageCount + ' new'));
    channelSpan.append($('<i>').attr('class', 'fas fa-chevron-right'));
    newChannelObject.append(channelSpan);
    
    return newChannelObject;
}