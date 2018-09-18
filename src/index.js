import {bootstrap} from "./framework";
import {appModule} from "./app/app.module";
import {_} from "./framework";


_.delay().then(() => {
    bootstrap(appModule);
});
