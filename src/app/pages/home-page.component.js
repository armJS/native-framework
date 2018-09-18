import {WFMComponent} from "../../framework";

class HomePageComponent extends WFMComponent {
    constructor(config) {
        super(config);

        this.data = {
            title: 'Home page'
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
}


export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
        <div class="row">
            <div class="col s6 offset-s3" style="margin-top: 40px">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{{ title }}</span>
                  <p>untill no functionallity </p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
        </div>
    `
});