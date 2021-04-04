const { Command } = require('discord.js-commando');
const { byUUID, byId } = require('../../controllers/decks/fetch');

module.exports = class CardCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'deck',
      aliases: ['d'],
      group: 'decks',
      memberName: 'deck',
      description: 'Displays deck from ashes.live',
      args: [
        {
          key: 'uuid',
          prompt: 'Deck ID (or uuid)',
          type: 'string',
        },
      ],
    });
  }

  run(message, { uuid }) {
    if (Number.isNaN(uuid)) {
      return byUUID(message, uuid, this.client);
    }
    return byId(message, uuid, this.client);
  }
};