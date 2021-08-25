require('dotenv').config();
require('./db');
const moment = require('moment')
const cheerio = require('cheerio');

const ProfileModel = require('./model/profile')
const Player = require('./model/player')


const game_mode = require('./game_mode');
const lobby_type = require('./lobby_type');
const heroes = require('./heroes');
const dota_items = require('./dota_items_old');



const { Client, MessageAttachment, MessageEmbed } = require('discord.js');

const Canvas = require('canvas');

const isImageURL = require('image-url-validator').default;

const client = new Client();


const Axios = require('axios');



client.on('voiceStateUpdate', async (oldState, newState) => {
    try {
        if (oldState.member.user.bot) return;

        if (newState.member.user.id === '371719302795100170') {
            const voiceChannel = newState.member.voice.channel;
            if (voiceChannel) {
                var connection = await voiceChannel.join();
                const stream = ytdl('https://www.youtube.com/watch?v=YZv4ThXewA4', { filter: 'audioonly' });
                connection.play(stream, { seek: 0, volume: 1 })
                    .on('finish', () => {
                        voiceChannel.leave();
                    })

            }
        }


    } catch (e) {
        console.log(e)
    }
})



client.on('ready', () => {
    console.log(`${client.user.username} has logged in`)
})

const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { default: axios } = require('axios');


const prefix = 'bantaba'
const prefix2 = 'Bantaba'
const prefix3 = 'bantawa'
const prefix4 = 'Bantawa'
const prefix5 = '#'
const prefix6 = '~'




client.on('message', async (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content === 'hello bantawa') {
        return message.channel.send('bantawa haina kta ho bantaba ho. la aba feri vana')
    }
    if (message.content === 'hello bantaba') {
        var a = Math.floor((Math.random() * 3))
        if (a === 0) {
            return message.channel.send('k xa yar kta ho scam ma pariyo nita aaja')
        }
        if (a === 1) {
            return message.channel.send('aau kta ho dota kheldim')
        }
        if (a === 2) {
            return message.channel.send('mai ho sapai vanda pro')
        }
    }
    if (message.content === 'dota khelam bantawa') {
        return message.channel.send('khoki lagiraxa malai ma alik paxi aauxu')
    }
    if (message.content === 'bantaba stream') {
        var a = Math.floor((Math.random() * 3));
        if (a === 0) {
            return message.channel.send('playing from data')
        }
        if (a === 1) {
            return message.channel.send('net lag xa yar adkiraxa')
        }
        if (a === 2) {
            return message.channel.send('lang nagar muji harirako bela')
        }

    }
    if (message.content === 'bantaba pro') {
        return message.channel.send('bantaba pro the divine killer vana malai')
    }
    if (message.content === 'bantawa pro') {
        return message.channel.send('ancient divine haru lai ta ma breakfast ma khanxu')
    }
    if (message.content === 'bantawa noob') {
        return message.channel.send('yo sab content ko lagi ho yar')
    }
    if (message.content === 'bantaba noob') {
        return message.channel.send('thik xa malai yiniharu ko khela manparyo')
    }
    if (message.content === 'bantawa name') {
        return message.channel.send('yugesh chandra bantawa rai')
    }
    if (message.content === 'bantawa rank') {
        return message.channel.send('legend 2 on main but plays are of herald player')
    }
    if (message.content === 'bantaba virgin') {
        var a = Math.floor(Math.random() * 2);
        if (a === 0) {
            return message.channel.send('virgin re gau ma malai call boy vanthyo')
        }
        if (a === 1) {
            return message.channel.send('mero gau ko escort boy ho ma')
        }
    }
    if (message.content === 'miracle miracle') {
        message.channel.send('ID: Nepdeathdust')
        return message.channel.send('password: Deathdust202107')
    }
    if (message.content === 'ravi oad') {
        message.channel.send('ID: gyabihangrai3')
        return message.channel.send('password: ayush7117')
    }
    if (message.content === 'play dota') {
        message.channel.send('ID: sudesh323')
        return message.channel.send('password: sudesh9840067324')
    }
    if (message.content === 'hello') {
        return message.reply('hello')
    }






    try {
        if (message.content.startsWith(prefix) || message.content.startsWith(prefix2) || message.content.startsWith(prefix3) || message.content.startsWith(prefix4) || message.content.startsWith(prefix5) || message.content.startsWith(prefix6)) {
            let args = '';
            if (message.content.startsWith(prefix5) || message.content.startsWith(prefix6)) {
                args = message.content.slice(1).trim().split(/ +/g);
            } else {
                args = message.content.slice(prefix.length).trim().split(/ +/g);
            }
            const command = args.shift();

            if (command === 'play') {
                const voiceChannel = message.member.voice.channel;
                if (!voiceChannel) {
                    return message.channel.send('Geet sunna manxa vane voice channel ma basa yar k ho yesto para')
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
                const video = await videoFinder(args.join(" "))

                if (video) {
                    const stream = ytdl(video.url, { filter: 'audioonly' });
                    connection.play(stream, { seek: 0, volume: 1 })
                        .on('finish', () => {
                            voiceChannel.leave();
                        })
                    await message.channel.send(`:musical_note::musical_note: Now playing ***${video.title} ${video.url}***`)
                    return;
                } else {
                    return message.channel.send("youtube ma video vetena")
                }


            }
            if (command === 'stop') {
                message.member.voice.channel.leave();
                var a = Math.floor(Math.random() * 3);
                if (a === 0) {
                    return message.channel.send('ok guys later')
                }
                if (a === 1) {
                    return message.channel.send('gako aile lai ma')
                }
                if (a === 2) {
                    return message.channel.send('paxi geet sunne bela bolau')
                }

            }

            if (command === 'flip') {
                const amount = Number(args.join(" "));
                if (args[0] === 'heads') {
                    args.shift();
                    const amount = Number(args.join(" "));
                    if (amount >= 0 && amount <= 1000000) {

                        const user = await ProfileModel.findOne({ UserId: message.author.id });
                        if (!user) {
                            return message.channel.send('character banau suruma, user ***bantaba create <character>***')
                        }
                        if (amount <= user.Gold) {
                            var a = Math.floor(Math.random() * 2);
                            if (a === 0) {
                                user.Gold = user.Gold + amount;
                                await user.save();
                                return message.channel.send(`:exploding_head: It's **Heads**. You won **$${amount}**`)
                            }
                            if (a === 1) {
                                user.Gold = user.Gold - amount;
                                await user.save();
                                return message.channel.send(` :cocktail: It's **Tails** You Lost **$${amount}** `)
                            }
                        } else {
                            return message.channel.send('You are too poor.')
                        }
                    }

                }
                else if (args[0] === 'tails') {
                    args.shift();
                    const amount = Number(args.join(" "));
                    if (amount >= 0 && amount <= 1000000) {

                        const user = await ProfileModel.findOne({ UserId: message.author.id });
                        if (!user) {
                            return message.channel.send('character banau suruma, user ***bantaba create <character>***')
                        }
                        if (amount <= user.Gold) {
                            var a = Math.floor(Math.random() * 2);
                            if (a === 0) {
                                user.Gold = user.Gold - amount;
                                await user.save();
                                return message.channel.send(`:exploding_head: It's **Heads**. You Lost **$${amount}**`)
                            }
                            if (a === 1) {
                                user.Gold = user.Gold + amount;
                                await user.save();
                                return message.channel.send(` :cocktail: It's **Tails** You Won **$${amount}** `)
                            }
                        } else {
                            return message.channel.send('You are too poor.')
                        }
                    }
                }
                else if (amount >= 0 && amount <= 1000000) {

                    const user = await ProfileModel.findOne({ UserId: message.author.id });
                    if (!user) {
                        return message.channel.send('character banau suruma, user ***bantaba create <character>***')
                    }
                    if (amount <= user.Gold) {
                        var a = Math.floor(Math.random() * 2);
                        if (a === 0) {
                            user.Gold = user.Gold + amount;
                            await user.save();
                            return message.channel.send(`:exploding_head: It's **Heads**. You won **$${amount}**`)
                        }
                        if (a === 1) {
                            user.Gold = user.Gold - amount;
                            await user.save();
                            return message.channel.send(` :cocktail: It's **Tails** You Lost **$${amount}** `)
                        }
                    } else {
                        return message.channel.send('You are too poor.')
                    }


                }
                else {
                    return message.channel.send('0 - 1million is the range for gambling')
                }

            }

            if (command === 'check') {
                return message.channel.send(`${message.author.tag}`)
            }

            if (command === 'create') {
                if (!args.length) return message.channel.send('character ko name ni chaiyo');
                const profile = await ProfileModel.findOne({ UserId: message.author.id });
                if (profile) {
                    return message.channel.send(`tmro character already raixa ta sathi **${profile.Name}** vanne. name edit garne vaye use ***bantaba edit <newName>*** `)
                }
                else {
                    const Username = message.author.username;
                    const Tag = message.author.tag;
                    const UserId = message.author.id;
                    const Name = args.join(" ").toLowerCase();
                    const info = new MessageEmbed().setDescription(
                        `>>> Your character name is ** ${Name}**.
                        Your **Race** will be selected as Random.
                         React to confirm.`
                    )

                    message.channel.send(info).then((msg) => {
                        msg.react('✅').then(() => msg.react('❎'));
                        const filter = (reaction, user) => {
                            console.log(user);
                            return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                        };

                        msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                            .then(async (collected) => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    const newProfile = new ProfileModel({});
                                    newProfile.Name = Name;
                                    newProfile.UserId = UserId;
                                    newProfile.Tag = Tag;
                                    newProfile.UserName = Username;
                                    const randomNumber = Math.floor(Math.random() * 3)
                                    newProfile.Race = require('./race')[randomNumber];
                                    const saved = await newProfile.save();
                                    return message.channel.send(`Your character **${saved.Name}** has been successfully created. Use ***~profile*** to view your profile`)
                                } else {
                                    return message.channel.send('You profile creation is cancelled. You can create it at anytime you want. Hope to see you soon.');
                                }
                            })
                            .catch(e =>
                                console.log(e)
                            );

                    })

                    return;
                }



            }
            if (command === 'laugh') {
                return message.react('😂')
            }
            if (command === 'angry') {
                return message.react('😡')
            }
            if (command === 'sad') {
                return message.react('😔')
            }
            if (command === 'sleep') {
                return message.react('😴')
            }
            if (command === 'clap') {
                return message.react('👏')
            }
            if (command === 'ok') {
                return message.react('👍')
            }


            if (command === 'profile') {
                const profile = await ProfileModel.find({ UserId: message.author.id });
                if (!profile[0]) {
                    return message.channel.send('Create character first. Use ***~create <name>***')
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
                if (profile[0].SteamID) {
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

                return message.channel.send(attachment);
            }

            if (command === 'edit') {
                if (!args.length) return message.channel.send('Name is required.');
                ProfileModel.findOne({
                    UserId: message.author.id
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
                                return message.channel.send(`tmro name **${oldName}** bata aba **${saved.Name}** vayo la moj gara`)
                            }
                        })
                    } else {
                        return message.channel.send('Create character first. Use ***~create <name>***')
                    }
                }).catch(e => console.log(e))
            }

            if (command === 'image') {
                if (!args.length) {
                    return message.channel.send('image ko url ni deu sathi')
                }
                const url = args.join(" ");
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (!user) {
                    return message.channel.send('Create character first. Use ***~create <name>***')
                }
                if (await isImageURL(url)) {
                    if (user) {
                        user.ImageUrl = url
                        await user.save();
                        return message.channel.send('image set gariyo aba ***bantaba profile*** garera check gara')
                    } else {
                        return message.channel.send('profile banau suruma')
                    }
                } else {
                    return message.channel.send('image ko url valid xaina sathi thik url pathau hai natra hudeina')
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

                        return message.channel.send(dota2Profile)
                    })
                    .catch(e => console.log(e))

            }

            if (command === 'dota2') {
                if (!args.length) {

                    return message.channel.send('type **bantaba dota2 match 1** type match 1 for latest game ani tespaxi ko game haru chaiyo vane match2 kita match 3 number badaudei jau')
                }
                if (args[0] === 'match') {
                    const user = await ProfileModel.findOne({ UserId: message.author.id });
                    if (!user) {
                        return message.channel.send('Create character first. Use ***~create <name>***')
                    }
                    if (!user.SteamID) {
                        return message.channel.send('Set you steam id first. use *** ~steam <id>***')
                    }
                    const id = user.SteamID;
                    args.shift();
                    if (!args.length) {
                        return message.channel.send('give a number as well. For instance, 1 to see your latest match 2 and so on')
                    }
                    const matchNumber = args[0];
                    if (matchNumber >= 1 && matchNumber <= 10000) {


                        const { data } = await Axios.get(`https://api.opendota.com/api/players/${id}/matches`);
                        const author = await Axios.get(`https://api.opendota.com/api/players/${id}`);

                        const stat = data[matchNumber - 1];
                        if (!stat) {
                            return message.channel.send('dherei purano game raixa vetindeina yesko dost')
                        }
                        user.MatchID = stat.match_id;
                        user.HeroID = stat.hero_id;
                        await user.save();
                        const heroId = stat.hero_id;
                        const player_slot = stat.player_slot;
                        const radiant_win = stat.radiant_win;

                        const duration = moment.utc(stat.duration * 1000).format('H:mm:ss');
                        let result = ''
                        let Team = ''
                        if (player_slot >= 0 && player_slot <= 127) {
                            Team = 'Radiant'
                            if (radiant_win) {
                                result = 'Win'
                            } else {
                                result = 'Loss'
                            }
                        } else {
                            Team = 'Dire'
                            if (radiant_win) {
                                result = 'Loss'
                            } else {
                                result = 'Win'
                            }
                        }

                        let heroName = '';
                        let heroImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU';
                        heroes.map(hero => {
                            if (hero.id === heroId) {
                                heroName = hero.localized_name
                                if (hero.url_full_portrait) {
                                    heroImage = hero.url_full_portrait
                                }
                            }
                        })

                        let partysize = '';
                        if (stat.party_size === 1) {
                            partysize = 'solo queue'
                        } else {
                            partysize = `${stat.party_size} man party`
                        }



                        const lobby = stat.lobby_type;
                        const game = stat.game_mode;
                        const personaname = author.data.profile.personaname;
                        const avatar = author.data.profile.avatar;

                        const output = await itemImageGenerate(stat.match_id, stat.hero_id);
                        const attachment = output.attachment;
                        const gpm = output.gpm;
                        const xpm = output.xpm

                        const dota2stats = new MessageEmbed()
                            .setColor('#ad1005')
                            .setTitle('Dota 2')
                            .setAuthor(personaname, avatar)
                            .setDescription(`Played as **${heroName}**

                            GPM : **${gpm}** , XPM : **${xpm}**`)
                            .attachFiles(attachment)
                            .setImage('attachment://item-image.png')
                            .addFields(
                                { name: lobby_type[lobby].name, value: `${game_mode[game].name}` },
                                { name: 'Team', value: `**${Team}** (${result})` },
                                { name: 'Kills', value: stat.kills, inline: true },
                                { name: 'Deaths', value: stat.deaths, inline: true },
                                { name: 'Assists', value: stat.assists, inline: true }
                            )
                            .setThumbnail(heroImage)
                            .addFields(
                                { name: 'Duration', value: duration, inline: true },
                                { name: 'Party type', value: partysize, inline: true },
                                { name: 'Leaver', value: stat.leaver_status ? 'leaver detected' : 'no leavers', inline: true }
                            )


                        return message.channel.send(dota2stats);
                    }
                    else {
                        return message.channel.send("recent 10000 ota game ko matra stat vanxu ma")
                    }
                }
                if (args[0] === 'hero') {
                    args.shift();
                    if (!args.length) return message.channel.send('use ***bantaba hero <heroName> <matchNumber> ***')
                    const size = args.length;
                    const matchNumber = args[size - 1];

                    args.pop();
                    let heroName = args.join(" ")
                    let heroId;
                    let heroImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU';
                    heroes.map(hero => {
                        if (hero.localized_name.toLowerCase() === heroName) {
                            heroId = hero.id;
                            heroName = hero.localized_name
                            if (hero.url_vertical_portrait) {
                                heroImage = hero.url_vertical_portrait
                            }
                        }
                    })
                    if (!heroId) {
                        return message.channel.send('heroname is probably not righ try again')
                    }

                    const matches = [];
                    const user = await ProfileModel.findOne({ UserId: message.author.id });
                    const id = user.SteamID;
                    const { data } = await Axios.get(`https://api.opendota.com/api/players/${id}/matches`);
                    data.forEach(match => {
                        if (match.hero_id === heroId) {
                            matches.push(match);
                        };
                    })
                    if (!matches.length) {
                        return message.channel.send('Cant find the game. Sorry')
                    }

                    const stat = matches[matchNumber - 1];
                    if (!stat) {
                        return message.channel.send('Cannot find the game. Sorry')
                    }

                    user.MatchID = stat.match_id;
                    user.HeroID = stat.hero_id;
                    await user.save();
                    const player_slot = stat.player_slot;
                    const radiant_win = stat.radiant_win;

                    const duration = moment.utc(stat.duration * 1000).format('H:mm:ss');
                    let result = ''
                    let Team = ''
                    if (player_slot >= 0 && player_slot <= 127) {
                        Team = 'Radiant'
                        if (radiant_win) {
                            result = 'Win'
                        } else {
                            result = 'Loss'
                        }
                    } else {
                        Team = 'Dire'
                        if (radiant_win) {
                            result = 'Loss'
                        } else {
                            result = 'Win'
                        }
                    }
                    const author = await Axios.get(`https://api.opendota.com/api/players/${id}`);
                    let partysize = '';
                    if (stat.party_size === 1) {
                        partysize = 'solo queue'
                    } else {
                        partysize = `${stat.party_size} man party`
                    }
                    const lobby = stat.lobby_type;
                    const game = stat.game_mode;
                    const personaname = author.data.profile.personaname;
                    const avatar = author.data.profile.avatar;
                    const output = await itemImageGenerate(stat.match_id, stat.hero_id);
                    const attachment = output.attachment;
                    const gpm = output.gpm;
                    const xpm = output.xpm
                    const dota2stats = new MessageEmbed()
                        .setColor('#ad1005')
                        .setTitle('Dota 2')
                        .setAuthor(personaname, avatar)
                        .setDescription(`Played as **${heroName}**

                        GPM : **${gpm}** , XPM : **${xpm}**`)
                        .attachFiles(attachment)
                        .setImage('attachment://item-image.png')
                        .addFields(
                            { name: lobby_type[lobby].name, value: `${game_mode[game].name}` },
                            { name: 'Team', value: `**${Team}** (${result})` },
                            { name: 'Kills', value: stat.kills, inline: true },
                            { name: 'Deaths', value: stat.deaths, inline: true },
                            { name: 'Assists', value: stat.assists, inline: true }
                        )
                        .setThumbnail(heroImage)
                        .addFields(
                            { name: 'Duration', value: duration, inline: true },
                            { name: 'Party type', value: partysize, inline: true },
                            { name: 'Leaver', value: stat.leaver_status ? 'leaver detected' : 'no leavers', inline: true }
                        )


                    return message.channel.send(dota2stats)

                }
                if (args[0] === 'wl') {
                    const user = await ProfileModel.findOne({ UserId: message.author.id });
                    const id = user.SteamID;
                    const wl = await Axios.get(`https://api.opendota.com/api/players/${id}/wl`);
                    const profile = await Axios.get(`https://api.opendota.com/api/players/${id}`);
                    const wlstat = new MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Dota 2')
                        .setAuthor(`${profile.data.profile.personaname}`, `${profile.data.profile.avatar}`)
                        .addFields(
                            { name: 'Win', value: `${wl.data.win}`, inline: true },
                            { name: 'Lose', value: `${wl.data.lose}`, inline: true },

                        )
                        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU')

                    return message.channel.send(wlstat);
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

                return message.channel.send(exampleEmbed)
            }
            if (command === 'steam') {
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (user.SteamID) {
                    return message.channel.send('Seems like you already have registerd your steam id. Unfortunately we donot have the feature to change this but you can contact us here: https://discord.gg/MdSBunUH if you want to change it')
                }
                const steamId = args.join(" ");
                user.SteamID = steamId;
                await user.save();
                return message.channel.send('Steam id set gariyo steam profile herne vaye use ***bantaba mmr***');
            }

            if (command === 'mmr') {
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (!user.SteamID) {
                    return message.channel.send('steam id set gara suruma use *** bantaba steam <id>***')
                }
                const id = user.SteamID;

                const data = await Axios.get(`https://api.opendota.com/api/players/${id}`);

                if (typeof data.data.profile !== 'object') return message.channel.send('vetena tmro profile sathi data publicly expose gara dota kholera')
                const dota2Profile = new MessageEmbed()
                    .setColor('#dd51ed')
                    .setTitle('Dota 2')
                    .setAuthor(`${data.data.profile.personaname}`, `${data.data.profile.avatar}`)
                    .addFields(
                        { name: 'MMR', value: `${data.data.mmr_estimate.estimate}` },

                    )
                    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECa11dQzB9SI5mmFy5ibqqOfxF3NGAXTIuQ&usqp=CAU')

                return message.channel.send(dota2Profile);



            }

            if (command === 'items') {
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (!user) {
                    return message.channel.send('suru ma match search gara ani balla tesko details dekhauxu ma')
                }
                const MatchID = user.MatchID;
                const HeroID = user.HeroID;

                const match = await Axios.get(`https://api.opendota.com/api/matches/${MatchID}`);
                let playerInfo = {};
                match.data.players.map(player => {
                    if (player.hero_id === HeroID) {
                        playerInfo = player;
                    }
                })


                const canvas = Canvas.createCanvas(225, 100);
                const ctx = canvas.getContext('2d');
                const background = await Canvas.loadImage('https://media.tarkett-image.com/large/TH_25094225_25187225_001.jpg');
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                const Item1Url = getItemImage(playerInfo.item_0);
                const Item1 = await Canvas.loadImage(Item1Url);
                ctx.drawImage(Item1, 0, 0, 75, 50);
                const Item2Url = getItemImage(playerInfo.item_1);
                const Item2 = await Canvas.loadImage(Item2Url);
                ctx.drawImage(Item2, 75, 0, 75, 50);
                const Item3Url = getItemImage(playerInfo.item_2);
                const Item3 = await Canvas.loadImage(Item3Url);
                ctx.drawImage(Item3, 150, 0, 75, 50);
                const Item4Url = getItemImage(playerInfo.item_3);
                const Item4 = await Canvas.loadImage(Item4Url);
                ctx.drawImage(Item4, 0, 50, 75, 50);
                const Item5Url = getItemImage(playerInfo.item_4);
                const Item5 = await Canvas.loadImage(Item5Url);
                ctx.drawImage(Item5, 75, 50, 75, 50);
                const Item6Url = getItemImage(playerInfo.item_5);
                const Item6 = await Canvas.loadImage(Item6Url);
                ctx.drawImage(Item6, 150, 50, 75, 50);



                const attachment = new MessageAttachment(canvas.toBuffer(), 'item-image.png');

                return message.channel.send(attachment);

            }

            if (command === 'money') {
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                const gold = user.Gold;

                return message.channel.send(`You currently have **$${gold}**, <@${message.author.id}>`)
            }
            if (command === 'economy') {
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                const gold = user.Gold;

                return message.channel.send(`\`\`\`You currently have $${gold}\`\`\``)
            }
            if (command === 'richest') {
                const users = await ProfileModel.find({}).sort({ Gold: -1 }).limit(10);
                let msg = ''
                users.forEach((user, index) => {
                    msg = msg + `${index + 1}. \`${user.Name}\`, a character by \`${user.Tag}\` with **$${user.Gold}**
                    `;
                })
                const richestPlayers = new MessageEmbed()
                    .setColor("#0af568")
                    .setTitle("The 10 Richest Players of bantabaRPG")
                    .setDescription(`${msg}`)

                return message.channel.send(richestPlayers)
            }
            if (command === 'addxp') {
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (!user) {
                    return message.channel.send('Create character first use `~create [characterName]`')
                }
                const id = user.SteamID;
                const { data } = await Axios.get(`https://api.opendota.com/api/players/${id}/matches`);
                let earnedXP = 0;
                if (user.recentMatchID) {
                    if (user.recentMatchID === data[0].match_id) {
                        return message.channel.send('xp already added xa feri new game khela sathi ani add gara');
                    }
                    let deaths = data[0].deaths;
                    let kdaBoooster = false;
                    user.activeKDA ? user.activeKDA === 1 ? deaths = 4 : null : null
                    user.activeKDA ? user.activeKDA === 1 ? kdaBoooster = true : null : null
                    user.activeKDA = 0;
                    earnedXP = getXP(data[0].duration, data[0].kills, data[0].assists, deaths, user.Level, data[0]);
                    let xp = earnedXP;
                    let partyBonus = 0;
                    const stat = data[0];
                    stat.party_size > 1 ? partyBonus = Math.round(0.04 * earnedXP) : null;

                    const player_slot = stat.player_slot;
                    const radiant_win = stat.radiant_win;
                    let result = '';
                    if (player_slot >= 0 && player_slot <= 127) {
                        if (radiant_win) {
                            result = 'Win'
                        } else {
                            result = 'Loss'
                        }
                    } else {
                        if (radiant_win) {
                            result = 'Loss'
                        } else {
                            result = 'Win'
                        }
                    }
                    let modifiedpercent = 0;
                    let modifiedXP = 0;
                    let booster = 0;
                    let goldbooster = false;
                    user.activeGoblin ? (user.activeGoblin === 1 ? goldbooster = true : null) : null;
                    if (result === 'Win') {
                        if (stat.lobby_type === 7) {
                            modifiedpercent = 40;
                            user.activeCharm ? (user.activeCharm === 1 ? booster = 20 : null) : null
                            booster === 20 ? modifiedXP = 0.6 * xp : modifiedXP = 0.4 * xp
                            booster === 20 ? modifiedpercent = 60 : null
                            xp = xp + modifiedXP;
                        } else {
                            modifiedpercent = 25;
                            user.activeCharm ? (user.activeCharm === 1 ? booster = 20 : null) : null
                            booster === 20 ? modifiedXP = 0.45 * xp : modifiedXP = 0.25 * xp
                            booster === 20 ? modifiedpercent = 45 : null
                            xp = xp + modifiedXP;
                        }
                    } else {
                        if (stat.lobby_type === 7) {
                            modifiedpercent = 40;
                            user.activeCharm ? (user.activeCharm === 1 ? booster = 20 : null) : null
                            booster === 20 ? modifiedXP = 0.2 * xp : modifiedXP = 0.4 * xp
                            booster === 20 ? modifiedpercent = 20 : null
                            xp = xp - modifiedXP;
                        } else {
                            modifiedpercent = 25
                            user.activeCharm ? (user.activeCharm === 1 ? booster = 20 : null) : null
                            booster === 20 ? modifiedXP = 0.05 * xp : modifiedXP = 0.25 * xp
                            booster === 20 ? modifiedpercent = 5 : null
                            xp = xp - modifiedXP;
                        }
                    }
                    booster === 20 ? user.activeCharm = 0 : null;
                    modifiedXP = Math.round(modifiedXP);
                    xp = Math.round(xp);
                    user.XP = user.XP + xp + partyBonus;
                    let goldReward = Math.round(xp / 2);
                    goldbooster ? goldReward = goldReward + Math.round(earnedXP / 2) : null
                    user.Gold = user.Gold + goldReward
                    goldbooster ? user.activeGoblin = 0 : null

                    const currentLevel = user.Level;
                    const newLevel = levelUP(user.XP).level;
                    let levelup = false;
                    if (newLevel > currentLevel) {
                        user.Level = newLevel;
                        user.Gold = user.Gold + Math.round(newLevel * 2000);
                        user.Attack = user.Attack + 1;
                        user.Defense = user.Defense + 1;
                        levelup = true;
                    }
                    user.recentMatchID = data[0].match_id;
                    await user.save();
                    const XPdetails = new MessageEmbed().setTitle('XP details')
                        .setDescription(`${kdaBoooster ? '**KDA Reducer Consumed**' : ''}
                    ${booster === 20 ? '**XP Charm Consumed**' : ''}
                ${goldbooster ? '**Goblin Fortune Consumed**' : ''}
                Earned XP: ${earnedXP}
                ${result === 'Win' ? `Win Bonus (+${modifiedpercent}%)` : `Lose Penalty (-${modifiedpercent})%`} : ${modifiedXP}
                ${stat.party_size > 1 ? `Party Queue Bonus(+4%): ${partyBonus}` : 'Solo Queue Bonus: 0'}
                Total XP Rewarded: ${xp}
                You recieved **$${goldReward}** as a reward`);
                    message.channel.send(XPdetails);
                    if (levelup) {
                        return message.channel.send(`:fireworks: Congratulation you leveled up to **${newLevel}**. You recieved **$${newLevel * 2000}** as a reward`)
                    } else {
                        return;
                    }


                } else {

                    let deaths = data[0].deaths;
                    let kdaBoooster = false;
                    user.activeKDA ? user.activeKDA === 1 ? deaths = 4 : null : null
                    user.activeKDA ? user.activeKDA === 1 ? kdaBoooster = true : null : null
                    user.activeKDA = 0;
                    earnedXP = getXP(data[0].duration, data[0].kills, data[0].assists, deaths, user.Level, data[0]);
                    let xp = earnedXP;
                    let partyBonus = 0;
                    const stat = data[0];
                    stat.party_size > 1 ? partyBonus = Math.round(0.04 * earnedXP) : null;
                    const player_slot = stat.player_slot;
                    const radiant_win = stat.radiant_win;
                    let result = '';
                    if (player_slot >= 0 && player_slot <= 127) {
                        if (radiant_win) {
                            result = 'Win'
                        } else {
                            result = 'Loss'
                        }
                    } else {
                        if (radiant_win) {
                            result = 'Loss'
                        } else {
                            result = 'Win'
                        }
                    }
                    let modifiedpercent = 0;
                    let modifiedXP = 0;
                    let booster = 0;
                    let goldbooster = false;
                    user.activeGoblin ? (user.activeGoblin === 1 ? goldbooster = true : null) : null;
                    if (result === 'Win') {
                        if (stat.lobby_type === 7) {
                            modifiedpercent = 40;
                            user.activeCharm ? (user.activeCharm === 1 ? booster = 20 : null) : null
                            booster === 20 ? modifiedXP = 0.6 * xp : modifiedXP = 0.4 * xp
                            booster === 20 ? modifiedpercent = 60 : null
                            xp = xp + modifiedXP;
                        } else {
                            modifiedpercent = 25;
                            user.activeCharm ? (user.activeCharm === 1 ? booster = 20 : null) : null
                            booster === 20 ? modifiedXP = 0.45 * xp : modifiedXP = 0.25 * xp
                            booster === 20 ? modifiedpercent = 45 : null
                            xp = xp + modifiedXP;
                        }
                    } else {
                        if (stat.lobby_type === 7) {
                            modifiedpercent = 40;
                            user.activeCharm ? (user.activeCharm === 1 ? booster = 20 : null) : null
                            booster === 20 ? modifiedXP = 0.2 * xp : modifiedXP = 0.4 * xp
                            booster === 20 ? modifiedpercent = 20 : null
                            xp = xp - modifiedXP;
                        } else {
                            modifiedpercent = 25
                            user.activeCharm ? (user.activeCharm === 1 ? booster = 20 : null) : null
                            booster === 20 ? modifiedXP = 0.05 * xp : modifiedXP = 0.25 * xp
                            booster === 20 ? modifiedpercent = 5 : null
                            xp = xp - modifiedXP;
                        }
                    }
                    booster === 20 ? user.activeCharm = 0 : null;
                    modifiedXP = Math.round(modifiedXP);
                    xp = Math.round(xp);
                    user.XP = user.XP + xp + partyBonus;
                    let goldReward = Math.round(xp / 2);
                    goldbooster ? goldReward = goldReward + Math.round(earnedXP / 2) : null
                    user.Gold = user.Gold + goldReward
                    goldbooster ? user.activeGoblin = 0 : null
                    const currentLevel = user.Level;
                    const newLevel = levelUP(user.XP).level;
                    let levelup = false;
                    if (newLevel > currentLevel) {
                        user.Level = newLevel;
                        user.Gold = user.Gold + Math.round(newLevel * 2000);
                        user.Attack = user.Attack + 1;
                        user.Defense = user.Defense + 1;
                        levelup = true;
                    }
                    user.recentMatchID = data[0].match_id;
                    await user.save();
                    const XPdetails = new MessageEmbed().setTitle('XP details')
                        .setDescription(`${kdaBoooster ? '**KDA Reducer Consumed**' : ''}
                        ${booster === 20 ? '**XP Charm Consumed**' : ''}
                    ${goldbooster ? '**Goblin Fortune Consumed**' : ''}
                    Earned XP: ${earnedXP}
                    ${result === 'Win' ? `Win Bonus (+${modifiedpercent}%)` : `Lose Penalty (-${modifiedpercent})%`} : ${modifiedXP}
                    ${stat.party_size > 1 ? `Party Queue Bonus(+4%): ${partyBonus}` : 'Solo Queue Bonus: 0'}
                    Total XP Rewarded: ${xp}
                    You recieved **$${goldReward}** as a reward`);
                    message.channel.send(XPdetails);
                    if (levelup) {
                        return message.channel.send(`:fireworks: Congratulation you leveled up to **${newLevel}**. You recieved **$${newLevel * 2000}** as a reward`)
                    } else {
                        return;
                    }

                }

            }

            if (command === 'leaderboard') {
                const users = await ProfileModel.find({}).sort({ XP: -1 }).limit(10);
                let msg = ''
                users.forEach((user, index) => {
                    msg = msg + `${index + 1}. \`${user.Name}\`, a character by \`${user.Tag}\` with total XP: **${user.XP}**, Level: **${user.Level}**
                    `;
                })
                const richestPlayers = new MessageEmbed()
                    .setColor("#11096e")
                    .setTitle("Top 10 Dota2 players of BantabaRPG")
                    .setDescription(`${msg}`)

                return message.channel.send(richestPlayers)
            }

            if (command === 'formula') {
                const formula = new MessageEmbed()
                    .setTitle('XP Formula')
                    .setDescription(`\`xp = (Game duration/5) x CurrentLevel+ ((kills+Assists)/deaths) x 80\`

                    Case **Win**:
                        For Ranked Games: \`xp = xp + 40% of xp\`
                        For Normal Games: \`xp = xp + 25% of xp\`

                    Case **Loss**:
                        For Ranked Games: \`xp = xp - 40% of xp\`
                        For Normal Games: \`xp = xp - 25% of xp\`     
                     `)
                return message.channel.send(formula)
            }

            if (command === 'xp') {
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (!user) {
                    return message.channel.send('character banau suruma, user ***bantaba create <character>***')
                }
                return message.channel.send(`You currently have **${user.XP}** which means you are on level **${user.Level}**. Missing XP to next level: **${levelUP(user.XP).missingXP}**`);
            }
            if (command === 'shop') {
                const msg = new MessageEmbed()
                    .setTitle('Boosters')
                    .setDescription(`Purchase Boosters to boost you game speed
                    Use \`~buy [ItemNumber]\` to buy these.
                    
                    **1. XP charm** : **$1200**
                     Remove lose penalty by 20% or add win bonus by 20%. 1 charm for 1 game
                     **2. Goblin Fortune** : **$600**
                     Get double the gold as reward. 1 fortune for 1 game
                     **3. Black Mole** : **$800**
                     Drops either xp charm(33.33%) or gobline fortune(66.66%)
                     **4. KDA Reducer** : **$1200**
                     Sets you death to 4 improving your KDA`

                    );
                return message.channel.send(msg);
            }
            if (command === 'buy') {
                let msg = args.join(" ");
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (!user) {
                    return message.channel.send('character banau suruma, user ***bantaba create <character>***')
                }
                if (msg === '1') {
                    if (user.Gold >= 1200) {
                        if (user.charm) {
                            user.charm = user.charm + 1;
                        } else {
                            user.charm = 1
                        }
                        user.Gold = user.Gold - 1200;
                        await user.save();
                        return message.channel.send('You have succesfully purchased. Check using ***~boosters*** or activate using ***~activate 1***')
                    } else {
                        return message.channel.send('You are too poor to buy this.')
                    }
                }
                if (msg === '2') {
                    if (user.Gold >= 600) {
                        if (user.goblinFortune) {
                            user.goblinFortune = user.goblinFortune + 1;
                        } else {
                            user.goblinFortune = 1
                        }
                        user.Gold = user.Gold - 600;
                        await user.save();
                        return message.channel.send('You have succesfully purchased. Check using ***~boosters*** or activate using ***~activate 2***')
                    } else {
                        return message.channel.send('You are too poor to buy this.')
                    }
                }
                if (msg === '3') {
                    if (user.Gold >= 800) {
                        if (user.blackMole) {
                            user.blackMole = user.blackMole + 1;
                        } else {
                            user.blackMole = 1
                        }
                        user.Gold = user.Gold - 800;
                        await user.save();
                        return message.channel.send('You have succesfully purchased. Check using ***~boosters*** or activate using ***~activate 3***')
                    } else {
                        return message.channel.send('You are too poor to buy this.')
                    }
                }
                if (msg === '4') {
                    if (user.Gold >= 1200) {
                        if (user.kdaReducer) {
                            user.kdaReducer = user.kdaReducer + 1;
                        } else {
                            user.kdaReducer = 1
                        }
                        user.Gold = user.Gold - 1200;
                        await user.save();
                        return message.channel.send('You have succesfully purchased. Check using ***~boosters*** or activate using ***~activate 4***')
                    } else {
                        return message.channel.send('You are too poor to buy this.')
                    }
                }
                if (msg === 'all') {
                    if (user.Gold >= 2800) {
                        user.kdaReducer ? user.kdaReducer = user.kdaReducer + 1 : user.kdaReducer = 1;
                        user.goblinFortune ? user.goblinFortune = user.goblinFortune + 1 : user.goblinFortune = 1;
                        user.charm ? user.charm = user.charm + 1 : user.charm = 1;
                        user.Gold = user.Gold - 2800;

                        await user.save();
                        return message.channel.send('You have succesfully purchased all boosters. Check using ***~boosters*** or activate using ***~activate all***')
                    } else {
                        return message.channel.send('You are too poor to buy this.')
                    }
                }
                else {
                    return message.channel.send('Sorry, item numbers available are only 1,2,3 and 4')
                }
            }

            if (command === 'boosters') {
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (!user) {
                    return message.channel.send('create character first use ***~create <character>***')
                }
                let charmCount = 0;
                let blackMoleCount = 0;
                let goblinFortuneCount = 0;
                let kdaReducerCount = 0;
                user.charm ? charmCount = user.charm : charmCount = 0;
                user.blackMole ? blackMoleCount = user.blackMole : blackMoleCount = 0;
                user.goblinFortune ? goblinFortuneCount = user.goblinFortune : goblinFortuneCount = 0;
                user.kdaReducer ? kdaReducerCount = user.kdaReducer : kdaReducerCount = 0;
                const msg = new MessageEmbed()
                    .setTitle('Your Boosters')
                    .setDescription(`**1.XP Charm ** : \`${charmCount}\`
                    **2.Goblin Fortune ** : \`${goblinFortuneCount}\`
                    **3.Black Mole ** : \`${blackMoleCount}\`
                    **4.KDA Reducer ** : \`${kdaReducerCount}\`

                    Activate using \`~activate [itemNumber]\``)
                return message.channel.send(msg);
            }

            if (command === 'activate') {
                let msg = args.join(" ");
                const user = await ProfileModel.findOne({ UserId: message.author.id });
                if (!user) {
                    return message.channel.send('create character first use ***~create <character>***')
                }
                if (msg === '1') {
                    if (user.charm < 1) {
                        return message.channel.send('You dont have this type of booster. You need to buy it')
                    }
                    if (!user.activeCharm) {
                        user.activeCharm = 1
                        user.charm = user.charm - 1;
                        await user.save();
                        return message.channel.send('Succesfully Activated. This will be automatically used on your next ***~addxp*** command')
                    }
                    if (user.activeCharm === 1) {
                        return message.channel.send('You have already activated XP charm. You can activate another after it is consumed.')
                    }
                    user.activeCharm = user.activeCharm + 1;
                    user.charm = user.charm - 1
                    await user.save();
                    return message.channel.send('Succesfully Activated. This will be automatically used on your next ***~addxp*** command')
                }
                if (msg === '2') {
                    if (user.goblinFortune < 1) {
                        return message.channel.send('You dont have this type of booster. You need to buy it')
                    }
                    if (!user.activeGoblin) {
                        user.activeGoblin = 1
                        user.goblinFortune = user.goblinFortune - 1;
                        await user.save();
                        return message.channel.send('Succesfully Activated. This will be automatically used on your next ***~addxp*** command')
                    }
                    if (user.activeGoblin === 1) {
                        return message.channel.send('You have already activated Goblin Fortune. You can activate another after it is consumed.')
                    }
                    user.activeGoblin = user.activeGoblin + 1;
                    user.goblinFortune = user.goblinFortune - 1
                    await user.save();
                    return message.channel.send('Succesfully Activated. This will be automatically used on your next ***~addxp*** command')
                }
                if (msg === '3') {
                    const chance = Math.floor(Math.random() * 3);
                    if (user.blackMole < 1) {
                        return message.channel.send('You dont have this type of booster. You need to buy it')
                    }
                    user.blackMole = user.blackMole - 1;
                    if (chance === 1) {
                        if (user.charm) {
                            user.charm = user.charm + 1;
                        } else {
                            user.charm = 1
                        }
                        await user.save();
                        return message.channel.send('You recieved **XP Charm**. Check using ***~boosters*** or activate using ***~activate 1***')
                    }
                    if (user.goblinFortune) {
                        user.goblinFortune = user.goblinFortune + 1;
                    } else {
                        user.goblinFortune = 1
                    }
                    await user.save();
                    return message.channel.send('You recieved **Goblin Fortune**. Check using ***~boosters*** or activate using ***~activate 2***')
                }
                if (msg === '4') {
                    if (user.kdaReducer < 1) {
                        return message.channel.send('You dont have this type of booster. You need to buy it')
                    }
                    if (!user.activeKDA) {
                        user.activeKDA = 1
                        user.kdaReducer = user.kdaReducer - 1;
                        await user.save();
                        return message.channel.send('Succesfully Activated. This will be automatically used on your next ***~addxp*** command')
                    }
                    if (user.activeKDA === 1) {
                        return message.channel.send('You have already activated KDA reducer. You can activate another after it is consumed.')
                    }
                    user.activeKDA = user.activeKDA + 1;
                    user.kdaReducer = user.kdaReducer - 1
                    await user.save();
                    return message.channel.send('Succesfully Activated. This will be automatically used on your next ***~addxp*** command')
                }
                if (msg === 'all') {
                    if (user.kdaReducer < 1) {
                        return message.channel.send('You dont have this type of booster. You need to buy it')
                    }
                    if (user.charm < 1) {
                        return message.channel.send('You dont have this type of booster. You need to buy it')
                    }
                    if (user.goblinFortune < 1) {
                        return message.channel.send('You dont have this type of booster. You need to buy it')
                    }
                    if (user.activeKDA === 1) {
                        return message.channel.send('Looks like you already have some activated boosters. This will overwrite you booster. Pls confirm by reacting.')
                    }
                    if (user.activeCharm === 1) {
                        return message.channel.send('Looks like you already have some activated boosters. This will overwrite you booster. Pls confirm by reacting.')
                    }
                    if (user.activeGoblin === 1) {
                        return message.channel.send('Looks like you already have some activated boosters. This will overwrite you booster. Pls confirm by reacting.')
                    }
                    user.activeKDA = user.activeKDA + 1;
                    user.kdaReducer = user.kdaReducer - 1;
                    user.activeCharm = user.activeCharm + 1;
                    user.charm = user.charm - 1;
                    user.activeGoblin = user.activeGoblin + 1;
                    user.goblinFortune = user.goblinFortune - 1;
                    await user.save();
                    return message.channel.send('Succesfully activated all boosters. This will be automatically used on your next ***~addxp*** command')
                }
                else {
                    return message.channel.send('Sorry, boosters available are only 1,2 or 3')
                }
            }
            if (command === 'give') {
                const money = +args[0];
                if (isNaN(money)) {
                    return message.channel.send('You used malformed arguement')
                }
                if (args[1].includes('@')) {
                    const user2Id = args[1].replace(/[^\w\s]/gi, '');
                    const user1 = await ProfileModel.findOne({ UserId: message.author.id });
                    const user2 = await ProfileModel.findOne({ UserId: user2Id });
                    if (!user1) {
                        return message.channel.send('Yo do not have a character.')
                    }
                    if (!user2) {
                        return message.channel.send('This user does not have a character.')
                    }

                    if (user1.Gold < money) {
                        return message.channel.send('You are too poor.')
                    }
                    user1.Gold = user1.Gold - money;
                    user2.Gold = user2.Gold + money;
                    await user1.save();
                    await user2.save();
                    return message.channel.send(`<@${user2.UserId}> now has **$${user2.Gold}**, you now have **$${user1.Gold}**`)
                }
                const user2Name = args[1]
                const user1 = await ProfileModel.findOne({ UserId: message.author.id });
                const user2 = await ProfileModel.findOne({ Name: user2Name });
                if (!user1) {
                    return message.channel.send('Yo do not have a character.')
                }
                if (!user2) {
                    return message.channel.send('This user does not have a character.')
                }
                if (user1.Gold < money) {
                    return message.channel.send('You are too poor.')
                }
                user1.Gold = user1.Gold - money;

                user2.Gold = user2.Gold + money;
                await user1.save();
                await user2.save();
                return message.channel.send(`<@${user2.UserId}> now has **$${user2.Gold}**, you now have **$${user1.Gold}**`)
            }
            if (command === 'help') {
                const msg = new MessageEmbed()
                    .setColor('#7ef2ea')
                    .setTitle('How to play')
                    .setDescription(`1. First thing first lets create a character with \` ~create [yourName] \`
        2.Let's add steam account using \` ~steam [yoursteamID] \`
        3.Add your xp,earn rewards and level up after every dota game using \` ~addxp \`
        4.That's it. You can explore more commands using \` ~advanced \``)

                return message.channel.send(msg);
            }
            if (command === 'advanced') {
                const msg = new MessageEmbed()
                    .setColor('#7ef2ea')
                    .setTitle('Getting advanced')
                    .setDescription(`1.There are 6 prefix for the commands \` ~ # bantaba Bantaba bantawa Bantawa \`
        2.You can change your profile's background image using \` ~image [validImageUrl] \`
        3.Check you current Gold using \` ~money \` or \` ~economy \`
        4.Gamble the gold using \` ~flip [heads/tails] [amount]\`
        5.Check your ranking among richest players using \` ~richest \`
        6.Check your dota2 profile using \` ~mmr \`
        7.Check dota2 profile for any steam id using \` ~dota [steamID] \`
        8.Search your dota2 games using \` ~dota2 match [matchNumber] \`
        9.Search based on heroes using \` ~dota2 hero [heroName] [matchNumber] \`
        10.Also check your item build using \` ~items \`
        10.Check your overall win loss stats using \` ~dota2 wl \`
        11.Compare your xp with all the players using \` ~leaderboard \`
        12.Check how xp is being calculated after every game using \` ~formula \`
        13.Purchase boosters from shop using \` ~shop \` to boost your experience gain.
        14.\` ~movie help\` to see movie commands \` ~joke \` \` ~meme \` and many more.
        15.This is not everything there is but hope this sums up for now.
        **Good Luck Have Fun** by BantabaBot`);

                return message.channel.send(msg);
            }

            if (command === 'joke') {
                let msg = args.join(" ");
                if (!args.length) {
                    msg = 'any'
                }
                if (args.length >= 2) {
                    return message.channel.send('You used malformed arguement')
                }

                const { data } = await Axios.get(`https://jokeapi-v2.p.rapidapi.com/joke/${msg}`,
                    {
                        headers: {
                            "x-rapidapi-key": process.env.RAPID_API_KEY,
                            "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                            "useQueryString": true
                        },
                        query: {
                            "format": "json",

                        }
                    }
                )
                if (data.type === undefined) {
                    return message.channel.send(new MessageEmbed()
                        .setTitle('Error')
                        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEDgCe9YM41aW-0pEPvXMLoaOb3tGullyEg&usqp=CAU')
                        .setDescription(`Sorry no joke of this category is found
                    Here are some categories you can use 
                    **Any** **Dark** **Christmas** **Programming** **Pun** and many more`))
                }
                const info = new MessageEmbed()
                    .setTitle('Joke')
                    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEDgCe9YM41aW-0pEPvXMLoaOb3tGullyEg&usqp=CAU')
                    .setDescription(`Category: **${data.category}**
               Type: **${data.type}**
                   ${data.type === 'single' ? data.joke : `${data.setup} `}
                   ${data.type === 'single' ? '' : `**${data.delivery}** `}`)

                return message.channel.send(info);
            }

            if (command === 'movie') {
                if (!args.length) {
                    return message.channel.send(new MessageEmbed().setDescription(`Oops Wrong Argument.
                    Use \`~movie help\` to see how to use commands
                   `))
                }
                if (args[0].toLowerCase() === 'discover') {
                    let randomNumber = Math.floor(Math.random() * 500)
                    randomNumber === 0 ? randomNumber = 1 : null;
                    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&page=${randomNumber}`, {
                    })

                    let genreName = [];
                    const movie = data.results[Math.floor(Math.random() * 20)];
                    const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`

                    const genreArray = require('./genre');
                    movie.genre_ids.forEach((id) => {
                        genreArray.forEach((genre) => {
                            if (id === genre.id) {
                                genreName.push(genre.name)
                            }
                        })
                    })


                    const info = new MessageEmbed()
                        .setTitle(movie.original_title ? movie.original_title : movie.original_name)
                        .setDescription(`Overview:
                    ${movie.overview}`)
                        .setImage(imageUrl)
                        .addFields(
                            { name: 'Vote', value: `${movie.vote_count}`, inline: true },
                            { name: 'Average Rating', value: `${movie.vote_average}`, inline: true },
                            { name: 'Popularity', value: `${movie.popularity}`, inline: true }
                        )
                        .addField('Genre', `${genreName.join(", ") ? genreName.join(", ") : 'Not Given'}`, true)
                        .addField('18+', movie.adult ? 'Yes' : 'No', true)
                        .setFooter(`Release Date: ${movie.release_date ? movie.release_date : movie.first_air_date}`)


                    return message.channel.send(info);
                }


                if (args[0].toLowerCase() === 'trending') {
                    let time = args[1] ? args[1].toLowerCase() : 'day';

                    if (time !== 'day' && time !== 'week') {
                        return message.channel.send('Required parameter is either **day** or **week**')
                    }
                    const { data } = await Axios.get(`https://api.themoviedb.org/3/trending/all/${time}?api_key=${process.env.MOVIE_API_KEY}`)
                    const randomNumber = Math.floor(Math.random() * 20);
                    const movie = data.results[args[2] <= 20 ? +args[2] - 1 : randomNumber];

                    let genreName = [];
                    const genreArray = require('./genre');
                    movie.genre_ids.forEach((id) => {
                        genreArray.forEach((genre) => {
                            if (id === genre.id) {
                                genreName.push(genre.name)
                            }
                        })
                    })
                    const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;


                    const info = new MessageEmbed()
                        .setTitle(movie.original_title ? movie.original_title : movie.original_name)
                        .setDescription(`Overview:
                        ${movie.overview}`)
                        .setImage(imageUrl)
                        .addFields(
                            { name: 'Vote', value: `${movie.vote_count}`, inline: true },
                            { name: 'Average Rating', value: `${movie.vote_average}`, inline: true },
                            { name: 'Popularity', value: `${movie.popularity}`, inline: true }
                        )
                        .addField('Genre', `${genreName.join(", ") ? genreName.join(", ") : 'Not Given'}`, true)
                        .addField('18+', movie.adult ? 'Yes' : 'No', true)
                        .setFooter(`Release Date: ${movie.release_date ? movie.release_date : movie.first_air_date}`)


                    return message.channel.send(info);

                }
                if (args[0].toLowerCase() === 'popular') {



                    const { data } = await Axios.get(`http://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`)
                    const randomNumber = Math.floor(Math.random() * 20);
                    const movie = data.results[args[1] <= 20 ? +args[1] - 1 : randomNumber];
                    let genreName = [];
                    const genreArray = require('./genre');
                    movie.genre_ids.forEach((id) => {
                        genreArray.forEach((genre) => {
                            if (id === genre.id) {
                                genreName.push(genre.name)
                            }
                        })
                    })
                    const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;


                    const info = new MessageEmbed()
                        .setTitle(movie.original_title ? movie.original_title : movie.original_name)
                        .setDescription(`Overview:
                        ${movie.overview}`)
                        .setImage(imageUrl)
                        .addFields(
                            { name: 'Vote', value: `${movie.vote_count}`, inline: true },
                            { name: 'Average Rating', value: `${movie.vote_average}`, inline: true },
                            { name: 'Popularity', value: `${movie.popularity}`, inline: true }
                        )
                        .addField('Genre', `${genreName.join(", ") ? genreName.join(", ") : 'Not Given'}`, true)
                        .addField('18+', movie.adult ? 'Yes' : 'No', true)
                        .setFooter(`Release Date: ${movie.release_date ? movie.release_date : movie.first_air_date}`)


                    return message.channel.send(info);

                }
                if (args[0].toLowerCase() === 'search') {


                    args.shift();
                    const query = args.join(" ");
                    const { data } = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&query=${query}`)

                    const movies = data.results;
                    let content = '';
                    if (!movies.length) {
                        return message.channel.send(`Sorry didn't found any matching result.`)
                    }
                    movies.forEach((movie, index) => {
                        content = content + `${index + 1}. Name : **${movie.original_title ? movie.original_title : movie.original_name}**,  ID: \`${movie.id}\`
                        `
                    })
                    const info = new MessageEmbed()
                        .setTitle('Results')
                        .setDescription(`${content}
                            
                        use \`~movie details [id]\` to get details of one of the movie you searched`)


                    return message.channel.send(info);

                }
                if (args[0].toLowerCase() === 'details') {



                    const { data } = await Axios.get(`http://api.themoviedb.org/3/movie/${args[1]}?api_key=${process.env.MOVIE_API_KEY}`)
                    const movie = data;


                    const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;


                    const info = new MessageEmbed()
                        .setAuthor(movie.original_title ? movie.original_title : movie.original_name, '', movie.homepage)
                        .setDescription(`Overview:
                        ${movie.overview}`)
                        .setImage(imageUrl)
                        .addFields(
                            { name: 'Vote', value: `${movie.vote_count}`, inline: true },
                            { name: 'Average Rating', value: `${movie.vote_average}`, inline: true },
                            { name: 'Popularity', value: `${movie.popularity}`, inline: true }
                        )
                        .addField('18+', movie.adult ? 'Yes' : 'No', true)
                        .setFooter(`Release Date: ${movie.release_date ? movie.release_date : movie.first_air_date}`)


                    return message.channel.send(info);

                }
                if (args[0].toLowerCase() === 'help') {

                    return message.channel.send(new MessageEmbed().setDescription(`List of all movie commands.
                    1. \`~movie discover\` recommends a random movie from a database of more than 10000 movies updated daily
                    2. \`~movie trending [day/week]\` recommends a random movie from top 20 trending movies of **day/week**
                    3. \`~movie popular\` recommends a random movie from top 20 popular movies
                    4. \`~movie search [name]\` gives a list of movies that matched your search query*
                    5. \`~movie details [id]\` gives details of that particular movie*
                    6. \`~tv search [name]\` gives a list of tv shows that matched your search query*
                    7. \`~tv details [id]\` gives details of that particular movie*
                   `))
                }

                return message.channel.send(new MessageEmbed().setDescription(`Oops Wrong Argument.
                Use \`~movie help\` to see how to use commands
               `))
            }

            if (command === 'tv') {
                if (!args.length) {
                    return message.channel.send(new MessageEmbed().setDescription(`Oops Wrong Argument.
                    Use \`~movie help\` to see how to use commands.
                   `))
                }
                if (args[0].toLowerCase() === 'search') {


                    args.shift();
                    const query = args.join(" ");
                    const { data } = await Axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&query=${query}`)

                    const movies = data.results;
                    let content = '';
                    if (!movies.length) {
                        return message.channel.send(`Sorry didn't found any matching result.`)
                    }
                    movies.forEach((movie, index) => {
                        content = content + `${index + 1}. Name : **${movie.original_title ? movie.original_title : movie.original_name}**,  ID: \`${movie.id}\`
                        `
                    })
                    const info = new MessageEmbed()
                        .setTitle('Results')
                        .setDescription(`${content}
                            
                        use \`~tv details [id]\` to get details of one of the movie you searched`)


                    return message.channel.send(info);



                }
                if (args[0].toLowerCase() === 'details') {



                    const { data } = await Axios.get(`http://api.themoviedb.org/3/tv/${args[1]}?api_key=${process.env.MOVIE_API_KEY}`)
                    const movie = data;


                    const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;


                    const info = new MessageEmbed()
                        .setAuthor(movie.original_title ? movie.original_title : movie.original_name, '', movie.homepage)
                        .setDescription(`Overview:
                        ${movie.overview}`)
                        .setImage(imageUrl)
                        .addFields(
                            { name: 'Vote', value: `${movie.vote_count}`, inline: true },
                            { name: 'Average Rating', value: `${movie.vote_average}`, inline: true },
                            { name: 'Popularity', value: `${movie.popularity}`, inline: true }
                        )
                        .addField('18+', movie.adult ? 'Yes' : 'No', true)
                        .setFooter(`Release Date: ${movie.release_date ? movie.release_date : movie.first_air_date}`)


                    return message.channel.send(info);

                }
                return message.channel.send(new MessageEmbed().setDescription(`Oops Wrong Argument.
                Use \`~movie help\` to see how to use commands
               `))
            }
            if (command === 'meme') {
                message.reply('Pls upload you image within 10 secs')
                const id = message.author.id;
                const filter = (m) => {
                    return m.author.id === message.author.id
                }
                message.channel.awaitMessages(filter, { max: 1, time: 40000 }).then(collected => {
                    if (collected.first().content === 'cancel') {
                        return message.channel.send('canceled!!')
                    }
                    const attachment = collected.first();
                    const memeImage = attachment.attachments.first().url;
                    message.channel.send('Type Top Text:')
                    message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(
                        e => {
                            const TopText = e.first().content;
                            if (TopText === 'cancel') {
                                return message.channel.send('Canceled!!');
                            }

                            message.channel.send('Type Bottom Text: (Type **skip** if you dont want bottom text)')
                            message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(
                                async (s) => {
                                    const BottomText = s.first().content;
                                    if (BottomText === 'cancel') {
                                        return message.channel.send('Canceled!!');
                                    }

                                    const canvas = Canvas.createCanvas(800, BottomText.toLowerCase() === 'skip' ? 746 : 946);
                                    const ctx = canvas.getContext('2d');
                                    const background = await Canvas.loadImage('https://t3.ftcdn.net/jpg/02/32/74/34/360_F_232743479_Zzil5APYDHoBrUk7qfH7eYyq5KW0nV0C.jpg');
                                    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                                    ctx.strokeStyle = '#74037b';

                                    ctx.font = '60px sans-serif';
                                    // Select the style that will be used to fill the text in
                                    ctx.fillStyle = '#2b2b28';

                                    const memeurl = await Canvas.loadImage(memeImage);
                                    ctx.drawImage(memeurl, 0, 200, 800, 546);
                                    let TopText1 = TopText;
                                    let TopText2 = ''
                                    if (TopText.length > 25) {
                                        const textArray = TopText.split(' ');

                                        TopText1 = textArray.splice(0, 5).join(" ");

                                        TopText2 = textArray.join(" ");

                                    }
                                    let BottomText1 = BottomText;
                                    let BottomText2 = ''
                                    if (TopText.length > 25) {
                                        const textArray = BottomText.split(' ');

                                        BottomText1 = textArray.splice(0, 5).join(" ");

                                        BottomText2 = textArray.join(" ");

                                    }
                                    ctx.fillText(TopText1, 30, 80);
                                    ctx.fillText(TopText2, 30, 160);
                                    ctx.fillText(BottomText1, 30, 820);
                                    ctx.fillText(BottomText2, 30, 900);
                                    const newAttachment = new MessageAttachment(canvas.toBuffer(), 'meme.png');


                                    return message.channel.send(newAttachment);
                                }
                            ).catch(e => console.log(e))
                        }
                    ).catch(e => { console.log(e) })
                }).catch(e => console.log(e))
                return;

            }

            if (command === 'test') {
                const user = await ProfileModel.findOne({ UserId: message.author.id })

                const embed = new MessageEmbed().setTitle('Items')
                    .attachFiles(attachment)
                    .setImage('attachment://item-image.png');




            }
            if (command === 'porn') {
                if (!args.length) return message.channel.send('kasto porn herna manxa argument ni deuna yar sathi tme pani')
                const { data } = await Axios.get(`https://adult-movie-provider.p.rapidapi.com/api/video/FindVideo`,
                    {
                        headers: {
                            "x-rapidapi-key": process.env.RAPID_API_KEY,
                            "x-rapidapi-host": "adult-movie-provider.p.rapidapi.com",
                            "useQueryString": true
                        },
                        params: {
                            "keyword": `${args.join(" ")}`,
                            "offset": "0",
                            "next": "10"

                        }
                    }
                )
                const randomNumber = Math.floor(Math.random() * 10)
                const video = data[randomNumber];
                console.log(video);
                const info = new MessageEmbed()
                    .setAuthor(video.title, '', video.embed_url)
                    .setImage(video.thumbs[0])
                    .setThumbnail(video.thumbs[1])
                return message.author.send(info)

            }

            if (command === 'scoreboard') {
                const players = await Player.find({}).sort({games:-1})
                players.sort((a, b) => {
                    return b.wins - a.wins;
                })
                const playersInfo = []
                for (const player of players) {
                    const { data } = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&format=json&steamids=${player.steamID}`);
                    const output = data.response.players[0];
                    const playerInfo = {
                        name: output.personaname,
                        image: output.avatar,   
                    }
                    playersInfo.push(playerInfo)
                }
               
                const canvas = Canvas.createCanvas(1210, 735);
	            const ctx = canvas.getContext('2d');
                const background = await Canvas.loadImage('./leaderboard.PNG');
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                ctx.fillStyle= '#fff'
                ctx.font ='18px Comfortaa, Sans-serief'
                // ctx.fillText(players[0].nickname,150,171)
                // ctx.fillText(players[1].nickname,150,227)
                // ctx.fillText(players[2].nickname,150,283)
                // ctx.fillText(players[3].nickname,150,339)
                // ctx.fillText(players[4].nickname,150,395)
                // ctx.fillText(players[5].nickname,150,451)
                // ctx.fillText(players[6].nickname,150,507)
                // ctx.fillText(players[7].nickname,150,563)
                // ctx.fillText(players[8].nickname,150,619)
                // ctx.fillText(players[9].nickname,150,675)
                ctx.drawImage(await Canvas.loadImage(playersInfo[0].image),90,148)
                ctx.drawImage(await Canvas.loadImage(playersInfo[1].image),90,204)
                ctx.drawImage(await Canvas.loadImage(playersInfo[2].image),90,260)
                ctx.drawImage(await Canvas.loadImage(playersInfo[3].image),90,316)
                ctx.drawImage(await Canvas.loadImage(playersInfo[4].image),90,372)
                ctx.drawImage(await Canvas.loadImage(playersInfo[5].image),90,428)
                ctx.drawImage(await Canvas.loadImage(playersInfo[6].image),90,484)
                ctx.drawImage(await Canvas.loadImage(playersInfo[7].image),90,540)
                ctx.drawImage(await Canvas.loadImage(playersInfo[8].image),90,596)
                ctx.drawImage(await Canvas.loadImage(playersInfo[9].image),90,652)
                ctx.fillText(playersInfo[0].name,150,171)
                ctx.fillText(playersInfo[1].name,150,227)
                ctx.fillText(playersInfo[2].name,150,283)
                ctx.fillText(playersInfo[3].name,150,339)
                ctx.fillText(playersInfo[4].name,150,395)
                ctx.fillText(playersInfo[5].name,150,451)
                ctx.fillText(playersInfo[6].name,150,507)
                ctx.fillText(playersInfo[7].name,150,563)
                ctx.fillText(playersInfo[8].name,150,619)
                ctx.fillText(playersInfo[9].name,150,675)
                ctx.fillText(players[0].wins,355,171)
                ctx.fillText(players[1].wins,355,227)
                ctx.fillText(players[2].wins,355,283)
                ctx.fillText(players[3].wins,355,339)
                ctx.fillText(players[4].wins,355,395)
                ctx.fillText(players[5].wins,355,451)
                ctx.fillText(players[6].wins,355,507)
                ctx.fillText(players[7].wins,355,563)
                ctx.fillText(players[8].wins,355,619)
                ctx.fillText(players[9].wins,355,675)
                ctx.fillText(players[0].games-players[0].wins,515,171)
                ctx.fillText(players[1].games-players[1].wins,515,227)
                ctx.fillText(players[2].games-players[2].wins,515,283)
                ctx.fillText(players[3].games-players[3].wins,515,339)
                ctx.fillText(players[4].games-players[4].wins,515,395)
                ctx.fillText(players[5].games-players[5].wins,515,451)
                ctx.fillText(players[6].games-players[6].wins,515,507)
                ctx.fillText(players[7].games-players[7].wins,515,563)
                ctx.fillText(players[8].games-players[8].wins,515,619)
                ctx.fillText(players[9].games-players[9].wins,515,675)
                ctx.fillText(players[0].games,715,171)
                ctx.fillText(players[1].games,715,227)
                ctx.fillText(players[2].games,715,283)
                ctx.fillText(players[3].games,715,339)
                ctx.fillText(players[4].games,715,395)
                ctx.fillText(players[5].games,715,451)
                ctx.fillText(players[6].games,715,507)
                ctx.fillText(players[7].games,715,563)
                ctx.fillText(players[8].games,715,619)
                ctx.fillText(players[9].games,715,675)
                ctx.fillText(players[0].wins*3,1020,171)
                ctx.fillText(players[1].wins*3,1020,227)
                ctx.fillText(players[2].wins*3,1020,283)
                ctx.fillText(players[3].wins*3,1020,339)
                ctx.fillText(players[4].wins*3,1020,395)
                ctx.fillText(players[5].wins*3,1020,451)
                ctx.fillText(players[6].wins*3,1020,507)
                ctx.fillText(players[7].wins*3,1020,563)
                ctx.fillText(players[8].wins*3,1020,619)
                ctx.fillText(players[9].wins*3,1020,675)
                
                const atch =  new MessageAttachment(canvas.toBuffer(),'leaderboard.png');
                return message.channel.send(atch)
                
            }
            
            if (command === 'bantababoard') {
                const players = await Player.find({}).sort({games:-1})
                players.sort((a, b) => {
                    return b.wins - a.wins;
                })
                
                
               
                const canvas = Canvas.createCanvas(1210, 735);
	            const ctx = canvas.getContext('2d');
                const background = await Canvas.loadImage('./leaderboard.PNG');
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                ctx.fillStyle= '#fff'
                ctx.font ='18px Comfortaa, Sans-serief'
                ctx.fillText(players[0].nickname,150,171)
                ctx.fillText(players[1].nickname,150,227)
                ctx.fillText(players[2].nickname,150,283)
                ctx.fillText(players[3].nickname,150,339)
                ctx.fillText(players[4].nickname,150,395)
                ctx.fillText(players[5].nickname,150,451)
                ctx.fillText(players[6].nickname,150,507)
                ctx.fillText(players[7].nickname,150,563)
                ctx.fillText(players[8].nickname,150,619)
                ctx.fillText(players[9].nickname,150,675)
              
                ctx.fillText(players[0].wins,355,171)
                ctx.fillText(players[1].wins,355,227)
                ctx.fillText(players[2].wins,355,283)
                ctx.fillText(players[3].wins,355,339)
                ctx.fillText(players[4].wins,355,395)
                ctx.fillText(players[5].wins,355,451)
                ctx.fillText(players[6].wins,355,507)
                ctx.fillText(players[7].wins,355,563)
                ctx.fillText(players[8].wins,355,619)
                ctx.fillText(players[9].wins,355,675)
                ctx.fillText(players[0].games-players[0].wins,515,171)
                ctx.fillText(players[1].games-players[1].wins,515,227)
                ctx.fillText(players[2].games-players[2].wins,515,283)
                ctx.fillText(players[3].games-players[3].wins,515,339)
                ctx.fillText(players[4].games-players[4].wins,515,395)
                ctx.fillText(players[5].games-players[5].wins,515,451)
                ctx.fillText(players[6].games-players[6].wins,515,507)
                ctx.fillText(players[7].games-players[7].wins,515,563)
                ctx.fillText(players[8].games-players[8].wins,515,619)
                ctx.fillText(players[9].games-players[9].wins,515,675)
                ctx.fillText(players[0].games,715,171)
                ctx.fillText(players[1].games,715,227)
                ctx.fillText(players[2].games,715,283)
                ctx.fillText(players[3].games,715,339)
                ctx.fillText(players[4].games,715,395)
                ctx.fillText(players[5].games,715,451)
                ctx.fillText(players[6].games,715,507)
                ctx.fillText(players[7].games,715,563)
                ctx.fillText(players[8].games,715,619)
                ctx.fillText(players[9].games,715,675)
                ctx.fillText(players[0].wins*3,1020,171)
                ctx.fillText(players[1].wins*3,1020,227)
                ctx.fillText(players[2].wins*3,1020,283)
                ctx.fillText(players[3].wins*3,1020,339)
                ctx.fillText(players[4].wins*3,1020,395)
                ctx.fillText(players[5].wins*3,1020,451)
                ctx.fillText(players[6].wins*3,1020,507)
                ctx.fillText(players[7].wins*3,1020,563)
                ctx.fillText(players[8].wins*3,1020,619)
                ctx.fillText(players[9].wins*3,1020,675)
                
                const atch =  new MessageAttachment(canvas.toBuffer(),'leaderboard.png');
                return message.channel.send(atch)
                
            }
            else {
                const msg = args.join(" ");
                message.channel.send(`bantaba bot ko dictionary ma **${command} ${msg}** vanne sabda raina raixa`)
            }
        }

    }
    catch (e) {
        console.log(e);
    }







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

const itemImageGenerate = async (MatchID, HeroID) => {

    try {
        const match = await Axios.get(`https://api.opendota.com/api/matches/${MatchID}`);
        let playerInfo = {};
        match.data.players.map(player => {
            if (player.hero_id === HeroID) {
                playerInfo = player;
            }
        })
        const canvas = Canvas.createCanvas(225, 100);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://media.tarkett-image.com/large/TH_25094225_25187225_001.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const Item1Url = getItemImage(playerInfo.item_0);
        const Item1 = await Canvas.loadImage(Item1Url);
        ctx.drawImage(Item1, 0, 0, 75, 50);
        const Item2Url = getItemImage(playerInfo.item_1);
        const Item2 = await Canvas.loadImage(Item2Url);
        ctx.drawImage(Item2, 75, 0, 75, 50);
        const Item3Url = getItemImage(playerInfo.item_2);
        const Item3 = await Canvas.loadImage(Item3Url);
        ctx.drawImage(Item3, 150, 0, 75, 50);
        const Item4Url = getItemImage(playerInfo.item_3);
        const Item4 = await Canvas.loadImage(Item4Url);
        ctx.drawImage(Item4, 0, 50, 75, 50);
        const Item5Url = getItemImage(playerInfo.item_4);
        const Item5 = await Canvas.loadImage(Item5Url);
        ctx.drawImage(Item5, 75, 50, 75, 50);
        const Item6Url = getItemImage(playerInfo.item_5);
        const Item6 = await Canvas.loadImage(Item6Url);
        ctx.drawImage(Item6, 150, 50, 75, 50);



        const attachment = new MessageAttachment(canvas.toBuffer(), 'item-image.png');
        return {
            attachment,
            gpm: playerInfo.benchmarks.gold_per_min.raw,
            xpm: playerInfo.benchmarks.xp_per_min.raw
        };
    } catch (error) {

        console.log(error)
    }

}


// const getItemName = (itemId) => {
//     let itemName;
//     dota_items.map(item => {
//         if (item.id === itemId) {
//             itemName = item.localized_name
//         }
//     })
//     return itemName;
// }

// const getItemImage = (itemId) => {
//     let itemImage = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png';
//     dota_items.map(item => {
//         if (item.id === itemId) {
//             itemImage = item.url_image;
//         }
//     })
//     return itemImage;
// }

const getXP = (duration, kill, assists, deaths, level, stat) => {
    let xp = 0;
    if (deaths === 0 || deaths === 1) {
        deaths = 2;
    }
    xp = (duration / 5) * level + ((kill + assists) / deaths) * 80;

    return Math.trunc(xp);
}



const getAllItemImages = () => {
    let images = [];
    const items = require('./dota_items_new');
    items.forEach(item => {
        const obj = {};

        let newItem = item.name.split('_');
        newItem.shift();
        newItem = newItem.join("_");

        obj.url = `http://cdn.dota2.com/apps/dota2/images/items/${newItem}_lg.png`;
        obj.id = item.id;
        images.push(obj);

    })
    return images;
}

const getItemImage = (itemId) => {
    let itemImage = 'https://media.istockphoto.com/photos/dust-scratches-black-background-distressed-layer-picture-id1166511133?k=6&m=1166511133&s=612x612&w=0&h=HOqm_e4TyGaTyp33PwxOd359Myft9wmMiHDDi6dlm6o=';
    const dota_items = getAllItemImages();
    dota_items.map(item => {
        if (item.id === itemId) {
            itemImage = item.url;
        }
    })
    return itemImage;
}


const levelUP = (earnedXP) => {
    let level = 0;
    let missingXP = 0;
    if (earnedXP < 4000) {
        level = 1;
        missingXP = 4000 - earnedXP;
    }
    if (earnedXP >= 4000 && earnedXP <= 10000) {
        level = 2;
        missingXP = 10000 - earnedXP;
    }
    if (earnedXP > 10000 && earnedXP <= 20000) {
        level = 3;
        missingXP = 20001 - earnedXP;
    }
    if (earnedXP > 20000 && earnedXP <= 50000) {
        level = 4;
        missingXP = 50001 - earnedXP;
    }
    if (earnedXP > 50000 && earnedXP <= 100000) {
        level = 5;
        missingXP = 100001 - earnedXP;
    }
    if (earnedXP > 100000 && earnedXP <= 180000) {
        level = 6;
        missingXP = 180001 - earnedXP;
    }
    if (earnedXP > 180000 && earnedXP <= 260000) {
        level = 7;
        missingXP = 260001 - earnedXP;
    }
    if (earnedXP > 260000 && earnedXP <= 350000) {
        level = 8;
        missingXP = 350001 - earnedXP;
    }
    if (earnedXP > 350000 && earnedXP <= 450000) {
        level = 9;
        missingXP = 450001 - earnedXP;
    }
    if (earnedXP > 450000 && earnedXP <= 570000) {
        level = 10;
        missingXP = 570001 - earnedXP;
    }
    if (earnedXP > 570000 && earnedXP <= 700000) {
        level = 11;
        missingXP = 700001 - earnedXP;
    }
    if (earnedXP > 700000 && earnedXP <= 900000) {
        level = 12;
        missingXP = 900001 - earnedXP;
    }
    if (earnedXP > 900000 && earnedXP <= 1120000) {
        level = 13;
        missingXP = 1120001 - earnedXP;
    }
    return {
        level,
        missingXP
    };
}


client.login(process.env.DISCORD_BOT_TOKEN)