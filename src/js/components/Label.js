import Control from './Control';
import LabelReact from '../components-react/Label';

export default class Label extends Control {
  _reactComponentClass = LabelReact;

  setText(text) {
      this._setState({text: text});
  }

  setRequired(isRequired) {
      this._setState({isRequired});
  }
}