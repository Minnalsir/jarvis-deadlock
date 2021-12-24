import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'boom',

            description: 'Generally used to say hie 🤗',

            category: 'dev',

            usage: `${client.config.prefix}boom`,

            baseXp: 0

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
      for(let i = 0; i > 5; i++){

        return void (await M.reply(`🤹‍♂️ Ey Mother Fucker 🥃 ${M.sender.username}!`))}

    }

}
