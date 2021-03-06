require('dotenv').config()


const { Client, UserFlags, MessageAttachment, VoiceBroadcast, VoiceChannel } = require('discord.js');

const client = new Client();





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
        if (message.content.startsWith(prefix || prefix2 || prefix3 || prefix4)) {
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
        }
    }
    catch (e) {
        console.log(e);
    }







})

client.on('messageDelete',(message)=>{
    message.channel.send(`message naudau na ${message.author.username} dost`)
})





client.login(process.env.DISCORD_BOT_TOKEN)