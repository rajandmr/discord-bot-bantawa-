require('dotenv').config();
require('./db');
const moment = require('moment')

const ProfileModel = require('./model/profile')

const game_mode = require('./game_mode');
const lobby_type = require('./lobby_type');
const heroes = require('./heroes');

const { Client, MessageAttachment, MessageEmbed, MessageFlags } = require('discord.js');

const Canvas = require('canvas');

const isImageURL = require('image-url-validator').default;

const client = new Client();


const Axios = require('axios');




client.on('ready', () => {
    console.log(`${client.user.username} has logged in`)
})

const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


const prefix = 'bantaba'
const prefix2 = 'Bantaba'
const prefix3 = 'bantawa'
const prefix4 = 'Bantawa'




client.on('message', async (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content === 'hello bantawa') {
        message.channel.send('bantawa haina kta ho bantaba ho. la aba feri vana')
    }
    if (message.content === 'hello bantaba') {
        var a = Math.floor((Math.random() * 3))
        if (a === 0) {
            message.channel.send('k xa yar kta ho scam ma pariyo nita aaja')
        }
        if (a === 1) {
            message.channel.send('aau kta ho dota kheldim')
        }
        if (a === 2) {
            message.channel.send('mai ho sapai vanda pro')
        }
    }
    if (message.content === 'dota khelam bantawa') {
        message.channel.send('khoki lagiraxa malai ma alik paxi aauxu')
    }
    if (message.content === 'bantaba stream') {
        var a = Math.floor((Math.random() * 3));
        if (a === 0) {
            message.channel.send('playing from data')
        }
        if (a === 1) {
            message.channel.send('net lag xa yar adkiraxa')
        }
        if (a === 2) {
            message.channel.send('lang nagar muji harirako bela')
        }

    }
    if (message.content === 'bantaba pro') {
        message.channel.send('bantaba pro the divine killer vana malai')
    }
    if (message.content === 'bantawa pro') {
        message.channel.send('ancient divine haru lai ta ma breakfast ma khanxu')
    }
    if (message.content === 'bantawa noob') {
        message.channel.send('yo sab content ko lagi ho yar')
    }
    if (message.content === 'bantaba noob') {
        message.channel.send('thik xa malai yiniharu ko khela manparyo')
    }
    if (message.content === 'bantawa name') {
        message.channel.send('yugesh chandra bantawa rai')
    }
    if (message.content === 'bantawa rank') {
        message.channel.send('legend 2 on main but plays are of herald player')
    }
    if (message.content === 'bantaba virgin') {
        var a = Math.floor(Math.random() * 2);
        if (a === 0) {
            message.channel.send('virgin re gau ma malai call boy vanthyo')
        }
        if (a === 1) {
            message.channel.send('mero gau ko escort boy ho ma')
        }
    }
    if (message.content === 'miracle miracle') {
        message.channel.send('ID: Nepdeathdust')
        message.channel.send('password: Deathdust007')
    }
    if (message.content === 'ravi oad') {
        message.channel.send('ID: gyabihangrai3')
        message.channel.send('password: ayush7117')
    }
    if (message.content === 'play dota') {
        message.channel.send('ID: sudesh323')
        message.channel.send('password: sudesh9840067324')
    }
    if (message.content === 'hello') {
        message.reply('hello')
    }




    try {
        if (message.content.startsWith(prefix) || message.content.startsWith(prefix2) || message.content.startsWith(prefix3) || message.content.startsWith(prefix4)) {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift();
            if (command === 'play') {
                const voiceChannel = message.member.voice.channel;
                if (!voiceChannel) {
                    message.channel.send('Geet sunna manxa vane voice channel ma basa yar k ho yesto para')
                }
                const permissions = voiceChannel.permissionsFor(message.client.user);
                if (!permissions.has('CONNECT')) return message.channel.send('tmro permission raina raixa bot lai connect garne');
                if (!permissions.has('SPEAK')) return message.channel.send('tmro permission raina raixa bot lai chalaune')
                if (!args.length) return message.channel.send('geet ko name ni deuna yar k ho yesto para')

                var connection = await voiceChannel.join();

                const videoFinder = async (query) => {
                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }
                console.log(args.join(" "))
                const video = await videoFinder(args.join(" "))

                if (video) {
                    const stream = ytdl(video.url, { filter: 'audioonly' });
                    connection.play(stream, { seek: 0, volume: 1 })
                        .on('finish', () => {
                            voiceChannel.leave();
                        })
                    await message.channel.send(`:musical_note::musical_note: Now playing ***${video.title} ${video.url}***`)
                } else {
                    message.channel.send("youtube ma video vetena")
                }


            }
            if (command === 'stop') {
                message.member.voice.channel.leave();
                var a = Math.floor(Math.random() * 3);
                if (a === 0) {
                    message.channel.send('ok guys later')
                }
                if (a === 1) {
                    message.channel.send('gako aile lai ma')
                }
                if (a === 2) {
                    message.channel.send('paxi geet sunne bela bolau')
                }

            }

            if (command === 'flip') {
                var a = Math.floor(Math.random() * 2);
                if (a === 0) {
                    message.channel.send(`>>> ***Heads*** aayo kta ho :exploding_head: `)
                }
                if (a === 1) {

                    message.channel.send(`>>> la thik xa ***Tails*** raixa :cocktail: `)
                }
            }

            if (command === 'check') {
                message.channel.send(`${message.author.tag}`)
            }

            if (command === 'create') {
                if (!args.length) return message.channel.send('character ko name ni chaiyo');
                ProfileModel.find({
                    Tag: message.author.tag
                }, (err, profile) => {
                    if (err) {
                        return message.channel.send('database problem aayo feri try gara hai sathi')
                    }
                    else if (profile.length !== 0) {
                        console.log(profile)
                        return message.channel.send(`tmro character already raixa ta sathi **${profile[0].Name}** vanne. name edit garne vaye use ***bantaba edit <newName>*** `)
                    }
                    else {
                        const Username = message.author.username;
                        const Tag = message.author.tag;
                        const UserId = message.author.id;
                        const Name = args.join(" ").toLowerCase();
                        let msg = `>>> your character name is **${Name}**
your **Race** will be selected as random.
you can react on right to create your character or wrong to cancel`

                        message.channel.send(msg).then(message => {
                            message.react('✅')
                            message.react('❎');
                            client.on('messageReactionAdd', (reaction, user) => {
                                if (user.bot) {
                                    return
                                }
                                if (reaction.emoji.name === '✅') {
                                    if (user.id === UserId) {
                                        const newProfile = new ProfileModel({});
                                        newProfile.Name = Name;
                                        newProfile.UserId = UserId;
                                        newProfile.Tag = Tag;
                                        newProfile.UserName = Username;
                                        newProfile.Race = 'KothiWala'
                                        newProfile.save((err, saved) => {
                                            if (err) {
                                                message.delete()
                                                message.channel.send('database ma rakhnu ma kharabi aayo paxi try garnu hola')
                                            } else {
                                                message.delete()
                                                message.channel.send(`aja dekhi tmro name ${Name} yaad rakha natra ***bantaba profile*** garera hera`)
                                            }

                                        })
                                    }
                                }


                                if (reaction.emoji.name === '❎') {
                                    if (user.id === UserId) {
                                        message.delete()
                                        message.channel.send('arko pali banau hai dost aile lai nabanayeni')
                                    }
                                }
                            })
                        })
                            .catch(e => console.log(e))
                    }



                })

            }
            if (command === 'laugh') {
                message.react('😂')
            }
            if (command === 'angry') {
                message.react('😡')
            }
            if (command === 'sad') {
                message.react('😔')
            }
            if (command === 'sleep') {
                message.react('😴')
            }
            if (command === 'clap') {
                message.react('👏')
            }
            if (command === 'ok') {
                message.react('👍')
            }


            if (command === 'profile') {
                ProfileModel.find({
                    Tag: message.author.tag
                }).then(async (profile) => {


                    try {
                        if (!profile[0]) {
                            return message.channel.send('character banau suruma use ***bantaba create <name>***')
                        }
                        const canvas = Canvas.createCanvas(800, 740);

                        const ctx = canvas.getContext('2d');
                        let backgroundUrl = profile[0].ImageUrl === 'X-URL' ? './wallpaper.jpg' : profile[0].ImageUrl
                        const background = await Canvas.loadImage(backgroundUrl);
                        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                        ctx.strokeStyle = '#0933ad';
                        ctx.strokeRect(0, 0, canvas.width, canvas.height);

                        ctx.font = applyText(canvas, profile[0].Name)
                        ctx.fillStyle = '#433f4a';
                        ctx.fillText(`Name: ${profile[0].Name}`, 250, 100);
                        ctx.fillText(`Race: ${profile[0].Race}`, 250, 170);
                        ctx.fillText(`$${profile[0].Gold}`, 360, 250);
                        ctx.fillText(`Guild: ${profile[0].Guild}`, 50, 350);
                        ctx.fillText(`Lvl: ${profile[0].Level}`, 50, 420);
                        ctx.fillText(`Tag: ${profile[0].Tag}`, 50, 490);
                        ctx.fillText(`Status: ${profile[0].Status}`, 50, 560);
                        ctx.fillText(`ATK: ${profile[0].Attack}`, 300, 420)
                        ctx.fillText(`DEF: ${profile[0].Defense}`, 550, 420);
                        ctx.fillText(`GOD: ${profile[0].God}`, 50, 630);
                        ctx.fillText(`Married: ${profile[0].IsMarried}`, 50, 700);
                        if(profile[0].SteamID){
                            ctx.fillText(`Steam ID: ${profile[0].SteamID}`, 360, 630);
                        }



                        const goldBagUrl = 'https://cdn.imgbin.com/17/2/9/imgbin-money-bag-money-bag-gold-coin-lakshmi-gold-coin-4R7yB5ZRN4q58X9CNLG21yvHe.jpg'
                        const goldBag = await Canvas.loadImage(goldBagUrl);
                        ctx.drawImage(goldBag, 270, 200, 70, 70);

                        // Pick up the pen
                        ctx.beginPath();
                        // Start the arc to form a circle
                        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
                        // Put the pen down
                        ctx.closePath();
                        // Clip off the region you drew on
                        ctx.clip();

                        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));
                        ctx.drawImage(avatar, 25, 25, 200, 200);




                        const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

                        message.channel.send(attachment);
                    } catch (e) {
                        console.log(e)
                    }

                }).catch(e => {
                    console.log(e)
                })
            }

            if (command === 'edit') {
                if (!args.length) return message.channel.send('newName ni deu sathi chado');
                ProfileModel.findOne({
                    Tag: message.author.tag
                }).exec().then(profile => {
                    if (profile) {
                        const oldName = profile.Name;
                        const newName = args.join(" ");
                        profile.Name = newName
                        profile.save((err, saved) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                message.channel.send(`tmro name **${oldName}** bata aba **${saved.Name}** vayo la moj gara`)
                            }
                        })
                    } else {
                        message.channel.send('xaina profile nai k ko edit hau')
                    }
                }).catch(e => console.log(e))
            }

            if (command === 'image') {
                if (!args.length) {
                    return message.channel.send('image ko url ni deu sathi')
                }
                const url = args.join(" ");

                if (await isImageURL(url)) {
                    ProfileModel.findOne({
                        Tag: message.author.tag
                    }).then(profile => {
                        if (profile) {
                            profile.ImageUrl = url
                            profile.save((err, saved) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    message.channel.send('image set gariyo aba ***bantaba profile*** garera check gara')
                                }
                            })
                        } else {
                            message.channel.send('profile banau suruma')
                        }
                    }).catch(e => console.log(e))
                } else {
                    message.channel.send('image ko url valid xaina sathi thik url pathau hai natra hudeina')
                }
            }
            if (command === 'dota') {
                if (!args.length) {
                    return message.channel.send('steam id deu sathi')
                }
                const id = args.join(" ")
                Axios.get(`https://api.opendota.com/api/players/${id}`)
                    .then((data) => {
                        if (typeof data.data.profile !== 'object') return message.channel.send('vetena tmro profile sathi data publicly expose gara dota kholera')
                        const dota2Profile = new MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle('Dota 2')
                            .setAuthor(`${data.data.profile.personaname}`, `${data.data.profile.avatar}`)
                            .addFields(
                                { name: 'MMR', value: `${data.data.mmr_estimate.estimate}` },

                            )
                            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU')

                        message.channel.send(dota2Profile)
                    })
                    .catch(e => console.log(e))

            }

            if (command === 'dota2') {
                if (!args.length) {

                    return message.channel.send('type **bantaba dota2 match 1** type match 1 for latest game ani tespaxi ko game haru chaiyo vane match2 kita match 3 number badaudei jau')
                }
                if (args[0] === 'match') {
                    const user = await ProfileModel.findOne({ Tag: message.author.tag });
                    if(!user.SteamID){
                        return message.channel.send('steam id set gara suruma use *** bantaba steam <id>***')
                    }
                    const id = user.SteamID;
                    args.shift();
                    if (!args.length) {
                        return message.channel.send('number xutexa numbber deu 1 to 100 samma matra')
                    }
                    const matchNumber = args[0];
                    if (matchNumber >= 1 && matchNumber <= 10000) {


                        const { data } = await Axios.get(`https://api.opendota.com/api/players/${id}/matches`);
                        const author = await Axios.get(`https://api.opendota.com/api/players/${id}`);

                        const stat = data[matchNumber - 1];
                        if(!stat){
                            return message.channel.send('dherei purano game raixa vetindeina yesko dost')
                        }
                        const heroId = stat.hero_id;
                        const player_slot = stat.player_slot;
                        const radiant_win = stat.radiant_win;
                    
                        const duration = moment.utc(stat.duration*1000).format('H:mm:ss');
                        let result = ''
                        let Team = ''
                        if(player_slot>=0&&player_slot<=127){
                            Team = 'Radiant'
                            if(radiant_win){
                                result = 'Win'
                            }else{
                                result = 'Loss'
                            }
                        }else{
                            Team= 'Dire'
                            if(radiant_win){
                                result ='Loss'
                            }else{
                                result='Win'
                            }
                        }
                        
                        let heroName = '';
                        let heroImage= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU';
                        heroes.map(hero => {
                            if (hero.id === heroId) {
                                heroName = hero.localized_name
                                if(hero.url_full_portrait){
                                    heroImage=hero.url_full_portrait
                                }
                            }
                        })

                        let partysize ='';
                        if(stat.party_size === 1){
                            partysize='solo queue'
                        }else{
                            partysize = `${stat.party_size} man party`
                        }
                        const lobby= stat.lobby_type;
                        const game = stat.game_mode;
                        const personaname = author.data.profile.personaname;
                        const avatar = author.data.profile.avatar;
                        const dota2stats = new MessageEmbed()
                            .setColor('#ad1005')
                            .setTitle('Dota 2')
                            .setAuthor(personaname, avatar)
                            .setDescription(`Played as **${heroName}**`)

                            .addFields(
                                {name: lobby_type[lobby].name, value:`${game_mode[game].name}`},
                                { name: 'Team', value: `**${Team}** (${result})` },
                                { name: 'Kills', value: stat.kills, inline: true },
                                { name: 'Deaths', value: stat.deaths, inline: true },
                                { name: 'Assists', value: stat.assists, inline: true }
                            )
                            .setThumbnail(heroImage)
                            .addFields(
                                {name:'Duration', value: duration, inline:true},
                                {name:'Party type',value: partysize,inline:true},
                                {name:'Leaver', value:stat.leaver_status?'leaver detected':'no leavers',inline:true}
                            )
                            


                        message.channel.send(dota2stats)
                    }
                    else {
                        message.channel.send("recent 10000 ota game ko matra stat vanxu ma")
                    }
                }
                if(args[0]==='hero'){
                    args.shift();
                    if(!args.length) return message.channel.send('use ***bantaba hero <heroName> <matchNumber> ***')
                    const size = args.length;
                    const matchNumber = args[size-1];
                  
                    args.pop();
                    let heroName = args.join(" ")
                    let heroId;
                    let heroImage= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU';
                    heroes.map(hero=>{
                        if(hero.localized_name.toLowerCase()===heroName){
                            heroId = hero.id;
                            heroName = hero.localized_name
                            if(hero.url_full_portrait){
                                heroImage = hero.url_full_portrait
                            }
                        }
                    })
                    if(!heroId){
                        return message.channel.send('hero ko name milena jasto xa feri try')
                    }
                   
                    const matches = [];
                    const user = await ProfileModel.findOne({Tag:message.author.tag});
                    const id = user.SteamID;
                    const {data} = await Axios.get(`https://api.opendota.com/api/players/${id}/matches`);
                    data.forEach(match=>{
                        if(match.hero_id===heroId){
                            matches.push(match);
                        };
                    })
                    if(!matches.length){
                        return message.channel.send('vetiyena yar game dherei purano raixa')
                    }
                    
                    const stat = matches[matchNumber-1];
                    if(!stat){
                        return message.channel.send('vetiyena yar game dherei purano raixa')
                    }
                    const player_slot = stat.player_slot;
                    const radiant_win = stat.radiant_win;
                
                    const duration = moment.utc(stat.duration*1000).format('H:mm:ss');
                    let result = ''
                    let Team = ''
                    if(player_slot>=0&&player_slot<=127){
                        Team = 'Radiant'
                        if(radiant_win){
                            result = 'Win'
                        }else{
                            result = 'Loss'
                        }
                    }else{
                        Team= 'Dire'
                        if(radiant_win){
                            result ='Loss'
                        }else{
                            result='Win'
                        }
                    }
                    const author = await Axios.get(`https://api.opendota.com/api/players/${id}`);
                    let partysize ='';
                    if(stat.party_size === 1){
                        partysize='solo queue'
                    }else{
                        partysize = `${stat.party_size} man party`
                    }
                    const lobby= stat.lobby_type;
                    const game = stat.game_mode;
                    const personaname = author.data.profile.personaname;
                    const avatar = author.data.profile.avatar;
                    const dota2stats = new MessageEmbed()
                        .setColor('#ad1005')
                        .setTitle('Dota 2')
                        .setAuthor(personaname, avatar)
                        .setDescription(`Played as **${heroName}**`)

                        .addFields(
                            {name: lobby_type[lobby].name, value:`${game_mode[game].name}`},
                            { name: 'Team', value: `**${Team}** (${result})` },
                            { name: 'Kills', value: stat.kills, inline: true },
                            { name: 'Deaths', value: stat.deaths, inline: true },
                            { name: 'Assists', value: stat.assists, inline: true }
                        )
                        .setThumbnail(heroImage)
                        .addFields(
                            {name:'Duration', value: duration, inline:true},
                            {name:'Party type',value: partysize,inline:true},
                            {name:'Leaver', value:stat.leaver_status?'leaver detected':'no leavers',inline:true}
                        )
                        


                    message.channel.send(dota2stats)

                }
            }
            if (command === 'embed') {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Some title')
                    .setURL('https://discord.js.org/')
                    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
                    .setDescription('Some description here')
                    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU')
                    .addFields(
                        { name: 'Regular field title', value: 'Some value here' },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Inline field title', value: 'Some value here', inline: true },
                        { name: 'Inline field title', value: 'Some value here', inline: true },
                    )
                    .addField('Inline field title', 'Some value here', true)
                    .setImage('https://i.imgur.com/wSTFkRM.png')
                    .setTimestamp()
                    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

                message.channel.send(exampleEmbed)
            }
            if (command === 'steam') {
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
                const steamId = args.join(" ");
                user.SteamID = steamId;
                await user.save();
                message.channel.send('Steam id set gariyo steam profile herne vaye use ***bantaba mmr***');
            }

            if (command === 'mmr') {
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
                if(!user.SteamID){
                    return message.channel.send('steam id set gara suruma use *** bantaba steam <id>***')
                }
                const id = user.SteamID;
                const data = await Axios.get(`https://api.opendota.com/api/players/${id}`);

                if (typeof data.data.profile !== 'object') return message.channel.send('vetena tmro profile sathi data publicly expose gara dota kholera')
                const dota2Profile = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Dota 2')
                    .setAuthor(`${data.data.profile.personaname}`, `${data.data.profile.avatar}`)
                    .addFields(
                        { name: 'MMR', value: `${data.data.mmr_estimate.estimate}` },

                    )
                    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU')

                message.channel.send(dota2Profile);



            }
            

        }
    }
    catch (e) {
        console.log(e);
    }







})






client.on('guildMemberAdd', (member) => {
    const channelId = '816676404879556621';
    const channel = member.guild.channels.cache.get(channelId)

    const message = `<@${member.id}> dost welcome welcome la aba ramailo garna parxa`;

    channel.send(message);



})


const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = process.env.FONT_SIZE;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        ctx.font = `${fontSize -= 10}px ${process.env.FONT}`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (ctx.measureText(text).width > canvas.width - 300);

    // Return the result to use in the actual canvas
    return ctx.font;
};




client.login(process.env.DISCORD_BOT_TOKEN)