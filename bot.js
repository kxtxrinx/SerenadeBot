const tmi = require('tmi.js')



const opts = {
    identity: {
        username: 'serenadebot',
        password: 'PASS GOES HERE'
    },
    channels: [
        'worstkateuw',
        //Add channels here where the bot would work in
    ]
}

const client = new tmi.client(opts)

client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)

client.connect()

var cont = 1;

//TODO: Don't get lyrics from array but from remote db
var lyricsArray = ["In my imagination, you're waitin' lyin' on your side", "It seems like once again you've had to greet me with goodbye", "Come to find you four in some velvet mornin' years too late", "Do I wanna know if this feeling flows both ways?", "I bet that you look good on the dance floor","You're rarer than a can of dandelion and burdock.", "I've dreamt about you nearly every night this week", "You're a starry-eyed surprise"]

function onMessageHandler(channel, tags, msg, self){
    if(self){
        return; //Ignore messages from bot
    }

    const commandName = msg.trim() //Removing whitespace

    if(commandName == '!dice'){
        const num = rollDice()
        if(tags.username == `onleesinskill`){
            if(cont==1){
                client.say(channel, `here goes custom text dedicated to this user`)
            }else if(cont==2){
                client.say(channel, `here goes custom text dedicated to this user`)
            }else if(cont==3){
                client.say(channel, `here goes custom text dedicated to this user`)
            }else{
                if(num==3){
                    client.say(channel, `${tags.username} you got a ${num} custom text when num is 3`)
                }else if(num==4){
                    client.say(channel, `${tags.username} you got a ${num} custom text when num is 4`)
                }else if(num==5){
                    client.say(channel, `${tags.username} you got a ${num} custom text when num is 5`)
                }else if(num==6){
                    client.say(channel, `${tags.username} you got a ${num} custom text when num is 6`)
                }else if(num==7){
                    client.say(channel, `${tags.username} you got a ${num} custom text when num is 7`)
                }else if(num==8){
                    client.say(channel, `${tags.username} you got a ${num} custom text when num is 8`)
                }else if(num==9){
                    client.say(channel, `${tags.username} you got a ${num} custom text when num is 9`)
                }
            }
            cont++;
        }else{
            client.say(channel, `${tags.username} you got a ${num}`)
        }
    }else if (commandName.startsWith('!dedicate'))  {
        // Obtener el nombre de usuario mencionado después del comando
        const usernameRegex = /@(\w+)/; // Expresión regular para buscar el nombre de usuario
        const matches = msg.match(usernameRegex); // Buscar coincidencias en el mensaje
      
        console.log(matches)
        
        if (matches && matches.length > 1) {
          const mentionedUsername = matches[1]; // Obtener el nombre de usuario mencionado
          var randomLyrics = Math.trunc(Math.random()* lyricsArray.length)
          client.say(channel, `${mentionedUsername}, this is for you: ${lyricsArray[randomLyrics]}`)
          
        } 
    }else{
        console.log("Unknown comm")
    }
}

function rollDice(){
    return Math.trunc(Math.random()*9 + 1)
}

function onConnectedHandler (addr, port){
    console.log(`* Connected to ${addr}:${port}`)
}