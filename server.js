const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// prettier-ignore
const notes = [
  { id: "065a859e", type: "PF", createdBy: "FOO006", createdAt: "2024-04-25T00:00:00Z", note: "Mollit consectetur laboris tempor laboris nostrud consequat nulla exercitation dolor ea ex officia nostrud deserunt." },
  { id: "5626748e", type: "OT", createdBy: "FOO007", createdAt: "2024-04-26T00:00:00Z", note: "Culpa eu dolor qui consectetur officia veniam enim." },
  { id: "3d882a82", type: "XI", createdBy: "FOO005", createdAt: "2024-04-27T00:00:00Z", note: "Sit exercitation sunt dolor ipsum mollit excepteur commodo quis culpa ut." },
  { id: "ff5c90b6", type: "DY", createdBy: "FOO005", createdAt: "2024-04-28T00:00:00Z", note: "Nulla deserunt aute qui velit in est Lorem." },
  { id: "565b2b55", type: "XM", createdBy: "FOO009", createdAt: "2024-04-29T00:00:00Z", note: "Sit deserunt esse veniam in aliquip nostrud dolor nisi cupidatat magna cupidatat voluptate." },
  { id: "74b16ccd", type: "ZM", createdBy: "FOO100", createdAt: "2024-04-28T00:00:00Z", note: "Cillum elit fugiat qui laborum do ea consectetur aliquip elit esse." },
  { id: "accd02ae", type: "XT", createdBy: "FOO101", createdAt: "2024-04-28T00:00:00Z", note: "Minim consectetur cillum sit consectetur aliqua ipsum aute in." },
  { id: "89bf75e2", type: "CB", createdBy: "FOO102", createdAt: "2024-04-28T00:00:00Z", note: "Est excepteur tempor esse aliquip dolor qui commodo sint duis labore veniam." },
  { id: "8773b49a", type: "RG", createdBy: "FOO103", createdAt: "2024-04-28T00:00:00Z", note: "Tempor nostrud duis pariatur Lorem irure minim occaecat commodo exercitation cillum proident eu in." },
  { id: "eda29713", type: "KG", createdBy: "FOO104", createdAt: "2024-04-28T00:00:00Z", note: "Sunt cupidatat excepteur Lorem sint nostrud." },
  { id: "1f86733e", type: "XM", createdBy: "FOO105", createdAt: "2024-04-28T00:00:00Z", note: "Qui mollit qui nulla nostrud elit excepteur ea do cupidatat in amet." },
  { id: "8b75ab80", type: "UO", createdBy: "FOO106", createdAt: "2024-04-28T00:00:00Z", note: "Adipisicing sunt ad id ea officia eiusmod sit non aute fugiat magna nisi adipisicing." },
  { id: "ff916fe2", type: "JB", createdBy: "FOO107", createdAt: "2024-04-28T00:00:00Z", note: "Officia velit tempor consectetur sunt veniam aliquip aute." },
  { id: "551ceb9e", type: "DV", createdBy: "FOO108", createdAt: "2024-04-28T00:00:00Z", note: "Ex mollit ut Lorem deserunt culpa ipsum ea esse." },
  { id: "32e277a6", type: "EN", createdBy: "FOO109", createdAt: "2024-04-28T00:00:00Z", note: "Ipsum id pariatur est aliqua enim." },
  { id: "47494634", type: "NT", createdBy: "FOO110", createdAt: "2024-04-28T00:00:00Z", note: "Occaecat pariatur ex irure quis sunt ipsum minim sint dolor et officia velit." },
  { id: "82b48b72", type: "VS", createdBy: "FOO111", createdAt: "2024-04-28T00:00:00Z", note: "Aliquip reprehenderit adipisicing ut exercitation ea pariatur deserunt proident amet reprehenderit labore." },
  { id: "aed550b6", type: "DA", createdBy: "FOO112", createdAt: "2024-04-28T00:00:00Z", note: "Occaecat deserunt commodo officia qui in in labore aliqua nulla deserunt." },
  { id: "0ee90e29", type: "YB", createdBy: "FOO113", createdAt: "2024-04-28T00:00:00Z", note: "Elit excepteur consectetur proident culpa veniam mollit incididunt duis ipsum duis excepteur do eiusmod." },
  { id: "e1d9c051", type: "FL", createdBy: "FOO114", createdAt: "2024-04-28T00:00:00Z", note: "Eiusmod duis duis ad in nisi consequat excepteur sit qui laboris qui enim dolore." },
  { id: "352f87d2", type: "ZH", createdBy: "FOO115", createdAt: "2024-04-28T00:00:00Z", note: "Fugiat enim non Lorem est deserunt ea irure fugiat velit in cupidatat." },
  { id: "9be5f357", type: "NP", createdBy: "FOO116", createdAt: "2024-04-28T00:00:00Z", note: "Nulla tempor excepteur anim est dolor cillum cupidatat." },
  { id: "463e422a", type: "ES", createdBy: "FOO117", createdAt: "2024-04-28T00:00:00Z", note: "Elit magna aliqua adipisicing ipsum minim elit laborum nulla Lorem qui amet eu id adipisicing." },
  { id: "171e4c74", type: "RF", createdBy: "FOO118", createdAt: "2024-04-28T00:00:00Z", note: "Qui aliquip nostrud incididunt voluptate reprehenderit reprehenderit sint ullamco." },
  { id: "8f5c4f42", type: "JR", createdBy: "FOO119", createdAt: "2024-04-28T00:00:00Z", note: "Incididunt Lorem commodo cupidatat ea dolore anim." },
  { id: "a9fe7e56", type: "PA", createdBy: "FOO120", createdAt: "2024-04-28T00:00:00Z", note: "Magna excepteur do pariatur enim commodo sit." },
  { id: "4f478d3f", type: "UJ", createdBy: "FOO121", createdAt: "2024-04-28T00:00:00Z", note: "Exercitation qui adipisicing mollit sint exercitation." },
  { id: "1d52302a", type: "VO", createdBy: "FOO122", createdAt: "2024-04-28T00:00:00Z", note: "Do culpa aliquip laborum dolore minim nostrud quis nisi magna pariatur officia eiusmod nulla." },
  { id: "064a2b99", type: "QP", createdBy: "FOO123", createdAt: "2024-04-28T00:00:00Z", note: "Exercitation nisi labore veniam ut irure amet mollit nulla." },
  { id: "2e7540c0", type: "MV", createdBy: "FOO124", createdAt: "2024-04-28T00:00:00Z", note: "Eu veniam occaecat culpa duis ea deserunt mollit aliqua incididunt ad." },
  { id: "4fac47f2", type: "EH", createdBy: "FOO125", createdAt: "2024-04-28T00:00:00Z", note: "Cupidatat laborum elit do nulla commodo dolore sint aliqua id." },
  { id: "80c784e0", type: "YK", createdBy: "FOO126", createdAt: "2024-04-28T00:00:00Z", note: "Sunt consequat quis laborum est reprehenderit enim occaecat." },
  { id: "18002582", type: "GM", createdBy: "FOO127", createdAt: "2024-04-28T00:00:00Z", note: "Voluptate nulla amet cillum sit Lorem voluptate cupidatat ut." },
  { id: "e96eeeee", type: "HP", createdBy: "FOO128", createdAt: "2024-04-28T00:00:00Z", note: "Excepteur id anim id aliquip consequat." },
  { id: "e10d0906", type: "YW", createdBy: "FOO129", createdAt: "2024-04-28T00:00:00Z", note: "Anim aliquip proident ea est consequat ad." },
  { id: "31fa2302", type: "MB", createdBy: "FOO130", createdAt: "2024-04-28T00:00:00Z", note: "Eiusmod veniam exercitation magna irure tempor pariatur exercitation dolore." },
  { id: "eb7e88f7", type: "KZ", createdBy: "FOO131", createdAt: "2024-04-28T00:00:00Z", note: "Ullamco voluptate incididunt fugiat nostrud voluptate quis occaecat ut labore commodo sint sit fugiat." },
  { id: "280219e4", type: "JO", createdBy: "FOO132", createdAt: "2024-04-28T00:00:00Z", note: "Ut anim mollit duis deserunt deserunt voluptate commodo." },
  { id: "09e9a1ed", type: "IG", createdBy: "FOO133", createdAt: "2024-04-28T00:00:00Z", note: "Enim eiusmod cillum incididunt magna velit aliquip officia ad sint tempor ipsum." },
  { id: "f3f4fd62", type: "PP", createdBy: "FOO134", createdAt: "2024-04-28T00:00:00Z", note: "Consectetur magna nisi culpa elit exercitation aliqua non aliquip anim aute." },
  { id: "ca4fed85", type: "LE", createdBy: "FOO135", createdAt: "2024-04-28T00:00:00Z", note: "Pariatur nostrud laboris occaecat culpa." },
  { id: "ea9f01a4", type: "RA", createdBy: "FOO136", createdAt: "2024-04-28T00:00:00Z", note: "Mollit ea anim officia labore ut commodo quis laboris cupidatat exercitation fugiat ea est." },
  { id: "ac7b4220", type: "XA", createdBy: "FOO137", createdAt: "2024-04-28T00:00:00Z", note: "Deserunt nulla nulla ea pariatur ut mollit ad excepteur." },
  { id: "100f7ec3", type: "GA", createdBy: "FOO138", createdAt: "2024-04-28T00:00:00Z", note: "Ad sint tempor esse cupidatat velit nostrud non elit minim officia duis velit." },
  { id: "39c29e03", type: "ML", createdBy: "FOO139", createdAt: "2024-04-28T00:00:00Z", note: "Sit eiusmod dolor nulla id dolore." },
  { id: "9b7bd7ed", type: "GD", createdBy: "FOO140", createdAt: "2024-04-28T00:00:00Z", note: "Lorem quis ex cupidatat ex nulla pariatur pariatur Lorem est non mollit veniam." },
  { id: "d7737331", type: "RU", createdBy: "FOO141", createdAt: "2024-04-28T00:00:00Z", note: "Dolore ex ea elit veniam pariatur aute exercitation in minim ullamco." },
  { id: "c542d383", type: "FW", createdBy: "FOO142", createdAt: "2024-04-28T00:00:00Z", note: "Consequat et ullamco tempor cillum irure commodo sunt sit." },
  { id: "779fdd33", type: "TD", createdBy: "FOO143", createdAt: "2024-04-28T00:00:00Z", note: "Magna in est eiusmod in veniam laboris minim dolor consequat dolore et eu nulla." },
  { id: "9bb17cf1", type: "IS", createdBy: "FOO144", createdAt: "2024-04-28T00:00:00Z", note: "Veniam cillum sint commodo ipsum voluptate magna non nulla ut ut pariatur minim Lorem." },
  { id: "b1aa9a4e", type: "WA", createdBy: "FOO145", createdAt: "2024-04-28T00:00:00Z", note: "Mollit cillum veniam tempor sint nisi culpa proident do anim aliquip aute pariatur velit." },
  { id: "58a6581f", type: "NZ", createdBy: "FOO146", createdAt: "2024-04-28T00:00:00Z", note: "Sunt labore exercitation enim consequat elit reprehenderit adipisicing do cillum eiusmod laborum." },
  { id: "1216f2a4", type: "SA", createdBy: "FOO147", createdAt: "2024-04-28T00:00:00Z", note: "Esse excepteur Lorem nostrud cupidatat." },
  { id: "664e4be1", type: "RZ", createdBy: "FOO148", createdAt: "2024-04-28T00:00:00Z", note: "Irure labore aliqua qui sunt ullamco laboris laborum labore et." },
  { id: "fd8793c5", type: "DT", createdBy: "FOO149", createdAt: "2024-04-28T00:00:00Z", note: "Veniam culpa labore elit reprehenderit quis dolore veniam do pariatur esse aliqua." },
  { id: "994d7808", type: "FG", createdBy: "FOO150", createdAt: "2024-04-28T00:00:00Z", note: "Voluptate dolore id deserunt dolor veniam." },
  { id: "2eb1615c", type: "QE", createdBy: "FOO151", createdAt: "2024-04-28T00:00:00Z", note: "Excepteur laborum aliquip duis consectetur incididunt anim voluptate sunt anim et anim exercitation elit in." },
  { id: "5626486f", type: "QZ", createdBy: "FOO152", createdAt: "2024-04-28T00:00:00Z", note: "Eiusmod do incididunt nulla est." },
  { id: "dc77efb6", type: "YC", createdBy: "FOO153", createdAt: "2024-04-28T00:00:00Z", note: "Adipisicing culpa in eu ullamco ex non minim dolor anim minim consequat ad anim fugiat." },
  { id: "0c56eb5f", type: "ZD", createdBy: "FOO154", createdAt: "2024-04-28T00:00:00Z", note: "Dolore sit occaecat commodo proident sint Lorem." },
  { id: "c2dfc32e", type: "HT", createdBy: "FOO155", createdAt: "2024-04-28T00:00:00Z", note: "Adipisicing aute fugiat commodo fugiat et laboris incididunt id." },
  { id: "edc2fa4c", type: "XC", createdBy: "FOO156", createdAt: "2024-04-28T00:00:00Z", note: "Laborum quis qui id consequat reprehenderit proident aliquip adipisicing ullamco proident ut commodo consequat proident." },
  { id: "3166d28f", type: "IM", createdBy: "FOO157", createdAt: "2024-04-28T00:00:00Z", note: "Elit amet veniam ullamco elit ad qui nisi laborum." },
  { id: "a16daebd", type: "LO", createdBy: "FOO158", createdAt: "2024-04-28T00:00:00Z", note: "Anim Lorem ut magna officia consectetur non et." },
  { id: "cc63ee94", type: "DA", createdBy: "FOO159", createdAt: "2024-04-28T00:00:00Z", note: "Occaecat aliquip est Lorem deserunt velit elit pariatur sunt est." },
  { id: "f2284397", type: "YA", createdBy: "FOO160", createdAt: "2024-04-28T00:00:00Z", note: "Culpa deserunt Lorem sint qui duis exercitation commodo enim occaecat do." },
  { id: "0592f55e", type: "NY", createdBy: "FOO161", createdAt: "2024-04-28T00:00:00Z", note: "Commodo anim do elit exercitation laborum voluptate in do fugiat laboris qui dolor." },
  { id: "9463fb54", type: "NV", createdBy: "FOO162", createdAt: "2024-04-28T00:00:00Z", note: "Lorem aute officia id reprehenderit id sit nostrud sint adipisicing." },
  { id: "09e3b3e2", type: "LV", createdBy: "FOO163", createdAt: "2024-04-28T00:00:00Z", note: "Velit proident qui ex eu." },
  { id: "7a49bfbf", type: "MW", createdBy: "FOO164", createdAt: "2024-04-28T00:00:00Z", note: "Aliquip sint nulla reprehenderit ullamco laborum id proident." },
  { id: "f6fa791c", type: "DV", createdBy: "FOO165", createdAt: "2024-04-28T00:00:00Z", note: "Et duis minim do est aliqua magna voluptate nulla mollit sit non sit." },
  { id: "684f08c3", type: "CG", createdBy: "FOO166", createdAt: "2024-04-28T00:00:00Z", note: "Id voluptate magna tempor mollit incididunt enim anim." },
  { id: "cb69359f", type: "CA", createdBy: "FOO167", createdAt: "2024-04-28T00:00:00Z", note: "Sit minim irure ut sunt labore enim adipisicing dolore." },
  { id: "2197257c", type: "IK", createdBy: "FOO168", createdAt: "2024-04-28T00:00:00Z", note: "Exercitation incididunt irure dolor ipsum eu mollit duis culpa commodo non mollit eiusmod aliqua adipisicing." },
  { id: "17496416", type: "JH", createdBy: "FOO169", createdAt: "2024-04-28T00:00:00Z", note: "Eu sunt amet nulla nisi est." },
  { id: "c77c10d1", type: "ID", createdBy: "FOO170", createdAt: "2024-04-28T00:00:00Z", note: "Voluptate nisi enim proident commodo excepteur reprehenderit Lorem consectetur labore exercitation irure est eu." },
  { id: "f562b782", type: "JA", createdBy: "FOO171", createdAt: "2024-04-28T00:00:00Z", note: "Nostrud anim adipisicing sit qui pariatur deserunt exercitation." },
  { id: "44db97db", type: "WH", createdBy: "FOO172", createdAt: "2024-04-28T00:00:00Z", note: "Duis occaecat velit cupidatat cupidatat qui irure quis do." },
  { id: "8533d126", type: "IX", createdBy: "FOO173", createdAt: "2024-04-28T00:00:00Z", note: "Officia anim in mollit sint anim voluptate est non sit." },
  { id: "6afd48f1", type: "KC", createdBy: "FOO174", createdAt: "2024-04-28T00:00:00Z", note: "Ipsum eu est ad nisi nulla cupidatat sit minim." },
  { id: "170d510b", type: "YD", createdBy: "FOO175", createdAt: "2024-04-28T00:00:00Z", note: "Aute est irure magna nostrud excepteur." },
  { id: "0302b057", type: "LI", createdBy: "FOO176", createdAt: "2024-04-28T00:00:00Z", note: "Minim deserunt occaecat culpa nostrud veniam." },
  { id: "cda3ffaa", type: "TS", createdBy: "FOO177", createdAt: "2024-04-28T00:00:00Z", note: "Proident ea adipisicing ullamco aliqua." },
  { id: "9d2cff2d", type: "EH", createdBy: "FOO178", createdAt: "2024-04-28T00:00:00Z", note: "Culpa Lorem nulla eu ipsum adipisicing." },
  { id: "e69b3194", type: "XC", createdBy: "FOO179", createdAt: "2024-04-28T00:00:00Z", note: "Excepteur magna consectetur nisi officia sunt est ad fugiat qui voluptate incididunt sunt sit." },
  { id: "85e8d7de", type: "HU", createdBy: "FOO180", createdAt: "2024-04-28T00:00:00Z", note: "Nulla qui dolore veniam officia et exercitation sit nisi dolor pariatur amet magna." },
  { id: "415336f6", type: "UX", createdBy: "FOO181", createdAt: "2024-04-28T00:00:00Z", note: "Occaecat in magna quis et laboris deserunt eu tempor mollit aliquip tempor cupidatat." },
  { id: "f3e38a3b", type: "WJ", createdBy: "FOO182", createdAt: "2024-04-28T00:00:00Z", note: "Dolor reprehenderit cupidatat laboris reprehenderit nulla elit." },
  { id: "7168ba7b", type: "II", createdBy: "FOO183", createdAt: "2024-04-28T00:00:00Z", note: "Cupidatat ad tempor Lorem mollit elit reprehenderit magna minim laborum minim." },
  { id: "0d5d9669", type: "HA", createdBy: "FOO184", createdAt: "2024-04-28T00:00:00Z", note: "Irure qui reprehenderit qui qui." },
  { id: "749d17d2", type: "ZL", createdBy: "FOO185", createdAt: "2024-04-28T00:00:00Z", note: "Ullamco eu enim consectetur pariatur aliqua nisi anim do cillum proident aliquip esse." },
  { id: "dd990be2", type: "KG", createdBy: "FOO186", createdAt: "2024-04-28T00:00:00Z", note: "Aliqua dolore culpa laboris mollit fugiat tempor esse exercitation veniam cillum." },
  { id: "7dbff03b", type: "FM", createdBy: "FOO187", createdAt: "2024-04-28T00:00:00Z", note: "Sunt dolore amet ut elit mollit minim cupidatat veniam id deserunt commodo." },
  { id: "5c4d0f25", type: "ST", createdBy: "FOO188", createdAt: "2024-04-28T00:00:00Z", note: "Reprehenderit deserunt enim quis officia nisi labore anim sunt reprehenderit cupidatat." },
  { id: "99575cfe", type: "EG", createdBy: "FOO189", createdAt: "2024-04-28T00:00:00Z", note: "Consequat excepteur est commodo esse esse veniam eiusmod esse minim exercitation Lorem excepteur." },
]

// http://localhost:3005/notes?limit=0&nextRecordKey=ff5c90b6
app.get('/notes', async (req, res) => {
  await new Promise((r) => setTimeout(r, 1000))

  const limit = getLimit(req.query.limit)
  const offset = getOffset(req.query.nextRecordKey)

  if (offset === -1) {
    res.status(400).send('400')
    return
  }

  const results = notes.slice(offset, offset + limit)
  const next = notes?.[offset + limit + 1]?.id

  res.json({
    limit,
    count: results.length,
    nextRecordKey: notes[offset + limit],
    ...(next && { nextRecordKey: next }),
    results,
  })
})

function getLimit(limit) {
  return limit === undefined ? 40 : +limit
}

function getOffset(nextRecordKey) {
  if (nextRecordKey) {
    return notes.findIndex(({ id }) => id === nextRecordKey)
  }

  return 0
}

const port = 3005
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
