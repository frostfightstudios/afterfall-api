const fetch = require('node-fetch');
const token = "token here";

async function getCharacterByName(name) {
    let status; // API HTTP Status Code
    fetch(`https://api.afterfall-game.com/v3/api/search/character/name/`+name, {
        headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer'+token,
            }
    }).then((res) => {
        status = res.status;
        return res.json();
    }).then(json => {
            if(status !== 200){
                //Handle an error here
            }else {
                const charName = json['name'];
                const charUiD = json['character_uid'];
                const charCreatedAt = json['created'];
                const charPlayTime = json['playtime'];
                const charLevel = json['level'];
                const charDZ = json['dz_level'];
                const charTitleId = json['title_id']; // For further requests.
                let charTitle;
                fetch(`https://api.afterfall-game.com/v3/api/title/`+ charTitleId, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token,
                       }
                }).then((res) => {
                    status = res.status;
                    return res.json();
                }).then(json_title => {
                    if(status === 200){
                        charTitle = json_title['name'];
                    }else {
                        charTitle = "Unknown"; // Either an 500, unauthorized or there is just no title with that ID (Can happen but is pretty rare!)
                    }
                }).catch(err => {
                    //Handle any other error that could occur
                });
            }
        }).catch(err => {
                //Handle any other error that could occur
        });
}