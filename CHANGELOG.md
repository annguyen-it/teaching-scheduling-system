# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.9.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.8.4...v3.9.0) (2022-07-23)


### Features

* **calendar:** show notification after save exam note, instead of close dialog ([a6ba5e3](https://github.com/annguyen-it/teaching-scheduling-system/commit/a6ba5e32a77d90598ef43fe125e21fd8c8e0a881))
* **core:** remove form helper ([6611e8d](https://github.com/annguyen-it/teaching-scheduling-system/commit/6611e8d8e4f44f8469f56aa60e7f8bc3372c179f))


### Bug Fixes

* **calendar:** cannot save note in exam dialog ([e536744](https://github.com/annguyen-it/teaching-scheduling-system/commit/e5367442c81338053f42f1779d6bf9b4e65f77bd))
* **calendar:** save button in dialogs should be updated when changing note after save ([548ddb1](https://github.com/annguyen-it/teaching-scheduling-system/commit/548ddb1a096fb1406a7f2244d7d1caaee349af10))
* **dep:** upgrade taiga-ui to 2.49.2 ([91d9b10](https://github.com/annguyen-it/teaching-scheduling-system/commit/91d9b100e5b88326549d9e234413db253ea52ae2))
* import from rxjs intead of rxjs/operators ([d743b3e](https://github.com/annguyen-it/teaching-scheduling-system/commit/d743b3efc2e93d4c2e1536dd4c3726ebd8490cf0))

### [3.8.4](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.8.3...v3.8.4) (2022-07-22)


### Bug Fixes

* **calendar:** status should be colored in change schedule history dialog ([986acf3](https://github.com/annguyen-it/teaching-scheduling-system/commit/986acf3b9832a1909da4804a00d6d855ddb7367f))
* **dep:** update taiga-ui to 2.48.0 ([16f5312](https://github.com/annguyen-it/teaching-scheduling-system/commit/16f531215342ed95e49184e25a18b4511dd2b02f))
* **teaching-schedule/request:** cannot open details dialog after refactor code ([82bb7ea](https://github.com/annguyen-it/teaching-scheduling-system/commit/82bb7ead219e31577bcff806cf9641faa47b04b3))

### [3.8.3](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.8.2...v3.8.3) (2022-07-20)


### Bug Fixes

* **calendar:** duplicate details should be display on hover ([829fe35](https://github.com/annguyen-it/teaching-scheduling-system/commit/829fe35942dbef5962f0069cd18b4519c3d57aec))
* **calendar:** use tuiButton in quick view dialog instead of default button ([705bdcc](https://github.com/annguyen-it/teaching-scheduling-system/commit/705bdcc949560c2f61fe331edf1de26a108d0055))
* **dep:** upgrade taiga-ui to 2.47.0 ([325b449](https://github.com/annguyen-it/teaching-scheduling-system/commit/325b449c524d6c89e798d1131235fa1693aaaaee))

### [3.8.2](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.8.1...v3.8.2) (2022-07-19)


### Bug Fixes

* checkboxes in table should be centered on vertical axis ([48752cd](https://github.com/annguyen-it/teaching-scheduling-system/commit/48752cd2e9e0a78626c684715411c7f023930c1d))
* **dep:** update taiga-ui to 2.46.0 ([9ec251f](https://github.com/annguyen-it/teaching-scheduling-system/commit/9ec251ff9a07700cfba541a4cdfdc86ef89eaa8d))

### [3.8.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.8.0...v3.8.1) (2022-07-17)


### Bug Fixes

* **dep:** update taiga-ui to 2.45.0 ([17bbeef](https://github.com/annguyen-it/teaching-scheduling-system/commit/17bbeef16518405d681da5fd05858ec1827de25e))
* pipe filterByInput does not update when input changes ([5ec5a68](https://github.com/annguyen-it/teaching-scheduling-system/commit/5ec5a68e0afa908d3e7aeccf403a5939888f50ae))
* routerLinkActive in sidebar should work ([cd6b4b9](https://github.com/annguyen-it/teaching-scheduling-system/commit/cd6b4b906885c7231a8a19a12c6cf801030561fe))
* **sidebar:** transition of icon should be synchronus ([e1a6ccb](https://github.com/annguyen-it/teaching-scheduling-system/commit/e1a6ccb3b587f1be2eb5fffcc62293c9409520a4))

## [3.8.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.7.0...v3.8.0) (2022-07-17)


### Features

* change EApiStatus type from enum to union string ([17a5196](https://github.com/annguyen-it/teaching-scheduling-system/commit/17a5196f25dba6d2116c8d43d28cccf6e48b6fb9))
* update title on route changes ([62d5c0a](https://github.com/annguyen-it/teaching-scheduling-system/commit/62d5c0aa0d2bc9bdff0916f0384c60f09f50e4f8))


### Bug Fixes

* **calendar:** add validator to reason in teaching dialog ([4c7bea5](https://github.com/annguyen-it/teaching-scheduling-system/commit/4c7bea5479d652790024c53966ea6de7ae88469f))
* **calendar:** disable date navigate when click date header in month view ([38aaeab](https://github.com/annguyen-it/teaching-scheduling-system/commit/38aaeab141909fea189554945ca06712bec19d36))
* **dep:** update taiga-ui to 2.44.0 ([339bcfa](https://github.com/annguyen-it/teaching-scheduling-system/commit/339bcfa5aaecedb431feb863187c6ffa447eb65f))
* vietnameseization ([87da393](https://github.com/annguyen-it/teaching-scheduling-system/commit/87da3932a9552ebcdf2f6cd272a0c45814e19eb5))

## [3.7.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.6.0...v3.7.0) (2022-07-14)


### Features

* apply recaptcha ([3129885](https://github.com/annguyen-it/teaching-scheduling-system/commit/3129885395d88939179461d486c49e03da351bb2))


### Bug Fixes

* **calendar:** checked teachers in filter are reset after change month ([24bbcc5](https://github.com/annguyen-it/teaching-scheduling-system/commit/24bbcc564b5eab5e7d9f18c36ebd0b0bfb17b34e))
* **calendar:** transform day of week to uppercase in month view ([e7fcb00](https://github.com/annguyen-it/teaching-scheduling-system/commit/e7fcb00bd6aa6d1484a5df82ef36f7b747aca393))
* **dep:** update docx to 7.4.1 ([4ab455b](https://github.com/annguyen-it/teaching-scheduling-system/commit/4ab455ba91f96f766359e10a7778b6e02890b67b))
* **dep:** update taiga-ui to 2.42.0 ([0bf97ff](https://github.com/annguyen-it/teaching-scheduling-system/commit/0bf97ff29927ce0eeae0e7ba98f214d3299c7a92))
* **dep:** update tailwindcss to 3.1.6 ([057bf69](https://github.com/annguyen-it/teaching-scheduling-system/commit/057bf692b289484a9edde9c269f0ea56da83d11c))
* **statistic:** chart style does not work correctly on small devices ([0a3816f](https://github.com/annguyen-it/teaching-scheduling-system/commit/0a3816f9f856b7051113378f89ef70d2ecde30ea))

## [3.6.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.5.0...v3.6.0) (2022-07-12)


### Features

* use custom input date range ([ee6398b](https://github.com/annguyen-it/teaching-scheduling-system/commit/ee6398b70a4f29e209892924a87f90a6a96bedcd))
* **user-info:** responsive ([9649310](https://github.com/annguyen-it/teaching-scheduling-system/commit/96493104a9a5fcf81057b44e3a88801d029a774e))


### Bug Fixes

* **dep:** upgrade docx to 7.4.0 ([7196f25](https://github.com/annguyen-it/teaching-scheduling-system/commit/7196f256a2d7459c8b1133f17c851430668dc27c))
* **dep:** upgrade taiga-ui to 2.41.1 ([4abc0fc](https://github.com/annguyen-it/teaching-scheduling-system/commit/4abc0fc33be166086a8532a4227d4422d95173ec))
* **dep:** upgrade tailwindcss to 3.1.5 ([0dfc330](https://github.com/annguyen-it/teaching-scheduling-system/commit/0dfc3306e9a5f6ea24c253e99195a7589badbfdb))
* touch-screen directive does not work correctly ([fc371ab](https://github.com/annguyen-it/teaching-scheduling-system/commit/fc371ab24874ea421ba2ba5ca360dc8ac517b9ff))
* wrong redirect after access token timeout ([247da20](https://github.com/annguyen-it/teaching-scheduling-system/commit/247da20fc1408b163f92295d0a316043de6d6f8c))

## [3.5.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.4.0...v3.5.0) (2022-07-11)


### Features

* **schedule/change:** responsive ([c60c44a](https://github.com/annguyen-it/teaching-scheduling-system/commit/c60c44ac9c70a57deb01b29fafa5032391d6d297))
* **statistic:** responsive ([6fdbbb9](https://github.com/annguyen-it/teaching-scheduling-system/commit/6fdbbb9e8a871c0d6d80de80220e39f1af07c972))


### Bug Fixes

* hide training type and academic year from filters ([2f77eac](https://github.com/annguyen-it/teaching-scheduling-system/commit/2f77eaccb06117d2fd9937d9ad249f33d65d3cfe))
* **schedule/change:** new date text color is not highlighted ([6273287](https://github.com/annguyen-it/teaching-scheduling-system/commit/62732877950ff31d5d4cb73e767214727487f926))

## [3.4.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.3.0...v3.4.0) (2022-07-10)


### Features

* **calendar:** add prev and next button for small untouch device ([849d600](https://github.com/annguyen-it/teaching-scheduling-system/commit/849d600e216601a694fb9fb5ea64fbe504d59562))
* **calendar:** display today teaching schedule (in teaching dialog) on sidebar ([8398973](https://github.com/annguyen-it/teaching-scheduling-system/commit/83989734227145c2b83f3f0f0cc4080471b8f353))
* **teaching-schedule/assign:** responsive ([622d03e](https://github.com/annguyen-it/teaching-scheduling-system/commit/622d03ee8abba6a255de8b71fb720a312d7bbb29))
* **teaching-schedule/import:** responsive ([3460bdb](https://github.com/annguyen-it/teaching-scheduling-system/commit/3460bdb074434db1b651b2eb54133f0658d0bcd0))


### Bug Fixes

* **calendar:** buttons in teaching dialog are overlapped ([9098074](https://github.com/annguyen-it/teaching-scheduling-system/commit/90980748e494196b90bfd5b68ac1a441abf36243))
* **calendar:** cannot open exam dialog ([d86cb97](https://github.com/annguyen-it/teaching-scheduling-system/commit/d86cb97b17ff2a9a165b2d8c80c3c9d8dae1ba14))
* **calendar:** icons in popup should be aligned ([f292f21](https://github.com/annguyen-it/teaching-scheduling-system/commit/f292f21d32c250604db57a83df7041db397d28ea))
* **calendar:** quick-info should be hidden when click details ([06220d4](https://github.com/annguyen-it/teaching-scheduling-system/commit/06220d4aa5dcd38d8ae039a1cca82bf51f96bf18))

## [3.3.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.2.1...v3.3.0) (2022-07-09)


### Features

* responsive for calendar ([2302ce9](https://github.com/annguyen-it/teaching-scheduling-system/commit/2302ce90f71f676f0923b0cfe19ef9de6ff6d002))


### Bug Fixes

* **calendar:** calendar should fill screen horizontal ([5949c57](https://github.com/annguyen-it/teaching-scheduling-system/commit/5949c57b0cca2489fdb88e984c2ba077e2070f2b))
* **calendar:** icon in month select button should rotate when click ([964f67d](https://github.com/annguyen-it/teaching-scheduling-system/commit/964f67d3483e7fb94d6f3a65b06feb2b749a28a3))
* **calendar:** month picker does not change when slide calendar on touch device ([201e870](https://github.com/annguyen-it/teaching-scheduling-system/commit/201e8706a8db07b4a0ca2199cafcd513a50374e9))
* **calendar:** nav button and right filter disappear when slide calendar ([ffd58f7](https://github.com/annguyen-it/teaching-scheduling-system/commit/ffd58f73ffc46b1b4abde5f98c60b7e11ef40323))

### [3.2.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.2.0...v3.2.1) (2022-07-08)


### Bug Fixes

* **calendar:** fix responsive bug for small laptop screen ([3a83c5b](https://github.com/annguyen-it/teaching-scheduling-system/commit/3a83c5b4b7f6eefb41b10e6db02f97a02f59c627))
* error ng0100 after close mobile dialog by clicking item ([09349cf](https://github.com/annguyen-it/teaching-scheduling-system/commit/09349cfd836b5118ecb8291444b44da4db6ba165))
* fade animation should be play when route changes ([19a47be](https://github.com/annguyen-it/teaching-scheduling-system/commit/19a47bea76be4881a9c8191780c2e3fd20b8f90d))

## [3.2.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.1.0...v3.2.0) (2022-07-06)


### Features

* add help link to nav bars ([62da6a8](https://github.com/annguyen-it/teaching-scheduling-system/commit/62da6a87ab3124a559dd5891d782d8be6180a29d))
* reset password ([6288e69](https://github.com/annguyen-it/teaching-scheduling-system/commit/6288e696cb6a3462f073838a2ac0085a6a3628f4))
* responsive for layout ([f77518c](https://github.com/annguyen-it/teaching-scheduling-system/commit/f77518c0bbcc31b27b41a8bbe37638c4c413f5ff))
* responsive for page login ([f171eee](https://github.com/annguyen-it/teaching-scheduling-system/commit/f171eee7a13539e75d53462567ddd8c079f8faa0))


### Bug Fixes

* **error:** fix responsive bug ([790a60f](https://github.com/annguyen-it/teaching-scheduling-system/commit/790a60ff7be126fed6eaed1a2db92d23992077b0))
* remove loader from components when request to user-info api ([28b6ce1](https://github.com/annguyen-it/teaching-scheduling-system/commit/28b6ce131fc313f91ec6d773e19918f7649c7c94))
* wrong redirect url ([9b70290](https://github.com/annguyen-it/teaching-scheduling-system/commit/9b702908ae546cdbb9d9c42638cc26ab4cfea85d))

## [3.1.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.0.1...v3.1.0) (2022-07-03)


### Features

* maintenance page ([8abbd5e](https://github.com/annguyen-it/teaching-scheduling-system/commit/8abbd5e881436c85ff41296c966716c0af3e02d9))
* show global loader when request to api user-info ([9cec5cf](https://github.com/annguyen-it/teaching-scheduling-system/commit/9cec5cf382c1082a51df8b201924692fa3da4b07))
* update app logo ([49216cc](https://github.com/annguyen-it/teaching-scheduling-system/commit/49216cc7087162672940b3041671d5011347264e))
* **user-info:** display skeleton before data loaded ([de5367c](https://github.com/annguyen-it/teaching-scheduling-system/commit/de5367caabf5160062d00682028c79edefad89fc))


### Bug Fixes

* api user-info is called multiple times ([b2d0b5a](https://github.com/annguyen-it/teaching-scheduling-system/commit/b2d0b5af6a068f34c38dfa17e6ef085e9b1c06d3))
* apply keep-user guard for error pages ([6c9352d](https://github.com/annguyen-it/teaching-scheduling-system/commit/6c9352d05fd702f26aae475aa7646cc3bcc38b76))
* **dep:** upgradate taiga-ui to 2.40.0 ([61804fa](https://github.com/annguyen-it/teaching-scheduling-system/commit/61804fab4e8c70faabcf7d03c210cd48c348f159))
* fix typo ([83841dc](https://github.com/annguyen-it/teaching-scheduling-system/commit/83841dca04a97ba3fc05c6c176e6d5d7a07f829e))
* loader does not hide when token expired ([5d76ae6](https://github.com/annguyen-it/teaching-scheduling-system/commit/5d76ae69a40d2c922373aa46164baf4f2171a4cc))
* should save redirect url after token expired ([66169b4](https://github.com/annguyen-it/teaching-scheduling-system/commit/66169b42f55e14a5a43d4a961aa4af306d3170d0))
* **ui:** fix tooltip direction of dropdowns and hints ([96f5daa](https://github.com/annguyen-it/teaching-scheduling-system/commit/96f5daac2a442ad3aaf588035fc2c513d5a106ef))
* **ui:** fix tooltip direction of dropdowns and hints ([2a5c4ee](https://github.com/annguyen-it/teaching-scheduling-system/commit/2a5c4eeaba09c63a7c1898075b94a13062e24186))
* update commitlint to 17.0.3 ([53e0a88](https://github.com/annguyen-it/teaching-scheduling-system/commit/53e0a887c39926e753b284caaf7b3a3647edaa1e))
* upgrade to angular 13.3.11 ([dc143f2](https://github.com/annguyen-it/teaching-scheduling-system/commit/dc143f2af46d8ac7ee361426bfc4c0e28a1c1e82))
* **user-info:** add required validator for phone number ([967e0a4](https://github.com/annguyen-it/teaching-scheduling-system/commit/967e0a4440e96c38e0317ddb0e90856e4a4db35f))
* **user-info:** add validator for phone number ([642cefc](https://github.com/annguyen-it/teaching-scheduling-system/commit/642cefc8896c3d2c2217a83fd461efffaa73e402))

### [3.0.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v3.0.0...v3.0.1) (2022-06-30)


### Bug Fixes

* **assign-schedule:** display wrong data ([f09a73a](https://github.com/annguyen-it/teaching-scheduling-system/commit/f09a73aab2bab0922c417a0dca0fe0504b2f77ba))

## [3.0.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.11.0...v3.0.0) (2022-06-29)


### ??? BREAKING CHANGES

* migrate to Nx
* migrate to nx

### Features

* migrate to Nx ([78acb4e](https://github.com/annguyen-it/teaching-scheduling-system/commit/78acb4e06842cd59adf0b4995df1c10b78747cbd))


### Bug Fixes

* add import module ([5f23935](https://github.com/annguyen-it/teaching-scheduling-system/commit/5f2393554b5cec07f923acb3ccadbb3fd3cbef11))
* cannot import teaching schedule ([14a7dff](https://github.com/annguyen-it/teaching-scheduling-system/commit/14a7dff7b04459cbc7acfeb6423161cdaea7bc43))
* migrate to nx ([77f2f02](https://github.com/annguyen-it/teaching-scheduling-system/commit/77f2f025c74a5884dbbc5b11f844a2e0a5ca8d0b))
* update Angular to 13.x ([abb71d7](https://github.com/annguyen-it/teaching-scheduling-system/commit/abb71d7135f5a09c3f071ffd60804a003739167c))

## [2.11.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.10.0...v2.11.0) (2022-05-27)


### Features

* **exam:** display exam date time ([8cec4b7](https://github.com/annguyen-it/teaching-scheduling-system/commit/8cec4b7f025a55956cb6e8ae8572257c2271b082))
* **schedule:** multiple schedule view in schedule dialog ([9fc96a7](https://github.com/annguyen-it/teaching-scheduling-system/commit/9fc96a75ca7836d36b5ef4dbd687825ecacbaed4))


### Bug Fixes

* **login:** modify wrong password condition ([28d7d7a](https://github.com/annguyen-it/teaching-scheduling-system/commit/28d7d7a4ca668a72b489db2c8f4bb3ee6f7473a2))

## [2.10.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.9.1...v2.10.0) (2022-05-22)


### Features

* **exam:** update room ([ce410e9](https://github.com/annguyen-it/teaching-scheduling-system/commit/ce410e950668b1c87a2a6b910920fb4c37f88118))


### Bug Fixes

* **exam:** display assigned proctors in dialog ([9c07777](https://github.com/annguyen-it/teaching-scheduling-system/commit/9c077771bdfb4889941fd4b1c0f017fa90860262))
* **exam:** update API ([25253db](https://github.com/annguyen-it/teaching-scheduling-system/commit/25253db864d3d3b34ca6c7f9ecb39ab8870e43bf))

### [2.9.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.9.0...v2.9.1) (2022-05-21)


### Bug Fixes

* **schedule:** confirm button in schedule dialog state does not change when note changes ([925caf3](https://github.com/annguyen-it/teaching-scheduling-system/commit/925caf38316945084c4b4aca5bfd2e3220c8afaa))
* **schedule:** quick view popup for exam does not show teachers ([62193f2](https://github.com/annguyen-it/teaching-scheduling-system/commit/62193f229cbc90541e114c1e2f9c25064585586d))
* **schedule:** update API ([42e5717](https://github.com/annguyen-it/teaching-scheduling-system/commit/42e5717c8009afd964bd99f29acdb6bf7fd4246e))
* **schedule:** update note API ([4529a92](https://github.com/annguyen-it/teaching-scheduling-system/commit/4529a92caacd3442d6596d04fde7f1f0ab756faf))

## [2.9.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.8.1...v2.9.0) (2022-05-21)


### Features

* assign exam ([1be68d3](https://github.com/annguyen-it/teaching-scheduling-system/commit/1be68d39ba0a053654ad3823f8ec87fe08b29825))
* get teachers data in department into global state ([ef525f9](https://github.com/annguyen-it/teaching-scheduling-system/commit/ef525f92f4da8103a0361dd4ca39b25c7b377940))
* new pipe `tssRecreateViewKey` ([19dc5b6](https://github.com/annguyen-it/teaching-scheduling-system/commit/19dc5b60c5a9664ffa95c0a1236a14765cf77d90))


### Bug Fixes

* **change-schedule:** add icon to statistic button ([8326f27](https://github.com/annguyen-it/teaching-scheduling-system/commit/8326f27c031e600bd86092acaf39657219572dd4))
* dialog does not have Taiga UI style ([654862d](https://github.com/annguyen-it/teaching-scheduling-system/commit/654862d49857cc76ad0bfcd28a347d1b823e9c92))
* update angular packages to ^12.2.17 ([004af72](https://github.com/annguyen-it/teaching-scheduling-system/commit/004af72bf4f37a9dcf12de1a02fef8f26a22cde1))
* update commitlint and @types/node ([86c8c33](https://github.com/annguyen-it/teaching-scheduling-system/commit/86c8c3353f33495854ec7076db5b31e511d131a6))
* update exam model ([d7bfb50](https://github.com/annguyen-it/teaching-scheduling-system/commit/d7bfb50568ab4f4d817927eec7a6fe73578fffb9))
* update taiga-ui to ^2.38.0 ([0bb9903](https://github.com/annguyen-it/teaching-scheduling-system/commit/0bb99032eee9b7b87dcd809264dc87dd76cc166d))

### [2.8.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.8.0...v2.8.1) (2022-05-17)


### Bug Fixes

* **change-schedule:** show link to statistic instead of monthly export for department head ([3b2a93c](https://github.com/annguyen-it/teaching-scheduling-system/commit/3b2a93ce2e7a6efa25b7a4e98575d2fd96ac714c))

## [2.8.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.7.0...v2.8.0) (2022-05-17)


### Features

* **change-schedule:** export personal change schedule report ([216725d](https://github.com/annguyen-it/teaching-scheduling-system/commit/216725d9e03f1725a58715cade62ce30795b2c91))


### Bug Fixes

* cannot send confirm event in dialogs ([1bcff5d](https://github.com/annguyen-it/teaching-scheduling-system/commit/1bcff5dbfa5fd9901774f13375fde64653f8615e))
* **export:** footer parts of export file do not break line together ([2a5a290](https://github.com/annguyen-it/teaching-scheduling-system/commit/2a5a290f41a4c84f73eb50173ff8affa62b3092b))
* remove console.log ([2de2a3f](https://github.com/annguyen-it/teaching-scheduling-system/commit/2de2a3ff773dec900b1f478fe55967d77bc91cdc))

## [2.7.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.6.0...v2.7.0) (2022-05-07)


### Features

* **user-setting:** confirm change password ([7d1c38c](https://github.com/annguyen-it/teaching-scheduling-system/commit/7d1c38ca8e415ca371cd7cdee866671784446cdf))

## [2.6.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.5.0...v2.6.0) (2022-05-06)


### Features

* remove dismissable on all dialogs ([4bb0c4f](https://github.com/annguyen-it/teaching-scheduling-system/commit/4bb0c4f5201a9225adedaa5459a1c4f6afc4810c))


### Bug Fixes

* **statistic:** break line for cell content in export file ([0961fd4](https://github.com/annguyen-it/teaching-scheduling-system/commit/0961fd4433c7fad78865b8611dd43a7c326a20bd))
* **statistic:** do not export denied schedule ([df8999c](https://github.com/annguyen-it/teaching-scheduling-system/commit/df8999cbc0e68930f1ca2c01726f4b539ca408d0))
* **user-setting:** cannot change password ([76897ae](https://github.com/annguyen-it/teaching-scheduling-system/commit/76897aeb38fdd13835a61b2e89d77921aef40c91))

## [2.5.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.4.0...v2.5.0) (2022-05-04)


### Features

* update API ([a79d9e9](https://github.com/annguyen-it/teaching-scheduling-system/commit/a79d9e9d531444d3ea85e306f9a7536ad3898c12))

## [2.4.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.3.0...v2.4.0) (2022-05-04)


### Features

* new pipe `filterByInput` ([0803b1a](https://github.com/annguyen-it/teaching-scheduling-system/commit/0803b1a1c6be366f3322758d80357539997c0909))
* remove cache mechanic ([0f0b868](https://github.com/annguyen-it/teaching-scheduling-system/commit/0f0b868dec8a123f14b05a41be92b4b2658b8166))
* remove pipe `filter` ([d7ea2bd](https://github.com/annguyen-it/teaching-scheduling-system/commit/d7ea2bdb6a5391ac8b128d2e0d106ac441eb0a4a))
* remove pipe `map` ([15e6f6a](https://github.com/annguyen-it/teaching-scheduling-system/commit/15e6f6acf25c02db71969c569e5ab046d3a93336))

## [2.3.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.2.1...v2.3.0) (2022-05-04)


### Features

* **change-schedule:** always display shift in information dialog ([9dc6949](https://github.com/annguyen-it/teaching-scheduling-system/commit/9dc6949900a0aa0efd25fc3261b65628a055198a))
* **change-schedule:** display shift information ([6486ab3](https://github.com/annguyen-it/teaching-scheduling-system/commit/6486ab31fb20e6bddcae00c7c87f59acad450861))


### Bug Fixes

* **change-schedule:** decrease margin on export file for teacher ([6b8aef5](https://github.com/annguyen-it/teaching-scheduling-system/commit/6b8aef5dda890aada2974a69a918c39aefe06d9b))
* **change-schedule:** field `teacher name` in export file is null ([547bb67](https://github.com/annguyen-it/teaching-scheduling-system/commit/547bb67ef6712220c591e716507a9996a932323e))
* disable translate ([2a768c3](https://github.com/annguyen-it/teaching-scheduling-system/commit/2a768c3da13df50a7dfa9957af9106764330e996))

### [2.2.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.2.0...v2.2.1) (2022-05-03)


### Bug Fixes

* **change-schedule:** export button content is line-break ([0c1e680](https://github.com/annguyen-it/teaching-scheduling-system/commit/0c1e680cf1fe3319cc6d02c75f4bb2660bc0ca5f))

## [2.2.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.1.2...v2.2.0) (2022-05-03)


### Features

* add pipe arrayIncludes ([c9ce6af](https://github.com/annguyen-it/teaching-scheduling-system/commit/c9ce6af08a1b5cf0e4a1080ad94647affcf25195))
* add pipe changeCanExport ([d418f93](https://github.com/annguyen-it/teaching-scheduling-system/commit/d418f93c418fe03018a41530ac9fcb556dc5d90e))
* **change-schedule:** export multiple change schedules ([3fbe95f](https://github.com/annguyen-it/teaching-scheduling-system/commit/3fbe95f299262fa1790bf6566912ceb050fc9b22))


### Bug Fixes

* fix typo in export file name ([3507578](https://github.com/annguyen-it/teaching-scheduling-system/commit/35075784908c95259d22afa0c0c7ec358bcd6efb))

### [2.1.2](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.1.1...v2.1.2) (2022-05-01)


### Bug Fixes

* **request-change:** fix disable condition for export button ([994ef2a](https://github.com/annguyen-it/teaching-scheduling-system/commit/994ef2a592e4f6f06ebc8bcbdd70c75b7b7c381f))
* **schedule:** update API ([b7b2c57](https://github.com/annguyen-it/teaching-scheduling-system/commit/b7b2c579cd40a33481e1b1ab5b6355c7ceb11e04))

### [2.1.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.1.0...v2.1.1) (2022-04-23)


### Bug Fixes

* **change-schedule:** hide field "teacher" in details dialog if data is null ([d5c18d1](https://github.com/annguyen-it/teaching-scheduling-system/commit/d5c18d11a08f23d79e3ff267e4b052623e4ba20b))

## [2.1.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.0.3...v2.1.0) (2022-04-23)


### Features

* **change-schedule:** move some information from table to details dialog ([dea8328](https://github.com/annguyen-it/teaching-scheduling-system/commit/dea832852a92e548903fd4d8b468afe89bc49e9b))

### [2.0.3](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.0.2...v2.0.3) (2022-04-22)


### Bug Fixes

* **change-schedule:** only allow export if status is 'change' or 'approve' ([66ca409](https://github.com/annguyen-it/teaching-scheduling-system/commit/66ca409f1749eb8a830601cd90b33eaa01384931))

### [2.0.2](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.0.1...v2.0.2) (2022-04-22)


### Bug Fixes

* **change-schedule:** display intend time ([9c0a6de](https://github.com/annguyen-it/teaching-scheduling-system/commit/9c0a6de9b3debe72a8c21a72018c6a6543c24fea))
* **export:** fix typo ([376cdf6](https://github.com/annguyen-it/teaching-scheduling-system/commit/376cdf69115b98f66584cd8a487282fab54c0546))
* **schedule:** details button in popup should be inline ([851069f](https://github.com/annguyen-it/teaching-scheduling-system/commit/851069f5c704b2672b676989b25ff700716d0750))

### [2.0.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v2.0.0...v2.0.1) (2022-04-20)


### Bug Fixes

* remove console.log ([181a67b](https://github.com/annguyen-it/teaching-scheduling-system/commit/181a67b3ac0a1105a5a1ff01a72d510a206d3476))

## [2.0.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.4.7...v2.0.0) (2022-04-19)


### ??? BREAKING CHANGES

* update API
* update services
* change API

### Features

* change API ([70f921f](https://github.com/annguyen-it/teaching-scheduling-system/commit/70f921f43a16012431ad8a64b4edfac4a013d344))
* update API ([db2c278](https://github.com/annguyen-it/teaching-scheduling-system/commit/db2c278d7bb007598262b82d88171badb2755402))
* update phone number ([2cf30b6](https://github.com/annguyen-it/teaching-scheduling-system/commit/2cf30b623ac17e3c559c3abacfb4ccf7eb04d2d7))
* user info ([3c909bf](https://github.com/annguyen-it/teaching-scheduling-system/commit/3c909bf168b1ed0b94b943b6381ff620af5dc010))


### Bug Fixes

* fix shiftPipe type ([a046c7a](https://github.com/annguyen-it/teaching-scheduling-system/commit/a046c7aafd6260a4acd721ceb10a3126003c8fa1))
* ui bug when login as normal teacher ([ac35028](https://github.com/annguyen-it/teaching-scheduling-system/commit/ac35028623b7da0f3faa01e2d129c5147a8b958f))
* update api ([5d903a0](https://github.com/annguyen-it/teaching-scheduling-system/commit/5d903a071b686fe314a932ba5d1ad9b6238df55d))
* update API ([ea38d48](https://github.com/annguyen-it/teaching-scheduling-system/commit/ea38d48ff37eb1a58085e9664495ad1b4d22dd50))
* update services ([99db102](https://github.com/annguyen-it/teaching-scheduling-system/commit/99db102e089d69d43e9123be239a012cbe7a7a7c))

### [1.4.7](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.4.6...v1.4.7) (2022-04-04)


### Bug Fixes

* schedule: change date allow request ([739c37d](https://github.com/annguyen-it/teaching-scheduling-system/commit/739c37d33cdd87bf39b449aff639d5e6c91218c0))

### [1.4.6](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.4.5...v1.4.6) (2022-04-04)


### Bug Fixes

* fix wrong export data ([0d9ffb9](https://github.com/annguyen-it/teaching-scheduling-system/commit/0d9ffb9b608ea99b41adb0169db30965a4007273))

### [1.4.5](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.4.4...v1.4.5) (2022-03-31)


### Bug Fixes

* fix style of navbar dropdown ([f5b9519](https://github.com/annguyen-it/teaching-scheduling-system/commit/f5b951988d51c70c604a6a665acdf988f6895b62))

### [1.4.4](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.4.3...v1.4.4) (2022-03-31)


### Bug Fixes

* change valid change schedule condition ([4ebee6e](https://github.com/annguyen-it/teaching-scheduling-system/commit/4ebee6e8a8f30f00d25512f07a9a764b690ea086))
* details text in schedule pop up is overlap ([afe5622](https://github.com/annguyen-it/teaching-scheduling-system/commit/afe562208061cdc6a9280202e3084d49fc6befb3))

### [1.4.3](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.4.2...v1.4.3) (2022-03-28)


### Bug Fixes

* fix minor bugs for Firefox ([4f84cf6](https://github.com/annguyen-it/teaching-scheduling-system/commit/4f84cf65f1785c3abdca9af2df8ef8699dd42a8f))

### [1.4.2](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.4.1...v1.4.2) (2022-03-26)


### Bug Fixes

* make time indicator bolder ([3a329af](https://github.com/annguyen-it/teaching-scheduling-system/commit/3a329af07b453f8de9d735ef85a6488b72b57e8a))

### [1.4.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.4.0...v1.4.1) (2022-03-26)


### Bug Fixes

* schedule: add background color for today cell ([f5c327c](https://github.com/annguyen-it/teaching-scheduling-system/commit/f5c327cf637ff23ffd475115bba0fec7fd437674))

## [1.4.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.3.2...v1.4.0) (2022-03-24)


### Features

* import schedule ([f1affad](https://github.com/annguyen-it/teaching-scheduling-system/commit/f1affad8974b94a2df8b8552b2b83b5becb143d0))
* remove module notification ([715156e](https://github.com/annguyen-it/teaching-scheduling-system/commit/715156eaeae91087c30a45b6bc23a7d3afde5e68))


### Bug Fixes

* migrate assign-schedule to module ([a1e6037](https://github.com/annguyen-it/teaching-scheduling-system/commit/a1e6037b2f62a2baf4a632cbe52239a4abf55228))
* page assign schedule now load data on enter ([9a5c81f](https://github.com/annguyen-it/teaching-scheduling-system/commit/9a5c81fe64eb872cbc58462c5560a02ea93d2ab7))

### [1.3.2](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.3.1...v1.3.2) (2022-03-22)


### Bug Fixes

* add label and lines to chart ([560dca1](https://github.com/annguyen-it/teaching-scheduling-system/commit/560dca18d485ffed3a5e3d8ca18faff648efca0c))
* export file for room manager ([1b83c2c](https://github.com/annguyen-it/teaching-scheduling-system/commit/1b83c2cf52e0b71f76a4f319ddc275d57f6116ca))
* export file for teacher ([25c5624](https://github.com/annguyen-it/teaching-scheduling-system/commit/25c5624a987ef0a010cc54df732630cbb072378a))
* export file for teacher ([90a054c](https://github.com/annguyen-it/teaching-scheduling-system/commit/90a054c503a83a71b5e0838aae280750b55e3f54))

### [1.3.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.3.0...v1.3.1) (2022-03-21)


### Bug Fixes

* update depedency css ([800b5ea](https://github.com/annguyen-it/teaching-scheduling-system/commit/800b5ea633f2132ceb7fe99e0779b91ae296f703))

## [1.3.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.2.1...v1.3.0) (2022-03-21)


### Features

* display checklist requirement of change schedule ([d2a4030](https://github.com/annguyen-it/teaching-scheduling-system/commit/d2a403077ad8a9552239f5513fad4bc560fec073))


### Bug Fixes

* reduce timeout for room data in local storage ([a0e2fec](https://github.com/annguyen-it/teaching-scheduling-system/commit/a0e2fec603296a05b34bc0d948a103d078e6a6a1))

### [1.2.1](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.2.0...v1.2.1) (2022-03-16)


### Bug Fixes

* edit icons of popup schedule ([4832cce](https://github.com/annguyen-it/teaching-scheduling-system/commit/4832cce581a6cfa317412ce664f59d9de74fca4b))

## [1.2.0](https://github.com/annguyen-it/teaching-scheduling-system/compare/v1.1.0...v1.2.0) (2022-03-09)


### Features

* add versionrc ([9b64a5d](https://github.com/annguyen-it/teaching-scheduling-system/commit/9b64a5d5225ae141998f024fe88fd24c18c86ed0))

## 1.1.0 (2022-03-09)


### Features

* add husky ([945d4b8](https://github.com/annguyen-it/teaching-scheduling-system/commit/945d4b83729c11e0e2b7ed6af3b9d2947cfba0b8))
* Permission directive ([bbd67dc](https://github.com/annguyen-it/teaching-scheduling-system/commit/bbd67dc8dc1dd756fa86e86b99cea8b4b433db06))


### Bug Fixes

* Call profile API twice ([6c1bdcd](https://github.com/annguyen-it/teaching-scheduling-system/commit/6c1bdcdc5eeebd555f3fcc647da310195e28c9cc))
* Cannot enter page Requests directly ([2280964](https://github.com/annguyen-it/teaching-scheduling-system/commit/22809644683a21e50342e16ad93ee25a5e09be2e))
* Cannot export my request ([2d8bd3c](https://github.com/annguyen-it/teaching-scheduling-system/commit/2d8bd3cbc1357a192680be4b1893b674d267ea10))
* Cannot get all change schedule requests ([241b37c](https://github.com/annguyen-it/teaching-scheduling-system/commit/241b37cbde7293ca065e14f539bf017182afc0f7))
* Cannot query in page assign-schedule ([0ce99c8](https://github.com/annguyen-it/teaching-scheduling-system/commit/0ce99c81ae4166a89437bf40a170f53d1aea5bf7))
* Cannot remove token on server when logout ([bcbcc6d](https://github.com/annguyen-it/teaching-scheduling-system/commit/bcbcc6d79ab16c76767d1c5071afa60d50fa85ad))
* Display wrong message when login failed ([fc0e5a3](https://github.com/annguyen-it/teaching-scheduling-system/commit/fc0e5a3538033217f5b0ce6de8006390f3551cd8))
* Do not detect schedule change after remove day ([a886e52](https://github.com/annguyen-it/teaching-scheduling-system/commit/a886e5244483c796a9192de293ddc9d46965648e))
* Do not fetch department in initial frame ([efa89fd](https://github.com/annguyen-it/teaching-scheduling-system/commit/efa89fd260d0836e3c510793caf4db7981ad72f7))
* Not trigger filter all ([374aae9](https://github.com/annguyen-it/teaching-scheduling-system/commit/374aae90b61b37d3fd08db8e56257d045020b27f))
* Permission directive creates multiple instances ([1c16df5](https://github.com/annguyen-it/teaching-scheduling-system/commit/1c16df546648b9a5b26457da56afe5959ae2ace1))
* Schedule display incorrect when navigate fast ([5229571](https://github.com/annguyen-it/teaching-scheduling-system/commit/52295712a2355a3179ce9eedb9182027c756a30b))
* Teacher name in export file is null ([2b85d15](https://github.com/annguyen-it/teaching-scheduling-system/commit/2b85d15e5646679b49453d698f7379e2336f0610))
* Wrong data state when re-login ([81ca59f](https://github.com/annguyen-it/teaching-scheduling-system/commit/81ca59fe0d87e075457965b8faf434da59c0cd10))
* Wrong fixed-schedule after re-login ([2901af6](https://github.com/annguyen-it/teaching-scheduling-system/commit/2901af6d493f092d47ba2b68a8a6bc449726cf3f))
* Wrong schedule after re-login with other account ([d95ba94](https://github.com/annguyen-it/teaching-scheduling-system/commit/d95ba947b9866a560067a9f1831decdd70e4c314))
