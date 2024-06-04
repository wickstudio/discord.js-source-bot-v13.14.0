const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('embed')

    .setDescription('Sends an embed with a button'),

  async execute(interaction) {

    const embed = new MessageEmbed()

      .setColor('#0099ff')

      .setTitle('Example Embed')

      .setDescription('This is an example embed with a button.');

    const row = new MessageActionRow()

      .addComponents(

        new MessageButton()

          .setCustomId('primary')

          .setLabel('Press me')

          .setStyle('PRIMARY'),

      );

    await interaction.reply({ embeds: [embed], components: [row] });

  },

};
