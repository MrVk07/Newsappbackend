import venom from 'venom-bot'

let website = "NEWSGORILLA"

const json = {
    "Hi": "Welcome to " + website + ".\nUpdate yourself with latest news by our website: https://newsgoorilla.netlify.app/ \n Options : \nGeneral \n Business \nEntertainment \nHealth \nSports \nScience \nTechnology",
    "General": "General news : https://newsgoorilla.netlify.app/"+ " General",
    "Business": "Business news : https://newsgoorilla.netlify.app/ "+ " Business",
    "Entertainment": "Entertainment news: https://newsgoorilla.netlify.app/ "+ " Entertainment",
    "Health": "Health news : https://newsgoorilla.netlify.app/"+ " Health",
    "Sports": "Sports news :https://newsgoorilla.netlify.app/"+ " Sports",
    "Science": "Science news :https://newsgoorilla.netlify.app/"+ " Science",
    "Technology": "Technology news : https://newsgoorilla.netlify.app/"+ " Technolgoy"
}


const whatsapp=()=>{

    venom
        .create({
            session: 'session-name', //name of session
            multidevice: true // for version not multidevice use false.(default: true)
        })
        .then((client) => start(client))
        .catch((erro) => {
            console.log(erro);
        });
    
    function start(client) {
        client.onMessage((message) => {
            if (message.body.toLowerCase().includes('hi') && message.isGroupMsg === true) {
                client
                    .sendText(message.from, json.Hi)
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            if (message.body.toLowerCase().includes('general') && message.isGroupMsg === true) {
                client
                    .sendText(message.from, json.General)
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            if (message.body.toLowerCase().includes('business') && message.isGroupMsg === true) {
                client
                    .sendText(message.from, json.Business)
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            if (message.body.toLowerCase().includes('entertainment') && message.isGroupMsg === true) {
                client
                    .sendText(message.from, json.Entertainment)
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            if (message.body.toLowerCase().includes('health') && message.isGroupMsg === true) {
                client
                    .sendText(message.from, json.Health)
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            if (message.body.toLowerCase().includes('sports') && message.isGroupMsg === true) {
                client
                    .sendText(message.from, json.Sports)
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            if (message.body.toLowerCase().includes('technology') && message.isGroupMsg === true) {
                client
                    .sendText(message.from, json.Technology)
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
        });
    }
}

export default whatsapp