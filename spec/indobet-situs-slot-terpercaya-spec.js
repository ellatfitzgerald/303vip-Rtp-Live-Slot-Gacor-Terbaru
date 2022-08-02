'use babel';

import 303VipRtpLiveSlotGacorTerbaru from '../lib/303vip-Rtp-Live-Slot-Gacor-Terbaru';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('303VipRtpLiveSlotGacorTerbaru', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('303vip-Rtp-Live-Slot-Gacor-Terbaru');
  });

  describe('when the 303vip-Rtp-Live-Slot-Gacor-Terbaru:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.303vip-Rtp-Live-Slot-Gacor-Terbaru')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '303vip-Rtp-Live-Slot-Gacor-Terbaru:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.303vip-Rtp-Live-Slot-Gacor-Terbaru')).toExist();

        let 303VipRtpLiveSlotGacorTerbaruElement = workspaceElement.querySelector('.303vip-Rtp-Live-Slot-Gacor-Terbaru');
        expect(303VipRtpLiveSlotGacorTerbaruElement).toExist();

        let 303VipRtpLiveSlotGacorTerbaruPanel = atom.workspace.panelForItem(303VipRtpLiveSlotGacorTerbaruElement);
        expect(303VipRtpLiveSlotGacorTerbaruPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '303vip-Rtp-Live-Slot-Gacor-Terbaru:toggle');
        expect(303VipRtpLiveSlotGacorTerbaruPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.303vip-Rtp-Live-Slot-Gacor-Terbaru')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '303vip-Rtp-Live-Slot-Gacor-Terbaru:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let 303VipRtpLiveSlotGacorTerbaruElement = workspaceElement.querySelector('.303vip-Rtp-Live-Slot-Gacor-Terbaru');
        expect(303VipRtpLiveSlotGacorTerbaruElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '303vip-Rtp-Live-Slot-Gacor-Terbaru:toggle');
        expect(303VipRtpLiveSlotGacorTerbaruElement).not.toBeVisible();
      });
    });
  });
});
