(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{428:function(e,a,t){"use strict";t.r(a);var r=t(5),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"validator-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validator-guide"}},[e._v("#")]),e._v(" Validator Guide")]),e._v(" "),t("p",[e._v("Terra Core is based on Tendermint, which relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key.")]),e._v(" "),t("p",[e._v('Validator candidates can bond their own Luna and have Luna "delegated", or staked, to them by token holders. The Columbus Mainnet will have 100 validators, but over time this will increase to 300 validators according to a predefined schedule. The validators are determined by who has the most stake delegated to them — the top 100 validator candidates with the most stake will become Terra validators.')]),e._v(" "),t("p",[e._v("Validators and their delegators will earn the following fees:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Compute fees")]),e._v(": To prevent spamming, validators may set minimum gas fees for transactions to be included in their mempool. At the end of every block, the compute fees are disbursed to the participating validators pro-rata to stake.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Stability fees")]),e._v(": To stabilize the value of Luna, the protocol charges a small percentage transaction fee ranging from 0.1% to 1% on every Terra transaction, capped at 1 TerraSDR. This is paid in any Terra currency, and is disbursed pro-rata to stake at the end of every block in TerraSDR.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Seigniorage rewards")]),e._v(": Validators that participate in the Exchange Rate "),t("RouterLink",{attrs:{to:"/dev/spec-oracle.html"}},[t("code",[e._v("Oracle")])]),e._v(" get a portion of seigniorage if they faithfully report and win the ballot (vote within the reward band around the weighted median).")],1)])]),e._v(" "),t("p",[e._v("Besides revenue, there are scarcity incentives:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Swap fees")]),e._v(": A small spread is charged on atomic swap transactions between Luna and any Terra currency, which is burned and creates scarcity in Luna and indirectly rewards validators.")])]),e._v(" "),t("p",[e._v("Note that validators can set commission on the fees their delegators receive as additional incentive.")]),e._v(" "),t("p",[e._v("If validators double sign, are frequently offline or do not participate in governance, their staked Luna (including Luna of users that delegated to them) can be slashed. The penalty depends on the severity of the violation.")]),e._v(" "),t("h2",{attrs:{id:"hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),t("p",[e._v("There currently exists no appropriate cloud solution for validator key management. This may change in 2018 when cloud SGX becomes more widely available. For this reason, validators must set up a physical operation secured with restricted access. A good starting place, for example, would be co-locating in secure data centers.")]),e._v(" "),t("p",[e._v("Validators should expect to equip their datacenter location with redundant power, connectivity, and storage backups. Expect to have several redundant networking boxes for fiber, firewall and switching and then small servers with redundant hard drive and failover. Hardware can be on the low end of datacenter gear to start out with.")]),e._v(" "),t("p",[e._v("We anticipate that network requirements will be low initially. The current testnet requires minimal resources. Then bandwidth, CPU and memory requirements will rise as the network grows. Large hard drives are recommended for storing years of blockchain history.")])])}),[],!1,null,null,null);a.default=i.exports}}]);