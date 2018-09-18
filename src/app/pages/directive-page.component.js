import {WFMComponent} from "../../framework";

class DirectivePageComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }

}


export const directivePageComponent = new DirectivePageComponent({
    selector: 'app-directive-page',
    template: `
       <div class="row">
            <div class="col s6 offset-s3" style="margin-top: 40px">
              <h2>Focus on me</h2>
            </div>
        </div>
    `
});