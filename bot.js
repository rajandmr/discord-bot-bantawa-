require('dotenv').config();
require('./db');
const moment = require('moment')

const ProfileModel = require('./model/profile')

const game_mode = require('./game_mode');
const lobby_type = require('./lobby_type');
const heroes = require('./heroes');
const dota_items = require('./dota_items_old');


const { Client, MessageAttachment, MessageEmbed } = require('discord.js');

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
        return message.channel.send('password: Deathdust007')
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

                        const user = await ProfileModel.findOne({ Tag: message.author.tag });
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
                            return message.channel.send('Garib raixau sathi tme ta')
                        }
                    }

                }
                else if (args[0] === 'tails') {
                    args.shift();
                    const amount = Number(args.join(" "));
                    if (amount >= 0 && amount <= 1000000) {

                        const user = await ProfileModel.findOne({ Tag: message.author.tag });
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
                            return message.channel.send('Garib raixau sathi tme ta')
                        }
                    }
                }
                else if (amount >= 0 && amount <= 1000000) {

                    const user = await ProfileModel.findOne({ Tag: message.author.tag });
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
                        return message.channel.send('Garib raixau sathi tme ta')
                    }


                }
                else {
                    return message.channel.send('0 - 1million matra gamble gara sathi tyo vanda dherei pani hiana thorei pani haina')
                }

            }

            if (command === 'check') {
                return message.channel.send(`${message.author.tag}`)
            }

            if (command === 'create') {
                if (!args.length) return message.channel.send('character ko name ni chaiyo');
                const profile = await ProfileModel.findOne({ Tag: message.author.tag });
                if (profile) {
                    return message.channel.send(`tmro character already raixa ta sathi **${profile.Name}** vanne. name edit garne vaye use ***bantaba edit <newName>*** `)
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
                                            return message.channel.send('database ma rakhnu ma kharabi aayo paxi try garnu hola')
                                        } else {
                                            message.delete()
                                            return message.channel.send(`aja dekhi tmro name ${Name} yaad rakha natra ***bantaba profile*** garera hera`)
                                        }

                                    })
                                }
                            }


                            if (reaction.emoji.name === '❎') {
                                if (user.id === UserId) {
                                    message.delete()
                                    return message.channel.send('arko pali banau hai dost aile lai nabanayeni')
                                }
                            }
                        })
                    })

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
                const profile = await ProfileModel.find({ Tag: message.author.tag });
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
                                return message.channel.send(`tmro name **${oldName}** bata aba **${saved.Name}** vayo la moj gara`)
                            }
                        })
                    } else {
                        return message.channel.send('xaina profile nai k ko edit hau')
                    }
                }).catch(e => console.log(e))
            }

            if (command === 'image') {
                if (!args.length) {
                    return message.channel.send('image ko url ni deu sathi')
                }
                const url = args.join(" ");
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
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
                    const user = await ProfileModel.findOne({ Tag: message.author.tag });
                    if (!user.SteamID) {
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
                        const dota2stats = new MessageEmbed()
                            .setColor('#ad1005')
                            .setTitle('Dota 2')
                            .setAuthor(personaname, avatar)
                            .setDescription(`Played as **${heroName}**`)

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
                        return message.channel.send('hero ko name milena jasto xa feri try')
                    }

                    const matches = [];
                    const user = await ProfileModel.findOne({ Tag: message.author.tag });
                    const id = user.SteamID;
                    const { data } = await Axios.get(`https://api.opendota.com/api/players/${id}/matches`);
                    data.forEach(match => {
                        if (match.hero_id === heroId) {
                            matches.push(match);
                        };
                    })
                    if (!matches.length) {
                        return message.channel.send('vetiyena yar game dherei purano raixa')
                    }

                    const stat = matches[matchNumber - 1];
                    if (!stat) {
                        return message.channel.send('purano raixa match vetiyena')
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
                    const dota2stats = new MessageEmbed()
                        .setColor('#f5e56c')
                        .setTitle('Dota 2')
                        .setAuthor(personaname, avatar)
                        .setDescription(`Played as **${heroName}**`)

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
                    const user = await ProfileModel.findOne({ Tag: message.author.tag });
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
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
                if (user.SteamID) {
                    return message.channel.send('yo ek choti matra hannne command ho tmro steam id already xa change garne vaye contact Deepak Shrestha')
                }
                const steamId = args.join(" ");
                user.SteamID = steamId;
                await user.save();
                return message.channel.send('Steam id set gariyo steam profile herne vaye use ***bantaba mmr***');
            }

            if (command === 'mmr') {
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
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
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
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

                const canvas = Canvas.createCanvas(225, 150);
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

                const backpackItem1Url = getItemImage(playerInfo.backpack_0);
                const backpackItem1 = await Canvas.loadImage(backpackItem1Url);
                ctx.drawImage(backpackItem1, 0, 110, 75, 40);
                const backpackItem2Url = getItemImage(playerInfo.backpack_1);
                const backpackItem2 = await Canvas.loadImage(backpackItem2Url);
                ctx.drawImage(backpackItem2, 75, 110, 75, 40);
                const backpackItem3Url = getItemImage(playerInfo.backpack_2);
                const backpackItem3 = await Canvas.loadImage(backpackItem3Url);
                ctx.drawImage(backpackItem3, 150, 110, 75, 40);


                const attachment = new MessageAttachment(canvas.toBuffer(), 'item-image.png');

                return message.channel.send(attachment);
            }

            if (command === 'money') {
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
                const gold = user.Gold;

                return message.channel.send(`You currently have **$${gold}**, <@${message.author.id}>`)
            }
            if (command === 'economy') {
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
                const gold = user.Gold;

                return message.channel.send(`\`\`\`You currently have $${gold}\`\`\``)
            }
            if (command === 'richest') {
                const users = await ProfileModel.find({}).sort({ Gold: -1 });
                let msg = ''
                users.forEach((user, index) => {
                    msg = msg + `${index + 1}. \`${user.Name}\`, a character by \`${user.Tag}\` with **$${user.Gold}**
                    `;
                })
                const richestPlayers = new MessageEmbed()
                    .setColor("#0af568")
                    .setTitle("The Richest Players of bantabaRPG")
                    .setDescription(`${msg}`)

                return message.channel.send(richestPlayers)
            }
            if (command === 'addxp') {
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
                const id = user.SteamID;
                const { data } = await Axios.get(`https://api.opendota.com/api/players/${id}/matches`);
                let earnedXP = 0;
                if (user.recentMatchID) {
                    if (user.recentMatchID === data[0].match_id) {
                        return message.channel.send('xp already added xa feri new game khela sathi ani add gara');
                    }
                    earnedXP = getXP(data[0].duration, data[0].kills, data[0].assists, data[0].deaths, user.Level, data[0]);
                    let xp = earnedXP;
                    const stat = data[0];
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
                    user.XP = user.XP + xp;
                    let goldReward = Math.round(xp/2);
                    goldbooster? goldReward = goldReward+Math.round(earnedXP/2) : null
                    user.Gold = user.Gold + goldReward
                    goldbooster? user.activeGoblin = 0: null
                
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
                        .setDescription(`${booster === 20 ? '**XP Charm Consumed**' : ''}
                        ${goldbooster ? '**Goblin Fortune Consumed**' : ''}
                        Earned XP: ${earnedXP}
                        ${result === 'Win' ? `Win Bonus (+${modifiedpercent}%)` : `Lose Penalty (-${modifiedpercent})%`} : ${modifiedXP}
                        Total XP Rewarded: ${xp}
                        You recieved **$${goldReward}** as a reward`);
                    message.channel.send(XPdetails);
                    if (levelup) {
                        return message.channel.send(`:fireworks: Congratulation you leveled up to **${newLevel}**. You recieved **$${newLevel * 2000}** as a reward`)
                    } else {
                        return;
                    }


                } else {

                    earnedXP = getXP(data[0].duration, data[0].kills, data[0].assists, data[0].deaths, user.Level, data[0]);
                    let xp = earnedXP;
                    const stat = data[0];
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
                    user.XP = user.XP + xp;
                    let goldReward = Math.round(xp/2);
                    goldbooster? goldReward = goldReward+Math.round(earnedXP/2) : null
                    user.Gold = user.Gold + goldReward
                    goldbooster? user.activeGoblin = 0: null
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
                        .setDescription(`${booster === 20 ? '**XP Charm Consumed**' : ''}
                    ${goldbooster ? '**Goblin Fortune Consumed**' : ''}
                    Earned XP: ${earnedXP}
                    ${result === 'Win' ? `Win Bonus (+${modifiedpercent}%)` : `Lose Penalty (-${modifiedpercent})%`} : ${modifiedXP}
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
                const users = await ProfileModel.find({}).sort({ XP: -1 });
                let msg = ''
                users.forEach((user, index) => {
                    msg = msg + `${index + 1}. \`${user.Name}\`, a character by \`${user.Tag}\` with total XP: **${user.XP}**, Level: **${user.Level}**
                    `;
                })
                const richestPlayers = new MessageEmbed()
                    .setColor("#11096e")
                    .setTitle("Top Dota2 players of BantabaRPG")
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
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
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
                     Drops either xp charm(33.33%) or gobline fortune(66.66%)`,
                    );
                return message.channel.send(msg);
            }
            if (command === 'buy') {
                let msg = args.join(" ");
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
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
                } else {
                    return message.channel.send('Sorry, boosters available are only 1,2 or 3')
                }
            }

            if (command === 'boosters') {
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
                if (!user) {
                    return message.channel.send('character banau suruma, user ***bantaba create <character>***')
                }
                let charmCount = 0;
                let blackMoleCount = 0;
                let goblinFortuneCount = 0;
                user.charm ? charmCount = user.charm : charmCount = 0;
                user.blackMole ? blackMoleCount = user.blackMole : blackMoleCount = 0;
                user.goblinFortune ? goblinFortuneCount = user.goblinFortune : goblinFortuneCount = 0;
                const msg = new MessageEmbed()
                    .setTitle('Your Boosters')
                    .setDescription(`**1.XP Charm ** : \`${charmCount}\`
                    **2.Goblin Fortune ** : \`${goblinFortuneCount}\`
                    **3.Black Mole ** : \`${blackMoleCount}\`

                    Activate using \`~activate [itemNumber]\``)
                return message.channel.send(msg);
            }

            if (command === 'activate') {
                let msg = args.join(" ");
                const user = await ProfileModel.findOne({ Tag: message.author.tag });
                if (!user) {
                    return message.channel.send('character banau suruma, user ***bantaba create <character>***')
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
                } else {
                    return message.channel.send('Sorry, boosters available are only 1,2 or 3')
                }
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
        13.This is not everything there is but hope this sums up for now.
        **Good Luck Have Fun** by BantabaBot`);

                return message.channel.send(msg);
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
    let itemImage = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png';
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