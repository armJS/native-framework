import {WFMComponent} from "../../framework";

class TabsPageComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }

    onTabClick({target}) {
        if(!target.classList.contains('collapsible-header')) return;
        this.el.querySelectorAll('.collapsible li').forEach(el => el.classList.remove('active'));
        target.parentNode.classList.add('active');
    }

    events() {
        return [{
            event: 'click',
            targetSelector: '.collapsible',
            handler: this.onTabClick.bind(this)
        }]
    }
}


export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template:

        `
        <div class="row">    
            <div class="col s6 offset-s3">
                    <ul class="collapsible collapsible-accordion">
                        <li class="active">
                          <div class="collapsible-header" tabindex="0">
                            <i class="material-icons">filter_drama</i>First</div>
                          <div class="collapsible-body" style="">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                              ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                          </div>
                        </li>
                        <li class="">
                          <div class="collapsible-header" tabindex="0">
                            <i class="material-icons">place</i>Second</div>
                          <div class="collapsible-body" style="">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat.</span>
                          </div>
                        </li>
                        <li class="">
                          <div class="collapsible-header" tabindex="0">
                            <i class="material-icons">whatshot</i>Third</div>
                          <div class="collapsible-body" style="">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat.</span>
                          </div>
                        </li>
                      </ul>
                  </div>
          </div>
    `
});