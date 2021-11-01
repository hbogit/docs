(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{411:function(t,e,a){"use strict";a.r(e);var s=a(5),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshoot-validator-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshoot-validator-problems"}},[t._v("#")]),t._v(" Troubleshoot validator problems")]),t._v(" "),a("p",[t._v("Here are some common problems you might encounter when you run a validator node and their solutions.")]),t._v(" "),a("h2",{attrs:{id:"validator-has-0-voting-power"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-has-0-voting-power"}},[t._v("#")]),t._v(" Validator has 0 voting power")]),t._v(" "),a("p",[t._v("If your validator has 0 voting power, your validator has become auto-unbonded. On the mainnet, validators unbond when they do not vote on "),a("code",[t._v("9500")]),t._v(" of the last "),a("code",[t._v("10000")]),t._v(" blocks ("),a("code",[t._v("50")]),t._v(" of the last "),a("code",[t._v("100")]),t._v(" blocks on the testnet). Because blocks are proposed every ~5 seconds, a validator that is unresponsive for ~13 hours (~4 minutes on testnet) become unbonded. This problem usually happens when your "),a("code",[t._v("terrad")]),t._v(" process crashes.")]),t._v(" "),a("p",[t._v("To return the voting power back to your validator:")]),t._v(" "),a("ol",[a("li",[t._v("If "),a("code",[t._v("terrad")]),t._v(" is not running, restart it:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad start\n")])])]),a("ol",[a("li",[t._v("Wait for your full node to reach the latest block, and run:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad tx slashing unjail "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("terra"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("from"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("where")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("<terra>")]),t._v(" is the address of your validator account.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<name>")]),t._v(" is the name of the validator account. To find this information, run "),a("code",[t._v("terrad keys list")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("If you don't wait for "),a("code",[t._v("terrad")]),t._v(" to sync before running "),a("code",[t._v("unjail")]),t._v(", an error message will inform you that your validator is still jailed.")])])])]),t._v(" "),a("ol",[a("li",[t._v("Check your validator again to see if your voting power is back:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terrad status\n")])])]),a("p",[t._v("If your voting power is less than it was previously, it's less because you were slashed for downtime.")]),t._v(" "),a("h2",{attrs:{id:"terrad-crashes-because-of-too-many-open-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrad-crashes-because-of-too-many-open-files"}},[t._v("#")]),t._v(" Terrad crashes because of too many open files")]),t._v(" "),a("p",[t._v("The default number of files Linux can open per process is "),a("code",[t._v("1024")]),t._v(". "),a("code",[t._v("terrad")]),t._v(" is known to open more than this amount, causing the process to crash. To fix this problem:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Increase the number of open files allowed by running "),a("code",[t._v("ulimit -n 4096")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Restart the process with "),a("code",[t._v("terrad start")]),t._v(".")])])]),t._v(" "),a("p",[t._v("If you are using "),a("code",[t._v("systemd")]),t._v(" or another process manager to launch "),a("code",[t._v("terrad")]),t._v(", you might need to configure them. The following  sample "),a("code",[t._v("systemd")]),t._v(" file fixes the problem:")]),t._v(" "),a("div",{staticClass:"language-systemd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-systemd"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /etc/systemd/system/terrad.service")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Terra Columbus Node")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("network.target")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("simple")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("ubuntu")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("WorkingDirectory")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/home/ubuntu")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/home/ubuntu/go/bin/terrad start")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("on-failure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("LimitNOFILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("4096")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("multi-user.target")]),t._v("\n")])])]),a("h2",{attrs:{id:"oracle-voting-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-voting-error"}},[t._v("#")]),t._v(" Oracle voting error")]),t._v(" "),a("p",[t._v("You might receive the following error message by the "),a("a",{attrs:{href:"https://github.com/terra-money/oracle-feeder",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terra Oracle feeder"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("`broadcast error: code: 3, raw_log: validator does not exist: terravaloperxxx`\n")])])]),a("p",[t._v("This message occurs for the following reasons:")]),t._v(" "),a("h3",{attrs:{id:"the-validator-is-not-active"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-validator-is-not-active"}},[t._v("#")]),t._v(" The validator is not active")]),t._v(" "),a("p",[t._v("The validator might not be active for one of the following reasons:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("The validator is jailed. To solve this problem, "),a("code",[t._v("unjail")]),t._v(" the validator by running:")]),t._v(" "),a("p",[a("code",[t._v("terrad tx slashing unjail <terra> --chain-id=<chain_id> --from=<from>")])])]),t._v(" "),a("li",[a("p",[t._v("The validator is not in the active "),a("a",{attrs:{href:"https://docs.terra.money/validators.html#delegations",target:"_blank",rel:"noopener noreferrer"}},[t._v("validator set"),a("OutboundLink")],1),t._v(". Only the top 130 validators are in this set. To fix this problem, increase your total stake so that it is included in the top 130.")])])]),t._v(" "),a("h3",{attrs:{id:"the-network-is-wrong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-network-is-wrong"}},[t._v("#")]),t._v(" The network is wrong.")]),t._v(" "),a("p",[t._v("The oracle feeder might be submitting to the wrong network. To fix this problem, run the feeder with the lite client daemon (LCD) specified:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nom start vote --"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --source http://localhost:8532/latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --lcd "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LCD}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --chain-id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CHAIN_ID}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --validator "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${VALIDATOR_KEY}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --password "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PASSWORD}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n")])])]),a("p",[t._v("The LCD to which the voter is connecting might be running from a different network than your node. The remote LCD for different networks are:")]),t._v(" "),a("ul",[a("li",[t._v("https://lcd.terra.dev for the Columbus mainnet")]),t._v(" "),a("li",[t._v("https://bombay-lcd.terra.dev for the Bombay testnet")])]),t._v(" "),a("p",[t._v("Ensure you specify the LCD for the same network to which your node is connecting.")]),t._v(" "),a("p",[t._v("If you run a "),a("RouterLink",{attrs:{to:"/How-to/Start-LCD.html"}},[t._v("local LCD")]),t._v(" (for example, localhost:1317), ensure your LCD is connecting to the same node.")],1),t._v(" "),a("h2",{attrs:{id:"terrad-crashes-because-of-memory-fragmentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrad-crashes-because-of-memory-fragmentation"}},[t._v("#")]),t._v(" Terrad crashes because of memory fragmentation")]),t._v(" "),a("p",[t._v("As described in "),a("a",{attrs:{href:"https://github.com/terra-money/core/issues/592",target:"_blank",rel:"noopener noreferrer"}},[t._v("this issue"),a("OutboundLink")],1),t._v(", huge memory allocation can cause memory fragmentation issue. Temporal solution is just using small wasm cache size like 50~100MB.")]),t._v(" "),a("p",[t._v("If you use v0.5.10+,")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("contract-memory-cache-size")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),a("p",[t._v("If you use v0.5.7~v0.5.9,")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("write-vm-memory-cache-size")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);