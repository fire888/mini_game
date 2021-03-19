export class HtmlWidgets {
    _wrapper: HTMLElement;
    _fullDeckWrapper: HTMLElement;
    _heroDeckWrapper: HTMLElement;


    constructor () {
        this._wrapper = document.createElement('div');
        document.body.appendChild(this._wrapper);

        this._fullDeckWrapper = document.createElement('div');
        this._wrapper.appendChild(this._fullDeckWrapper);

        this._heroDeckWrapper = document.createElement('div');
        this._wrapper.appendChild(this._heroDeckWrapper);
    }


    addCardsToFullDeck (arr: Array<object>) {
        for (let i = 0; i < arr.length; i++) {
            const elem = document.createElement('div');
            for (let key in arr[i]) {
                elem.innerText = `${key}: ${arr[i][key]}<br>`;
            }
            this._fullDeckWrapper.appendChild(elem);
        }
    }
}
