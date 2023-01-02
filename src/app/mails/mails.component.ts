import { Component, OnInit, Input } from '@angular/core';
import { ContactDTO } from '../DTO/ContactDTO';
import { FolderDTO } from '../DTO/FolderDTO';
import { MailDTO } from '../DTO/MailDTO';
import { UserDTO } from '../DTO/UserDTO';
import { ContactService } from '../Service/Contact/contact.service';
import { MailService } from '../Service/Mail/mail.service';
import { UserService } from '../Service/User/user.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styles: [`:host {width: 100%;background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1022%26quot%3b)' fill='none'%3e%3ccircle r='4.865' cx='781.675' cy='179.16500000000002' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='5.285' cx='733.145' cy='75.765' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='8.63' cx='1223.23' cy='143.22' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='8.45' cx='255.01' cy='286.72999999999996' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='8.32' cx='777' cy='516.61' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='5.385' cx='856.865' cy='453.065' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='6.315' cx='95.975' cy='428.025' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='6.04' cx='1080.55' cy='500.29' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='5.56' cx='1060.6' cy='375.87' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='8.135' cx='1372.705' cy='55.864999999999995' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='6.915' cx='779.755' cy='156.015' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='7.845' cx='782.5350000000001' cy='186.965' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='6.875' cx='1360.145' cy='297.445' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='6.21' cx='449.96999999999997' cy='462.96' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='4.805' cx='983.995' cy='223.715' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='6.33' cx='134.18' cy='350.09' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='5.17' cx='661.68' cy='524.99' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='7.725' cx='56.295' cy='323.58500000000004' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='5.835' cx='19.065' cy='15.975000000000001' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3ccircle r='7.49' cx='73.75999999999999' cy='90.78' filter='url(%23SvgjsFilter1023)' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/circle%3e%3cpath d='M449 472.2L411.5 437.5 411.2 418.9 423.8 430.6C424.8 432.2 426.8 431.7 428.4 430.7 429.1 429.5 429.2 427.2 428 426.5L410.9 410 410 391.7 426.1 400.5 432.9 423.4C432.9 423.4 433.2 423.9 433.2 423.9 433.9 425 435.6 425.4 437.1 425.3 438.7 424.3 439.4 423.1 439 421.1L433.9 404.6 450 413.4 465.3 462C465.3 462 465.1 462.9 465.1 462.9 465.8 464 467.5 464.4 468.9 464.2 470.9 463.8 471.9 461.7 470.8 460L457.9 417.6 477.8 427.7 483.7 446.7C483.7 446.7 483.7 446.7 484 447.3 484.7 448.4 485.9 449.1 487.3 449 489 448 490.3 446.4 489.8 444.4L485.7 431.9 500.2 439.4C501.8 440.7 503.4 439.7 504.2 438.5 505.4 436.9 505 434.9 502.9 434L488.9 426.1 501.2 422.9C502.9 421.9 504.2 420.4 503.1 418.7 502.7 416.8 501.4 416 499.5 416.5L480.5 422.3 461.1 411.8 504.1 398.5C505.5 398.4 506.5 396.3 506 394.3 505.3 393.2 503.8 391.9 501.8 392.4L453.2 407.7 437.1 398.8 453.6 393.8C455.6 393.4 456 391.6 455.5 389.6 455.4 388.2 453.3 387.2 451.9 387.4L429.3 394.7 412.6 386.2 428.4 376.4 451.3 381.7C453.1 382.1 454.7 381.1 455.1 379.3 455.9 378.1 454.5 375.9 452.7 375.5L436 371.6 451.7 361.8 501.5 373.7C503.2 374.2 504.8 373.1 505.3 371.4 505.7 369.6 504.6 368 502.9 367.6L459.3 357.1 477.8 345.5 497.2 350C498.9 350.4 500.6 349.4 501 347.6 501.4 345.9 500.4 344.2 498.6 343.8L485.9 340.4 499.5 332C501.1 330.9 501.5 329.2 500.5 327.6 499.5 325.9 497.7 325.5 496.1 326.5L482.5 335 485.4 322.7C485.8 320.9 484.8 319.3 483 318.9S479.6 319.5 479.2 321.2L474.9 339.8 455.9 351.6 465.9 308.4C466.3 306.7 465.3 305 463.5 304.6 461.8 304.2 460.1 305.2 459.7 307L448.3 356.4 432.6 366.2 436.5 349.5C436.9 347.7 435.9 346.1 434.1 345.7 432.3 345.3 430.7 346.3 430.3 348L425 371 409.8 380.5 409.3 362.7 425.4 345C426.2 343.8 426.2 341.5 425 340.8 423.4 339.5 422 339.6 420.4 340.6L408.6 353.3 408.1 335.5 442.8 298C444.1 296.4 443.9 295 442.9 293.4 441.4 292.1 439.4 292.5 438.3 293.2L407.5 326 407.1 303.7 420.1 289.5C421.7 288.5 421.3 286.5 420.3 284.9 419 284.1 416.7 284.1 415.4 285.6L406.8 294.8 405.9 278.8C406.3 277 404.7 275.7 402.4 275.6 401 275.8 399.7 277.3 399.8 278.8L400.2 295.1 390.7 286C389.2 284.7 387.2 285.1 386.5 286.4 384.8 287.4 385 288.8 385.7 289.9 386 290.4 386 290.4 386.3 291L400.5 304 400.9 326.4 368.4 296.1C367.4 294.5 365.4 295 363.8 296 363.1 297.2 363.2 298.6 363.9 299.7 364.2 300.3 364.2 300.3 364.2 300.3L401.5 335.8 402.1 353.6 389.5 341.9C387.9 340.6 386.5 340.7 384.8 341.7 384.1 342.9 383.7 344.7 384.4 345.8 384.7 346.3 384.7 346.3 385 346.9L402.7 363 403.2 380.8 387.5 372.5 380.2 349.9C379.7 348 377.6 347 376.2 347.1 374.5 348.2 373.2 349.7 374.3 351.4L379.3 367.8 363 359.9 347.9 310.4C347.8 309 345.7 308.1 344.3 308.2 342.6 309.2 341.4 310.8 341.8 312.7L354.8 355.2 335.4 344.7 329.9 326.2C329.4 324.3 327.3 323.3 325.7 324.3 324.3 324.5 323 326 323.4 328L327.5 340.6 313 333C311.8 332.3 309.8 332.8 308.5 334.3 308.3 335.2 308.5 336.6 309.1 337.7 309.1 337.7 309.5 338.3 309.8 338.8L324.3 346.3 311.8 350.4C310.4 350.5 309.4 352.6 309.5 354.1 309.9 354.6 309.9 354.6 309.9 354.6 310.9 356.2 312.7 356.6 313.7 356L332.2 350.5 352.1 360.6 309.1 373.9C307.5 375 306.8 376.2 307.2 378.1 307.2 378.1 307.6 378.7 307.6 378.7 308.2 379.8 309.5 380.5 311.4 380L360.3 365.3 376.1 373.6 359.6 378.6C358 379.6 356.7 381.2 357.7 382.8 357.2 383.2 357.5 383.7 357.5 383.7 358.2 384.8 359.9 385.2 361.4 385.1L384 377.7 400 386.6 384.8 396.1 361.9 390.8C360.1 390.4 358 391.7 357.6 393.5 357.7 394.9 358.7 396.5 359.9 397.3L377.2 400.8 361.5 410.6 312.1 399.2C310.3 398.8 308.7 399.8 308.3 401.6 307.9 403.4 308.9 405 310.7 405.4L353.9 415.4 334.9 427.3 316.4 423C314.6 422.6 313 423.6 312.6 425.4S313.2 428.8 315 429.2L327.3 432 313.7 440.5C312.1 441.5 311.7 443.3 312.7 444.9 313.7 446.5 315.5 446.9 317.1 445.9L330.7 437.4 328.2 450.3C328 451.2 327.8 452.1 328.1 452.6 328.5 453.2 329.7 453.9 330.6 454.1 332.3 454.5 333.9 453.5 334.4 451.7L338.3 432.7 357.3 420.8 347.7 464.6C347.4 465.5 347.2 466.3 347.6 466.9 347.9 467.4 349.1 468.2 350 468.4 351.8 468.8 353.4 467.8 353.8 466L364.9 416.1 380.6 406.2 376.2 423.3C376 424.2 376.7 425.3 377 425.8 377.4 426.4 377.7 426.9 378.6 427.1 380.4 427.5 382.5 426.2 382.4 424.8L388.2 401.5 403.4 392 404.3 410.3 387.8 427.4C387.1 428.6 386.7 430.4 387.3 431.5 387.7 432 387.7 432 388.2 431.7 389.2 433.3 391.5 433.4 392.8 431.8L404.6 419.2 405.5 437.5 369.9 474.8C369.2 476 369.3 477.5 370 478.5 370.3 479.1 370.3 479.1 370.3 479.1 371.9 480.4 373.6 480.8 374.9 479.2L405.7 446.4 406.1 468.8 393.1 483C391.8 484.5 391.9 485.9 392.6 487 392.6 487 393 487.6 393 487.6 394.5 488.9 396.5 488.4 397.6 487.7L406.4 477.7 406.8 494C407.1 494.6 407.5 495.1 407.8 495.6 408.2 496.2 409.4 496.9 410.3 497.1 412.2 496.7 413.9 495.6 413.4 493.7L413 477.3 422.5 486.5C424 487.8 426 487.3 427.1 486.6 428.4 485.1 427.9 483.1 426.9 481.5L412.7 468.4 411.8 446.4 444.3 476.7C445.8 477.9 448.1 478 448.9 476.8 450.2 475.2 450.6 473.5 449 472.2Z' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/path%3e%3cpath d='M1314.4 542.1L1298.9 526 1311.8 522.2C1313.2 521.9 1314.3 520.2 1314.2 518.2 1313.3 516.6 1311.6 515.5 1310 516.4L1293.7 520.7 1281 508.7 1315.1 499.9C1316.7 499 1317.8 497.3 1317.5 495.9 1316.8 493.7 1315.1 492.6 1313.5 493.5L1275.8 503.3 1257 484.4 1287.3 479.9 1263.3 460.9 1289 453.8 1316.8 481.1C1316.6 481.8 1317.3 481.9 1317.9 482.1 1319.1 482.4 1320.5 482.1 1321.5 481.1 1322.4 480 1322.3 478 1321.4 476.4L1296.2 451.8 1313.2 447.7 1325.2 459.6C1325.7 460.3 1326.3 460.5 1326.9 460.7 1327.5 460.8 1328.9 460.5 1329.9 459.5 1330.8 458.4 1330.7 456.4 1329.6 455.4L1320.3 445.7 1341.9 439.5C1343.9 439.4 1344.4 437.5 1344.3 435.5 1344 434.1 1342.3 433 1340.1 433.7L1318.7 439.3 1322.2 426.3C1322.7 424.4 1321.2 422.7 1319.9 422.4 1318.1 421.9 1316.5 422.8 1316 424.6L1311.6 441.3 1294.6 445.4 1303.5 412C1304 410.2 1303.1 408.6 1301.2 408.1 1300 407.8 1297.8 408.5 1297.3 410.4L1287.4 447.5 1261.7 454.5 1272.5 426.3 1244.4 437.3 1251.3 411.3 1288.4 401.4C1290.6 400.6 1291.1 398.8 1290.8 397.4 1290.6 396 1288.9 394.8 1286.8 395L1253.2 404.5 1257.6 387.8 1274.2 383C1276.2 382.8 1277.3 381.2 1276.5 379 1276.3 377.6 1274.6 376.5 1272.4 377.2L1259.6 380.4 1265.4 358.8C1265.9 356.9 1265 355.3 1263.1 354.8S1259.7 355.3 1259.2 357.1L1253.4 378.8 1243.9 369.6C1242.4 367.9 1240.4 368 1239.4 369.1 1237.7 370.6 1237.8 372.6 1239.5 373.7L1251.4 386.2 1247 402.9 1222.5 377.8C1220.8 376.7 1218.8 376.8 1217.9 377.9 1216.1 379.4 1216.3 381.4 1218 382.5L1245.2 409.7 1238.2 435.6 1219.3 412 1214.7 441.9 1195.9 423 1205.8 385.9C1206.3 384 1204.8 382.3 1203.5 382 1201.7 381.5 1200.1 382.4 1199.6 384.3L1190.5 418.3 1178 405.6 1182.5 388.9C1183 387.1 1182.1 385.5 1180.2 385 1179 384.7 1176.8 385.4 1176.3 387.3L1172.8 400.3 1157.1 384.8C1155.5 383.1 1153.5 383.2 1152.4 384.9 1151.5 386 1151 387.8 1152.7 388.9L1168.2 405 1155.3 408.8C1153.9 409.1 1152.8 410.8 1153.1 412.2 1153.3 413.6 1154.4 414.6 1155 414.7 1155.7 414.9 1156.3 415.1 1157.1 414.6L1173.4 410.4 1186.1 422.4 1152 431.1C1150.4 432 1149.3 433.7 1149.6 435.1 1149.9 436.5 1150.9 437.5 1152.2 437.8 1152.8 438 1152.8 438 1153.6 437.5L1191.3 427.7 1210.1 446.7 1179.8 451.2 1203.8 470.2 1178.1 477.2 1150.3 449.9C1149.2 449 1147.3 448.5 1145.6 450 1144.7 451.1 1144.8 453.1 1145.7 454.6L1170.9 479.3 1153.9 483.3 1141.9 471.5C1140.9 469.9 1138.9 470.1 1137.2 471.6 1136.2 472.6 1136.4 474.7 1137.3 476.2L1146.8 485.4 1125.2 491.6C1123.2 491.7 1122.7 493.5 1122.8 495.6 1123.3 496.3 1124.4 497.3 1125 497.5 1125.6 497.6 1126.2 497.8 1127 497.3L1148.4 491.8 1144.9 504.8C1144.4 506.6 1145.9 508.4 1147.2 508.7L1147.2 508.7C1149 509.2 1150.6 508.3 1151.1 506.4L1155.5 489.7 1172.5 485.7 1163.6 519C1163.1 520.9 1164 522.5 1165.9 523S1169.3 522.5 1169.8 520.7L1179.7 483.6 1205.4 476.6 1194.6 504.8 1222.7 493.8 1215.7 519.7 1178.6 529.7C1176.5 530.4 1176 532.3 1176.2 533.7 1176.5 535.1 1178.2 536.2 1180.2 536.1L1213.8 527.1 1209.5 543.2 1192.9 548.1C1190.9 548.2 1189.8 549.9 1190.5 552.1 1190.8 553.5 1192.5 554.6 1194.5 554.5L1207.5 550.6 1201.7 572.3C1201.2 574.1 1202.1 575.7 1204 576.2S1207.4 575.8 1207.9 573.9L1213.7 552.3 1223.1 561.5C1223.6 562.2 1224.2 562.4 1224.8 562.6 1226.1 562.9 1226.9 562.4 1227.6 562 1229.4 560.5 1229.3 558.4 1227.6 557.3L1215.7 544.9 1220.1 528.2 1244.5 553.3C1245.2 553.4 1245.8 553.6 1246.4 553.8 1247.6 554.1 1248.4 553.6 1249.2 553.2 1250.9 551.7 1250.8 549.6 1249.1 548.5L1221.9 521.4 1228.9 495.4 1247.7 519 1252.4 489.1 1271.2 508 1261.3 545.1C1260.8 547 1262.3 548.7 1263.6 549.1 1265.4 549.6 1267 548.7 1267.5 546.8L1276.4 513.4 1289.1 525.4 1284.6 542.1C1284.1 544 1285 545.5 1286.9 546S1290.3 545.6 1290.8 543.8L1294.3 530.8 1310 546.2C1310.5 547 1311.1 547.2 1311.7 547.4 1312.3 547.5 1313.7 547.2 1314.7 546.2 1315.6 545.1 1316.1 543.2 1314.4 542.1ZM1243.8 504L1228.4 484.7 1205.5 493.8 1214.4 470.3 1195.2 455.3 1219.5 451.2 1223.3 427 1238.7 446.4 1261.6 437.3 1252.9 460.1 1271.9 475.8 1247.8 479.3 1243.8 504Z' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/path%3e%3cpath d='M534.8 118.5L540.7 131.2 532.2 130.8C531.3 130.7 530.3 131.5 530 132.7 530.2 133.8 531 134.8 532.1 134.6L542.6 135.5 547.6 145.2 525.7 143.3C524.6 143.5 523.6 144.3 523.4 145.1 523.4 146.6 524.2 147.6 525.3 147.4L549.6 149.4 556.7 164.5 537.9 160.8 548.2 177 531.5 175.9 520.8 154C521 153.7 520.7 153.4 520.4 153.2 519.7 152.8 518.8 152.6 518 153.1 517.2 153.5 516.9 154.7 517.1 155.8L526.9 175.6 516 174.5 511.4 165C511.3 164.4 510.9 164.2 510.6 164 510.3 163.8 509.4 163.6 508.6 164.1 507.8 164.5 507.5 165.7 507.9 166.5L511.4 174.2 497.4 173.4C496.2 173 495.5 174 495.2 175.3 495 176.1 495.8 177.2 497.3 177.2L511 178.3 506.3 185.2C505.6 186.2 506.1 187.6 506.8 188 507.8 188.7 508.9 188.5 509.6 187.5L515.7 178.6 526.5 179.7 514.4 197.5C513.7 198.5 513.9 199.6 514.9 200.3 515.5 200.8 517 200.8 517.7 199.8L531.2 180 547.8 181.1 535.6 195.5 554.4 194.8 545 208.7 521 206.9C519.6 206.9 518.9 207.9 518.8 208.8 518.7 209.7 519.4 210.7 520.6 211L542.5 212.4 536.4 221.3 525.6 220.7C524.4 220.4 523.4 221.1 523.4 222.6 523.3 223.5 524.1 224.5 525.5 224.5L533.7 225.2 525.8 236.8C525.1 237.8 525.4 238.9 526.3 239.6S528.4 240.1 529.1 239.1L537 227.5 540.7 234.9C541.2 236.2 542.5 236.5 543.2 236.1 544.6 235.6 544.9 234.3 544.2 233.3L539.7 223.5 545.8 214.6 555 234.5C555.8 235.5 557 235.8 557.8 235.4 559.1 234.8 559.5 233.6 558.7 232.6L548.3 211 557.7 197.1 564 214.9 572.9 198.2 580.1 213.3 566.6 233.1C565.9 234.1 566.4 235.5 567.1 235.9 568.1 236.6 569.2 236.4 569.9 235.4L582.3 217.2 587 227.2 581 236.2C580.3 237.2 580.5 238.3 581.5 238.9 582.2 239.4 583.6 239.4 584.3 238.4L589 231.5 595.1 243.9C595.6 245.2 596.8 245.5 597.8 244.8 598.6 244.3 599.3 243.3 598.5 242.3L592.7 229.6 601.1 230C602 230.2 603 229.4 603.1 228.5 603.2 227.6 602.8 226.8 602.5 226.6 602.1 226.4 601.8 226.2 601.3 226.3L590.7 225.4 585.7 215.7 607.7 217.6C608.8 217.4 609.8 216.6 609.9 215.7 610 214.8 609.6 214 608.9 213.6 608.6 213.4 608.6 213.4 608 213.5L583.8 211.5 576.6 196.4 595.4 200 585.2 183.8 601.8 185 612.6 206.9C613 207.6 614 208.3 615.3 207.8 616.1 207.3 616.4 206.1 616.2 205L606.5 185.3 617.3 186.4 622 195.9C622.2 197 623.4 197.3 624.7 196.8 625.5 196.3 625.9 195.1 625.7 194L622 186.7 635.9 187.5C637.2 187.8 637.8 186.8 638.2 185.6 638.1 185.1 637.6 184.3 637.3 184 637 183.8 636.6 183.6 636.1 183.7L622.3 182.6 627.1 175.6C627.8 174.6 627.2 173.3 626.5 172.8L626.5 172.8C625.6 172.2 624.4 172.4 623.8 173.4L617.7 182.3 606.8 181.2 619 163.3C619.7 162.3 619.5 161.2 618.5 160.6S616.4 160.1 615.7 161.1L602.2 180.9 585.5 179.7 597.8 165.3 578.9 166 588.4 152.1 612.3 153.9C613.8 154 614.4 153 614.6 152.1 614.7 151.2 613.9 150.2 612.7 149.8L591.1 148.2 596.9 139.6 607.7 140.1C608.9 140.5 609.9 139.7 609.9 138.3 610.1 137.4 609.3 136.4 608.1 136L599.6 135.6 607.5 124C608.2 123.1 608 121.9 607 121.3S604.9 120.8 604.2 121.8L596.3 133.4 592.6 126C592.5 125.4 592.2 125.2 591.9 125 591.2 124.5 590.7 124.7 590.1 124.8 588.8 125.3 588.4 126.5 589.2 127.5L593.6 137.3 587.5 146.3 578.3 126.4C578 126.2 577.7 126 577.3 125.7 576.7 125.3 576.1 125.4 575.6 125.5 574.2 126 573.9 127.3 574.6 128.3L585.1 149.9 575.6 163.8 569.4 146 560.4 162.6 553.3 147.6 566.8 127.7C567.4 126.7 566.9 125.4 566.2 125 565.3 124.3 564.1 124.5 563.5 125.5L551.3 143.3 546.3 133.6 552.4 124.7C553.1 123.7 552.8 122.6 551.9 121.9S549.7 121.5 549.1 122.4L544.3 129.4 538.3 117C538.2 116.5 537.8 116.2 537.5 116 537.2 115.8 536.3 115.7 535.5 116.1 534.7 116.5 534 117.5 534.8 118.5ZM568.6 155.6L573.7 170.2 589.1 169.6 579 181.6 587.2 194.4 572 191.8 564.8 205.3 559.7 190.7 544.3 191.3 554.1 179.6 546.2 166.5 561.1 169.4 568.6 155.6Z' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/path%3e%3cpath d='M1023.3 175.8L1002.8 184.8 1003.8 171.3C1004 169.9 1002.8 168.3 1000.9 167.7 999.1 168 997.5 169.2 997.8 171L996 187.8 980.3 195.5 984 160.4C983.7 158.6 982.6 157 981.1 156.8 978.8 156.7 977.2 157.9 977.5 159.7L973.5 198.4 949.1 209.4 955.6 179.4 929.3 195.3 931.8 168.7 967.1 152.3C967.6 152.6 968 152.1 968.3 151.6 969.1 150.5 969.3 149.1 968.6 147.9 968 146.6 966 146 964.2 146.3L932.3 161.3 934.5 144 949.8 136.8C950.7 136.7 951.1 136.1 951.4 135.6 951.8 135.1 952 133.7 951.3 132.4 950.7 131.1 948.7 130.6 947.5 131.2L935.1 136.5 936.8 114.2C937.4 112.3 935.8 111.2 933.9 110.6 932.5 110.3 930.9 111.5 930.8 113.8L928.5 135.8 917.6 128C916 126.9 913.8 127.7 913.1 128.7 912 130.3 912.3 132.1 913.9 133.2L927.9 143.2 925.8 160.6 897.6 140.5C896.1 139.4 894.3 139.7 893.2 141.3 892.4 142.3 892.4 144.6 893.9 145.7L925.2 168 922.8 194.6 900.1 174.5 900.6 204.7 878.7 189.1 882.4 150.9C882.5 148.6 880.9 147.5 879.5 147.2 878.1 147 876.4 148.2 875.9 150.1L873 185 858.9 175 860.2 157.8C860.8 155.9 859.6 154.3 857.3 154.2 855.8 154 854.2 155.2 854.1 157.5L852.7 170.6 834.4 157.6C832.9 156.5 831.1 156.8 830 158.3S829.2 161.7 830.7 162.8L849 175.8 837.1 181.4C834.9 182.3 834.3 184.2 835 185.5 835.8 187.6 837.7 188.2 839.4 187L855.2 180.2 869.3 190.3 837.2 204.4C835.6 205.6 835 207.5 835.7 208.8 836.5 210.9 838.4 211.5 840.1 210.3L875 194.3 896.9 209.9 868.2 219.3 894.6 234.2 870.3 245.2 839 222.9C837.4 221.8 835.3 222.6 834.5 223.6 833.4 225.2 833.7 227 835.3 228.1L863.9 248.5 847.7 255.8 833.7 245.8C832.1 244.7 830.3 245 829.2 246.6 828.4 247.6 828.4 249.9 829.9 251L840.9 258.8 820.9 268.1C818.7 269 818.1 270.9 819.3 272.5 820 273.8 821.6 274.9 823.2 273.7L843.7 264.8 842.8 278.2C842.6 279.6 843.7 281.3 845.2 281.5 846.6 281.7 847.8 281.1 848.2 280.5 848.6 280 849 279.5 848.8 278.6L850.6 261.8 866.3 254.1 862.5 289.1C862.8 290.9 864 292.6 865.4 292.8 866.8 293 868.1 292.3 868.8 291.3 869.2 290.8 869.2 290.8 869.1 289.9L873.1 251.1 897.4 240.1 891 270.1 917.2 254.2 914.8 280.8 879.5 297.3C878.2 298 877.1 299.5 877.9 301.7 878.6 303 880.5 303.5 882.3 303.2L914.2 288.3 912.1 305.6 896.8 312.8C895 313.1 894.4 315 895.2 317.1 895.9 318.4 897.8 319 899.6 318.7L911.5 313 909.7 335.4C909.1 337.3 910.7 338.4 912.6 339 913.5 338.8 914.8 338.2 915.2 337.7 915.5 337.1 915.9 336.6 915.8 335.7L918 313.8 929 321.6C930.6 322.7 932.7 321.9 933.4 320.8L933.4 320.8C934.6 319.2 934.3 317.5 932.7 316.4L918.6 306.3 920.8 289 948.9 309C950.5 310.2 952.3 309.9 953.4 308.3S954.2 304.9 952.6 303.8L921.3 281.5 923.8 255 946.4 275 945.9 244.8 967.8 260.4 964.1 298.7C964.1 301 965.6 302.1 967.1 302.3 968.5 302.5 970.1 301.3 970.7 299.4L974.1 264.9 987.6 274.5 986.4 291.7C985.8 293.7 987 295.3 989.3 295.4 990.7 295.6 992.3 294.4 992.9 292.5L993.9 279 1012.1 292C1013.7 293.1 1015.5 292.8 1016.6 291.2S1017.4 287.9 1015.8 286.8L997.6 273.8 1009.5 268.1C1010.4 268 1010.8 267.4 1011.1 266.9 1011.9 265.9 1011.7 265 1011.6 264.1 1010.7 261.9 1008.8 261.3 1007.2 262.5L991.3 269.3 977.3 259.3 1009.3 245.2C1009.7 244.7 1010.1 244.2 1010.4 243.6 1011.2 242.6 1011 241.7 1010.9 240.8 1010 238.6 1008.1 238.1 1006.5 239.2L971.5 255.2 949.6 239.6 978.3 230.2 952 215.4 976.3 204.4 1007.6 226.7C1009.1 227.8 1011.3 227 1012 225.9 1013.1 224.4 1012.8 222.6 1011.3 221.5L983.1 201.4 998.8 193.7 1012.9 203.8C1014.5 204.9 1016.2 204.6 1017.4 203S1018.2 199.7 1016.6 198.5L1005.7 190.7 1025.7 181.4C1026.6 181.3 1026.9 180.7 1027.3 180.2 1027.7 179.7 1027.9 178.3 1027.2 177 1026.5 175.8 1025 174.6 1023.3 175.8ZM962.9 228.7L939.4 236.3 939.9 261 921.1 244.4 900.3 257.1 904.9 232.9 883.6 220.9 907.1 213.3 906.6 188.6 925 204.8 946.3 192.5 941.1 216.3 962.9 228.7Z' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/path%3e%3cpath d='M781.9 416.2L743.2 426 712.9 407.6 744 390.5 782.1 401.8C782.1 401.8 782.6 401.8 782.6 401.8 783.6 401.9 784.6 400.9 785.1 400 785.6 398.5 784.6 397.1 783.2 397L749.8 387.3 764.8 378.9 779.6 383.1C779.6 383.1 780.1 383.1 780.1 383.1 781.1 383.1 782.1 382.1 782.6 381.2 783.1 379.8 782.1 378.3 780.7 378.3L770.7 375.2 781.8 369.2C782.8 368.7 783.3 366.8 782.9 365.8 782.4 364.4 780.5 364.3 779.5 364.8L768.4 370.8 771.5 360.8C772 359.4 771 357.9 769.6 357.9 768.2 357.4 766.7 358.3 766.7 359.7L762.5 374.5 747.5 382.4 757.3 349C757.8 347.6 756.9 346.1 755.4 346.1 754 345.6 752.5 346.5 752.5 347.9L741.2 386.1 710.1 403.3 710.8 367.3 739.7 339.5C740.7 338.6 740.7 337.1 739.8 336.2 738.8 335.2 737.4 335.1 736.4 336.1L711 360.5 711.3 343.3 722.1 332.9C723.1 332 723.1 330.5 722.2 329.6 721.2 328.6 719.8 328.6 718.8 329.5L711.5 336.5 711.7 323.1C712.2 321.7 710.8 320.7 709.4 320.7 707.9 320.6 707 321.6 706.9 323L706.7 335.5 699.6 328.1C698.7 327.2 697.2 327.1 696.3 328.1S695.3 330.5 696.2 331.4L706.5 342.2 706.2 359.5 681.7 334C680.8 333 679.4 333 678.4 334 677.4 334.9 677.4 336.3 678.3 337.3L706 366.2 705.3 401.7 675 383.3 665.7 345.7C665.2 344.3 663.8 343.7 662.3 343.7 660.9 344.2 660.4 345.6 660.3 347L668.8 380.8 654.1 371.9 650.5 356.9C650.1 355.5 648.7 355 647.2 354.9 645.8 355.4 645.3 356.8 645.2 357.8L647.9 367.9 637 361.4C636.1 360.9 634.1 360.9 633.6 362.3 633.1 363.8 633.1 365.2 634.5 365.7L645.4 372.2 635.3 374.9C633.8 375.3 633.3 376.7 633.3 377.7 633.8 378.7 634.7 379.6 635.7 379.7 635.7 379.7 636.2 379.7 636.2 379.7L651.1 376.1 665.8 385.1 632 393.5C630.6 394 630.1 395.4 630.1 396.3 630.5 397.3 631.5 398.3 632.4 398.3 632.4 398.3 632.9 398.3 632.9 398.3L671.5 388.5 701.9 406.9 670.8 424.1 632.6 412.7C631.2 412.2 629.7 413.1 629.7 414.6 629.2 416 630.1 417.5 631.6 417.5L665 427.3 649.9 435.6 635.1 431.5C633.7 431 632.2 431.9 632.2 433.4 631.7 434.8 632.6 436.2 634.1 436.3L644.1 439.4 632.9 445.4C631.9 445.8 631.4 447.7 631.9 448.7 632.3 449.7 633.3 450.2 634.3 450.2 634.7 450.2 635.2 450.2 635.7 449.8L646.9 443.7 643.8 453.8C643.3 455.2 644.2 456.6 645.6 456.7 645.6 456.7 646.1 456.7 646.1 456.7 647.1 456.7 648.1 455.8 648.6 454.8L652.7 440 667.8 431.7 658 465.1C657.4 466.5 658.4 468 659.8 468 659.8 468 660.3 468 660.3 468 661.3 468 662.2 467.1 662.7 466.1L674.1 428 705.1 410.8 704.4 446.3 675.5 474.1C674.6 475 674.5 476.5 675.5 477.4 676.4 478.4 677.9 478.5 678.8 477.5L704.3 453.5 703.9 470.8 693.2 481.2C692.2 482.1 692.2 483.5 693.1 484.5S695.5 485.5 696.5 484.6L703.8 477.5 703.5 490C703.5 491.5 704.5 492.4 705.9 492.5 707.3 492.5 708.3 491.6 708.3 490.1L708.6 477.6 715.6 485C716.1 485.5 716.6 486 717.5 486S719 485.5 719.5 485.1C720.5 484.1 720.5 482.7 719.6 481.7L709.2 470.9 709.6 453.7 734 479.1C734.5 479.6 734.9 480.1 735.9 480.1 736.4 480.1 737.4 479.7 737.8 479.2 738.8 478.2 738.9 476.8 737.9 475.8L710.2 446.9 710.9 411.4 741.2 429.8 751 468.4C751.5 469.4 752.4 470.4 753.4 470.4 753.4 470.4 753.9 470.4 753.9 470.4 755.3 469.9 755.8 468.5 755.8 467.6L747.4 433.8 762.1 442.7 765.6 457.7C766.1 458.6 767.1 459.6 768 459.6 768 459.6 768.5 459.6 768.5 459.6 769.9 459.2 770.4 457.8 770.5 456.8L767.8 446.7 778.7 453.1C779.2 453.1 779.7 453.6 780.1 453.6 781.1 453.7 782.1 453.2 782.6 452.2 783.1 450.8 783.1 449.4 781.7 448.9L770.8 442.4 780.9 439.7C782.3 439.3 782.9 437.9 782.9 436.9 782.4 435.4 781 434.9 780 434.9L765.1 438.5 750.4 429.5 784.2 421.1C785.6 420.6 786.1 419.2 786.1 418.2 784.7 416.8 783.3 415.8 781.9 416.2Z' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/path%3e%3cpath d='M1155.2 82.2L1155.7 94.7 1148.1 91.1C1147.3 90.6 1146.1 90.9 1145.3 91.9 1145.1 93 1145.4 94.2 1146.2 94.7L1156.1 99.7 1156.4 111.4 1136.4 101C1135.1 100.4 1133.9 100.7 1133.6 101.8 1132.8 102.8 1133.1 104 1134.5 104.6L1156.6 116.1 1157.2 126.6 1136.7 139.8 1128.3 135.7 1127.4 109.2C1127.2 108.8 1127 108.5 1126.8 108.1 1126.5 107.8 1125.8 107.4 1125.2 107.2 1123.8 107.2 1123 108.2 1123.3 109.4L1124.1 133.6 1114 128.3 1113.2 115.9C1113.5 115.7 1113.3 115.4 1113.1 115 1112.7 114.4 1111.9 113.9 1111 114 1110.1 114.1 1109.3 115.1 1109.1 116.2L1109.8 126.2 1097.1 119.7C1096.3 119.2 1095.1 119.5 1094.3 120.5 1094 121.6 1094.3 122.8 1095.1 123.3L1107.1 129.4 1100.1 133.9C1099 134.6 1099 136 1099.5 136.7 1100.1 137.7 1101.4 138.3 1102.4 137.6L1111.5 131.8 1121.6 137.1 1102.8 149.3C1101.8 149.9 1101.6 151 1102.2 152 1102.9 153 1104 153.3 1105 152.6L1125.8 139.2 1134.7 143.4 1135.8 168 1128.1 173 1105.4 161.4C1104.4 160.6 1102.8 161.1 1102.6 162.2 1101.8 163.2 1102.5 164.2 1103.4 165L1124 175.6 1114.3 181.8 1104.1 176.5C1103.4 176 1101.8 176.5 1101.4 177.3S1101.4 179.6 1102.4 180.4L1110.2 184.4 1098.5 192C1097.5 192.7 1097.4 194.1 1098.1 195.1 1098.5 195.8 1099.8 196.4 1100.8 195.7L1112.6 188.1 1113.2 197.3C1113.3 198.1 1114 199.2 1115.4 199.2 1116.3 199.1 1117.5 197.9 1117.4 197L1116.7 185.5 1126.4 179.3 1127.5 202.4C1127.8 203.6 1128.4 204.6 1129.9 204.6 1130.8 204.5 1131.9 203.3 1131.8 202.4L1130.4 176.7 1138.2 171.7 1160.1 182.8 1160.3 192.7 1139.4 206.1C1138.4 206.8 1138.2 207.9 1138.8 208.9 1139.5 209.9 1140.8 210.5 1141.8 209.8L1160.6 197.7 1161.3 209.1 1152.2 215C1151.2 215.6 1151 216.7 1151.6 217.7 1152.3 218.7 1153.4 219 1154.4 218.3L1161.5 213.8 1162 227.2C1162.1 228.1 1163.3 229.2 1164.2 229.1 1165.4 228.8 1166.5 228.2 1166.1 226.9L1165.7 213 1174.3 217.4C1175.4 217.7 1176.6 217.3 1177.1 216.6 1177.5 215.8 1177.4 214.9 1177 214.2 1177 214.2 1176.8 213.9 1176.2 213.8L1165.3 208 1164.6 196.5 1186.3 207.3C1187.3 208.1 1188.5 207.8 1189.1 206.4 1189.2 205.9 1189.3 205.3 1188.9 204.7 1188.7 204.3 1188.5 204 1188.3 203.7L1164.5 191.9 1164.2 182.5 1184.7 169.3 1194.1 174.2 1195.3 199.1C1195.3 200.6 1196.3 201.3 1197.5 201 1198.6 201.3 1199.4 200.3 1199.4 198.8L1198.2 176.3 1208.7 181.5 1209.2 192.6C1209.3 193.5 1210.3 194.2 1211.4 194.5 1212.6 194.2 1213.6 193.5 1213.3 192.3L1213.1 183.9 1224.3 189.5C1225.3 190.3 1226.3 189.6 1227.1 188.6 1227.2 188.1 1227.1 187.2 1226.7 186.5 1226.7 186.5 1226.5 186.2 1226.3 185.8L1214.3 179.8 1222.7 174.4C1223.4 173.9 1223.9 172.6 1223.3 171.6 1222.6 170.6 1221.2 170.6 1220.5 171L1210.1 177.7 1199.6 172.6 1220.1 159.3C1221.2 158.7 1221.2 157.2 1220.5 156.2S1218.8 155 1217.8 155.6L1195.2 170.2 1186.6 165.7 1185.6 141.2 1194.3 135.5 1217.2 147.4C1218.3 147.7 1219.6 147.3 1220.3 146.4 1220.5 145.8 1220.4 144.9 1219.9 144.2 1219.7 143.9 1219.5 143.6 1219 143.5L1198.4 132.9 1208.1 126.6 1218.6 131.8C1219.4 132.3 1220.6 131.9 1221.4 131 1221.6 129.9 1221.3 128.6 1220.5 128.2L1212.2 124 1222.9 117.1C1223.6 116.7 1224 115 1223.5 114.3 1222.9 113.3 1221.2 113 1220.5 113.4L1209.8 120.3 1209.7 111.4C1209.5 111 1209.3 110.7 1209.1 110.3 1208.6 109.7 1207.8 109.2 1207.3 109.1 1206.1 109.4 1205.3 110.4 1205 111.5L1205.7 122.9 1196 129.2 1194.9 106.1C1194.9 104.7 1194 103.9 1193.1 104 1191.6 104 1190.8 105 1190.6 106.1L1192 131.8 1183.2 137.5 1161.3 126.3 1160.8 116.7 1183.3 102.2C1184.3 101.5 1184.6 100.4 1183.9 99.4 1183.3 98.4 1182.2 98.2 1181.2 98.8L1160.6 112 1160.3 100.4 1170.7 93.6C1171.4 93.2 1171.7 91.6 1171.1 90.5 1170.4 89.5 1169 89.5 1168.3 89.9L1159.9 95.4 1159.4 81.9C1159.1 81.6 1159.1 81.6 1158.9 81.3 1158.5 80.6 1157.7 80.1 1157.2 80 1155.9 80.3 1155.1 81.3 1155.2 82.2ZM1179.2 140L1181.5 141.4 1181.6 143.7 1182.5 163.6 1182.5 166 1180.5 167.3 1164 177.9 1162 179.2 1159.9 178.1 1142.2 169.1 1140.1 168.1 1139.8 165.4 1139.1 145.8 1138.8 143.2 1140.9 141.9 1157.3 131.3 1159.4 130 1161.7 131.3 1179.2 140Z' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/path%3e%3cpath d='M184.1 82.1L195 84.7 190.6 89.8C190 90.3 190 91.3 190.6 92.1 191.4 92.6 192.4 92.6 192.9 91.8L198.6 85.6 207.2 87.2 195.1 100.1C194.7 100.9 194.7 101.9 195.2 102.4 196.1 103.2 197.1 103.2 197.5 102.4L210.8 88.1 223.8 91.1 212.2 101.1 227.5 102.7 218.5 112.5 199.5 108.5C199.4 108.2 199.1 108.3 198.8 108.4 198.1 108.6 197.6 109.1 197.5 109.8 197.4 110.5 198 111.3 198.8 111.7L216.1 115.3 210 121.6 201.7 119.8C201.3 119.6 201 119.7 200.7 119.8 200.4 119.9 199.9 120.4 199.8 121.1 199.7 121.8 200.2 122.7 201 122.8L207.5 124.4 200.1 132.8C199.3 133.4 199.6 134.3 200.1 135.1 200.6 135.6 201.7 135.6 202.4 134.7L209.9 126.7 211.9 133.1C212.2 134 213.3 134.3 213.9 134.1 214.8 133.8 215.3 133 215 132.1L212.4 123.9 218.4 117.6 223.6 134.1C223.9 135 224.7 135.4 225.7 135.1 226.3 134.9 227 134 226.7 133.1L220.9 114.8 229.9 104.9 232.9 119.7 241.8 107.5 245.8 120.4 232.8 134.5C232.1 135.4 232.4 136.3 232.9 136.8 233.4 137.4 234.4 137.4 235.2 136.8L246.9 123.7 249.5 132 243.8 138.4C243 139 243 140 243.9 140.8 244.4 141.3 245.4 141.3 246.1 140.4L250.6 135.6 254 146.3C254.3 147.2 255.1 147.6 256 147.3S257.4 146.2 257.1 145.3L253.7 134.7 260.1 136C261.3 136.3 262.1 135.7 262.2 135 262.5 133.9 261.9 133.1 260.9 133L252.5 131 249.9 122.8 267 126.8C268 126.8 268.8 126.2 268.9 125.5 269.2 124.4 268.6 123.6 267.6 123.5L248.9 119.4 244.8 106.6 259.1 111.5 253.1 97.6 266.1 100.5 271.9 118.9C272.2 119.8 273.3 120.1 273.9 119.9 274.8 119.6 275.2 118.8 274.9 117.9L269.6 101.1 278.3 103.1 280.9 111.3C281.2 112.2 282 112.6 282.9 112.4 283.5 112.2 284.2 111.3 283.9 110.3L281.9 103.9 292.7 106.2C293.8 106.6 294.6 106 294.7 105 294.8 104.2 294.5 103.3 293.5 103.3L282.6 100.7 287 95.6C287.5 95.1 287.5 94.1 287 93.6 286.5 93.1 285.8 93 285.5 93.1 285.2 93.2 284.9 93.3 284.7 93.7L279 99.8 270.4 98.2 282.4 85.3C282.8 84.5 282.9 83.5 282.4 83 281.9 82.5 281.2 82.4 280.5 82.6 280.2 82.7 280.2 82.7 280 83.1L266.7 97.3 253.7 94.4 265.3 84.3 250.1 82.8 259 72.9 278.1 77C278.8 77.1 279.7 76.8 280 75.7 280.2 75 279.6 74.1 278.8 73.7L261.5 70.1 267.6 63.8 275.9 65.6C276.7 66 277.5 65.4 277.8 64.3 277.9 63.6 277.3 62.8 276.5 62.4L270.1 61 277.5 52.7C278.3 52.1 278 51.1 277.4 50.3 277 50.1 276.3 50 276 50.1 275.7 50.2 275.4 50.3 275.2 50.7L267.7 58.8 265.6 52.4C265.4 51.4 264.3 51.1 263.6 51.3L263.6 51.3C262.7 51.6 262.3 52.4 262.6 53.3L265.2 61.6 259.1 67.8 253.9 51.4C253.6 50.4 252.8 50 251.9 50.3S250.6 51.4 250.9 52.3L256.7 70.6 247.7 80.5 244.7 65.7 235.8 77.9 231.7 65.1 244.7 50.9C245.4 50 245.2 49.1 244.7 48.6 244.2 48.1 243.1 48.1 242.3 48.6L230.6 61.4 228.1 53.5 233.8 47C234.6 46.4 234.6 45.4 233.7 44.7 233.2 44.1 232.2 44.1 231.4 44.7L226.9 49.8 223.6 39.1C223.3 38.2 222.5 37.8 221.6 38.1S220.2 39.2 220.5 40.1L223.9 50.8 217.4 49.5C217 49.2 216.7 49.3 216.4 49.4 215.8 49.6 215.6 50 215.4 50.4 215.1 51.5 215.7 52.4 216.7 52.4L225 54.4 227.6 62.7 210.6 58.7C210.3 58.8 210 58.9 209.7 58.9 209.1 59.1 208.9 59.5 208.6 59.9 208.3 61.1 208.9 61.9 209.9 61.9L228.7 66 232.7 78.9 218.4 74 224.5 87.8 211.5 84.9 205.7 66.6C205.4 65.7 204.3 65.3 203.7 65.5 202.8 65.8 202.4 66.6 202.7 67.5L207.9 84 199.3 82.4 196.7 74.1C196.4 73.2 195.6 72.8 194.7 73.1S193.3 74.2 193.6 75.1L195.7 81.5 184.9 79.2C184.5 79 184.2 79.1 183.8 79.2 183.5 79.3 183 79.8 182.9 80.5 182.8 81.2 183.1 82.1 184.1 82.1ZM224.1 79.2L235.8 83.3 243 73.3 245.6 85.5 257.7 86.7 248.6 95 253.4 106.2 241.8 102.2 234.5 112.2 232.1 100.2 219.9 98.7 229.1 90.7 224.1 79.2Z' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/path%3e%3cpath d='M161.8 455.7L172.5 478.9 169.1 487.6 165.5 479.8C165.3 478.8 164.3 478.7 163.4 478.8 162.8 479.3 162.3 480.3 162.7 480.9L167.5 491.8 164.4 500.4 158.7 493.3 159.9 481.4C159.9 481.4 159.8 481 159.8 481 159.7 480.4 159 479.9 158.3 479.7 157.4 479.8 156.8 480.3 156.6 481.3L155.8 489.8 150.1 482.7 152.3 457.3C152.3 457.3 152.5 457 152.5 457 152.4 456.3 151.7 455.8 151 455.6 150 455.4 149.2 456.2 149.3 457.2L147.2 479.3 139.9 470.8 140.9 460.9C140.9 460.9 140.9 460.9 140.8 460.6 140.7 459.9 140.3 459.4 139.6 459.1 138.7 459.3 137.8 459.8 137.6 460.8L137.1 467.4 131.8 461.1C131.4 460.2 130.4 460.4 129.8 460.8 128.9 461.3 128.8 462.3 129.6 463.1L134.5 469.4 128.2 468.5C127.3 468.7 126.4 469.2 126.5 470.1 126.4 471.1 126.8 471.7 127.8 471.8L137.7 472.8 144.6 481.3 122.2 479.3C121.5 479.1 120.7 479.8 120.5 480.8 120.7 481.5 121.1 482.4 122.1 482.5L147.5 484.8 153.2 491.9 144.7 491.1C143.7 490.9 143.1 491.6 143 492.6 142.8 493.3 143.6 494.2 144.2 494.4L156.1 495.3 162.1 502.4 153 503.9 143.4 497.1C142.7 496.6 141.7 496.8 141.2 497.5 140.6 497.9 140.8 499.2 141.6 499.7L148.6 504.7 139.4 506.2 118.7 491.2C118 490.7 117 490.8 116.5 491.6 116 492.3 116.1 493.3 116.9 493.8L135 507 124.3 508.8 116.2 503C115.4 502.5 114.5 502.6 114 503.4 113.4 504.1 113.6 505.1 114.3 505.6L119.5 509.6 111.7 510.9C110.7 511.1 110.2 511.8 110.3 512.7 110.5 513.7 111.2 514.2 112.2 514.1L120.1 512.7 116.4 517.9C115.9 518.6 116 519.6 116.8 520.1S118.5 520.5 119 519.7L124.5 512 135.5 510.1 122.7 528.2C122.1 528.9 122.3 529.9 123 530.4 123.8 530.9 124.7 530.8 125.3 530L140 509.4 149.1 507.8 144.1 514.8C143.6 515.6 143.8 516.5 144.5 517.1 145.2 517.6 146.2 517.4 146.7 516.7L153.5 507.1 162.4 505.6 159.2 513.9 148.4 519C147.8 519.4 147.3 520.5 147.8 521.1 148.2 521.9 148.9 522.2 149.9 522L157.7 518.4 154.6 526.7 131.4 537.4C130.5 537.9 130.3 538.6 130.4 539.5 130.9 540.4 131.9 540.6 132.5 540.5L153 531.2 148.9 541.6 140.2 545.7C139.3 545.8 139.1 546.8 139.3 547.8 139.7 548.4 140.7 548.8 141.6 548.4L147.4 545.8 144.8 553.4C144.2 554.1 144.7 555 145.8 555.5 146.4 555.7 147.3 555.2 147.5 554.5L150.5 546.9 153.1 552.9C153.6 553.8 154.6 554 155.2 553.6 156.1 553.4 156.3 552.7 156.2 552.1 156.2 551.8 156.2 551.8 156.1 551.4L152 542.7 156.1 532.3 165.4 552.5C165.5 553.4 166.5 553.6 167.5 553.4 168.1 553 168.3 552.3 168.2 551.7 168.1 551.4 168.1 551.4 168.1 551.4L157.7 527.8 160.8 519.5 164.4 527.3C164.9 528.2 165.5 528.4 166.5 528.3 167.1 527.9 167.6 527.1 167.5 526.5 167.4 526.2 167.4 526.2 167.4 525.9L162.3 515 165.5 506.7 171.2 513.5 170.2 525.4C170.1 526.4 170.9 527.2 171.5 527.4 172.5 527.3 173.4 526.8 173.2 525.9L174.1 517.3 180.1 524.1 177.6 549.8C177.4 550.5 178.2 551.3 178.8 551.5 179.8 551.4 180.7 550.9 180.8 549.9L183 527.8 189.9 536.3 188.9 545.9C188.8 546.9 189.6 547.8 190.5 547.6 191.2 547.8 192.1 547.3 192.2 546.3L192.8 539.8 198 546C198.5 546.6 199.5 546.7 200.3 546.3 200.6 545.9 200.8 545.2 200.7 544.6 200.7 544.6 200.7 544.3 200.6 544L195.3 537.7 201.9 538.2C202.6 538.4 203.4 537.6 203.6 537 203.6 536.6 203.6 536.6 203.6 536.6 203.4 535.7 202.7 535.2 202.1 535.3L192.5 534.3 185.2 525.8 207.6 527.9C208.6 527.7 209.2 527.3 209.3 526.3 209.3 526.3 209.3 526 209.3 526 209.2 525.3 208.7 524.7 207.7 524.6L182.3 522 176.6 515.2 185.2 516C186.2 515.9 187 515.4 186.9 514.5 187.2 514.4 187.1 514.1 187.1 514.1 187 513.5 186.3 512.9 185.6 512.7L173.8 511.8 168 504.7 176.9 503.2 186.5 510C187.2 510.5 188.5 510.3 189 509.6 189.2 508.9 189 507.9 188.6 507.4L181.3 502.4 190.4 500.9 211.1 515.6C211.8 516.1 212.8 516 213.3 515.2 213.8 514.5 213.7 513.5 212.9 513L194.9 500.1 205.9 498.3 213.6 503.8C214.4 504.3 215.3 504.2 215.9 503.4S216.2 501.7 215.5 501.2L210.3 497.5 218.2 496.2C219.2 496.1 219.7 495.3 219.5 494.4 219.4 493.4 218.6 492.9 217.7 493.1L209.8 494.4 213.4 488.9C213.7 488.5 213.9 488.2 213.9 487.9 213.8 487.5 213.4 487 213 486.7 212.3 486.2 211.4 486.3 210.8 487.1L205.4 495.1 194.3 497 207.1 478.6C207.4 478.2 207.7 477.9 207.6 477.6 207.6 477.2 207.1 476.7 206.8 476.4 206 475.9 205.1 476 204.6 476.8L189.9 497.7 180.8 499.3 186.1 492.2C186.3 491.8 186.2 491.2 186.2 490.9 186.1 490.6 186.1 490.3 185.7 490 185 489.5 183.7 489.7 183.5 490.4L176.3 500 167.5 501.5 170.6 492.9 181.5 488.1C182.1 487.7 182.6 487 182.5 486.3 182.4 486 182.4 486 182.1 486.1 181.9 485.1 180.9 484.6 180 485.1L172.2 488.7 175.3 480.1 198.8 469.6C199.4 469.2 199.6 468.5 199.5 467.9 199.4 467.6 199.4 467.6 199.4 467.6 199 466.7 198.2 466.2 197.3 466.6L176.8 475.9 180.9 465.5 189.6 461.4C190.5 461 190.7 460.3 190.6 459.6 190.6 459.6 190.6 459.3 190.6 459.3 190.1 458.4 189.1 458.3 188.5 458.4L182.5 461.3 185.4 453.7C185.4 453.4 185.3 453.1 185.3 452.8 185.2 452.4 184.8 451.9 184.4 451.6 183.4 451.4 182.5 451.6 182.3 452.6L179.4 460.2 176.7 454.2C176.3 453.3 175.3 453.1 174.6 453.3 173.7 453.7 173.6 454.7 173.7 455.7L177.8 464.4 174 474.8 164.8 454.6C164.3 453.7 163.3 453.2 162.7 453.6 161.8 454.1 161.3 454.8 161.8 455.7Z' fill='rgba(51%2c 121%2c 194%2c 0.29)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1022'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cfilter id='SvgjsFilter1023'%3e%3cfeGaussianBlur stdDeviation='1'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e");}`],
  styleUrls: ['./mails.component.css']
})

export class MailsComponent {
  ob = {
    id: '34',
    from: 'sasdasds',
    to: 'osama@zbymanga',
    subject: 'about what my nigga',
    content: 'osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!osama!',
    timestamp: 'osama',
    state: 'osama',
    isStarred: true,
    priority: 4,
    senderID: 'osama',
    receiverID: 'osama',
  };

  menuActive = false
  mails: MailDTO[] = [];
  folders: FolderDTO[] = [];
  contacts: ContactDTO[] = [];
  user!: UserDTO;
  selectedMails: MailDTO[] = [];
  activeFolder!: FolderDTO;
  activeContact!: ContactDTO;

  constructor(public mailService: MailService, public userService: UserService, public contactService: ContactService) {}
  
  sortingActions(activeSortings: string[]){
    console.log("sort based on ", activeSortings);
  }

  searchKeyword(keyword: string){
    console.log(keyword);
  }

  getSelectedMails(selected: MailDTO[]){
    this.selectedMails = []
    selected.forEach((val:any) => this.selectedMails.push(Object.assign({}, val)));
  }

  getSelectedMail(selected: MailDTO){
    this.selectedMails = []
    this.selectedMails.push(selected);
  }
  
  createMail(mail: MailDTO){
    if (mail.state == "draft")
      this.postDraft(mail)
    
    else{
      console.log("mail created")
      this.mailService.create(mail).subscribe(data => {
        console.log(data);
        mail.id = data.id;
      })
      this.mails.push(mail); 
    }
  }

  postDraft(mail: MailDTO) {
    this.mailService.postDraft(mail).subscribe(data =>{
        console.log("draft created: ", data);
        mail.id = data.id;
    })
  }
  
  createFolder(folder: FolderDTO){
    this.folders.push(folder);
    console.log("folder created: ", folder)
  }
  
  createContact(contact: ContactDTO){
    this.contacts.push(contact);
  }
  
  delete(){
    for(var i = 0;i < this.mails.length;i++){
      for(var selected of this.selectedMails){
        if(JSON.stringify(this.mails[i]) == JSON.stringify(selected))
          this.mails.splice(i, 1);
      }
    }
  }

  CRUD(action: string){
    switch(action){
      case 'create':
         this.mailService.sendDraft(this.selectedMails[0]).subscribe(data => {
            console.log("draft Sent: ", data);
            for(let i = 0; i < this.mails.length; i++) {
              if(this.mails[i].id == this.selectedMails[0].id){
                this.mails.splice(i, 1);
              }
            }
         });
         break;
      // case 'r': this.mailservice.Read();break;
      case 'read': 
        let myMap = new Map(Object.entries(this.userService.folders));
        console.log(myMap);
        myMap.forEach((value:any, key:any) =>{
          let folder = new FolderDTO();
          folder.folderId = value;
          folder.folderName = key;
          this.folders.push(folder);
        })
          this.mailService.getAllMail(myMap.get("inbox")).subscribe(data => {
            this.mails = data;
            console.log("inbox data: ", data);
          });
        break;
      case 'update': this.createMail(this.ob);break; // this.mailservice.Update();break;
      case 'delete' : this.delete();break;
    }
  }

  changeActiveFolder(folder: FolderDTO){
    this.mails.splice(0);
    this.activeFolder = folder;
    this.mailService.getAllMail(this.activeFolder.folderId).subscribe(data => {
      this.mails = data;
      console.log("inbox data: ", data);
    });
  } 

  changeActiveContact(contact: ContactDTO){
    this.activeContact = contact;
  }
  
  updateDraft(mail: MailDTO) {
    
  }
  
  updateFolder(folder: FolderDTO) {
    
  }

  updateContact(contact: ContactDTO) {
    
  }

}
