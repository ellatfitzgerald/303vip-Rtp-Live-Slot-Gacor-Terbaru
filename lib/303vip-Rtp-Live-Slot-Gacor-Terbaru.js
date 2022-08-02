'use babel';

import 303VipRtpLiveSlotGacorTerbaruView from './303vip-Rtp-Live-Slot-Gacor-Terbaru-view';
import { CompositeDisposable } from 'atom';

export default {

  303VipRtpLiveSlotGacorTerbaruView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.303VipRtpLiveSlotGacorTerbaruView = new 303VipRtpLiveSlotGacorTerbaruView(state.303VipRtpLiveSlotGacorTerbaruViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.303VipRtpLiveSlotGacorTerbaruView.getElement(),
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
    this.303VipRtpLiveSlotGacorTerbaruView.destroy();
  },

  serialize() {
    return {
      303VipRtpLiveSlotGacorTerbaruViewState: this.303VipRtpLiveSlotGacorTerbaruView.serialize()
    };
  },

  toggle() {
    console.log('303VipRtpLiveSlotGacorTerbaru was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
