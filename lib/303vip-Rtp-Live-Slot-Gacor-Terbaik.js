'use babel';

import 303VipRtpLiveSlotGacorTerbaikView from './303vip-Rtp-Live-Slot-Gacor-Terbaik-view';
import { CompositeDisposable } from 'atom';

export default {

  303VipRtpLiveSlotGacorTerbaikView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.303VipRtpLiveSlotGacorTerbaikView = new 303VipRtpLiveSlotGacorTerbaikView(state.303VipRtpLiveSlotGacorTerbaikViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.303VipRtpLiveSlotGacorTerbaikView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'indobet-situs-slot-terpercaya:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.303VipRtpLiveSlotGacorTerbaikView.destroy();
  },

  serialize() {
    return {
      303VipRtpLiveSlotGacorTerbaikViewState: this.303VipRtpLiveSlotGacorTerbaikView.serialize()
    };
  },

  toggle() {
    console.log('303VipRtpLiveSlotGacorTerbaik was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
