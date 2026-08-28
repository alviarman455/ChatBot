'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e1e37005993a5105e02c854107892ccd",
"version.json": "499022ef126952a517b5f4f30f3b702c",
"index.html": "e7d01c5d148326839b614591671ea7a8",
"/": "e7d01c5d148326839b614591671ea7a8",
"firebase-messaging-sw.js": "46ab71f2217176441e3e3afbcfddcf65",
"main.dart.js": "9b4c381118568c74a2bdd21fc88fca16",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad216c9817f045eabae9fc4f94efe295",
".git/config": "bd12ccf97a78fbe35f20881eafe218dd",
".git/objects/92/57d7857c567e7820f45e5ec75dd8a5bc0b1bd8": "003b9512dda0820019678fb430cf87cf",
".git/objects/92/a517d04bb6de5c487dd42d58fa5fdfe7cc280f": "8ebbc3706ce25dcac7d029b092a64024",
".git/objects/92/252be6e68f55f5e49ea04772e3207bf576e89e": "2481ff512d24c8073a1d566a100eb877",
".git/objects/66/af23c134c0fdf25ff709c3fd9655ae3007a21c": "31cc9284a2c2c6315747f365efa6c033",
".git/objects/3b/ac27c28a9cedb6c38e45a3d7703783631f6169": "0b90ef8805680a3ba325ba2a14599100",
".git/objects/6f/89cca1011cdc83c1e9b7698f0cb29b80cb43cd": "e1aab26ee7558d59481cc68fba295a42",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/f1107e2624eac468dcf6698c98c92c16185ee8": "e9af0a38c3b61481a4bed882d8a8562b",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/6a/dbbbceb4de5b1a946a65e52b75c4ec0706b60d": "feacb429da8f1cc33e3da00a46e725f2",
".git/objects/6a/d0c779fd7de65a3493d9b69d7f6bf6d112657c": "4c9f82827d461ca90406fac848717d02",
".git/objects/35/336fdae5e155f0b0ae6c690dd24503242af6cb": "caa32d87bd53b8045be9e088d431c55e",
".git/objects/69/d9213374e9a1d0f1f1b4ae6eb33ebd99e07cce": "3a4067de2b08260b3184a3d5cd13dd5d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/237a625e0bc619af6f89827f2e0e81fec975fc": "99f55315229bab1e2050506beefd6017",
".git/objects/51/b4e328bcbd686399a8bb394215f8e38d3fea1b": "5a62247db3829b3605b19ca73ffb2434",
".git/objects/51/a4caa3cdca37ca47509f7728e5793af5ff3679": "0458b8100db079ac4e37999943256dea",
".git/objects/3d/a1e8432afc7cb275b3165fab9acb8311c60e77": "d399c71c0446e1034166ae93d5b95180",
".git/objects/3d/8c5a27a09b58e195e2afebf55520914477b025": "41923b0c7cb9bf0b29b5504cf61e18c4",
".git/objects/93/fbc0891308c8c354bf0136f3dc4c295aecf22d": "7e9585960f858cc661fba0aaa076827e",
".git/objects/60/a8a8f33f0c6e6e854e1f02d0b3ecbb744de930": "be5e5f9c94c70947b00384e28b2663f5",
".git/objects/60/6af07d8ef4311ac4083c3024cfb7c31848e57e": "3cdbb67ba9e5e16e89508c9e1661568e",
".git/objects/34/481d75c0cbf1b6dc8a000a5ce5f46eeb53bc2e": "7bef7bb659a1e9e597587c296f3cfbb1",
".git/objects/5f/4c2efb236b3372fd688d08b4d1371378739e5c": "b63c6744b20ee24e4288ff7b1cbbef3f",
".git/objects/05/2ad4a3c6d9b24b24a0af2f30e58b9be266ebce": "d380f6a4ce3cbdbe1d9b04d164d0c57b",
".git/objects/02/be52a505bc4a6f004bc01eba96fefb8e882549": "5a37967c359f4e806c336dfd94d4b3c9",
".git/objects/a3/1458c65b2904e05443a5122e3fc1471407b6fa": "6161736376b09c31bff8f3cde9091b0f",
".git/objects/a3/cd552e3dafc95151a717e4cb99aded69051976": "fb4f60e08082b4126798964d4e9199ad",
".git/objects/b5/01ec1b37711831ab74669ad233b9a3c7ba0b80": "ebc09ab8536cf8c795a41567334906c6",
".git/objects/ad/cc092c91abca9663f15195885e3657362103e0": "569d75666a86270590e0d688504fc8b1",
".git/objects/ad/b3643f98cd3124c36d801791499be2664014cd": "80061965c12fea583794ea119ad388fe",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/a0961afd0f0bc8fa0e568e19f84f05f99281ba": "de7bc034170f4c502ffea396d009c5c6",
".git/objects/be/a19fc9be9b0b663ee3e003bf4aa921201d125d": "25801585768afeec40ee94fcad73c564",
".git/objects/be/1a510049cecb381531cc1d1c2dd4cb768d3a4f": "7f46b1e7296c48340694a8624f8fffe9",
".git/objects/df/a9e849bc16d52467b014bcc530d2923e2f0e0c": "3f923656cec72b52c3d413c34fdc427b",
".git/objects/da/eb93d26de1ba4ae86a8850cf0718597b89bae4": "17136ad9749a1648759910c0e936e6a2",
".git/objects/da/2b96338c671665e9f71955d4b932d814a386ec": "f0c8937e8f05e1beef519c0a9002ef9a",
".git/objects/da/5df81b21146ec0dc992bfbbe5b2df0e7372ff8": "6f1ba74747311113384795621db3a86c",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/516209458494738579aca942203731fdd5bdf0": "e055156aebc2e4eeaf0901e10ffa3a98",
".git/objects/a5/0db534f7c6be5c8853114fa13382d11315d731": "70055de1e7904f3579d22803d98ed9ac",
".git/objects/a5/fe2eff6ebe0a944a0a9eff722f3b108bdd3907": "addf9c1658069f3595cd46baff72d68e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/17f2490ef4573605722853430d3474f9cb2672": "b6ed23b1aa5ec6ea4da63abe242f30e4",
".git/objects/ae/2306e9941b8f40a4390fd579e7d9c71a8aca95": "0f511ea3375f231d45b74e46cab97341",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/b63fb41f73b07e70738f086e69c84ad00c84a9": "a558f0ed8e144d6132956b81c48de27c",
".git/objects/e5/bb4a2a51b862bfcb848e42f3a44762b3f500f1": "b6644a60ea644cb59894a9c23eb434aa",
".git/objects/e2/cdcac641e75580d23c15fed047e8f8d7dd2efe": "74eba53d11205101daac45993790d7fe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/ca84c549b1bf4547058a9132fdd1f243fdfd64": "bd3e7f178069a2c2bbd12b7784f4bff8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/b0f04d32e7154c199b9381b52051c55ee893b1": "be256638ac0adf1c7c64b01bbb8f16e7",
".git/objects/ca/5520f9772d3a9c6482f86329a4e5c177f98664": "cd7dd5bc2914cdc914920ef91d6aadec",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/20c07ba1dd6b06e378d649f31ef54610f0a998": "891421bc9fc645d35d79df1363e88c1a",
".git/objects/e4/562728c558ed492669dd68e741e3ecf38a9cb9": "c5b771ad7dab291f35d5b89014305d81",
".git/objects/fe/ca435f8bcfa5b94b0a24ff9af6b724f5c23a3f": "306b3a217f3ce0e4b629299f74d58cb8",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c6/de652464f3a66ae329b010b6935db42b284806": "3aca3704e83810ed14d7c759eff96c0d",
".git/objects/c6/f7501e8085e0f024eb6cadae2d2848283d2d42": "a8eb8e29b87d2e1da96c05a0dcf5507b",
".git/objects/4e/345037f5d4392f9e7995b4f2a604aa47908189": "6453b9c4c1f43a2326603310558c27be",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/dc0ed2a7b4ae5f894486aaf18b43dd6af12291": "a0667995722b164722d4f43a4010a006",
".git/objects/27/7470e6e3f21564685c161270a4e3f1c2112361": "24ee4cc2e15e21813e9a46e56787709e",
".git/objects/4b/16e28d442ed7f9c462c117a270a7a63478811d": "34c1134053d845c0fcfdc184c45d73f6",
".git/objects/29/64cb6417fe7a50add0b724500fe9748dbb2f5a": "481c2c0dfd2dc42f4e1b5c2de349c131",
".git/objects/29/8b75473494fc3d1a50deae35385768b1029744": "de1f62da526af7f5f539e8d8e07b64c1",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/42/b7ea64ad7bdfc43d41f8d945b64ca1494c52dc": "769186a2c976a92fe0985043c9992b9c",
".git/objects/89/1ee8681842f145f30973efef22c154c16a3325": "7130c1b6b4a283be67762945068df71f",
".git/objects/89/0cd3d654d05cad04c8c098ccd26a42f8ca5277": "6cc170b358c2317e16f5c2a54c4e62cd",
".git/objects/87/bbe2cd563213cf16ab205e09b9d4d106989caa": "09cea2ba5a301d5d9cbc05476dc943ff",
".git/objects/80/7151f328525e4ad130ebafba6023ee8dddf804": "f08fe7a2cd9020f4ba17c0d63c7ccdd8",
".git/objects/80/9ba0a8894ec5074ce91f1a666f90bca79d3486": "767077545f089bcc88b5d023d3f93571",
".git/objects/80/5c5c3fda99e720353fe320f5ad3b56eadfe588": "8e075c9cecddeb678a522ce8759ab596",
".git/objects/1a/d78d130fea6da51b8581a1107d5c08c4b2cc10": "8ec8c866e1640a1e094f17d460ca8c3d",
".git/objects/7b/c28fc279c2eca796ec11360c70c8105a67f291": "b52b400d1af9ab994243ba73afa4ddfe",
".git/objects/8f/86a75c9113e9d22a08a3b2717ee271b73c579b": "63e82aa9432daed6ebee5d3e2d17f709",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/f35d0d0a7d165b9c8078b1a5928c5c9639d4a4": "c125dfc4a996921073a996db5d60594f",
".git/objects/8a/9f9e97ec4d8e4e4f91cf67f8bdcef8abf1904c": "396c0418bbe620a46af6115ff0ef5c95",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/841a8309a8528bed7b2fa84dff4bb9124d0127": "75deb21876ae06f6641e522dfa2de511",
".git/objects/21/de83b94108c06e74eaa32bac1452f60e6aaa4d": "273c140b190dc1cd4b6a82759840a380",
".git/objects/21/7a1d6696fc1cdbc073b48383eade0abcc7918d": "d1e65aec30ee7b6237e1bff7b5f2134c",
".git/objects/21/affb8309a57f49d29c38d49b007e774b1473df": "67df0d8735765a1a864da44f80a18caf",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/44/30091584c6d17801a0d790c97b3975e35925d9": "6bcc141c82b8178e012a11facbdbab1c",
".git/objects/44/7678787127f67babaf2449ded907d35764b036": "def9c053d19248e74f5b8d68bc8ed916",
".git/objects/88/7af64aa91d8e3379694dd5c01e0d451c10fe50": "f1f252f44005315813d5e1424cf5df95",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/52e542a8fa1efaa73a6999181bf70424e73d7b": "64e0ef03ec943bd5fc8d8ccec71eac20",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/46a67795d9938681cfba77a87b61de22e14887": "b19791319eae3fa3750152f43aaf09c9",
".git/objects/5c/9879e1519e7fd267608a61d5a204e0d2e97ea8": "a8f5f30b1a23676faca009027774782e",
".git/objects/5c/3f5c1d591a257c0348fc4b0efd5cfe58a3de05": "9ae57d39327d68274caaf4bf39f89176",
".git/objects/09/dea90073c4bac5ea1d07c89754ec4d7ae2d03e": "5d50b7412fc57baa53acbb9b0802193b",
".git/objects/09/0d3ce44aaa2598884281e3fa0fbff0fe29eefb": "b074945ed43ac86b24c4221db7e5d3c0",
".git/objects/09/bd05dc7c42376b62c7d93dd7d0f655bcd9c056": "2df7fe70551d2e79669553dd30d4ac92",
".git/objects/5d/b8be5fc38c6023fb908fb3edfd6a7f260dba9e": "f88e4811127ccf0325894c9c97537068",
".git/objects/31/a353213845c67d7e9d7784453fd03927e025d0": "fdab7b5378b0fde9c48fbe300ed6745d",
".git/objects/31/638c5ef6a99e2fddf1e1ce4a3102e00eca857f": "84bd482466a9d7de33c1da4989c61a97",
".git/objects/62/81f81d0ee1eada0e1f926a239f75c67385bdc4": "91ca3661010666317dfef5354ef1bd17",
".git/objects/3a/86215e3f745e115c461cbccb8edbdcd5484123": "01425387af218eec2ae528f55b96fc09",
".git/objects/98/944ee9ebb86a9ee20e3e9a915f42cb90d5f180": "0bf9880df0c2f29c4ff3d39fb3d7cf39",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/30/5c65320e60e8bef622eee32a80b3fbda0f16b5": "8b156e43cd54d26d7816e474369d06ab",
".git/objects/5e/b64a267825e43ccd34052a96e56317b3501f20": "c8bfee05a6217acefc9802a1b1bf41d7",
".git/objects/5b/673c87e5876d5103d69d3593f5af85ceb0aeb2": "88fe24c58e8feec589673601da230cc0",
".git/objects/37/a50af0432bf96628ebba4aa0c349c35871e8f0": "e176c3ad5ff7d4d6df3eb10a737b6035",
".git/objects/08/6e3247d9f3ddecc2d31c9887006f58851cb5aa": "295231099bc3f1fa6b129fbe4a75651e",
".git/objects/01/2c471f6a41d9937252c4eeca2a982eb2f09c16": "ab6a317c782abaeec323a5878ee431c4",
".git/objects/01/0efa1e984e333e5943c77190404c998ff82b9d": "9a5f1d5fa96206f77f1b89069b338b59",
".git/objects/6c/c8ba4f803e0fd7de5f02dc774a25666017f061": "99a8684726d7a62cf2e8aa064fb50399",
".git/objects/6c/6bcfc0a924504d201a29f61fde2040abc54a43": "bcf281f7e9a4c28f783d594a96947e1a",
".git/objects/55/f05b9e77a17a9e78768d3e7fdc745c4271f511": "f73fd113803eb92a695ee80867c2203e",
".git/objects/55/3f26e26825ec9f709514c94d0be27fe759b661": "08f1234e828867f7f5100303db41bead",
".git/objects/97/a81e50886190baf3c36d950becd9c30c095332": "d6747e4a6642d45b21eafd053a4c021c",
".git/objects/63/1c31daed6d5a568d8b26cfb5469edad33c4217": "1e219b314df1629b4622a5cad2adf0c0",
".git/objects/0f/14226bd8beace766dfecd89043c69b9855057d": "61c8c8db8f326d961ad28025c67eda53",
".git/objects/0f/d1212f788ef5f6a5e39568ef0c4b4f54ec1480": "84c0c28c5cc51cece323a38e54443286",
".git/objects/90/a3b1af566206f3fbf78d6ab8b26e42ed108891": "a47b771c2cf5c180c1dd8e8e6401db2b",
".git/objects/bf/e887f03ee697ec397cbfd6bc648c10977abc02": "1042feebe3a33bee9a545d85b7f0c2c4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8351169526ff50b863f8bbbe689dc1260962f4": "1f7f3b1c6740e8169842c0841fcdddaf",
".git/objects/ba/244a7f555fac50a33e651ac0da877c2f43ab72": "c2ead93f9da80593b3cecea73dbb0abd",
".git/objects/a0/6ec5afe16a74ed24bb7619058fee0d75bb4d90": "6973ae423cd371deb34caa1a8588f34d",
".git/objects/a0/23489f1a1664f7cdb78778b20f1638c12eae58": "77e595424573c53c7e0fd76ddeecb0f7",
".git/objects/b8/98a13ea7adba282addf13c404522b730ce296f": "26fd30d7d37234fd50c70a5b0eaa12a0",
".git/objects/b8/d856639ea2316e62da5399a7d82e4e51ac81a5": "4f6f7eb944e8d69d301c1ebdfc49d642",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d2/8ff10044391b3aafe3267647fca13b5ac71151": "5df6251f67387477c32f012f52b73db7",
".git/objects/aa/3db558c74d0746980d2e9c41a1864d199dc8fd": "51555afbcf70c6d146643d31fcae9223",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/036900b338f2ae80808737b39c57d9c78d931b": "5d8b980d4ea39d01120894ef048b973c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e19cd9f112d427829ac10cf2193a5ff5c425e4": "fb6473ae24428ca246849af749ae9459",
".git/objects/c4/54c1c695023061e8c68f8c4ee095cc628a6626": "b69349886acfa89319cdbbaeae6685c5",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/1188fc2ea2c5acfbe0fb2a335c0ef531881eb7": "55fb72347e5bd6ce0a535f8901dbc671",
".git/objects/ea/4bed122f39b792ee3ff2aff7cc4fdbe07af83a": "faf2d7e075908509d4e1760094867b1b",
".git/objects/cd/facd71296785a626d22a158b86c4db4d0ce607": "912a9c036ca6bc212ead93ebeb031ffa",
".git/objects/c2/c8d0bbc55319c3d744b7060e2c95d7cdffad68": "93548cfcf7941c635852ba2d7f19b7f2",
".git/objects/c2/991c6ff5e7d3a9e77bec592a04194fc40acf5e": "23afa571d89adc8d83bcc9889c9a2342",
".git/objects/f6/d388180ba594c86e511c25998a82fd57edf38e": "6ef0927bb2f34b07093e0eba1ee7f51d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/c9e1d51d480cdfff58a7e720f35ab443b6b17f": "ddd5d59e2c007379de9d11eceadea600",
".git/objects/e7/e0894a5d34e00cafca2f0b066b90036869bbd6": "547dcc2a19dd6c6413a88dedccb7cdbd",
".git/objects/ce/8f4e02a916d4b2ef6873cf118d5deea619835e": "170dc014b3de806e5cfc65a2a96cdcae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/c1713170d073b5a6b3cda216866b7e379d654d": "8e7c2d7e929fcf99cf5d14a07de92e87",
".git/objects/2d/0375b05c086d95f00a4f2e91a82d9f1ac8889a": "0c805360819062c2a4482f47b2c39b41",
".git/objects/41/e21ae5724f0a0e4d74112a40e55ebfc6e7efa4": "d6477343bb1dbf65d85f4ce60d0124d5",
".git/objects/1b/dc44e7d2ddbf48d6592173cb10053ef21eb4ac": "27c8d105f8f22633c3321ba55e1417e8",
".git/objects/70/19be3e112cc3d447ac7a705bf5943c5e02d653": "71905b5181b5ab505969f26d5ce256fa",
".git/objects/1e/d20d351446f1b5c53153e22ac00ee1973e167b": "b6fd96b73c2f0952e5ce1af0087900c1",
".git/objects/1e/d1de36e441b96b83fe05719388ea2d0ecd81ca": "760addea1a7a2c74ba1dbb95e1aee4e4",
".git/objects/4f/b6541eb4a6f81226218d3a2d65f2698153c7e6": "c595c6db229835171db27dd7f1b7ee1e",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8d/42b34e5462b7e37d2e3d0a6183d498dda0baf6": "2fb7b7b1960e27c3b83d0bbdc12312d8",
".git/objects/15/d5241ac4f1b7f8711a567aa5c761bd5718d2a7": "f64eb0759877473a134eedef72e9a291",
".git/objects/8c/5a2b8ed21f58b0d5328d6bef21da748946c1cb": "5d682186d79115b4682a999915a37570",
".git/objects/85/8a9b56d640a1bb93155a5973a3bbd7e018b69d": "231089c4cd835dfd4186db9e77f5364f",
".git/objects/2e/ab3881492555c4e3729ec1cc9e9ed42a3325a6": "44cdec96a24b8ade2ca8bfdf7a8627fb",
".git/objects/8b/6cb17f2c597685a4ebff920739c6c0e754eb40": "19baff5bd9ab397dc0c799b9c279c169",
".git/objects/8b/50780dbfb12802663775f563491fc3f832b414": "94a4ea2a77a66c1ba970c9d98d055fc7",
".git/objects/13/304909df2267b094c78113c00709a84f8aa4c2": "1f1ae7e3f7ebfec8934bace22f903253",
".git/objects/7f/c9e6c0743c3896e42d554b2b26ad6a9a199e2d": "5ab3e1c2740fb8a6300fb05088fdb86f",
".git/objects/7f/6ae03778c357047f77d885c0a0f9977686403b": "0a4d45e71ccc3556a7f594868956c11b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/22/a9ed0f1de8fcff0a77254cef696d2b9e5b5440": "4a47a9fe6e25488e32699a6e071ade6d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e03f60dac3a08cc696ec6fff83db25aa",
".git/logs/refs/heads/main": "9a759129fb44ea224ae0c6ffdd4ada82",
".git/logs/refs/remotes/origin/main": "2e4da0a9d9fd10e38ef33f5420c43e56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d61888313c9f3c2e3e642223f2eee52f",
".git/refs/remotes/origin/main": "d61888313c9f3c2e3e642223f2eee52f",
".git/index": "78c513e9b859747fd8204a66b5583fd5",
".git/COMMIT_EDITMSG": "3199f5307378baae7c761843c9aed933",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "b3d6795155794ec4d388ff7d1a838e56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "3dac8825a92bc225721517e193a81cb7",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
