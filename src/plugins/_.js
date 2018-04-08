import _ from 'lodash';

export default {
    install(Vue, bus) {
        Object.defineProperty(bus || Vue.prototype, '$_', {value: _});
    }
}
