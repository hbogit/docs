(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{388:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"interacting-with-the-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-the-contract"}},[t._v("#")]),t._v(" Interacting with the Contract")]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("p",[t._v("Make sure you have set up "),s("strong",[t._v("localterra")]),t._v(" and that it is up and running:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" localterra\ndocker-compose up\n")])])]),s("p",[t._v("You should also have the latest version of "),s("code",[t._v("terracli")]),t._v(" by building the latest version of Terra Core. We will configure it to use it against our isolated testnet environment.")]),t._v(" "),s("p",[t._v("In a separate terminal, make sure to set up the following mnemonic:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli keys "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" test1 --recover\n")])])]),s("p",[t._v("Using the mnemonic:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn\n")])])]),s("h2",{attrs:{id:"uploading-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uploading-code"}},[t._v("#")]),t._v(" Uploading Code")]),t._v(" "),s("p",[t._v("Make sure that the "),s("strong",[t._v("optimized build")]),t._v(" of "),s("code",[t._v("contract.wasm")]),t._v(" that you created in the last section is in your current working directory.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli tx wasm store contract.wasm --from test1 --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localterra --gas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --broadcast-mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("block\n")])])]),s("p",[t._v("You should see output similar to the following:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("height: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\ntxhash: 8A9F770581C5B8F7A39BF78DE7673B590849A7C1807BD7CC213E235CAD49A2D4\ncodespace: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ncode: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\ndata: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nrawlog: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{"msg_index":0,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"storecode"},{"key":"module","value":"wasm"}]},{"type":"store_code","attributes":[{"key":"sender","value":"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"},{"key":"code_id","value":"1"}]}]}]\'')]),t._v("\nlogs:\n- msgindex: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  log: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  events:\n  - type: message\n    attributes:\n    - key: action\n      value: storecode\n    - key: module\n      value: wasm\n  - type: store_code\n    attributes:\n    - key: sender\n      value: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\n    - key: code_id\n      value: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\ninfo: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ngaswanted: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("505850")]),t._v("\ngasused: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504528")]),t._v("\ntx: null\ntimestamp: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),s("p",[t._v("As you can see, our contract was successfully instantiated with Code ID #1.")]),t._v(" "),s("p",[t._v("You can check it out:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli query wasm code "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ncodehash: jWcmve62I58tWHd5a9E8PeZ3BUUmLE50mLf094/3N8Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\ncreator: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\n")])])]),s("h2",{attrs:{id:"creating-the-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-contract"}},[t._v("#")]),t._v(" Creating the Contract")]),t._v(" "),s("p",[t._v("We have now uploaded the code for our contract, but we still don't have a contract. Let's create it, with the following InitMsg:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyTerraToken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"symbol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MTT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"initial_balances"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100000"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("We will compress the JSON into 1 line with "),s("a",{attrs:{href:"https://codebeautify.org/jsonminifier",target:"_blank",rel:"noopener noreferrer"}},[t._v("this online tool"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli tx wasm instantiate "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"name":"MyTerraToken","symbol":"MTT","initial_balances":[{"address":"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8","amount":"100000"}]}\'')]),t._v(" --from test1 --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localterra --gas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --broadcast-mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("block\n")])])]),s("p",[t._v("You should get a response like the following:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("height: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("270")]),t._v("\ntxhash: A17A56F9007EBB49E984303EAA82EC1C740A54D8DBD3515B25AD1DFEE9B46E7A\ncodespace: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ncode: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\ndata: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nrawlog: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{"msg_index":0,"log":"","events":[{"type":"instantiate_contract","attributes":[{"key":"sender","value":"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"},{"key":"code_id","value":"1"},{"key":"contract_address","value":"terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5"}]},{"type":"message","attributes":[{"key":"action","value":"instantiatecontract"},{"key":"module","value":"wasm"}]}]}]\'')]),t._v("\nlogs:\n- msgindex: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  log: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  events:\n  - type: instantiate_contract\n    attributes:\n    - key: sender\n      value: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\n    - key: code_id\n      value: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n    - key: contract_address\n      value: terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\n  - type: message\n    attributes:\n    - key: action\n      value: instantiatecontract\n    - key: module\n      value: wasm\ninfo: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ngaswanted: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("68520")]),t._v("\ngasused: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("66105")]),t._v("\ntx: null\ntimestamp: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),s("p",[t._v("From the output, we see that our contract was created above at: "),s("code",[t._v("terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5")]),t._v(". Take note of this contract address, as we will need it for the next section.")]),t._v(" "),s("p",[t._v("Check out your contract information:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli query wasm contract terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\ncodeid: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\naddress: terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\ncreator: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\ninitmsg: "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("eyJuYW1lIjoiTXlUZXJyYVRva2VuIiwic3ltYm9sIjoiTVRUIiwiaW5pdGlhbF9iYWxhbmNlcyI6W3siYWRkcmVzcyI6InRlcnJhMWRjZWd5cmVrbHRzd3Z5eTB4eTY5eWRneG45eDh4MzJ6ZHRhcGQ4IiwiYW1vdW50IjoiMTAwMDAwIn1dfQ")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n")])])]),s("p",[t._v("By decoding the Base64 InitMsg:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyTerraToken"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MTT"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initial_balances"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"executing-the-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#executing-the-contract"}},[t._v("#")]),t._v(" Executing the Contract")]),t._v(" "),s("p",[t._v("Now, let's do the following:")]),t._v(" "),s("ol",[s("li",[t._v("burn 15000 tokens")]),t._v(" "),s("li",[t._v("send 30000 tokens to "),s("code",[t._v("terra18putj9puq4jqcgmk6hje44fyh4hf9nsuwxj9vy")])])]),t._v(" "),s("p",[t._v("This should leave us with 55000 tokens.")]),t._v(" "),s("h4",{attrs:{id:"burning-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#burning-tokens"}},[t._v("#")]),t._v(" Burning tokens")]),t._v(" "),s("p",[t._v("First, to burn:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"burn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15000"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli tx wasm execute terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"burn":{"amount":"15000"}}\'')]),t._v(" --from test1 --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localterra --gas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --broadcast-mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("block\n")])])]),s("h4",{attrs:{id:"transferring-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transferring-tokens"}},[t._v("#")]),t._v(" Transferring Tokens")]),t._v(" "),s("p",[t._v("Finally, to send:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transfer"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipient"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra18putj9puq4jqcgmk6hje44fyh4hf9nsuwxj9vy"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli tx wasm execute terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"transfer":{"amount":"30000","recipient":"terra18putj9puq4jqcgmk6hje44fyh4hf9nsuwxj9vy"}}\'')]),t._v(" --from test1 --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localterra --gas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --broadcast-mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("block\n")])])]),s("h4",{attrs:{id:"querying-balances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querying-balances"}},[t._v("#")]),t._v(" Querying balances")]),t._v(" "),s("p",[t._v("Let's check the result of our executions!")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli query wasm contract-store terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"balance":{"address":"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"}}\'')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"55000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli query wasm contract-store terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"balance":{"address":"terra18putj9puq4jqcgmk6hje44fyh4hf9nsuwxj9vy"}}\'')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"querying-contract-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querying-contract-details"}},[t._v("#")]),t._v(" Querying contract details")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("terracli query wasm contract-store terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"config\":{}}'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyTerraToken"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MTT"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"owner"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Excellent! Congratulations, you've created your first smart contract, and now know how to get developing with the Terra dApp Platform.")]),t._v(" "),s("h2",{attrs:{id:"what-s-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's Next?")]),t._v(" "),s("p",[t._v("We've only walked through a simple example of a smart contract, that modifies a simple balance within its internal state. Although this is enough to make a simple dApp, we can power more interesting applications by "),s("strong",[t._v("emitting messagess")]),t._v(", which will enable us to interact with other contracts as well as the rest of the blockchain's module.")]),t._v(" "),s("p",[t._v("Check out a couple more examples of smart contracts on Terra at our "),s("a",{attrs:{href:"https://github.com/terra-project/cosmwasm-contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("repo"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"exercises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exercises"}},[t._v("#")]),t._v(" Exercises")]),t._v(" "),s("p",[t._v("Try the following problems to improve your understanding of how to write smart contracts:")]),t._v(" "),s("ul",[s("li",[t._v("create a new variable to store that keeps track of everybody who has an active balance")]),t._v(" "),s("li",[t._v("create a new query function that returns the total supply")]),t._v(" "),s("li",[t._v('create a new contract function "Burn All" which allows only the contract owner to delete all coins from existence')]),t._v(" "),s("li",[t._v('create a new contract function "Mint" which allows only the contract owner to create an amount of coins')])])])}),[],!1,null,null,null);a.default=n.exports}}]);