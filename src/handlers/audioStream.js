const ytdl = require('ytdl-core');
const { VOICE_STATE_UPDATE } = require('../events/types.js');

const WELCOME_SOUND = "https://www.youtube.com/watch?v=W8ab00LC-JQ";
const VOLUME = 0.5

module.exports = {
    loadAudioStream : (bot) => {
    bot.on(VOICE_STATE_UPDATE, async (VoiceState) => {
        if(!VoiceState.guild.voiceConnection && !VoiceState.channelID){
            try {
                const conn = await VoiceState.member.voice.channel?.join();
                conn?.play(ytdl(WELCOME_SOUND, {type:'audioonly', range:{end: 150000}}), {VOLUME});
            }
            catch (err) {
                console.log(err)
                }
            }
        })
    }
}


