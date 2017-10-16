/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

require("babel-polyfill");

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

chai.use(chaiEnzyme());

import mountWithL10n from "test/mock-l10n";
import App from "src/webextension/firstrun/components/app";
import Welcome from "src/webextension/firstrun/components/welcome";
import MasterPasswordSetup from "src/webextension/firstrun/components/master-password-setup";

describe("firstrun > components > <App/>", () => {
  it("render app", () => {
    const wrapper = mountWithL10n(
      <App/>
    );

    expect(wrapper).to.contain(Welcome);
    expect(wrapper).to.contain(MasterPasswordSetup);
  });
});
