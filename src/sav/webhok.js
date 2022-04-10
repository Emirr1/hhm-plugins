var room = HBInit({ roomName: "Webhooks", noPlayer:true, public:true, maxPlayers: 30});

function sendAnnouncementToDiscord(message) {

    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/962680127546859520/vjQlHHG8kHlbcBIx9S7xzTeGJ-w6Ab-b5yr2jLkEDr7HJ6yAy_BOyxq24BqfSPvJwHIq");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        avatar_url: '',
        username: 'Your Discord Webhook',
        content: message
    };

    request.send(JSON.stringify(params));
}

room.onPlayerJoin = function(player){
    console.log(player.name + " has joined.");
}

room.onPlayerLeave = function(player){
    console.log(player.name + " has left.");
}

room.onPlayerChat = function(player,msg){
    console.log(player.name + ": " + msg);
    sendAnnouncementToDiscord(msg);
};
