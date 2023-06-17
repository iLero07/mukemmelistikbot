const { Client, EmbedBuilder, ButtonBuilder, ActionRow } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "davet",
  description: "💠 Botun davet linkini atar.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const dvt = new Discord.ButtonBuilder().setLabel('Davet Linkim').setStyle('Link').setEmoji('1063843026482503739').setURL('https://discord.com/oauth2/authorize?client_id=1107593033597337690&scope=bot&permissions=8');
	const destek = new Discord.ButtonBuilder().setLabel('Destek Sunucum').setStyle('Link').setEmoji('1044325557615202364').setURL('https://discord.gg/YE3V2kum');
    const row = new Discord.ActionRowBuilder().addComponents(dvt).addComponents(destek)
    const embed = new EmbedBuilder()
    .setAuthor({ name: "Merhaba, Ben Al Mazrah", iconURL: interaction.client.user.displayAvatarURL({ dynamic: true })})
.setTitle("Al Mazrah'ı Davet Et!")
.setDescription(`<:mavi_bot:1119159116724719687>  | Al Mazrah'ı şimdi sunucuna davet et ve botun tadını çıkar!`)
.setColor('#2F3136')
.setTimestamp()
.setFooter({text: interaction.user.tag+" İstedi.", iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

interaction.reply({ embeds: [embed], components:[row]});
  }  

};