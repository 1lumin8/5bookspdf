const creationOffset = 24;
const creationPage = (printedPage) => printedPage + creationOffset;
const creationTocItems = [
  { title: "Author's note", start: 8 },
  { title: "Preface", start: 9 },
  { title: "Summary", start: 11 },
  { title: "Part 1 | A Treatise on the Bible", start: creationPage(1) },
  { title: "Part 2 | A Treatise on the Creation of Heaven and Earth", start: creationPage(24) },
  { title: "I. God the Creator", start: creationPage(25) },
  { title: "II. The creation of heaven and earth", start: creationPage(28) },
  { title: "III. The process of the creation of heaven and earth", start: creationPage(53) },
  { title: "A. Selection of a pastor", start: creationPage(54) },
  { title: "B. Creation of a kingdom", start: creationPage(85) },
  { title: "C. The creator's covenant with his chosen people", start: creationPage(107) },
  { title: "D. Betrayal", start: creationPage(118) },
  { title: "E. Destruction", start: creationPage(134) },
  { title: "F. The selection of a new pastor", start: creationPage(142) },
  { title: "G. Judgment", start: creationPage(148) },
  { title: "H. Salvation", start: creationPage(155) },
  { title: "I. Re-creation", start: creationPage(160) },
  { title: "J. The new covenant and the sabbath", start: creationPage(166) },
  { title: "Part 3 | A Summary and Explanation of the Book of Revelation", start: creationPage(176) },
  { title: "Introduction to Revelation", start: creationPage(177) },
  { title: "Revelation 1:1-8", start: creationPage(181) },
  { title: "Revelation 1:9-20", start: creationPage(184) },
  { title: "Revelation 2-3", start: creationPage(186) },
  { title: "Revelation 4", start: creationPage(189) },
  { title: "Revelation 5", start: creationPage(191) },
  { title: "Revelation 6", start: creationPage(192) },
  { title: "Revelation 7", start: creationPage(194) },
  { title: "Revelation 8", start: creationPage(197) },
  { title: "Revelation 9", start: creationPage(200) },
  { title: "Revelation 10", start: creationPage(202) },
  { title: "Revelation 11", start: creationPage(206) },
  { title: "Revelation 12", start: creationPage(211) },
  { title: "Revelation 13", start: creationPage(217) },
  { title: "Revelation 14", start: creationPage(220) },
  { title: "Revelation 15", start: creationPage(226) },
  { title: "Revelation 16", start: creationPage(229) },
  { title: "Revelation 17", start: creationPage(235) },
  { title: "Revelation 18", start: creationPage(239) },
  { title: "Revelation 19", start: creationPage(244) },
  { title: "Revelation 20", start: creationPage(250) },
  { title: "Revelation 21", start: creationPage(258) },
  { title: "The conclusion of Revelation 21", start: creationPage(266) },
  { title: "Revelation 22", start: creationPage(269) },
  { title: "The conclusion of the entire book of Revelation", start: creationPage(276) },
  { title: "Part 4 | A Collection of Topical Essays", start: creationPage(280) },
  { title: "1. Creation of heaven and earth: the spiritual and physical worlds", start: creationPage(281) },
  { title: "2. The reason Jesus spoke in figurative language", start: creationPage(285) },
  { title: "3. The parable of sowing two kinds of seed", start: creationPage(289) },
  { title: "4. The secrets of heaven and the two kinds of seed", start: creationPage(298) },
  { title: "5. The reason we must know the Bible", start: creationPage(304) },
  { title: "6. The figurative sheep, dog, and beast", start: creationPage(309) },
  { title: "7. The meaning of the Lord's Prayer", start: creationPage(314) },
  { title: "8. The commandments of God and the teachings of men", start: creationPage(323) },
  { title: "9. Revealed faith and the law", start: creationPage(329) },
  { title: "10. Prophecy and the faith of physical fulfillment", start: creationPage(334) },
  { title: "11. Faith and the people of heaven", start: creationPage(343) },
  { title: "12. Faith and the sin of unbelief", start: creationPage(349) },
  { title: "13. Living a life of faith at the time of Jesus' second coming", start: creationPage(353) },
  { title: "14. Betrayal - Destruction - Salvation", start: creationPage(357) },
  { title: "15. Discerning orthodoxy and heresy", start: creationPage(362) },
  { title: "16. The physical realities of spiritual light and darkness", start: creationPage(371) },
  { title: "17. The physical realities of the tree of life and the tree of the knowledge of good and evil", start: creationPage(377) },
  { title: "18. The true vine and the wild vine", start: creationPage(383) },
  { title: "19. Signs of the end of the age", start: creationPage(391) },
  { title: "20. Distinguishing the times", start: creationPage(397) },
  { title: "21. Distinguishing good and evil spirits", start: creationPage(406) },
  { title: "22. Two types of kingdoms and people", start: creationPage(413) },
  { title: "23. The spiritual and physical battles between God and Satan", start: creationPage(418) },
  { title: "24. Churches and their pastors", start: creationPage(423) },
  { title: "25. The promised messenger at the first and second comings", start: creationPage(425) },
  { title: "26. The promised pastor of the New Testament", start: creationPage(430) },
  { title: "27. The advocate, the holy spirit, and the promised pastor", start: creationPage(435) },
  { title: "28. Heaven for those who are born again", start: creationPage(443) },
  { title: "29. God's kingdom of heaven", start: creationPage(448) },
  { title: "30. A new work, two kinds of seed, and the new covenant", start: creationPage(452) },
  { title: "31. The new covenant and the Passover meal", start: creationPage(456) },
  { title: "32. The blood of the new covenant and a new thing", start: creationPage(461) },
  { title: "33. Those who persecute and those who are persecuted", start: creationPage(464) },
  { title: "34. Distinguishing the righteous from the wicked", start: creationPage(472) },
  { title: "35. The reasons Jesus bore the cross", start: creationPage(476) },
  { title: "36. The spirit of Jesus, who bore the cross", start: creationPage(482) },
  { title: "37. The white stone given to the one who overcomes", start: creationPage(487) },
  { title: "38. The hidden manna", start: creationPage(491) },
  { title: "39. The sealed book and the revelation", start: creationPage(494) },
  { title: "40. The true identity of the beast-the group of the dragon", start: creationPage(500) },
  { title: "41. The seal of God and the mark of the beast", start: creationPage(504) },
  { title: "42. The house of heaven's wedding banquet and its guests", start: creationPage(508) },
  { title: "43. The three types of Israel and their twelve tribes", start: creationPage(513) },
  { title: "44. A full understanding of the first resurrection", start: creationPage(518) },
  { title: "45. The time of the city of the millennium", start: creationPage(524) },
  { title: "46. The holy spirit and religion", start: creationPage(531) },
  { title: "47. The apostles of God and the pastors of men", start: creationPage(536) },
  { title: "48. Christ came in God's name", start: creationPage(543) },
  { title: "49. Distinguishing Shincheonji Church of Jesus from the rest of the world's churches", start: creationPage(545) },
  { title: "50. Old Testament and New Testament prophecies and their fulfillment", start: creationPage(548) },
  { title: "51. A summary of God's promises and their fulfillment", start: creationPage(555) },
  { title: "52. The conclusion of the New Testament", start: creationPage(557) },
  { title: "Epilogue", start: creationPage(564) }
];

const creationSections = [
  { title: "Front matter", start: 1 },
  ...creationTocItems.slice(3)
];

const physicalSections = [
  { title: "Front matter and contents", start: 1 },
  { title: "Introduction to Revelation", start: 9 },
  { title: "Summary of Revelation", start: 11 },
  { title: "Chapter 1 | The conclusion and beginning of the book of Revelation", start: 13 },
  { title: "Chapter 2 | The letters to the messengers of the seven churches", start: 27 },
  { title: "Chapter 3 | The letters to the messengers of the seven churches", start: 38 },
  { title: "Chapter 4 | The throne of God in the spiritual realm", start: 51 },
  { title: "Chapter 5 | The book sealed with seven seals", start: 58 },
  { title: "Chapter 6 | The judgment of the chosen sun, moon, and stars who betrayed", start: 65 },
  { title: "Chapter 7 | The sealed twelve tribes and the great multitude in white", start: 78 },
  { title: "Chapter 8 | The last seal and the seven trumpets", start: 89 },
  { title: "Chapter 9 | The locusts from the abyss and the angels who sinned", start: 99 },
  { title: "Chapter 10 | The revealed book from heaven", start: 109 },
  { title: "Chapter 11 | The death of the two witnesses and the seventh trumpet", start: 118 },
  { title: "Chapter 12 | The battle between the male child and the dragon", start: 133 },
  { title: "Chapter 13 | The chosen people who receive the mark of the beast", start: 149 },
  { title: "Chapter 14 | The 144,000 first fruits sealed and standing on Mount Zion", start: 164 },
  { title: "Chapter 15 | The Temple of the Tabernacle of the Testimony", start: 179 },
  { title: "Chapter 16 | The seven bowls of wrath", start: 189 },
  { title: "Chapter 17 | The prostitute and the wine of adultery", start: 206 },
  { title: "Chapter 18 | The goods of Babylon and marriage with demons", start: 220 },
  { title: "Chapter 19 | The wedding banquet of the Lamb and the rider on the white horse", start: 232 },
  { title: "Chapter 20 | The millennial city, the first resurrection, and judgment", start: 245 },
  { title: "Chapter 21 | The new heaven and new earth and the holy city", start: 256 },
  { title: "Chapter 22 | The tree of life and the messenger of Jesus", start: 273 },
  { title: "The conclusion of Revelation", start: 288 },
  { title: "Epilogue", start: 291 }
];

const books = {
  cross: {
    count: 346,
    label: "십자가의 길",
    path: "assets/full/cross/page",
    tocItems: [
      { title: "머리말", start: 1 },
      { title: "하늘나라 천국 나라 이루기 위해", start: 13 },
      { title: "1. 자존하신 하나님", start: 14 },
      { title: "2. 옥중 단상", start: 17 },
      { title: "3. 배도한 선민의 종말과 새 시대 새 민족 창조", start: 18 },
      { title: "4. 신약의 하나님의 심판 전에 있게 되는 큰 환난", start: 23 },
      { title: "5. 죄와 법 없이 없으면 죄가 없다", start: 24 },
      { title: "6. 예수님의 계시 요한계시록", start: 25 },
      { title: "7. 믿음과 성경의 역사와 약속하신 성경 지식과 체험", start: 27 },
      { title: "8. 나의 신앙의 역사를 되돌아보며", start: 28 },
      { title: "9. 추수된 자들과 밭에 남은 자들과 그 결과", start: 31 },
      { title: "10. 구치소에서 선지 사도들의 길을 따라가며", start: 36 },
      { title: "11. 주기도문대로 행하였는가", start: 39 },
      { title: "12. 신약의 하나님의 뜻과 목적과 구원과 재창조", start: 42 },
      { title: "13. 하나님과 그 말씀 성경을 아는가", start: 56 },
      { title: "14. 하나님과 사람은 어떻게 다를까", start: 58 },
      { title: "15. 하늘이 노하신 재앙이 시작되었다", start: 60 },
      { title: "16. 참으로 회개하라 참으로 천국이 가까이 왔다", start: 64 },
      { title: "17. 천국과 세상, 두 가지 신의 전쟁", start: 65 },
      { title: "18. 예수님의 능력에 대해", start: 67 },
      { title: "19. 나는 세계가 만들어 놓은 세계적 공인이다", start: 68 },
      { title: "20. 영육 국위 선양, 나라와 세계에서 신천지 외에 있는가", start: 70 },
      { title: "21. 오늘날의 일(계시록)의 결론은 어떤 것인가", start: 71 },
      { title: "22. 계시록의 이긴 자와 진 자", start: 72 },
      { title: "23. 하나님과 대한민국의 장래와 신천지", start: 74 },
      { title: "24. 모세 때, 예수님 초림 때, 예수님 재림 때의 일", start: 75 },
      { title: "25. 선지 사도들과 예수님 때와 오늘날의 핍박과 고난", start: 76 },
      { title: "26. 천지 만물 창조주와 마귀와 사람과 믿음과 불신, 지식과 상태", start: 78 },
      { title: "27. 천지 만물 창조와 재창조", start: 79 },
      { title: "28. 땅의 법과 하늘의 법", start: 81 },
      { title: "29. 전통과 이단과 전통, 진리와 비진리", start: 83 },
      { title: "30. 신천지 성도들과 신학교 대화난", start: 84 },
      { title: "31. 계시록의 예수님의 군사와 사탄의 군사와 목자", start: 85 },
      { title: "32. 기뻐하고 즐거워하는 모습, 예수님 초림 때와 같다", start: 87 },
      { title: "33. 하나님과 예수님께 바친 내 몸의 신앙", start: 88 },
      { title: "34. 하나님과 세상 만민이 바라고 바란 천국", start: 89 },
      { title: "35. 신천지예수교 증거장막성전의 신앙과 성경 지식", start: 91 },
      { title: "36. 새 일 창조, 두 가지 씨 뿌림, 새 언약: 예언과 성취", start: 92 },
      { title: "37. 주여 주여 한다고 해서 다 천국 가는 것이 아니다", start: 95 },
      { title: "38. 핍박받는 신천지", start: 97 },
      { title: "39. 구약 성경과 신약 4복음서와 계시록", start: 99 },
      { title: "40. 하늘의 법과 땅의 법과 죄", start: 100 },
      { title: "41. 본 건 판결 무죄", start: 101 },
      { title: "42. 신천지 교단 수색, 구속 왜?", start: 103 },
      { title: "43. 종교와 예수교, 하나님의 것과 사람의 것", start: 104 },
      { title: "44. 하나님과 예수님의 초림과 재림의 고통, 예언과 실상", start: 106 },
      { title: "45. 도의 초보와 완전한 곳(히 6장)", start: 108 },
      { title: "46. 세상 정치와 자유와 평화와 사랑", start: 110 },
      { title: "47. 진짜 종교와 가짜 종교와 확인", start: 111 },
      { title: "48. 종교와 정치가 하나가 되면 서로가 망한다", start: 112 },
      { title: "49. 하나님의 진노와 회개", start: 114 },
      { title: "50. 마음과 마음, 신의 마음과 사람의 마음", start: 115 },
      { title: "51. 계시록은 하나님이 이루실 설계도이며 그 실체는 새 하늘 새 땅 신천지이다", start: 116 },
      { title: "52. 신앙인의 최고의 영광의 자리", start: 117 },
      { title: "53. 지구촌의 세 가지 사람과 두 가지 신과 이단", start: 118 },
      { title: "54. 하나님의 씨로 난 자와 마귀 씨로 난 자 구분", start: 120 },
      { title: "55. 하나님의 새 언약과 거짓 신앙인들", start: 121 },
      { title: "56. 주기도문 마 6장 9-13절, 14-15절 알고 있는가", start: 122 },
      { title: "57. 내 몸 아픈 것에 대한 내 설명", start: 124 },
      { title: "58. 영의 세계와 육의 세계, 하나님의 나라와 마귀의 나라", start: 127 },
      { title: "59. 자유와 평화와 사랑과 빛과 물", start: 129 },
      { title: "60. 선악과나무의 정체와 종말", start: 130 },
      { title: "61. 주 재림과 세상 끝의 징조", start: 131 },
      { title: "62. 하나님의 씨로 난 자와 마귀 씨로 난 자의 구분", start: 134 },
      { title: "63. 하나님과 사람과의 약속과 믿음", start: 135 },
      { title: "64. 예언과 성취와 믿음", start: 136 },
      { title: "65. 예수님 초림 때와 재림 때의 고난 길", start: 138 },
      { title: "66. 하늘문화세계평화광복(HWPL)은 하늘의 문화로 세계를 평화로 회복시킨다는 뜻이다", start: 139 },
      { title: "67. 예수님의 약속, 세상 끝에 대한 예언", start: 141 },
      { title: "68. 하나님은 모든 천하 권세를 예수님께 다 맡기셨다", start: 144 },
      { title: "69. 하나님은 언제 어디에 오시는가", start: 146 },
      { title: "70. 천법과 지법 차이", start: 147 },
      { title: "71. 만물이 고대한 하나님의 나라 천국(롬 8장)", start: 148 },
      { title: "72. 도의 초보와 완전한 곳(히 6장)", start: 150 },
      { title: "73. 태초의 말씀과 하나님과 믿음", start: 154 },
      { title: "74. 추수된 자와 추수되지 못한 자의 차이", start: 156 },
      { title: "75. 오늘날 기독교인들은 죽은 자와 산 자에게 왜 심판을 하는지 알고 못한다", start: 158 },
      { title: "76. 피로 약속한 새 언약대로 했는가", start: 159 },
      { title: "77. 계시록의 예언과 성취와 믿음", start: 160 },
      { title: "78. 새 일 신천지 창조의 예언과 실상", start: 164 },
      { title: "79. 신천지예수교 증거장막성전의 시작과 오늘", start: 166 },
      { title: "80. 하나님의 뜻과 목적인 새 언약", start: 168 },
      { title: "81. 나는 약속한 새벽별이 함께하였다", start: 169 },
      { title: "82. 두 가지 법과 영생하는 생명 과실", start: 170 },
      { title: "83. 법과 죄와 용서", start: 172 },
      { title: "84. 사망과 죄와 법", start: 173 },
      { title: "85. 배도, 멸망, 구원의 사건", start: 174 },
      { title: "86. 참 목자와 거짓 목자의 정체", start: 176 },
      { title: "87. 보화와 진주와 그물", start: 177 },
      { title: "88. 끝나는 세상과 다시 창조되는 세계", start: 178 },
      { title: "89. 하늘이 준 나의 신앙의 길은 어디까지이며 계시록 성취 때의 끝은 어떻게 되는가", start: 180 },
      { title: "90. 하나님 소속과 마귀 소속과의 전쟁", start: 181 },
      { title: "91. 참 신앙인의 고통과 믿음", start: 183 },
      { title: "92. 하나님과 뱀과의 전쟁 6천 년", start: 184 },
      { title: "93. 새 시대 새 나라 새 민족 창조는 약속대로 이루신다", start: 185 },
      { title: "94. 지구촌을 31바퀴나 돌고 돌았다 자유와 평화와 사랑을 위해", start: 187 },
      { title: "95. 천국과 영생의 도", start: 188 },
      { title: "96. 생명나무와 선악과나무(창 2:9)", start: 190 },
      { title: "97. 계시록은 어떤 책이며 무엇을 말한 것인가", start: 192 },
      { title: "98. 이긴자와 약속(계 2-3장)", start: 193 },
      { title: "99. 동성성평과 HWPL 평화 활동", start: 195 },
      { title: "100. 역사와 시대적 흐름과 변화", start: 197 },
      { title: "101. 하늘과 땅의 죄와 의", start: 198 },
      { title: "102. 대속(代贖)의 피", start: 199 },
      { title: "103. 죄와 의", start: 201 },
      { title: "104. 하나님의 목적은 계시록을 이루는 것", start: 202 },
      { title: "105. 하나님과 참 종교는 하나이다", start: 203 },
      { title: "106. 하나님은 약속한 새 일 창조를 이루려 하시고 마귀는 새 일 창조를 못 하게 방해하는 일을 한다", start: 206 },
      { title: "107. 육적 양식과 영적 양식", start: 208 },
      { title: "108. 세상 예언가들은 다 피조물들이요 죄인들이다", start: 210 },
      { title: "109. 계시록 요약 설명", start: 211 },
      { title: "110. 시초의 사람처럼 영생하게 되는 때", start: 213 },
      { title: "111. 죄 없는 낙원 천국", start: 214 },
      { title: "112. 예수님의 초림과 재림", start: 216 },
      { title: "113. 하나님의 말씀과 믿게 한 이적들", start: 217 },
      { title: "114. 신천인들의 할 일과 각오", start: 218 },
      { title: "115. 거짓 목자와 참 목자의 증거", start: 220 },
      { title: "116. 신천지가 증거해야 할 것들", start: 221 },
      { title: "117. 새 언약", start: 223 },
      { title: "118. 유월절의 양과 예수님의 피와 새 언약", start: 225 },
      { title: "119. 예수님의 재림의 시작과 끝과 목적과 전쟁", start: 226 },
      { title: "120. 인 맞은 12지파 창조 후의 큰 환난과 흰 무리 창조", start: 228 },
      { title: "121. 영육 결혼과 말씀(계 19장)", start: 229 },
      { title: "122. 바벨론 나라와 선악과나무와 생명나무", start: 231 },
      { title: "123. 신천지와 하나님과 천국", start: 232 },
      { title: "124. 태초의 말씀 성경 교리", start: 234 },
      { title: "125. 신천지의 시험과 큰 환난, 신천기 37년", start: 235 },
      { title: "126. 새 하늘 새 땅(신천지) 창조", start: 237 },
      { title: "127. 주 재림의 징조(마 24장 요약)", start: 239 },
      { title: "128. 이사야 1-2장, 유다와 예루살렘의 이상", start: 240 },
      { title: "129. 두 가지 영의 씨와 육의 씨", start: 242 },
      { title: "130. 하나님의 약속하신 심판", start: 243 },
      { title: "131. 빛의 인도로 시작한 신앙의 길", start: 245 },
      { title: "132. 지상 모든 종교 중 기독교 경서가 최고이다", start: 247 },
      { title: "133. 하나님의 씨로 난 아들과 마귀 씨로 난 아들", start: 248 },
      { title: "134. 구약과 신약의 예언과 성취와 믿음", start: 250 },
      { title: "135. 신천지예수교 증거장막성전", start: 251 },
      { title: "136. 의와 죄의 기준과 겉과", start: 253 },
      { title: "137. 하늘에서 이룬 것같이 이 땅에서도 그와 같이 이룬다", start: 254 },
      { title: "138. 새 시대의 새 하늘 새 땅 계시록 시대", start: 258 },
      { title: "139. 계시록을 가감하고 않는 약속의 민족 신천지예수교회", start: 259 },
      { title: "140. 예수님은 우리의 십자가를 대신 지셨다", start: 260 },
      { title: "141. 아버지 하나님과 예수님께 아룁니다", start: 262 },
      { title: "142. 옥중에서 기록한 글들", start: 263 },
      { title: "143. 종교와 신앙과 소망", start: 265 },
      { title: "144. 주 재림으로 이루어진 새 언약의 실상", start: 267 },
      { title: "145. 언약과 성취된 실상과 믿음", start: 270 },
      { title: "146. 계시록의 예언과 실상의 믿음, 눅 18:8", start: 273 },
      { title: "147. 우리의 나라 천국 낙원", start: 275 },
      { title: "148. 요한계시록 요약 설명", start: 276 },
      { title: "149. 계시록 전장 실상 증거, 1-22장", start: 277 },
      { title: "150. 주님 따라 104일", start: 314 },
      { title: "옥중 편지 1. 신천기 37년 8월 18일, 전국 나라 신천지 12지파 성도님들에게", start: 317 },
      { title: "옥중 편지 2. 신천기 37년 8월 26일, 사랑하는 전국 12지파 성도님들께", start: 318 },
      { title: "옥중 편지 3. 신천기 37년 9월 7일, 전국 12지파 성도님들께", start: 319 },
      { title: "옥중 편지 4. 신천기 37년 9월 14일, 국내외 12지파 및 각 종교인들 총 기도회", start: 321 },
      { title: "옥중 편지 5. 신천기 37년 9월 17일, 사랑하는 전국 12지파 성도님들에게", start: 321 },
      { title: "옥중 편지 6. 신천기 37년 10월 15일, 12지파장과 전국 교회 담임에게", start: 323 },
      { title: "옥중 편지 7. 신천기 37년 10월 19일, 사랑하는 전국 12지파 성도님들에게", start: 324 },
      { title: "옥중 편지 8. 신천기 37년 10월 22일, 신천지 12지파장들에게 - 약속 새 언약 -", start: 326 },
      { title: "옥중 편지 9. 신천기 37년 10월 22일, 천하 신천지 12지파 가족들에게", start: 329 },
      { title: "옥중 편지 10. 신천기 37년 10월 26일, 각 지파장과 교회 담임들에게", start: 331 },
      { title: "옥중 편지 11. 신천기 37년 10월 28일, 전국 12지파 성도님들에게", start: 332 },
      { title: "옥중 편지 12. 신천기 37년 11월 5일, 신천지 가족 여러분에게", start: 333 },
      { title: "편지. 신천기 37년 11월 13일, 사랑하는 전국 성도님들께", start: 335 },
      { title: "맺음말", start: 336 },
      { title: "후기", start: 337 },
      { title: "글 제목 찾아보기", start: 338 }
    ],
    sections: [
      { title: "머리말과 차례", start: 1 },
      { title: "1-16. 자존하신 하나님 - 참으로 회개하면 천국이 가까이 왔다", start: 14 },
      { title: "17-39. 천국과 세상 - 구약 성경과 신약 4복음서와 계시록", start: 65 },
      { title: "40-62. 하늘의 법과 땅의 법 - 새로 난 자와 마귀의 구분", start: 100 },
      { title: "63-83. 약속과 믿음 - 법과 죄와 용서", start: 135 },
      { title: "84-105. 사망과 죄의 법 - 하나님과 참 종교", start: 173 },
      { title: "106-127. 새 일 창조 - 주 재림의 징조", start: 206 },
      { title: "128-150. 예언과 성취 - 주님 따라 104일", start: 240 },
      { title: "옥중 편지", start: 317 },
      { title: "맺음말과 후기", start: 335 }
    ]
  },
  acts: {
    count: 384,
    label: "예수 그리스도 행전",
    path: "assets/full/acts/page",
    tocItems: [
      { title: "머리말", start: 19 },
      { title: "개요", start: 21 },
      { title: "1장 마태복음 강해", start: 24 },
      { title: "예수님을 그리스도로 믿는 근거", start: 30 },
      { title: "마 1장 | 예수님의 영육 족보와 씨", start: 34 },
      { title: "마 2장 | 예수님의 탄생과 피신", start: 39 },
      { title: "마 3장 | 물 세례와 성령 세례", start: 45 },
      { title: "마 4장 | 시험을 이기고 역사를 시작하신 예수님", start: 49 },
      { title: "마 5, 6, 7장 | 예수님의 계명", start: 55 },
      { title: "주기도문", start: 61 },
      { title: "마 8장 | 많은 이적을 행하신 예수님", start: 70 },
      { title: "마 9장 | 새 포도주는 새 가죽 부대에", start: 77 },
      { title: "마 10장 | 열두 제자 파송", start: 83 },
      { title: "마 11장 | 계시와 하나님", start: 91 },
      { title: "마 12장 | 안식일의 주인이신 예수님", start: 100 },
      { title: "마 13장 | 비유로 드러낸 천국 비밀", start: 107 },
      { title: "마 14장 | 세례 요한의 죽음과 생애", start: 126 },
      { title: "마 15장 | 유대의 전통을 개혁하신 예수님", start: 130 },
      { title: "마 16장 | 천국의 열쇠를 주신 예수님", start: 135 },
      { title: "마 17장 | 변화산에서의 예수님", start: 141 },
      { title: "마 18장 | 형제 사랑과 용서", start: 145 },
      { title: "마 19장 | 희생의 대가에 대한 약속", start: 152 },
      { title: "마 20장 | 천국에서 받을 상", start: 157 },
      { title: "마 21장 | 예루살렘에 입성하신 예수님", start: 160 },
      { title: "마 22장 | 천국 혼인 잔치", start: 167 },
      { title: "마 23장 | 화 있을진저 외식하는 서기관들과 바리새인들이여", start: 176 },
      { title: "마 24장 | 주 재림과 말세의 징조", start: 188 },
      { title: "마 25장 | 신랑을 기다리는 열 처녀의 등과 기름", start: 208 },
      { title: "마 26장 | 최후의 만찬과 가룟 유다의 배신", start: 218 },
      { title: "마 27장 | 십자가에서 죽으신 주", start: 225 },
      { title: "마 28장 | 예수님의 부활과 지상 명령", start: 231 },
      { title: "2장 누가복음 강해", start: 235 },
      { title: "눅 20장 | 예수님의 권위에 도전하는 유대 지도자들", start: 235 },
      { title: "눅 22장 | 새 언약을 세우신 예수님", start: 245 },
      { title: "3장 요한복음 강해", start: 253 },
      { title: "요 1장 | 말씀이 육신이 되어 오신 예수님", start: 253 },
      { title: "세 가지 이스라엘", start: 259 },
      { title: "요 2장 | 가나 혼인 잔치의 표적", start: 263 },
      { title: "요 3장 | 거듭남과 천국", start: 266 },
      { title: "요 4장 | 영생하도록 솟아나는 샘물", start: 274 },
      { title: "요 5장 | 부활과 영생", start: 280 },
      { title: "요 6장 | 하늘에서 온 떡", start: 288 },
      { title: "요 7장 | 생수의 강", start: 298 },
      { title: "요 8장 | 진리가 너희를 자유케 하리라", start: 302 },
      { title: "요 9장 | 육적 소경과 영적 소경", start: 310 },
      { title: "요 10장 | 선한 목자와 삯꾼 목자와 이리", start: 315 },
      { title: "요 11장 | 나는 부활이요 생명이니", start: 323 },
      { title: "요 12장 | 한 알의 씨앗", start: 327 },
      { title: "요 13장 | 제자들의 발을 씻겨 주신 예수님", start: 333 },
      { title: "요 14장 | 예비한 처소와 보혜사 성령", start: 336 },
      { title: "요 15장 | 사랑과 핍박", start: 345 },
      { title: "요 16장 | 보혜사의 사명", start: 358 },
      { title: "요 17장 | 예수님의 기도", start: 366 },
      { title: "요 18-21장 | 예수님의 죽음과 부활", start: 369 },
      { title: "선지 사도들과 우리의 신앙", start: 370 },
      { title: "맺음말", start: 382 }
    ],
    sections: [
      { title: "사진 자료와 앞부분", start: 1 },
      { title: "머리말", start: 19 },
      { title: "개요", start: 21 },
      { title: "1장 마태복음 강해", start: 24 },
      { title: "마 1-7장. 족보, 탄생, 세례, 시험, 계명", start: 30 },
      { title: "마 8-16장. 이적, 천국, 비유, 세례 요한, 천국의 열쇠", start: 69 },
      { title: "마 17-28장. 변화산, 용서, 천국, 재림, 십자가, 부활", start: 140 },
      { title: "2장 누가복음 강해", start: 235 },
      { title: "3장 요한복음 강해", start: 253 },
      { title: "선지 사도들과 우리의 신앙", start: 370 },
      { title: "맺음말", start: 382 }
    ]
  },
  revelation: {
    count: 456,
    label: "요한계시록의 실상",
    path: "assets/full/revelation/page",
    tocItems: [
      { title: "도식", start: 1 },
      { title: "제1장 | 계시록 종합 개요와 시작", start: 2 },
      { title: "제2장 | 일곱 교회 사자에게 보낸 편지", start: 24 },
      { title: "제3장 | 일곱 교회 사자에게 보낸 편지", start: 42 },
      { title: "제4장 | 하나님 보좌", start: 62 },
      { title: "제5장 | 일곱 인으로 인봉한 책", start: 74 },
      { title: "제6장 | 여섯째 인을 뗀 후 여섯째 나팔", start: 86 },
      { title: "제7장 | 인 맞은 십사만 사천과 흰 무리", start: 108 },
      { title: "제8장 | 마지막 일곱째 인과 나팔", start: 126 },
      { title: "제9장 | 무저갱과 황충과 첫째 화", start: 142 },
      { title: "제10장 | 하늘에서 온 천사의 책", start: 160 },
      { title: "제11장 | 두 증인과 증거와 일곱째 나팔", start: 174 },
      { title: "제12장 | 하늘의 용과 땅의 여자", start: 200 },
      { title: "제13장 | 용에게 표 받고 경배하는 만민", start: 226 },
      { title: "제14장 | 처음 익은 열매와 새 노래 십사만 사천", start: 250 },
      { title: "제15장 | 만국이 와서 경배할 곳 증거장막 성전", start: 274 },
      { title: "제16장 | 진노의 대접과 심판하는 멸망자들", start: 290 },
      { title: "제17장 | 음녀와 음행의 포도주", start: 318 },
      { title: "제18장 | 바벨론의 상품과 귀신의 처소", start: 340 },
      { title: "제19장 | 어린양의 혼인 잔치와 백마 탄 자", start: 360 },
      { title: "제20장 | 천년성 제사장과 흰 보좌 심판", start: 380 },
      { title: "제21장 | 새 하늘 새 땅과 새 예루살렘", start: 398 },
      { title: "제22장 | 생명나무와 예수님의 사자", start: 426 },
      { title: "맺음말", start: 455 }
    ],
    sections: [
      { title: "도식", start: 1 },
      { title: "제1장 | 계시록 종합 개요와 시작", start: 2 },
      { title: "제2장 | 일곱 교회 사자에게 보낸 편지", start: 24 },
      { title: "제3장 | 일곱 교회 사자에게 보낸 편지", start: 42 },
      { title: "제4장 | 하나님 보좌", start: 62 },
      { title: "제5장 | 일곱 인으로 인봉한 책", start: 74 },
      { title: "제6장 | 여섯째 인을 뗀 후 여섯째 나팔", start: 86 },
      { title: "제7장 | 인 맞은 십사만 사천과 흰 무리", start: 108 },
      { title: "제8장 | 마지막 일곱째 인과 나팔", start: 126 },
      { title: "제9장 | 무저갱과 황충과 첫째 화", start: 142 },
      { title: "제10장 | 하늘에서 온 천사의 책", start: 160 },
      { title: "제11장 | 두 증인과 증거와 일곱째 나팔", start: 174 },
      { title: "제12장 | 하늘의 용과 땅의 여자", start: 200 },
      { title: "제13장 | 용에게 표 받고 경배하는 만민", start: 226 },
      { title: "제14장 | 처음 익은 열매와 새 노래 십사만 사천", start: 250 },
      { title: "제15장 | 만국이 와서 경배할 곳 증거장막 성전", start: 274 },
      { title: "제16장 | 진노의 대접과 심판하는 멸망자들", start: 290 },
      { title: "제17장 | 음녀와 음행의 포도주", start: 318 },
      { title: "제18장 | 바벨론의 상품과 귀신의 처소", start: 340 },
      { title: "제19장 | 어린양의 혼인 잔치와 백마 탄 자", start: 360 },
      { title: "제20장 | 천년성 제사장과 흰 보좌 심판", start: 380 },
      { title: "제21장 | 새 하늘 새 땅과 새 예루살렘", start: 398 },
      { title: "제22장 | 생명나무와 예수님의 사자", start: 426 },
      { title: "맺음말", start: 455 }
    ]
  },
  creation: {
    count: 595,
    label: "The Creation of Heaven and Earth",
    path: "assets/full/creation/page",
    tocItems: creationTocItems,
    sections: creationSections
  },
  physical: {
    count: 294,
    label: "The Physical Fulfillment of Revelation",
    path: "assets/full/physical/page",
    tocItems: physicalSections,
    sections: physicalSections
  }
};

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const viewerBackdrop = document.querySelector("#viewerBackdrop");
const viewer = document.querySelector("#viewer");
const viewerImage = viewer.querySelector("img");
const viewerTitle = viewer.querySelector("h3");
const viewerLabel = viewer.querySelector(".viewer-label");
const viewerNavButtons = viewer.querySelectorAll(".viewer-nav");
const floatingTop = document.querySelector(".floating-top");
const renderedBooks = new Set();
const currentViewer = {
  book: null,
  page: 1
};
let lockedScrollX = 0;
let lockedScrollY = 0;
let pageIsLocked = false;
let pendingOpenScroll = null;

function pageSrc(book, page) {
  return `${books[book].path}-${String(page).padStart(3, "0")}.jpg`;
}

function sectionEnd(book, index) {
  const sections = books[book].sections;
  return index + 1 < sections.length ? sections[index + 1].start - 1 : books[book].count;
}

function pageCard(book, page) {
  const bookData = books[book];
  const src = pageSrc(book, page);
  return `
    <article class="drawing-card" id="${book}-page-${page}" data-book-card="${book}">
      <button class="thumb-button" type="button" data-book-key="${book}" data-src="${src}" data-book="${bookData.label}" data-page="${page}">
        <img src="${src}" alt="${bookData.label} page ${page}" loading="lazy">
      </button>
      <div class="card-copy">
        <p class="page-label">Page ${page}</p>
        <h3>${bookData.label}</h3>
      </div>
    </article>`;
}

function renderToc(book) {
  const data = books[book];
  const tocItems = data.tocItems || data.sections.map((section, index) => ({
    title: section.title,
    start: section.start,
    end: sectionEnd(book, index),
    sectionId: `${book}-section-${index + 1}`
  }));
  return `
    <nav class="toc" aria-label="${data.label} table of contents">
      <div class="toc-head">
        <p class="kicker">Table of Contents</p>
        <h3>${data.label}</h3>
      </div>
      <ol>
        ${tocItems.map((item) => {
          const href = item.sectionId ? `#${item.sectionId}` : `#${book}-page-${item.start}`;
          return `
            <li>
              <a href="${href}">
                <span>${item.title}</span>
                <small>${item.end ? `Pages ${item.start}-${item.end}` : `Page ${item.start}`}</small>
              </a>
            </li>`;
        }).join("")}
      </ol>
    </nav>`;
}

function renderSection(book, section, index) {
  const end = sectionEnd(book, index);
  let pages = "";
  for (let page = section.start; page <= end; page += 1) {
    pages += pageCard(book, page);
  }
  return `
    <section class="book-section" id="${book}-section-${index + 1}">
      <header class="section-head">
        <div>
          <p class="page-label">Pages ${section.start}-${end}</p>
          <h3>${section.title}</h3>
        </div>
        <a href="#${book}" class="back-link">Back to top</a>
      </header>
      <div class="card-grid">${pages}</div>
    </section>`;
}

function renderBook(book) {
  if (renderedBooks.has(book)) return;
  const mount = document.querySelector(`.book-pages[data-book="${book}"]`);
  const data = books[book];
  mount.innerHTML = renderToc(book) + data.sections.map((section, index) => renderSection(book, section, index)).join("");
  renderedBooks.add(book);
}

function updateFloatingTop() {
  const activePanel = document.querySelector(".panel.is-active");
  const activeBook = activePanel ? books[activePanel.id] : null;
  const showButton = window.scrollY > 420;
  floatingTop.classList.toggle("is-visible", showButton);
  if (activeBook) {
    floatingTop.setAttribute("aria-label", `Back to top of ${activeBook.label}`);
  }
}

function activateTab(target, shouldScroll = true) {
  tabs.forEach((item) => item.classList.toggle("is-active", item.dataset.tab === target));
  panels.forEach((panel) => panel.classList.toggle("is-active", panel.id === target));
  renderBook(target);
  if (shouldScroll) {
    document.getElementById(target).scrollIntoView({ behavior: "smooth", block: "start" });
  }
  updateFloatingTop();
}

function updateViewer(book, page) {
  const bookData = books[book];
  currentViewer.book = book;
  currentViewer.page = page;
  viewer.dataset.viewerBook = book;
  viewerImage.src = pageSrc(book, page);
  viewerImage.alt = `${bookData.label} page ${page}`;
  viewerTitle.textContent = bookData.label;
  viewerLabel.textContent = `PDF page ${page} of ${bookData.count}`;
  viewerNavButtons.forEach((button) => {
    const direction = button.dataset.direction;
    const disabled = direction === "prev" ? page <= 1 : page >= bookData.count;
    button.disabled = disabled;
  });
}

function moveViewer(direction) {
  if (!currentViewer.book) return;
  const bookData = books[currentViewer.book];
  const nextPage = direction === "prev" ? currentViewer.page - 1 : currentViewer.page + 1;
  if (nextPage < 1 || nextPage > bookData.count) return;
  updateViewer(currentViewer.book, nextPage);
}

function lockPageScroll(scrollX = window.scrollX, scrollY = window.scrollY) {
  if (pageIsLocked) return;
  lockedScrollX = scrollX;
  lockedScrollY = scrollY;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  pageIsLocked = true;
}

function unlockPageScroll() {
  if (!pageIsLocked) return;
  const restoreX = lockedScrollX;
  const restoreY = lockedScrollY;
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  const restoreScroll = () => window.scrollTo({ left: restoreX, top: restoreY, behavior: "auto" });
  restoreScroll();
  pageIsLocked = false;
  updateFloatingTop();
}

function closeViewer() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  viewerBackdrop.hidden = true;
  delete viewer.dataset.viewerBook;
  viewerImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";
  unlockPageScroll();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});

document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".thumb-button")) return;
  pendingOpenScroll = {
    x: window.scrollX,
    y: window.scrollY
  };
}, { capture: true });

document.addEventListener("click", (event) => {
  const button = event.target.closest(".thumb-button");
  if (!button) return;
  updateViewer(button.dataset.bookKey, Number(button.dataset.page));
  button.blur();
  lockPageScroll(pendingOpenScroll?.x, pendingOpenScroll?.y);
  pendingOpenScroll = null;
  viewerBackdrop.hidden = false;
  window.scrollTo({ left: lockedScrollX, top: lockedScrollY, behavior: "auto" });
});

viewerNavButtons.forEach((button) => {
  button.addEventListener("click", () => moveViewer(button.dataset.direction));
});

document.addEventListener("keydown", (event) => {
  if (viewerBackdrop.hidden) return;
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveViewer("prev");
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveViewer("next");
  }
  if (event.key === "Escape") {
    event.preventDefault();
    closeViewer();
  }
});

viewer.querySelector(".close").addEventListener("click", closeViewer);
viewerBackdrop.addEventListener("click", (event) => {
  if (event.target === viewerBackdrop) closeViewer();
});

floatingTop.addEventListener("click", () => {
  const activePanel = document.querySelector(".panel.is-active");
  if (!activePanel) return;
  activePanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("scroll", updateFloatingTop, { passive: true });

function activateInitialTab() {
  const hash = window.location.hash.replace("#", "");
  const match = hash.match(/^(cross|acts|revelation|creation|physical)-/);
  const initialTab = match ? match[1] : "physical";
  activateTab(initialTab, false);
  if (hash) {
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
      updateFloatingTop();
    });
  }
}

activateInitialTab();
