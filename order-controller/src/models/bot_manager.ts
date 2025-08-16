import { reactive } from "vue";
import { Bot } from "./bot";
import type { OrderManager } from "./order_manager";

export class BotManager {
  private _bots: Bot[] = [];

  get bots(): Bot[] {
    return this._bots;
  }

  addBot(orderManager: OrderManager) {
    const bot = reactive(new Bot(this.bots.length + 1, orderManager));
    this._bots.push(bot as Bot);
    this.startWorking(bot as Bot);
  }

  removeBot(targetBot: Bot) {
    this.stopWorking(targetBot);
    const index = this.bots.findIndex((bot) => {
      return bot.id === targetBot.id;
    });
    this._bots.splice(index, 1);
  }

  removeNewestBot() {
    const bot = this.bots[this.bots.length - 1];
    if (!bot) return;
    this.stopWorking(bot);
    this.bots.pop();
  }

  startWorking(targetBot: Bot) {
    targetBot.start();
  }

  stopWorking(targetBot: Bot) {
    targetBot.stop();
  }

  triggerAllBotToWork() {
    this.bots.forEach((bot) => {
      this.startWorking(bot);
    });
  }
}
