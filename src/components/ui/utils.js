import gapi from 'googleapis';

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
                function(err) { console.error("Error signing in", err); });
}

export const loadClient = () => {
    gapi.client.setApiKey("AIzaSyBka38O_H66mkC_QiPEy_EmT1V0wXDkrWM");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
}

  // Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    return gapi.client.youtube.channels.list({
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "id": [
            "UC_x5XG1OV2P6uZZ5FSM9Ttw"
        ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
}

gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
});
